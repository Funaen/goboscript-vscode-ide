import __wbg_init, * as goboscript from "goboscript";
import toml from "toml";
import "Scaffolding";
const vscode = acquireVsCodeApi();

class main {
	static init() {
		this.stage = new Scaffolding.Scaffolding();
		this.stage.width = 480;
		this.stage.height = 360;
		this.stage.setup();
		this.attachDebugger(this.stage.vm);
		window.scvm = this.stage.vm;
		document.getElementById('run').onclick = () => this.onflag();
		document.getElementById('stop').onclick = () => this.stage.stopAll();
		document.getElementById('build').onclick = () => this.build();
		this.onflag();
	}
	static async onflag() {
		vscode.postMessage({ command: 'clearConsole' });
		try {
			this.files = await gscompiler.getFiles();
			this.builded = await gscompiler.build(this.files);
		} catch (err) {
			vscode.postMessage({ command: 'log', text: `COMPILE ERROR: ${err.message}`, type: 'error' });
			this.diagnose(this.builded.artifact);
			console.error(err);
			return;
		}
		this.diagnose(this.builded.artifact);
		try {
			const sb3 = await base64.decode(this.builded.file).arrayBuffer();
			await this.stage.loadProject(sb3);
			this.stage.appendTo(document.getElementById('stage'));
			this.stage.greenFlag();
		} catch (err) {
			vscode.postMessage({ command: 'log', text: `SCAFFOLDING ERROR: ${err.message}`, type: 'error' });
			this.stage.stopAll();
			console.error(err);
		}
		this.setMonitor(this.stage.vm.runtime.targets);
	}
	static async build () {
		vscode.postMessage({ command: 'builded', file: await base64.decode((await gscompiler.build(await gscompiler.getFiles())).file).arrayBuffer() });
	}
	static attachDebugger(vm) {
		vm.runtime.addAddonBlock({
			procedureCode: "\u200B\u200Blog\u200B\u200B %s",
			arguments: ["content"],
			callback: ({content}) => {
				vscode.postMessage({ command: 'log', text: content.toString(), type: 'log' });
			}
		})
		vm.runtime.addAddonBlock({
			procedureCode: "\u200B\u200Bwarn\u200B\u200B %s",
			arguments: ["content"],
			callback: ({content}) => {
				vscode.postMessage({ command: 'log', text: content.toString(), type: 'warn' });
			}
		})
		vm.runtime.addAddonBlock({
			procedureCode: "\u200B\u200Berror\u200B\u200B %s",
			arguments: ["content"],
			callback: ({content}) => {
				vscode.postMessage({ command: 'log', text: content.toString(), type: 'error' });
			}
		})
	}
	static diagnose(artifact) {
		const markers = [];
		for (const [name, {diagnostics, translation_unit: unit, translation_unit: {path}}] of [...artifact.sprites_diagnostics, ['stage', artifact.stage_diagnostics]]) {
			if (!diagnostics.length) continue;
			for (const diag of diagnostics) {
				const msg = goboscript.diagnostic_to_string(diag, JSON.stringify(name == "stage" ? artifact.project.stage : artifact.project.sprites.get(name)));
				const [start, incStart] = this.translatePosition(unit, diag.span.start);
				const [end, incEnd] = this.translatePosition(unit, diag.span.end);
				const [startLineNumber, startColumn] = this.convertPosition(incStart, start);
				const [endLineNumber, endColumn] = this.convertPosition(incEnd, end);
				const level = [
					"FollowedByUnreachableCode",
					"UnrecognizedKey",
					"UnusedVariable",
					"UnusedList",
					"UnusedEnum",
					"UnusedStruct",
					"UnusedProc",
					"UnusedFunc",
					"UnusedArg",
					"UnusedStructField",
					"UnusedEnumVariant"
				].includes(Object.keys(diag.kind)[0]) ? 'warn' : 'error';
				vscode.postMessage({ command: 'log', text: `COMPILE ERROR: ${msg} (${path}:${startLineNumber}:${startColumn})`, type: level });
				if (level == 'warn') continue;
				markers.push({
					path,
					msg,
					startLineNumber: startLineNumber - 1,
					startColumn: startColumn - 1,
					endLineNumber: endLineNumber - 1,
					endColumn: endColumn - 1
				});
				console.error(msg);
			}
		}
		vscode.postMessage({ command: 'mark', markers: markers });
	}
	static setMonitor(targets) {
		document.getElementById('var_monitor').innerHTML = '';
		const funcs = {
			setXY: (target,) => {
				document.getElementById(`${target.id}-x`).value = target.x;
				document.getElementById(`${target.id}-y`).value = target.y;
			},
			setVisible: (target) => {
				document.getElementById(`${target.id}-visible`).value = target.visible;
			},
			setSize: (target) => {
				document.getElementById(`${target.id}-size`).value = target.size;
			},
			setDirection: (target) => {
				document.getElementById(`${target.id}-direction`).value = target.direction;
			},
			setCostume: (target) => {
				document.getElementById(`${target.id}-costume`).value = target.sprite.costumes[target.currentCostume].name;
			},
			makeClone: (target, result) => {
				addMonitor(result);
			}
		};
		const addMonitor = target => {
			document.getElementById('var_monitor').insertAdjacentHTML('beforeend',
				`<details name="monitor">
					<summary>${target.sprite.name}${target.isOriginal ? '' : ' <i>[Clone]</i>'}</summary>
					<label>X: <input type="text" id="${target.id}-x" readonly /></label>
					<label>Y: <input type="text" id="${target.id}-y" readonly /></label>
					<label>Visible: <input type="text" id="${target.id}-visible" readonly /></label>
					<label>Size: <input type="text" id="${target.id}-size" readonly /></label>
					<label>Direction: <input type="text" id="${target.id}-direction" readonly /></label>
					<label>Costume: <input type="text" id="${target.id}-costume" readonly /></label>
				</details>`);
			for (const func of Object.keys(funcs)) {
				if (func != 'makeClone') funcs[func](target);
				if (!target[func] || target[`_original${func}`]) continue;
				target[`_original${func}`] = target[func];
				target[func] = function (...args) {
					const result = this[`_original${func}`](...args);
					funcs[func](this, result);
					return result;
				};
			}
		};
		for (const target of targets) {
			if (target.isStage) continue;
			addMonitor(target);
		}
	}
	static translatePosition(unit, position) {
		for (const inc of unit.includes) {
			if (inc.unit_range.start > position) continue;
			if (inc.unit_range.end <= position) continue;
			return [inc.source_range.start + (position - inc.unit_range.start), inc];
		}
		vscode.postMessage({ command: 'log', text: `COMPILE ERROR: invalid position ${position} in ${unit.path}`, type: 'error' });
	}
	static convertPosition({path}, position) {
		const text = this.getFileText(path, this.files).split(/\r?\n/);
		let i = 0
		let lineNumber = 0
		for (const line of text) {
			if (i + line.length >= position) return [lineNumber + 1, position - i + 1]
			i += line.length + 1
			lineNumber++
		}
		return [0, 0];
	}
	static getFileText(path, files) {
		return new TextDecoder('utf-8').decode(new Uint8Array(files[path].data));
	}
}

class gscompiler {
	static async build(files) {
		await __wbg_init();
		goboscript.initialize();
		return goboscript.build(
			{
				files: Object.fromEntries(await Promise.all(Object.entries(files).map(
					async ([path, {data}]) => {
						const buffer = data instanceof Blob ? await data.arrayBuffer() : data;
						return [
							path,
							{
								inner: base64.encode(new Uint8Array(buffer))
							}
						];
					}
				)))
			}
		);
	}
	static getFiles() {
		vscode.postMessage({ command: 'getFiles' });
		return new Promise(resolve => {
			let handler = async event => {
				if (event.data.command === 'getFilesRes'){
					window.removeEventListener('message', handler);
					let files = event.data.files;
					const cfg = toml.parse(main.getFileText('project/goboscript.toml', files));
					if (cfg.std) {
						const std = (await import("gsstd", { with: { type: "json" } })).default;
						if (cfg.std != std.version) vscode.postMessage({ command: 'log', text: `WARNING: Unsupported std version ${cfg.std} (expected ${std.version}). The project may not compile or run correctly.`, type: 'warn' });
						files = {...files, ...Object.fromEntries(Object.entries(std.files).map(([path, file]) => [path, { data: base64.decode(file), type: 'Blob' }]))};
					}
					resolve(files);
				}
			};
			window.addEventListener('message', handler);
		});
	}
}

class base64 {
	static encode(buffer) {
		return new Uint8Array(buffer).toBase64();
	}
	static decode(base64, mimeType = "application/octet-stream") {
		const bin = atob(base64);
		const bytes = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
		return new Blob([bytes], {type: mimeType});
	}
};

main.init();

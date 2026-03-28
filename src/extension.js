const vscode = require('vscode');

function activate(context) {
	// ターミナルへ文字を送り出すためのエミッター
	const writeEmitter = new vscode.EventEmitter();
	const pty = {
		onDidWrite: writeEmitter.event,
		open: () => {
			writeEmitter.fire('goboscript Console\r\n');
		},
		close: () => {}
	};
	const terminal = vscode.window.createTerminal({
		name: "goboscript Console",
		pty: pty
	});
	const markers = vscode.languages.createDiagnosticCollection('goboscript');
	context.subscriptions.push(
		vscode.commands.registerCommand('gside.openStage', () => {
			// 1. Webview（ステージ）を「右側（Column Two）」に開く
			const panel = vscode.window.createWebviewPanel(
				'goboStage',
				'goboscript Stage',
				vscode.ViewColumn.Two,
				{
					enableScripts: true, 
					localResourceRoots: [context.extensionUri],
					retainContextWhenHidden: true
				}
			);
			panel.webview.html = getHtml(panel.webview, context.extensionUri);

			// 2. 出力パネルを「下」に表示させる
			// 第2引数の true は「フォーカスを奪わない（エディタに置いたままにする）」という意味です
			terminal.show(true); 

			// 3. Webviewからのログ転送
			panel.webview.onDidReceiveMessage(async msg => {
				({
					getFiles: async () => {
						const files = await getProjectFiles();
						panel.webview.postMessage({ command: 'getFilesRes', files: files });
					},
					log: () => {
						writeEmitter.fire(`[${msg.type}] ${msg.text.replace(/\r?\n/g, "\r\n")}\r\n`);
					},
					clearConsole: () => {
						writeEmitter.fire("\x1b[2J\x1b[H");
					},
					builded: () => {
						const sb3 = new Uint8Array(msg.file);
						vscode.workspace.fs.writeFile(vscode.Uri.joinPath(vscode.workspace.workspaceFolders[0].uri, 'out', `${vscode.workspace.workspaceFolders[0].name}.sb3`), sb3);
					},
					mark: () => {
						markers.clear();
						for (const m of msg.markers) {
							markers.set(vscode.Uri.joinPath(vscode.workspace.workspaceFolders[0].uri, m.path), [new vscode.Diagnostic(
								new vscode.Range(m.startLineNumber, m.startColumn, m.endLineNumber, m.endColumn),
								m.msg,
								vscode.DiagnosticSeverity.Error
							)]);
						}
					}
				})[msg.command]?.();
			});
		}),
		vscode.commands.registerCommand('gside.new', async () => {
			if (!vscode.workspace.workspaceFolders) {
			vscode.window.showErrorMessage("Open a folder first to create a goboscript project!");
				return;
			}
			const rootUri = vscode.workspace.workspaceFolders[0].uri;
			const defaultFiles = {
				"project": {
					"assets": {
						"blank.svg": `<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg width="0" height="0" xmlns="http://www.w3.org/2000/svg"></svg>`
					},
					"stage.gs": `# This is the Stage, list more backdrops separated by comma.\ncostumes "assets/blank.svg";\n`,
					"main.gs": `# This is a sprite.\ncostumes "assets/blank.svg";\n\n# when green flag clicked\nonflag {\n\tsay "Hello, World!";\n}\n`,
					"goboscript.toml": `# goboscript project configuration\n\n# The target number of frames per second (FPS)\nframe_rate = 30\n\n# Maximum number of clones that can exist simultaneously\nmax_clones = 300.0\n\n# If true, removes various limits unrelated to clones or rendering\nno_miscellaneous_limits = false\n\n# If true, disables sprite fencing (sprites can move beyond stage borders)\nno_sprite_fencing = false\n\n# If true, enables frame interpolation for smoother animations\nframe_interpolation = false\n\n# If true, improves pen rendering quality (may affect performance)\nhigh_quality_pen = false\n\n# Width of the stage in pixels\nstage_width = 480\n\n# Height of the stage in pixels\nstage_height = 360\n`
				},
				"out": {},
				".git": {},
				".gitignore": `# Ignore the output directory\nout/\n\n# Ignore logs and temporary files\n*.log\n*.tmp\n\n# Ignore VSCode settings and workspace files\n.vscode/\n*.code-workspace\n`
			};
			// 再帰関数の定義と即時実行
			await (async function createFileOrDir(parentPath, currentContent) {
				for (const [name, content] of Object.entries(currentContent)) {
					const currentUri = vscode.Uri.joinPath(rootUri, ...parentPath, name);
					if (typeof content === "string") {
						// ファイル書き込み
						await vscode.workspace.fs.writeFile(currentUri, new TextEncoder().encode(content));
					} else {
						// ディレクトリ作成
						await vscode.workspace.fs.createDirectory(currentUri);
						// 再帰：第2引数に「今の子階層の中身」を渡すのがポイント
						await createFileOrDir([...parentPath, name], content);
					}
				}
			})([], defaultFiles);
		})	  
	);
}

async function getProjectFiles() {
	const workspaceFolders = vscode.workspace.workspaceFolders;
	if (!workspaceFolders) return {};

	const projectFiles = {};
	const rootUri = vscode.Uri.joinPath(workspaceFolders[0].uri, 'project');

	// 開いている全ドキュメントをMap化（fileスキームのみ）
	const openedDocs = new Map(
		vscode.workspace.textDocuments
			.filter(doc => doc.uri.scheme === 'file')
			.map(doc => [doc.uri.toString(), doc])
	);

	async function readDirectory(uri) {
		const entries = await vscode.workspace.fs.readDirectory(uri);
		
		for (const [name, type] of entries) {
			const childUri = vscode.Uri.joinPath(uri, name);
			// 不要なディレクトリを除外
			if (['dist', 'out', 'bin', 'obj'].includes(name) || name.startsWith('.') || name.endsWith('.md') || name.endsWith('.log')) continue;

			if (type === vscode.FileType.Directory) {
				await readDirectory(childUri);
			} else if (type === vscode.FileType.File) {
				const relativePath = vscode.workspace.asRelativePath(childUri, false);
				const uriStr = childUri.toString();

				if (openedDocs.has(uriStr)) {
					// エディタのメモリ上のテキストを取得
					const doc = openedDocs.get(uriStr);
					// ★重要: 文字列をBuffer(Uint8Array)に正しく変換
					projectFiles[relativePath] = Buffer.from(doc.getText());
				} else {
					// ディスクから読み込み
					projectFiles[relativePath] = await vscode.workspace.fs.readFile(childUri);
				}
			}
		}
	}

	await readDirectory(rootUri);
	return projectFiles;
}



function getHtml(webview, extensionUri) {
	const media = (f) => webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', ...f));
	return `<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8">
	   			<meta http-equiv="Content-Security-Policy" content="script-src 'unsafe-inline' 'unsafe-eval' ${webview.cspSource}; connect-src ${webview.cspSource};">
				<link rel="stylesheet" href="${media(['style.css'])}">
				<script type="importmap">
					{
						"imports": {
							"goboscript": "${media(['goboscript', 'libgoboscript.js'])}",
							"Scaffolding": "${media(['scaffolding', 'scaffolding.js'])}",
							"toml": "${media(['toml', 'toml.js'])}",
							"gsstd": "${media(['goboscript', 'std.json'])}"
						}
					}
				</script>
			</head>
			<body>
				<div id="stage_container">
					<div id="toolbar">
						<button id="run">Play</button>
						<button id="stop">Stop</button>
						<button id="build">Build</button>
					</div>
					<div id="stage" style="width: 100%;aspect-ratio: 480 / 360;"></div>
				</div>
				<div id="var_monitor"></div>
				<script type="module" src="${media(['main.js'])}"></script>
			</body>
		</html>`;
}

module.exports = { activate };
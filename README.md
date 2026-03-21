[日本語](README.ja.md)

# goboscirpt IDE for VSCode

A powerful development environment for goboscript, designed to streamline your workflow with real-time monitoring and debugging features.**This extenison doesn't support syntax highlight.Please use [the official extension](https://github.com/aspizu/goboscript/tree/main/editors/code) additionally.**

## Features

- **Live Stage**: Real-time preview of your project execution.
- **Property Watcher**: Monitor sprite and clone properties (position, size, direction, etc) on the fly.
- **Error Reporting**: Instant error output with direct marking in your source code.
- **Integrated Console**: View logs and system output seamlessly.
- **Project Builder**: Fast and reliable build system for your projects.

## Installation

You can find the latest version on the **[Releases](https://github.com/Funaen/goboscript-vscode-ide/releases)** page.
Open VSCode > Extension > ... > Install from VSIX... and select the VSIX file.

## Usage
Open a workspace and run ```goboscript: New Project``` command.
This will create a new project with the following structure:
```
.
├─ out
├─ project
│   ├─ assets
│   │   └─ blank.svg
│   ├─ goboscript.toml
│   ├─ main.gs
│   └─ stage.gs
├─ .git
└─ .gitignore
```
Click ```goboscript: Run Project``` button or run the command to run your project.
This will open the stage on the right side of the editor and the console at the bottom.

## TODO

- [ ] Variable Watcher
- [ ] Debugging Suite
- [ ] Fullscreen Mode

## Credits

- [aspizu](https://github.com/aspizu)
  -  [goboscript](https://github.com/aspizu/goboscript)
  -   [goboscript-ide](https://github.com/link-to-repo)
- [GarboMuffin](https://github.com/GarboMuffin)
  -  [Scaffolding](https://github.com/TurboWarp/scaffolding)

---

# goboscirpt IDE for VSCode

プロジェクトのライブプレビューやデバッグなどの機能を追加します。
**構文強調機能は含まれておらず、[公式のレポジトリ](https://github.com/aspizu/goboscript/tree/main/editors/code)より別途インストールが必要です。**

## 機能
- ライブステージ: プロジェクトをリアルタイムでビルドしエディタ内で実行できます
- プロパティウォッチャ: 専用のモニタでスプライトやクローンのプロパティ（x,y座標、方向、コスチュームなど）をリアルタイムで確認できます
- 構文エラーの表示: エラー部位をコンソールに出力、エディタにハイライトします
- コンソール: goboscriptからコンソールにアクセスできる関数を追加
- プロジェクトのビルド: WASMベースのコンパイラを用いて.sb3にビルド

## インストール
**[Releases](https://github.com/Funaen/goboscript-vscode-ide/releases)**ページからVSIXファイルをダウンロードしてください。
VSCodeに追加するには、Extension > ... > Install from VSIX...の順に進んで該当ファイルを選択します.

## 使い方
ワークスペースを開き、ctrl(command) + shift + Pでコマンド```goboscript: New Project```を実行します。
以下のファイル構造で新しいプロジェクトが生成されます。
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
エディタタブにある```goboscript: Run Project```ボタンをクリックするか、コマンドを実行することでプロジェクトを実行できます。
ステージが画面右側、コンソールが画面下部に開かれるので適宜サイズを調整してください。

## クレジット
- [aspizu](https://github.com/aspizu)
  -  [goboscript](https://github.com/aspizu/goboscript)
  -   [goboscript-ide](https://github.com/link-to-repo)
- [GarboMuffin](https://github.com/GarboMuffin)
  -  [Scaffolding](https://github.com/TurboWarp/scaffolding)

---

# Typing-game-of-One-Piece

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/tetumemo/sb1-fux4b4)

Here is a sample `README.md` for your One Piece character guessing game, created using **Bolt**:

# ワンピーススタイピングゲーム

## 概要

「ワンピーススタイピングゲーム」は、人気アニメ・マンガ「ワンピース」のキャラクター名を入力して遊ぶシンプルなタイピングゲームです。  
キャラクターの名前を日本語またはローマ字で入力することで、スコアを競います。

## デモ

![ゲームスクリーンショット](/Typing-game-of-One-Piece/images/Typing-game-of-One-Piece-1.png)

![ゲームスクリーンショット](/Typing-game-of-One-Piece/images/Typing-game-of-One-Piece-2.png)

## 機能

- **キャラクターリスト**：ワンピースの主要キャラクター名が日本語とローマ字で表示されます。
- **タイピングゲーム**：画面に表示されるキャラクターの名前を素早く正確に入力することでスコアを獲得できます。
- **音楽**：バックグラウンドでBGM（`bgm.mp3`）が再生され、ゲームの雰囲気を盛り上げます。

## 使用技術

- **Bolt**: このゲームは [Bolt](https://bolt.new/) を使ってフルスタックで開発されています。ローカル環境やGitHub上で簡単にセットアップ・実行が可能です。
- **React**: UIコンポーネントにはReactを使用しています。`useState`や`useEffect`などのReactフックを利用して、ゲームのステート管理を行っています。
- **TypeScript**: 型安全な開発のためにTypeScriptを採用しています。

## ディレクトリ構成

```
.
├── .bolt/                # Boltプロジェクト設定ファイル
├── dist/                 # コンパイル後のファイル
├── public/
│   └── bgm.mp3           # ゲームで使用するBGMファイル
├── src/
│   ├── components/       # Reactコンポーネント
│   │   ├── App.tsx       # メインのAppコンポーネント
│   ├── index.tsx         # エントリーポイント
│   ├── types.ts          # 型定義ファイル
├── index.html            # HTMLテンプレート
├── vite.config.ts        # Viteの設定ファイル
└── package.json          # 依存関係の定義
```

## セットアップ

### 必要なもの

- Node.js（バージョン16以上）
- Bolt（[公式サイト](https://bolt.new/) でインストールガイドを確認してください）

### 手順

1. リポジトリをクローンします。

   ```bash
   git clone https://github.com/tetumemo/Typing-game-of-One-Piece.git
   cd onepiece-typing-game
   ```

2. 依存パッケージをインストールします。

   ```bash
   npm install
   ```

3. 開発サーバーを起動します。

   ```bash
   npm run dev
   ```

4. ブラウザで以下のURLにアクセスします。

   ```
   http://localhost:5173
   ```

## 遊び方

1. ゲーム画面に表示されたワンピースキャラクターの名前を入力してください。
2. 正しい名前を入力するごとにスコアが加算されます。
3. ゲームが進むごとに難易度が上がります。

## 貢献

バグ報告や新機能の提案など、コントリビューションは大歓迎です！  
Pull Requestを作成する前に、Issueを立てていただけると助かります。

## ライセンス

このプロジェクトはMITライセンスのもとで公開されています。詳細は `LICENSE` ファイルを参照してください。

### ポイント

- **概要** でゲームの簡単な説明をしています。
- **デモ** セクションにはスクリーンショットを挿入する場所を指定しています（実際のリンクに変更してください）。
- **機能**、**使用技術** では、ゲームがどのように作られているかを簡単に説明しています。
- **セットアップ手順** では、リポジトリのクローン、依存パッケージのインストール、ローカル開発環境の起動手順を説明しています。
- **貢献** のセクションはオープンソースプロジェクトでよく使われる形で貢献方法を示しています。

スクリーンショットのパスやリポジトリURLは、実際のものに置き換えてください。

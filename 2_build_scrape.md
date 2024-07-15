
あなたのindex.htmlの内容をNext.jsプロジェクト内に組み込む方法です。

`app/page.tsx` はindex.tsxと競合するので捨てる

http://localhost:3000/

Next.jsとTypeScriptを使用して、このコードをフロントエンドとバックエンドに分割して実装します。以下にIndex.tsxとscraping.tsの内容を示します。

このコードを実装するには、以下の手順を踏んでください：

1. Next.jsプロジェクトを作成し、TypeScriptを有効にします。
2. `axios`と`cheerio`をインストールします：`npm install axios cheerio`
3. `pages/index.tsx`と`pages/api/scrape.ts`ファイルを作成し、上記のコードを貼り付けます。
4. スタイリングのために`styles/Home.module.css`ファイルを作成し、必要なスタイルを追加します。

この実装では、フロントエンドがユーザーインターフェースを提供し、バックエンドAPIがウェブスクレイピングを行います。CORSの問題を回避するため、クライアントサイドではなくサーバーサイドでスクレイピングを行っています。


```
git init
git remote add origin https://github.com/tztechno/vercel_scrape_fda
git add .
git commit -m "Initial commit"
git push -u origin main

git push -f origin main　強制



```
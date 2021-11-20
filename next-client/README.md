# Nest-Client

- [Nest-Client](#nest-client)
  - [インストール](#インストール)
  - [初期化](#初期化)
  - [データの取得](#データの取得)
  - [TypeScriptへの対応](#typescriptへの対応)

- Next.jsでのgraphqlの使い方を学んでいく



## インストール
- 必要ライブラリインストール
```shell
yarn add @apollo/client graphql
```


## 初期化
- _app.tsxに対してクライアントインスタンスを作成しApolloProviderでタグをラップしてクライアントを渡す
- ApolloProviderによってクライアントをどこからでもアクセスできるようになる



## データの取得
- データの取得はuseQueryで行う



## TypeScriptへの対応
- GraphQL Code Generatorを使う
```shell
yarn add -D @graphql-codegen/cli
# 自動的に入ってる気がする
yarn add -D @graphql-codegen/typescript
```
- 初期化
```shell
yarn graphql-codegen init
```
- 生成
- コマンドスクリプトを定義していることが前提
```shell
yarn generate
```

- documentsに実行したいクエリを書き出すと自動でカスタムフックを作ってくれる
- 引数はフックの中に入れる
  - オブジェクトの中にvariablesその中に入れたい引数を定義



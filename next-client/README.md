# Nest-Client

- [Nest-Client](#nest-client)
  - [インストール](#インストール)
  - [初期化](#初期化)
  - [データの取得](#データの取得)

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
- 

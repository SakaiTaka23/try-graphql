# next-next

- [next-next](#next-next)
  - [確認事項](#確認事項)
  - [実装手順](#実装手順)
  - [セットアップまとめ](#セットアップまとめ)
  - [Nest.js](#nestjs)

- next,next,graphqlを使って実際にアプリを作ってみる

## 確認事項
- frontend
  - [x] graphqlのインストールの手順
  - [x] データの取得方法
- backend
  - [ ]  ログの出し方
  - [ ]  バリデーション



## 実装手順
- backend
  - [x] 必要なパッケージをインストール
  - [ ] ログを出すように設定
  - [x] 一覧取得API
  - [x] IDから取得API
  - [x] 作成API
- frontend
  - [x] 必要なパッケージインストール
  - [x] 一覧表示画面作成
  - [x] 一つ表示画面作成
  - [x] 作成画面作成
  - [x] とぐる機能を使う



## セットアップまとめ



## Nest.js

1. テストファイルを削除・CLIのコマンド書き換え

```json
"generateOptions":{
    "spec": false
  }
```

2. 必要なライブラリインストール

```shell
yarn add @nestjs/graphql graphql-tools graphql apollo-server-express

yarn upgrade graphql@15.7.1
```

3. app.modulesに設定を記述
4. prismaのライブラリをインストール・設定




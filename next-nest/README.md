# next-next

- [next-next](#next-next)
  - [確認事項](#確認事項)
- [Yarn Work Space](#yarn-work-space)
  - [Setup](#setup)

- next,next,graphqlを使って実際にアプリを作ってみる

## 確認事項
- [ ] yarn work spaces × Dockerの相性確認

- [ ] firebase authを使った認証の挙動を調査

- frontend
  - [ ] graphqlのインストールの手順
  - [ ] データの取得方法
- backend
  - [ ]  ログの出し方
  - [ ]  バリデーション



# Yarn Work Space



## Setup
```shell
git init
yarn init -y
```

- .gitignore追加
```.gitignore
node_modules
```

- package.jsonにプライベートとワークスペースを追加
```json
"private":true,
"workspaces":["frontend", "backend"]
```

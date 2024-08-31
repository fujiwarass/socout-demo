# アーキテクチャに関して

## フォルダ構成

```
tree ./src
```

```
└─app  
    ├─(main) -- 会員のみ使用できる画面を配置するルートグループ
    │  └─player
    ├─(public) -- 非会員でも使用できる画面を配置するルートグループ
    │  └─login
    └─_component -- 画面で共通的に利用するコンポーネント群を配置するプライベートフォルダ
        └─layout -- レイアウト用に利用するコンポーネント
            └─parts　
```

## 使用技術

**マテリアルUI**
```
npm install @mui/material @emotion/react @emotion/styled
```

**マテリアル Icon**
```
npm install @mui/icons-material
```
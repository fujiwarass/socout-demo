# アーキテクチャに関して

## フォルダ構成

```
tree ./src
```

基本構成

```
├─app
│  ├─ appフォルダ以下の構成に記載
│
├─const
├─demo
└─feature　-- ページファイルで肥大化したコンポーネントを再利用できる単位で分割したコンポーネント群を配置
    └─XXXX
        ├─components
        ├─const
        ├─schema
        ├─types
        └─utils
```

appフォルダ以下の構成

```
├─(main) -- 会員のみ利用できる画面を集約したルートグループ
│  └─player
│      ├─create
│      │  ├─confirm
│      │  └─media
│      └─edit
├─(public) -- 非会員も利用できる画面を集約したルートグループ
│  └─login
├─api -- リクエスト先となるルートハンドラー
│  └─v1
│      └─player-profile
└─_component -- 各ページやレイアウトで利用され
    ├─elements -- page.tsxやfeatureで利用できる最小のコンポーネント
    │  ├─Buttons       -- ボタンコンポーネント
    │  ├─CheckBoxs     -- チェックボックスコンポーネント
    │  ├─Chips         -- チップスコンポーネント
    │  ├─Field         -- 表示フィールドコンポーネント
    │  ├─HeadLines     -- タイトルコンポーネント
    │  ├─Inputs        -- 入力フィールドコンポーネント
    │  ├─LadioButtons  -- ラジオボタンコンポーネント
    │  └─Tables        -- テーブルコンポーネント
    │      └─types
    └─mainLayout       -- layout.tsxで利用できる最小のコンポーネント
        └─parts　
```

 - **フォルダ構成に関する説明**
   - ルートグループを会員用と非会員用で分けているのは共通レイアウトが会員と非会員で異なるため

## 使用技術

**マテリアルUI**
```
npm install @mui/material @emotion/react @emotion/styled
```

**マテリアル Icon**
```
npm install @mui/icons-material
```
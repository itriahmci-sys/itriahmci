[README.md](https://github.com/user-attachments/files/33823481/README.md)
This is the second site of AHMCI
# 聯盟首頁 — 檔案分工

| 檔案 | 放什麼 | 什麼時候改它 |
|---|---|---|
| `index.html` | 只有骨架（3 個掛載點＋載入 CSS/JS） | 幾乎不用改 |
| `config.js` | 所有文字、連結、案例、論壇等「內容」 | **日常更新都改這裡** |
| `app.js` | 把 config 資料轉成 HTML、篩選、捲動動畫、手機選單 | 要新增「新版型」時 |
| `styles.css` | 顏色、字型、版面、RWD | 調整外觀時 |
| `images/interlock.png` | 原本內嵌在 HTML 的 base64 主視覺，已抽成檔案 | — |

## 常見操作

**新增一筆共創案例**：在 `config.js` → `cases` 區塊的 `items` 加一筆，`cat` 填類別名稱（篩選按鈕會自動生效）。

**新增一場論壇**：在 `SITE.forums` 加一筆 `{ year, title, href }`，論壇卡片會自動更新。

**新增首頁區塊**：在 `SITE.sections` 適當位置插入物件，`type` 選現有版型之一：
`cards`、`timeline`、`services`、`cases`、`tech`、`pillars`、`network`、`org`、`links`、`roadmap`、`plans`。
加上 `nav: "選單名稱"` 就會出現在上方選單。

**新增子分頁捷徑（Hero 下方小方塊）**：在 `SITE.hero.quickLinks` 加一筆。

**新增子分頁並共用導覽列／頁尾**（例如 `media/index.html`）：

```html
<body data-base="../">
  <div id="site-nav"></div>
  <main>……分頁自己的內容……</main>
  <div id="site-footer"></div>
  <link rel="stylesheet" href="../styles.css">
  <script src="../config.js" defer></script>
  <script src="../app.js" defer></script>
</body>
```

`data-base="../"` 會自動把選單的 `#about` 轉成 `../index.html#about`，所有相對路徑也會一併修正。之後改選單只要改 `config.js` 一處，所有分頁同步。

## 注意
- 這份 `styles.css` 是依新結構重寫的完整樣式，會取代原本的 `styles.css`。
- `alliance-logo.png` 仍沿用原本根目錄的檔案。
- 用 `file://` 直接開啟可正常運作（不需架伺服器）。

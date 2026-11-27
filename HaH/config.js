/* ============================================================
   政策案例主網頁設定檔
   ------------------------------------------------------------
   新增報告：
     1. 把報告 HTML 放進 reports/ 資料夾
     2. 在下方 reports 陣列加一筆（複製一筆來改最快）
   欄位說明：
     category  分類代號，要對應 categories 裡的 id
     file      報告檔名（放在 reports/ 底下）
     badge     卡片左上的小字（一個字最好看）；或改用 icon
     icon      可選，內建圖示：chat、pulse、graph
     place     國家／主題小標
     title     卡片標題
     summary   一兩句摘要
     tags      關鍵字（也會被搜尋到）
     color     主色
     stripe    可選，卡片頂端色條（CSS 顏色或漸層），預設用 color
   ============================================================ */

window.SITE_CONFIG = {
  site: {
    logo: "assets/ahmci-logo.png",
    logoAlt: "健康樂活 智慧醫療照護聯盟",
    homeUrl: "https://www.itriahmci.org.tw/",
    kicker: "AHMCI 政策案例",
    titleA: "把醫院搬回家，",
    titleB: "各國怎麼分工",
    subtitle: "八個國家的在宅醫療制度拆解，加上三份照護 AI 研究。看誰出錢、誰訂規則、誰接警報，再看 AI 能幫上哪些忙。",
    tip: "<b>閱讀建議：</b>先讀一個國家案例了解「誰負責什麼」，再讀照護 AI 報告，看看 AI 適合放進流程的哪個環節。",
    footer: "健康樂活與智慧醫療照護聯盟（AHMCI）政策案例｜各報告資料截至 2026 年 11 月，僅供政策研究參考，不構成臨床或法律意見。",
    searchPlaceholder: "搜尋：虛擬病房、FHIR、輔具…"
  },

  categories: [
    {
      id: "country",
      label: "各國制度",
      heading: "各國在宅醫療制度",
      intro: "每份報告都拆解同一組問題：分層負責、財源給付、智慧輔具、資料互通、警訊分級與緊急支援，最後回到台灣能借鏡什麼。",
      statLabel: "國家／地區案例"
    },
    {
      id: "ai",
      label: "照護 AI",
      heading: "照護 AI：讓多個代理一起想",
      intro: "多智能體 AI 在在宅醫療、遠距照護與照護計畫上的用法、證據與治理，共同原則是：AI 提出、人來拍板。",
      statLabel: "照護 AI 研究",
      tinted: true
    }
  ],

  reports: [
    { category: "country", file: "GB_HaH.html", badge: "英", place: "英格蘭", title: "NHS 虛擬病房",
      summary: "Hospital at Home 的制度架構、醫療與社會照護財源拆分、FHIR 互通與警訊分級。",
      tags: ["虛擬病房", "NHS", "FHIR"], color: "#c8102e",
      stripe: "linear-gradient(90deg,#012169 0 50%,#c8102e 50%)" },

    { category: "country", file: "French_HaH.html", badge: "法", place: "法國", title: "在宅住院 HAD",
      summary: "HAD、居家自主支持服務、個人自主津貼（APA）、遠距監測與急救調度如何分層負責。",
      tags: ["HAD", "APA", "長照"], color: "#0055a4",
      stripe: "linear-gradient(90deg,#0055a4 0 33%,#e7e2d6 33% 66%,#ef4135 66%)" },

    { category: "country", file: "Denmark_HaH.html", badge: "丹", place: "丹麥", title: "三層分工與 2027 改革",
      summary: "國家、區域、自治體怎麼分工與付錢；TeleCare Nord 遠距監測試驗與在宅急症照護調查。",
      tags: ["TeleCare Nord", "健康改革", "FHIR R4"], color: "#c8102e" },

    { category: "country", file: "Sweden_HaH.html", badge: "瑞", place: "瑞典・日本", title: "在家，也被好好接住",
      summary: "瑞典安全警報、醫院在家與跨院病歷查閱，對照日本四層責任，並提出台灣試辦驗證方法。",
      tags: ["安全警報", "智慧輔具", "試辦設計"], color: "#006aa7",
      stripe: "linear-gradient(90deg,#006aa7 0 70%,#fecc00 70%)" },

    { category: "country", file: "Italy_HaH.html", badge: "義", place: "義大利・都靈", title: "CANP 居家住院與 AAL",
      summary: "皮埃蒙特大區 La Casa nel Parco 計畫：居家住院服務、AAL 智慧照護架構與可移植經驗。",
      tags: ["AAL", "事件驅動", "居家住院"], color: "#008c45",
      stripe: "linear-gradient(90deg,#008c45 0 33%,#e7e2d6 33% 66%,#cd212a 66%)" },

    { category: "country", file: "Australia_HaH.html", badge: "澳", place: "澳洲", title: "HITH 在家住院",
      summary: "聯邦、州、地方衛生區到第一線的五層責任；Support at Home 輔具補助與 My Health Record。",
      tags: ["HITH", "AT-HM", "My Health Record"], color: "#0b4f6c",
      stripe: "linear-gradient(90deg,#0b4f6c 0 75%,#f4b740 75%)" },

    { category: "country", file: "Japan_HaH.html", badge: "日", place: "日本", title: "在宅醫療與智慧輔具",
      summary: "醫療與介護保險分工、訪問看護判定、2026–2027 報酬與福祉用具新規、夜間支援。",
      tags: ["介護保險", "訪問看護", "福祉用具"], color: "#bc002d",
      stripe: "linear-gradient(90deg,#e7e2d6 0 40%,#bc002d 40% 60%,#e7e2d6 60%)" },

    { category: "country", file: "Saudi_HAH.html", badge: "沙", place: "沙烏地阿拉伯", title: "JHAH 居家醫院",
      summary: "Johns Hopkins Aramco Healthcare 的居家醫院分層負責制度，以及多智能體分診框架。",
      tags: ["居家醫院", "AI 分診", "案例研究"], color: "#006c35" },

    { category: "country", file: "Netherlands_HAH.html", badge: "荷", place: "荷蘭", title: "Zorg bij jou 混合照護",
      summary: "跨院共用醫療服務中心的居家監測七層分層負責制度，以及 Zvw／Wlz／Wmo 三法財源與 HiX 資料匯流。",
      tags: ["混合照護", "分層負責", "案例研究"], color: "#e3620c" },
     
    { category: "ai", file: "Multiple_Agent_Debate.html", icon: "chat", place: "多代理辯論", title: "讓 AI 先吵一架",
      summary: "Multi-Agent Debate 用於在宅、遠距與長照：證據、架構、裝置 API、SaaS、資安、法規與人為介入。",
      tags: ["MAD", "長照", "資安法規"], color: "#7c5cd6" },

    { category: "ai", file: "MAD_HaH.html", icon: "pulse", place: "虛擬病房", title: "在宅住院的多智能體系統",
      summary: "從警報疲勞到分層負責：架構、認知編排、演算法分診、偽陽性抑制、互通性與風險治理。",
      tags: ["警報疲勞", "分診", "互通性"], color: "#4f8ad9" },

    { category: "ai", file: "CANOE_care_plan_synthesis.html", icon: "graph", place: "加拿大・CANOE", title: "可爭辯的照護計畫 AI",
      summary: "多角色 AI 為每個照護選項列出正反理由並算分，再由真人逐條修改；附台灣導入評估。",
      tags: ["論證圖", "人機協作", "證據評讀"], color: "#0f766e" }
  ]
};

/* =========================================================================
 * config.js — 網站內容設定（只放「資料」，不放版面邏輯）
 * -------------------------------------------------------------------------
 * ● 新增首頁區塊：在 SITE.sections 陣列中加入一個物件，指定 type 即可。
 *   可用的 type：cards / timeline / services / cases / tech / pillars /
 *                network / org / links / roadmap / plans
 * ● 區塊若要出現在上方選單：設定 nav: "選單文字"
 * ● 新增論壇：只要在 SITE.forums 加一筆，論壇區塊會自動更新
 * ● 文字欄位可使用少量 HTML（例如 <em>、<br>）
 * ========================================================================= */

window.SITE = {
  meta: {
    title: "健康樂活與智慧醫療照護聯盟",
    org: "工業技術研究院",
  },

  brand: {
    logo: "alliance-logo.png",
    alt: "健康樂活與智慧醫療照護聯盟",
  },

  navCta: { label: "加入聯盟", href: "#plans" },

  /* ---------------- HERO ---------------- */
  hero: {
    tag: "工業技術研究院 · 2020 年成立",
    title: "把長照、醫療與科技<br>織成<em>一張安全網</em>",
    lead: "健康樂活與智慧醫療照護聯盟整合 AI、半導體晶片、通訊與資安技術，在「銀髮聚寶盆」智慧長照試驗場域中驗證產品與服務，讓照護科技真正走進醫院、日照中心與每一個家庭。",
    stats: [
      { value: "30+", label: "跨域企業會員" },
      { value: "50+", label: "六年共創實績" },
    ],
    actions: [
      { label: "看會員共創實績", href: "#cases", style: "primary" },
      { label: "了解會員方案", href: "#plans", style: "ghost" },
    ],
    /* 子分頁捷徑：未來新增分頁，在這裡加一筆即可 */
    quickLinks: [
      { icon: "🎬", label: "微電影＆新聞影片", href: "media/index.html" },
      { icon: "📢", label: "活動公告", href: "activity/announcement.html" },
      { icon: "📰", label: "新知週報分享", href: "news_report/index.html" },
    ],
    image: { src: "images/interlock.png", alt: "健康樂活與智慧醫療照護聯盟" },
    imageCaption: "跨域共創 · 醫照一體 · 健康老化",
    imageLink: { label: "✉️ 我要留言", href: "guestbook/index.html" },
  },

  /* ---------------- 論壇／媒體（論壇區塊使用） ---------------- */
  forums: [
    { year: "2026", title: "在宅醫療 × 金融保險論壇", href: "forum/2026Q3.html" },
    { year: "2025", title: "引領健康台灣新未來論壇", href: "forum/2025Q4.html" },
    { year: "2024", title: "公私協力合作推動健康台灣生態系論壇", href: "forum/2024Q4.html" },
    { year: "2023", title: "精準健康跨域論壇", href: "forum/2023Q4.html" },
  ],
  media: [
    { icon: "🎙", title: "聯盟 Podcast", linkText: "收聽聯盟 Podcast →", footerLabel: "聯盟 Podcast",
      href: "https://open.firstory.me/user/cmadfxoxs07gt01yz2qtug9ne/platforms" },
    { icon: "📰", title: "銀天下工研院專欄", linkText: "閱讀專欄文章 →", footerLabel: "銀天下工研院專欄",
      href: "https://www.cw.com.tw/feature/topic/aging/aging-itri" },
  ],

  /* ---------------- 首頁區塊（依序呈現） ---------------- */
  sections: [
    {
      id: "about", type: "cards", nav: "關於聯盟",
      eyebrow: "About the Alliance",
      title: "一個讓照護科技被驗證、被信任的地方",
      desc: "聯盟由工研院於 2020 年 8 月成立，以「銀髮聚寶盆」智慧照護驗證場域為核心，讓橫跨資通訊、保險、照護服務、機構設施與學研的會員，在真實場域中共同打造長照驗證體系與整合服務方案。",
      items: [
        { num: "01 / 成立", title: "工研院發起", text: "2020 年 8 月由工業技術研究院成立，串聯產、官、學、研資源共同投入高齡科技發展。" },
        { num: "02 / 場域", title: "銀髮聚寶盆", text: "作為智慧照護驗證試驗場域，讓照護技術與產品能在真實情境中驗證、測試並整合。" },
        { num: "03 / 模式", title: "跨技術整合", text: "整合 AI 人工智慧、半導體晶片與通訊技術、資安技術，打造長照驗證體系的新服務模式。" },
        { num: "04 / 會員", title: "跨產業共創", text: "橫跨資通訊、保險、照護服務、機構設施、學研等領域，逾 20 家業者共同參與，如今已成長至 30 家以上企業會員。" },
      ],
    },

    {
      id: "timeline", type: "timeline", tight: true,
      eyebrow: "Development Roadmap",
      title: "聯盟發展進程",
      desc: "從草創期的場域整合，走向公共政策參與，再展望分級醫療與國際市場開拓。",
      items: [
        { stage: "草創", title: "成立於 2019", items: ["照護科技水平、垂直整合", "跨產業、跨領域深度交流對談", "建立整合示範場域"] },
        { stage: "目前", state: "now", title: "深化政策與場域", items: ["參與高齡社會白皮書高齡科技 SRB、BTC 2022 政策討論", "新醫材計畫辦公室 / 智慧醫院計畫辦公室", "完善醫療—照護資料串接落地基礎建設方案", "建立亞健康族群照護／健康資料庫", "會員成果共創持續累積"] },
        { stage: "展望", state: "next", title: "邁向分級醫療與國際化", items: ["分級醫療制度運作、健康台灣深耕計畫", "研議公私協營醫療照護數據合作模式", "高階照護人力科技力體驗、培訓及認證", "健康紅利商模及健康數位分身", "國際合作：Everest Senior Living / 國際市場開拓"] },
      ],
    },

    {
      id: "services", type: "services", nav: "核心服務",
      eyebrow: "Five Core Services",
      title: "五大核心會員服務",
      desc: "聯盟不只是媒合平台，更提供完整的產業支持體系，讓每一家會員都能找到落地的路徑。",
      items: [
        { title: "跨域共創媒合", text: "打破產業界線，進行跨域合作整合與創新商模共創。" },
        { title: "共同行銷拓展", text: "整合會員資源，共同開拓市場與品牌能見度。" },
        { title: "論壇及工作坊", text: "每年四次產業論壇，加上不定期專題工作坊。" },
        { title: "法規技術諮詢", text: "提供專業法規與技術諮詢服務，協助會員掌握產業相關法規。" },
        { title: "政策議題推動", text: "彙集會員意見反映產業需求，實質參與政策建議。" },
      ],
    },

    {
      id: "cases", type: "cases", nav: "共創實績",
      eyebrow: "Member Co-creation",
      title: "會員共創實績：六年超過 50 件",
      desc: "從保險、醫院到食物銀行，聯盟促成的合作跨越產業邊界，以下精選歷年代表性共創案例。",
      categories: ["保險金融", "醫療院所", "長照機構", "系統整合", "國際合作"],
      items: [
        { cat: "保險金融", partner: "國泰人壽", title: "智慧科技大數據健康評估再進化", text: "國內首創保險產業結合數位健康檢測服務，推出業界首創 Line 認知檢測體驗服務，體驗滿意度達 90%。", meta: "行動裝置認知健康服務平台" },
        { cat: "醫療院所", partner: "臺中榮民總醫院", title: "全時自動 CPOT 疼痛評估系統", text: "AI 臉部表情特徵辨識量化質性評估指標，辨識率最高達 92.15%，減輕護理人力並降低接觸感染風險。", meta: "國際論文發表 · 專利申請中" },
        { cat: "系統整合", partner: "Fusion 群邁通訊", title: "「醫咖 GO」行動數位醫療方案", text: "黃金技術組合移轉，結合三合一傷口感測、手持式眼底鏡與超音波影像系統，協助遠距醫護從機構走向偏鄉。", meta: "R&D 100 Awards 2019 & 2020" },
        { cat: "醫療院所", partner: "中國醫藥大學附設醫院", title: "跨域合作未來智慧醫院標竿", text: "攜手台灣區電機電子工業同業公會，跨域媒合科技整合，擘劃台中市立老人復健綜合醫院醫養園區 BOT 案。", meta: "4.8 公頃用地 · 157 億投資" },
        { cat: "系統整合", partner: "樂林食物銀行", title: "食物銀行管理系統科技化", text: "結合究心公益科技的地理資訊與救災調度技術，打造線上物資發送需求系統，提昇食物分享效率。", meta: "關懷據點 × 志工管理 × 即時調度" },
        { cat: "長照機構", partner: "新光保全", title: "導入 AI 科技公共托老新氣象", text: "新北枋橋公共托老中心導入 AIoT 物聯網與智慧醫療技術，服務 40 名長輩，以科技降低照護風險。", meta: "諮詢 → 規劃 → 導入 → 驗證" },
        { cat: "保險金融", partner: "南山人壽", title: "發現新「銀」礦：長照白皮書", text: "盤點台灣銀髮長照產業地圖，委託研究長照白皮書，促成政府與產業共同合作、找出最佳解方。", meta: "2021/9/15 長照白皮書發表記者會" },
        { cat: "長照機構", partner: "中化銀髮事業", title: "智慧銀髮照護：健康數據加值暖時光", text: "引進日本日高集團 2,600 萬筆巨量數據，建立中化銀髮生活 AI 數據中心，提供 VIP 促健賦能建議。", meta: "技術在地化 × AI 模型 × 數位復健" },
        { cat: "系統整合", partner: "廣鏵國際", title: "在宅復健新規醫材開發上市", text: "光學技術移轉打造 630nm 光能軟墊血循促進儀，從關鍵零組件到 GMP 生產線完整驗證。", meta: "臨床實驗 IRB 協助聯繫" },
        { cat: "系統整合", partner: "山衛科技", title: "攜手爭取政府資源產業升級", text: "以「腦波拽引紓壓裝置」技術移轉，開發全方位智能照護自動洗澡機，貼心照護、清潔防疫。", meta: "CITD 協助傳統產業技術開發計畫" },
        { cat: "系統整合", partner: "中華電信", title: "跨業投入試金石", text: "以系統整合平台為核心，結合 iDarlingWeaR 非侵入式藍芽監測裝置，評估遠距照護長照服務產品化可能性。", meta: "量產規模 × 應用開發 × 商業模式" },
        { cat: "長照機構", partner: "曾醫師健康訓練教室", title: "科技數位化體適能方案", text: "聚寶盆場域導入 Data-driven Body Enabling，累積國人長者體適能資料庫，找出個人化最佳運動處方。", meta: "樂活 Fun 人生" },
        { cat: "醫療院所", partner: "tBPC HealthCare", title: "整合加值導入健康照護服務場域", text: "穿戴式心跳血氧監測裝置串接醫疾幫生理監測平台，攜手新竹馬偕醫院推動 PAC 心衰居家照護服務。", meta: "滿足防疫需求 × 遠距生理監測" },
        { cat: "系統整合", partner: "仁寶電腦 × 錸工場", title: "跨業跨域聯手 探索新商模", text: "串接仁寶輔聽器、產科國際所驗證新商模與錸工場場域，透過「聽見時光的聲音」市集驗證商模可行性。", meta: "串接合作伙伴 → 訪談問卷 → 新商業模式" },
        { cat: "國際合作", partner: "中化銀髮事業", title: "攜手前進國際合作", text: "共同引入日本技術，首創台灣 AI 智慧復能長照系統，讓長者依個人興趣自主選擇復能活動與課程。", meta: "工研院 × 中化銀髮 × 日高集團" },
        { cat: "長照機構", partner: "板橋榮譽國民之家", title: "沉浸式數位懷舊火車 2.0", text: "結合視覺、聽覺、觸覺、嗅覺的懷舊場情重建，透過 IoT 感測模組喚醒長者沈睡的記憶。", meta: "交通部臺灣鐵路管理局 × 元智大學" },
        { cat: "保險金融", partner: "國泰人壽", title: "結合科技新商模", text: "串聯數據分析、費率與理賠模型，結合步姿態分析與衰老指標，產生新保單產品與服務建議。", meta: "技術服務 → 服務串聯 → 新商業模式" },
      ],
    },

    {
      id: "tech", type: "tech", nav: "智能照護",
      eyebrow: "Smart Care Technology",
      title: "銀髮聚寶盆創新智能照護科技",
      desc: "依不同族群提供健康管理、疾病預防與療後復健服務——養護失能無感式安全照護、安養日照智慧守護、失智個案溫馨互動關懷，以及門診大量人流的非接觸防疫快篩。",
      items: [
        { label: "早衰／跌倒防治", text: "全身步態分析系統、PoseFit 樂齡智慧肌能鏡" },
        { label: "個案管理", text: "非接觸生理監測（床＋輪椅）：體溫、脈搏、呼吸、血壓" },
        { label: "互動關懷", text: "PECOLA 樂齡陪伴機器人" },
        { label: "舒適環境", text: "智慧空品／照明環控系統" },
        { label: "臥床/離床監測", text: "熱影像事件辨識及智慧床墊" },
        { label: "情報掌握", text: "健康照護戰情室" },
        { label: "健康促進", text: "肌力／體適能訓練、加值體適能量測" },
        { label: "發燒快篩", text: "熱影像異常體溫系統、高通量熱影像體溫系統" },
        { label: "遠距雲端協助", text: "遠端糖尿病檢測系統、EyeATM 自助眼底攝影系統" },
        { label: "智能判讀記錄", text: "慢性傷口記錄與進程分析系統" },
        { label: "用藥／醫療平台", text: "醫疾幫生理監測平台、光療貼布儀" },
        { label: "姿態辨識", text: "紅外線姿態辨識系統，適用日照、長照、居家與遠距照護" },
      ],
    },

    {
      id: "precision", type: "pillars",
      eyebrow: "Omics-based Precision Healthcare",
      title: "數據驅動精準健康服務",
      desc: "從癌症基因體、新藥開發到天然保健品開發，聯盟以「精準健康 · 科技賦能」串連場域應用、科技賦能與健康數據三個層次。",
      items: [
        { title: "亞健康族群生活資料", text: "整合日高資料庫，掌握個人基本資料、慢病與生活習慣。" },
        { title: "科技賦能衰弱預防", text: "銀髮族體適能分析，從檢測、評估到個人化運動建議。" },
        { title: "風險預防", text: "認知功能檢測、醫病決策共享服務、醫療風險涵蓋率評估。" },
        { title: "失能延緩", text: "PD 數位療法，延緩神經退化性疾病造成的功能衰退。" },
        { title: "慢病管理", text: "糖尿病／血糖管理，串接診所與居家照護的長期追蹤。" },
      ],
    },

    {
      id: "network", type: "network", nav: "照護網絡",
      eyebrow: "Healthcare Network",
      title: "落實長照 3.0 與健康台灣：打造一體化全人照護架構",
      desc: "支持國家「長照 3.0」政策，鏈結社區診所、藥局、居家護理與日照中心，轉型為數據驅動、協同運作的「醫照一體」網絡。",
      items: [
        { title: "社區診所｜健康守門員", text: "執行用藥諮詢、慢性病連續處方箋調劑、居家藥事照護，主導居家醫護並串聯醫院與長照機構。" },
        { title: "社區藥局｜用藥管理顧問", text: "提供基層醫療服務、慢性病管理與預防保健，是居民健康守護的第一線。" },
        { title: "日間照顧中心｜復能訓練基地", text: "提供白天托顧、社交活動與餐飲健康促進服務，結合復健處方與科技延緩失能。" },
        { title: "居家照護所｜醫囑轉譯者", text: "提供到宅護理、復健、營養指導，將醫療指令落實於日常生活並回傳生理數據。" },
      ],
      stats: [
        { value: "90%", label: "出院銜接率", sub: "2026 年目標達成率" },
        { value: "2天", label: "服務啟動時間", sub: "從出院到居家照護" },
        { value: "98%", label: "雲端應用率", sub: "醫療院所數據互通" },
      ],
    },

    {
      id: "org", type: "org", nav: "組織架構",
      eyebrow: "Alliance Structure",
      title: "聯盟組織架構",
      desc: "秘書處串連指導諮詢單位、策略夥伴與七大會員類別。",
      center: "秘書處",
      groups: [
        { title: "指導諮詢", items: ["經濟部", "衛福部", "退輔會", "國衛院"] },
        { title: "策略夥伴", items: ["ICF 暨輔助科技研究中心", "銀髮產業協會", "台灣區電電公會", "診所協會全國聯合會", "台大高齡醫學及健康福祉研究中心"] },
        { title: "金融保險", items: ["南山人壽", "國泰人壽", "兆豐金控", "國泰產險"] },
        { title: "醫藥照護", items: ["彰化基督教醫院", "美商 Everest Senior Living", "錸工場", "曾醫師訓練教室", "欣辰健康", "萬安基金會"] },
        { title: "服務平台", items: ["家是福科技", "優照護", "廣和順－家天使", "中化銀髮", "新光保全", "樂林食物銀行", "康健雜誌"] },
        { title: "生技醫材", items: ["帝壹生醫科技", "大中國際生醫", "廣鏵國際", "光麗生技控股", "浚鴻數據開發", "元健大和"] },
        { title: "系統整合", items: ["鴻鼎資訊", "群邁科技", "華康科技開發", "睿傳數據", "山衛科技", "創淨科技", "嘉惠集團"] },
        { title: "致力串聯", highlight: true, items: ["社區據點 17,759 處", "社區藥局 16,000 家", "地方診所 22,800 家"] },
      ],
    },

    {
      id: "policy-cases", type: "links", nav: "政策及案例研究", tight: true,
      eyebrow: "Policy &amp; Case Studies",
      title: "政策及案例研究",
      desc: "彙整整合照護政策方向，以及國際失智預防與照護案例，作為聯盟推動政策倡議與服務設計的參考基礎。",
      columns: 3,
      items: [
        { badge: "📋", title: "整合照護政策", href: "Policy_study/index.html", linkText: "前往內容 →" },
        { badge: "🇫🇮", title: "芬蘭失智預防照護（FINGER）", href: "Case_Studies/Finland_FINGER.html", linkText: "前往內容 →" },
        { badge: "🇦🇺", title: "澳洲失智行動地圖（ADNet）", href: "Case_Studies/Australian_ADNet.html", linkText: "前往內容 →" },
        { badge: "💰", title: "失智症的經濟代價", href: "Case_Studies/Dematia_EcoLoss.html", linkText: "前往內容 →" },
        { badge: "💼", title: "健康、就業與勞動收入", href: "Case_Studies/Income&Health.html", linkText: "前往內容 →" },
      ],
    },

    {
      id: "roadmap", type: "roadmap",
      eyebrow: "Looking Ahead",
      title: "展望未來",
      items: [
        { label: "培育科技照護人才", items: ["科技照護教育認證學分課程", "科技照護／商業開發人才培訓", "照護法規課程／線上課程"] },
        { label: "Lifestyle 異質資料整合與應用", items: ["生活健康資料整合蒐集", "社區服務資料整合蒐集", "人工智慧模型建置與分析"] },
        { label: "健康樂活聯盟會員共創", items: ["聯盟會員共創試行驗證", "跨產業跨領域交流激盪", "聯盟會員共創實績展示"] },
        { label: "照護科技整合", items: ["虛擬客觀結構式技能測驗（Virtual OSCE）", "跨域技術整合驗證場域", "科技照護虛實整合驗證場域"] },
        { label: "智慧社區照護商模驗證開發", items: ["智慧共生社區商模研究", "跨域整合式商模驗證", "實地場域擴大試行"] },
      ],
    },

    {
      id: "plans", type: "plans", nav: "會員方案",
      eyebrow: "Membership",
      title: "會員方案",
      desc: "三種參與方式，讓不同規模與投入程度的夥伴都能加入聯盟共創行列。",
      cta: { label: "填寫入會申請", href: "adminstration/apply.html", external: true },
      items: [
        { tier: "同樂會員", title: "認同宗旨、共襄盛舉", items: ["認同聯盟宗旨，投入參與推動大健康產業發展之企業", "入會年費 1 萬元", "享有參與聯盟各項會員活動權益", "名額不限"] },
        { tier: "銀享會員", featured: true, title: "實質合作、技術優先", items: ["與聯盟實質合作高齡科技 SRB，並透過聯盟研發金額 100 萬以上", "聯盟高齡促健科技或服務技轉金額達 150 萬以上", "享有聯盟技術優先技轉權益", "名額不限"] },
        { tier: "金讚會員", title: "領航決策、共同治理", items: ["贊助聯盟金額 30 萬", "可擔任分組召集人、理事", "享有聯盟企業聯名權益", "名額限 6 名以內"] },
      ],
    },

    /* 論壇區塊：資料來自上方 SITE.forums 與 SITE.media */
    {
      id: "forums", type: "links", source: "forums", tight: true, nav: "論壇與自媒體",
      eyebrow: "Media &amp; Forum",
      title: "歷年產業論壇、聯盟 Podcast 與媒體專欄",
      columns: 6,
    },
  ],

  /* ---------------- FOOTER ---------------- */
  footer: {
    slogan: "We are Competent, Committed, Compatible.",
    contacts: ["itriahmci@gmail.com", "SmartMedHealth@itri.org.tw"],
    copyright: "© 健康樂活與智慧醫療照護聯盟 · 工業技術研究院",
    note: "本頁內容整理自聯盟公開簡介資料，僅供參考",
  },
};

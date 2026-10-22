/* =========================================================================
 * app.js — 依 config.js 的 SITE 資料產生頁面（只放「邏輯」，不放內容）
 * -------------------------------------------------------------------------
 * 頁面掛載點（有哪個就渲染哪個）：
 *   <div id="site-nav"></div>     共用導覽列
 *   <main id="site-main"></main>  首頁 Hero + 所有區塊
 *   <div id="site-footer"></div>  共用頁尾
 *
 * 子分頁（例如 media/index.html）若想共用導覽列與頁尾：
 *   <body data-base="../">
 *     <div id="site-nav"></div> ...自己的內容... <div id="site-footer"></div>
 *     <script src="../config.js" defer></script>
 *     <script src="../app.js" defer></script>
 *   data-base 會自動修正所有相對連結與錨點（#about → ../index.html#about）
 * ========================================================================= */

(function () {
  "use strict";

  const SITE = window.SITE;
  if (!SITE) { console.error("[app.js] 找不到 window.SITE，請確認 config.js 已先載入"); return; }

  const BASE = document.body.dataset.base || "";
  const IS_HOME = !!document.getElementById("site-main");

  /* ---------- 小工具 ---------- */
  const isExternal = (h) => /^(https?:)?\/\//.test(h) || /^mailto:|^tel:/.test(h);

  // 依頁面位置修正連結
  function url(href) {
    if (!href) return "#";
    if (isExternal(href) || href.startsWith("/")) return href;
    if (href.startsWith("#")) return IS_HOME ? href : `${BASE}index.html${href}`;
    return BASE + href;
  }

  // 外部連結或指定 external 時，另開分頁
  function attrs(href, external) {
    const ext = external || isExternal(href);
    return `href="${url(href)}"${ext && !href.startsWith("mailto:") ? ' target="_blank" rel="noopener"' : ""}`;
  }

  const list = (arr) => (arr || []).map((t) => `<li>${t}</li>`).join("");
  const pad = (n) => String(n).padStart(2, "0");

  function head(s, extra = "") {
    return `
      <div class="section-head reveal">
        <span class="eyebrow">${s.eyebrow || ""}</span>
        <h2>${s.title || ""}</h2>
        ${s.desc ? `<p>${s.desc}</p>` : ""}
        ${extra}
      </div>`;
  }

  /* ---------- 各區塊渲染器（type → function） ----------
   * 新增一種版型：在這裡加一個 key，回傳 HTML 字串即可 */
  const R = {
    cards: (s) => `
      ${head(s)}
      <div class="about-grid">
        ${s.items.map((i) => `
          <div class="about-card reveal">
            <div class="num">${i.num}</div>
            <h4>${i.title}</h4>
            <p>${i.text}</p>
          </div>`).join("")}
      </div>`,

    timeline: (s) => `
      ${head(s)}
      <div class="timeline reveal">
        ${s.items.map((i) => `
          <div class="tl-col ${i.state || ""}">
            <div class="tl-eyebrow">${i.stage}</div>
            <h3>${i.title}</h3>
            <ul>${list(i.items)}</ul>
          </div>`).join("")}
      </div>`,

    services: (s) => `
      ${head(s)}
      <div class="service-row">
        ${s.items.map((i, n) => `
          <div class="service-card reveal">
            <div class="ic">${pad(n + 1)}</div>
            <h4>${i.title}</h4>
            <p>${i.text}</p>
          </div>`).join("")}
      </div>`,

    cases: (s) => `
      ${head(s)}
      <div class="filter-row reveal" role="group" aria-label="依類別篩選">
        <button class="tag is-active" data-filter="all">全部</button>
        ${s.categories.map((c, n) => `<button class="tag ${n % 2 ? "orange" : "teal"}" data-filter="${c}">${c}</button>`).join("")}
      </div>
      <div class="case-grid">
        ${s.items.map((i) => `
          <div class="case-card reveal" data-cat="${i.cat || ""}">
            <div class="partner">${i.partner}</div>
            <h4>${i.title}</h4>
            <p>${i.text}</p>
            <div class="meta">${i.meta}</div>
          </div>`).join("")}
      </div>`,

    tech: (s) => `
      <div class="tech-panel">
        ${head(s)}
        <div class="tech-grid">
          ${s.items.map((i) => `<div class="tech-item reveal"><span>${i.label}</span>${i.text}</div>`).join("")}
        </div>
      </div>`,

    pillars: (s) => `
      ${head(s)}
      <div class="pillar-row reveal">
        ${s.items.map((i, n) => `
          <div class="pillar">
            <div class="idx">${pad(n + 1)}</div>
            <h4>${i.title}</h4>
            <p>${i.text}</p>
          </div>`).join("")}
      </div>`,

    network: (s) => `
      ${head(s)}
      <div class="network-wrap">
        <div class="network-cards reveal">
          ${s.items.map((i) => `<div class="network-card"><h4>${i.title}</h4><p>${i.text}</p></div>`).join("")}
        </div>
        <div class="stat-stack reveal">
          ${s.stats.map((t) => `<div class="stat-ring"><b>${t.value}</b><div>${t.label}<span>${t.sub}</span></div></div>`).join("")}
        </div>
      </div>`,

    org: (s) => `
      ${head(s)}
      <div class="org-center reveal"><span>${s.center}</span></div>
      <div class="org-grid">
        ${s.groups.map((g) => `
          <div class="org-box reveal ${g.highlight ? "highlight" : ""}">
            <h5>${g.title}</h5>
            <ul>${list(g.items)}</ul>
          </div>`).join("")}
      </div>`,

    // 連結卡片：items 直接給，或 source:"forums" 取 SITE.forums + SITE.media
    links: (s) => {
      let items = s.items || [];
      if (s.source === "forums") {
        items = [
          ...SITE.forums.map((f) => ({ badge: f.year, title: f.title, href: f.href, linkText: "前往論壇專頁 →", external: true })),
          ...(SITE.media || []).map((m) => ({ badge: m.icon, title: m.title, href: m.href, linkText: m.linkText })),
        ];
      }
      return `
        ${head(s)}
        <div class="forum-row" style="--cols:${s.columns || 3}">
          ${items.map((i) => `
            <div class="forum-card reveal">
              <div class="yr">${i.badge}</div>
              <div class="ttl">${i.title}</div>
              <a ${attrs(i.href, i.external !== false)}>${i.linkText || "前往內容 →"}</a>
            </div>`).join("")}
        </div>`;
    },

    roadmap: (s) => `
      ${head(s)}
      <div class="roadmap reveal">
        ${s.items.map((i) => `
          <div class="rm-row">
            <div class="rm-label"><span class="dot"></span>${i.label}</div>
            <ul>${list(i.items)}</ul>
          </div>`).join("")}
      </div>`,

    plans: (s) => `
      <div class="section-head section-head--split reveal">
        <div>
          <span class="eyebrow">${s.eyebrow}</span>
          <h2>${s.title}</h2>
          ${s.desc ? `<p>${s.desc}</p>` : ""}
        </div>
        ${s.cta ? `<a class="btn-primary" ${attrs(s.cta.href, s.cta.external)}>${s.cta.label}</a>` : ""}
      </div>
      <div class="plan-grid">
        ${s.items.map((p) => `
          <div class="plan-card ${p.featured ? "featured" : ""} reveal">
            <div class="tier">${p.tier}</div>
            <h3>${p.title}</h3>
            <ul>${list(p.items)}</ul>
          </div>`).join("")}
      </div>`,
  };

  /* ---------- 共用：導覽列 ---------- */
  function renderNav() {
    const el = document.getElementById("site-nav");
    if (!el) return;
    const items = SITE.sections.filter((s) => s.nav);
    el.outerHTML = `
      <nav class="nav">
        <div class="wrap">
          <a class="nav-brand" ${attrs("#top")}><img src="${url(SITE.brand.logo)}" alt="${SITE.brand.alt}"></a>
          <button class="nav-toggle" aria-label="開啟選單" aria-expanded="false"><span></span><span></span><span></span></button>
          <ul class="nav-links">
            ${items.map((s) => `<li><a ${attrs("#" + s.id)} data-target="${s.id}">${s.nav}</a></li>`).join("")}
          </ul>
          <a class="nav-cta" ${attrs(SITE.navCta.href)}>${SITE.navCta.label}</a>
        </div>
      </nav>`;
  }

  /* ---------- 首頁：Hero ---------- */
  function renderHero() {
    const h = SITE.hero;
    return `
      <header class="hero" id="top">
        <div class="wrap">
          <div>
            <div class="hero-tag"><span class="dot"></span>${h.tag}</div>
            <h1>${h.title}</h1>
            <p class="lead">${h.lead}</p>
            <div class="hero-stats">
              ${h.stats.map((s) => `<div class="stat"><b>${s.value}</b><span>${s.label}</span></div>`).join("")}
            </div>
            <div class="hero-actions">
              ${h.actions.map((a) => `<a class="btn-${a.style}" ${attrs(a.href)}>${a.label}</a>`).join("")}
            </div>
            <div class="quick-row">
              ${h.quickLinks.map((q) => `<a class="quick-box" ${attrs(q.href)}><span class="qb-ic">${q.icon}</span><span>${q.label}</span></a>`).join("")}
            </div>
          </div>
          <div class="interlock-col">
            <div class="interlock-wrap">
              <img class="interlock" src="${url(h.image.src)}" alt="${h.image.alt}">
              <div class="interlock-card">${h.imageCaption}</div>
            </div>
            ${h.imageLink ? `<a class="interlock-card-link" ${attrs(h.imageLink.href)}>${h.imageLink.label}</a>` : ""}
          </div>
        </div>
      </header>`;
  }

  /* ---------- 首頁：所有區塊 ---------- */
  function renderMain() {
    const el = document.getElementById("site-main");
    if (!el) return;
    const sections = SITE.sections.map((s) => {
      const fn = R[s.type];
      if (!fn) { console.warn(`[app.js] 未知的區塊類型：${s.type}（id=${s.id}）`); return ""; }
      return `<section id="${s.id}" class="sec sec--${s.type}${s.tight ? " sec--tight" : ""}"><div class="wrap">${fn(s)}</div></section>`;
    });
    el.innerHTML = renderHero() + sections.join("");
  }

  /* ---------- 共用：頁尾 ---------- */
  function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;
    const f = SITE.footer;
    el.outerHTML = `
      <footer id="contact">
        <div class="wrap">
          <h3>${f.slogan}</h3>
          <div class="foot-grid">
            <div class="foot-col">
              <h5>聯絡秘書處</h5>
              ${f.contacts.map((m) => `<a href="mailto:${m}">${m}</a>`).join("")}
            </div>
          </div>
          <div class="foot-bottom">
            <span>${f.copyright}</span>
            <span>${f.note}</span>
          </div>
        </div>
      </footer>`;
  }

  /* ---------- 互動 ---------- */
  function initCaseFilter() {
    document.querySelectorAll(".filter-row").forEach((row) => {
      const grid = row.nextElementSibling;
      row.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-filter]");
        if (!btn) return;
        const f = btn.dataset.filter;
        row.querySelectorAll("[data-filter]").forEach((b) => b.classList.toggle("is-active", b === btn));
        grid.querySelectorAll(".case-card").forEach((c) => {
          c.hidden = !(f === "all" || c.dataset.cat === f);
        });
      });
    });
  }

  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((e) => io.observe(e));
  }

  function initNav() {
    const nav = document.querySelector(".nav");
    if (!nav) return;
    const toggle = nav.querySelector(".nav-toggle");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
    nav.querySelectorAll(".nav-links a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // 捲動時標示目前所在區塊
    if (!IS_HOME || !("IntersectionObserver" in window)) return;
    const links = nav.querySelectorAll("[data-target]");
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((l) => l.classList.toggle("active", l.dataset.target === en.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((l) => { const t = document.getElementById(l.dataset.target); if (t) spy.observe(t); });
  }

  /* ---------- 啟動 ---------- */
  if (SITE.meta && IS_HOME) document.title = SITE.meta.title;
  renderNav();
  renderMain();
  renderFooter();
  initNav();
  initCaseFilter();
  initReveal();
})();


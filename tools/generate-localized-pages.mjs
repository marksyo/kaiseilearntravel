import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("new-site");
const languages = ["ja", "en", "zh"];

const langMeta = {
  ja: { html: "ja", label: "日本語", code: "JA", company: "開誠文旅株式会社", consult: "無料相談", menu: "Menu", submit: "送信する" },
  en: { html: "en", label: "English", code: "EN", company: "Kaisei Travel Culture Co., Ltd.", consult: "Free Consultation", menu: "Menu", submit: "Send Inquiry" },
  zh: { html: "zh-Hans", label: "中文", code: "ZH", company: "开诚文旅株式会社", consult: "免费咨询", menu: "Menu", submit: "提交咨询" }
};

const nav = {
  ja: { home: "Home", about: "About", services: "Services", cases: "Case Studies", blog: "Blog", contact: "Contact" },
  en: { home: "Home", about: "About", services: "Services", cases: "Case Studies", blog: "Blog", contact: "Contact" },
  zh: { home: "首页", about: "公司概要", services: "服务", cases: "案例", blog: "洞察", contact: "联系" }
};

const footerCopy = {
  ja: {
    tagline: "宿泊・不動産・日本進出をつなぐパートナー",
    menuTitle: "メニュー",
    servicesTitle: "サービス情報"
  },
  en: {
    tagline: "Your partner for hospitality, real estate, and market entry in Japan.",
    menuTitle: "Menu",
    servicesTitle: "Services"
  },
  zh: {
    tagline: "连接住宿、不动产与日本市场进入的合作伙伴",
    menuTitle: "菜单",
    servicesTitle: "服务信息"
  }
};

const files = {
  home: "index.html",
  about: "about.html",
  services: "services.html",
  cases: "case-studies.html",
  blog: "blog.html",
  contact: "contact.html",
  learn: "learn.html"
};

const copy = {
  ja: {
    titleSuffix: "開誠文旅株式会社",
    description: "開誠文旅株式会社は外国人投資家、起業家、海外企業向けに、宿泊事業支援、不動産投資、日本市場進出を支援します。",
    homeTitle: "日本での生活と事業をサポート",
    homeLead: "開誠文旅は、日本で宿泊事業、不動産投資、市場進出に挑戦する外国人投資家、起業家、海外企業を実務面から支援します。",
    missionTitle: "日本で挑戦する人の基盤をつくる。",
    missionText: "実務、言語、現地運営をつなぎ、海外の人々が日本で事業を創り成長させるための実行支援を提供します。",
    servicesTitle: "3つの中核サービス",
    serviceLead: "開業準備、法人設立、不動産取得、運営改善、販路開拓まで、外国人顧客の日本事業に必要な実務を支援します。",
    whyTitle: "選ばれる理由",
    whyLead: "制度理解、言語、現場運営、信頼できる実務パートナーを一体で提供します。",
    ctaServices: "サービスを見る",
    ctaTitle: "宿泊・不動産・日本進出の相談を始める",
    aboutTitle: "会社概要",
    aboutLead: "開誠文旅は、海外の人々が日本で事業を創り、運営し、成長させるための実務型パートナーです。",
    vision: "日本で挑戦する人の基盤をつくる。",
    mission: "外国人投資家・起業家・企業の日本での事業構築を支援する。",
    values: ["Practical", "Reliable", "Bridge"],
    companyInfoTitle: "会社概要",
    companyInfo: [["会社名", "開誠文旅株式会社"], ["資本金", "800万円"], ["住所", "東京都荒川区東日暮里3-35-3"], ["代表取締役社長", "李 燕"], ["連絡先", "Webフォーム、SNSでお問い合わせください。"]],
    companyScopeTitle: "事業領域",
    companyScope: [["事業領域", "宿泊事業支援、不動産活用、日本市場進出支援"], ["対応言語", "日本語・中国語・英語"], ["タグライン", "Build and Grow in Japan"]],
    servicesHero: "宿泊・投資・市場参入を一体で支援",
    casesTitle: "ケーススタディ",
    casesLead: "宿泊立ち上げ、運営改善、中国企業の市場調査など、事業化に近い実務テーマを中心に支援します。",
    blogTitle: "Insights",
    blogLead: "宿泊運営、日本起業、不動産投資、中国企業進出、宿泊業DXに関する実務情報を発信します。",
    contactTitle: "お問い合わせ",
    contactLead: "宿泊、不動産、日本進出に関する初回相談を受け付けています。内容を確認後、担当者よりご連絡します。",
    learnTitle: "教育サービス",
    learnLead: "海外から来日するご家庭と学生に向けて、日本の教育環境、家庭教育、留学準備を実務面からサポートします。",
    learnIntroTitle: "Learn + Travel = Life Experience",
    learnIntro: "教育と旅行は、人の成長と視野を広げる大切な経験です。開誠文旅は、日本で生活するご家庭や日本へ留学する学生が安心して学び、成長できるよう支援します。",
    educationConsultTitle: "家庭教育の相談サービス",
    educationConsultText: "海外から来日したご家庭にとって、日本の教育制度や学校生活は分かりにくいことがあります。学校選び、受験準備、学習習慣、親子関係など、家庭の状況に合わせて相談を受け付けます。",
    educationConsultItems: ["日本の小学校・中学校・高校の仕組み", "受験準備と進学プロセス", "勉強が苦手な子どものサポート", "学校に行きたくない子どもの相談", "親子関係・家庭教育の相談"],
    studySupportTitle: "日本への留学を全面サポート",
    studySupportText: "日本で学びたい学生に向けて、留学目的の整理、進学プロセス、日本語学習、保護者との連携、来日後の見守りまで支援します。特に高校生の留学相談に対応します。",
    studySupportItems: ["留学目的と目標設定", "学校見学・進学相談", "日本語教育の準備", "保護者サポート", "留学生の生活見守り"],
    form: ["名前", "会社名", "メール", "国", "相談カテゴリ", "相談内容"],
    categories: ["宿泊", "不動産", "日本進出", "その他"]
  },
  en: {
    titleSuffix: "Kaisei Travel Culture Co., Ltd.",
    description: "Kaisei supports foreign investors, entrepreneurs, and overseas companies with hospitality operations, real estate investment, and Japan market entry.",
    homeTitle: "Supporting your life and business in Japan.",
    homeLead: "Kaisei provides practical support for foreign investors, entrepreneurs, and overseas companies entering Japan through hospitality, real estate, and market entry projects.",
    missionTitle: "Building the foundation for people taking on Japan.",
    missionText: "We connect practical execution, languages, and local operations so global clients can build and grow businesses in Japan.",
    servicesTitle: "Three Core Services",
    serviceLead: "From launch preparation and company setup to property acquisition, operations improvement, and sales channel development.",
    whyTitle: "Why Work With Us",
    whyLead: "We bring regulatory understanding, languages, local operations, and reliable execution into one practical support model.",
    ctaServices: "View Services",
    ctaTitle: "Start your hospitality, real estate, or market entry project",
    aboutTitle: "Company",
    aboutLead: "Kaisei is a practical partner for global clients creating, operating, and growing businesses in Japan.",
    vision: "Build the foundation for people taking on Japan.",
    mission: "Support foreign investors, entrepreneurs, and companies in building businesses in Japan.",
    values: ["Practical", "Reliable", "Bridge"],
    companyInfoTitle: "Company Profile",
    companyInfo: [["Company", "Kaisei Travel Culture Co., Ltd."], ["Capital", "JPY 8,000,000"], ["Address", "3-35-3 Higashinippori, Arakawa-ku, Tokyo"], ["Representative Director", "Li Yan"], ["Contact", "Please contact us via the web form or SNS."]],
    companyScopeTitle: "Business Scope",
    companyScope: [["Business", "Hospitality support, real estate utilization, Japan market entry"], ["Languages", "Japanese, Chinese, English"], ["Tagline", "Build and Grow in Japan"]],
    servicesHero: "Integrated support for hospitality, investment, and market entry",
    casesTitle: "Case Studies",
    casesLead: "Practical projects around accommodation launch, Tokyo operations improvement, and Japan market research for Chinese companies.",
    blogTitle: "Insights",
    blogLead: "Practical articles on hospitality operations, starting a business in Japan, property investment, China-to-Japan entry, and hospitality DX.",
    contactTitle: "Contact",
    contactLead: "Tell us about your hospitality, real estate, or Japan market entry plans. Our team will follow up after reviewing your inquiry.",
    learnTitle: "Education Services",
    learnLead: "Practical support for families and students coming to Japan, covering education systems, family education, and study-abroad preparation.",
    learnIntroTitle: "Learn + Travel = Life Experience",
    learnIntro: "Education and travel expand a person's growth and perspective. Kaisei helps families living in Japan and students studying in Japan learn and grow with confidence.",
    educationConsultTitle: "Family Education Consultation",
    educationConsultText: "For families coming from overseas, Japan's school system and daily school life can be difficult to understand. We provide consultation on school choices, entrance exams, study habits, and family concerns.",
    educationConsultItems: ["Japanese elementary, junior high, and high school systems", "Entrance exam preparation and school pathways", "Support for children who struggle with studying", "Consultation for children reluctant to attend school", "Parent-child relationship and family education support"],
    studySupportTitle: "Study in Japan Support",
    studySupportText: "For students who want to study in Japan, we support goal setting, school pathways, Japanese-language preparation, parent communication, and daily-life monitoring after arrival. We especially support high school study-abroad planning.",
    studySupportItems: ["Study-abroad goals and planning", "School visits and pathway consultation", "Japanese-language preparation", "Parent support", "Student life monitoring"],
    form: ["Name", "Company", "Email", "Country", "Category", "Message"],
    categories: ["Hospitality", "Real Estate", "Japan Market Entry", "Other"]
  },
  zh: {
    titleSuffix: "开诚文旅株式会社",
    description: "开诚文旅面向外国投资者、创业者及海外企业，提供住宿住宿事业、不动产投资及日本市场进入支援。",
    homeTitle: "支持您在日本的生活与事业。",
    homeLead: "开诚文旅为希望在日本开展住宿事业、不动产投资和市场进入的外国投资者、创业者及海外企业提供实务支持。",
    missionTitle: "为在日本挑战的人打造事业基础。",
    missionText: "我们连接实务执行、语言沟通与本地运营，帮助海外客户在日本创建并发展事业。",
    servicesTitle: "三大核心服务",
    serviceLead: "从开业准备、法人设立、不动产取得，到运营改善及销售渠道开拓，提供实务型支持。",
    whyTitle: "我们的优势",
    whyLead: "把制度理解、语言沟通、现场运营和可信赖的执行支持整合在一起。",
    ctaServices: "查看服务",
    ctaTitle: "开始咨询住宿、不动产与日本市场进入",
    aboutTitle: "公司概要",
    aboutLead: "开诚文旅是帮助海外客户在日本创建、运营并发展事业的实务型合作伙伴。",
    vision: "为在日本挑战的人打造事业基础。",
    mission: "支持外国投资者、创业者和企业在日本构建事业。",
    values: ["Practical", "Reliable", "Bridge"],
    companyInfoTitle: "公司概要",
    companyInfo: [["公司名称", "开诚文旅株式会社"], ["注册资本", "800万日元"], ["地址", "东京都荒川区东日暮里3-35-3"], ["代表董事社长", "李 燕"], ["联系方式", "请通过网页表单或SNS联系我们。"]],
    companyScopeTitle: "业务领域",
    companyScope: [["业务领域", "住宿事业支援、不动产活用、日本市场进入支援"], ["对应语言", "日语・中文・英语"], ["标语", "Build and Grow in Japan"]],
    servicesHero: "住宿、投资与市场进入的一体化支援",
    casesTitle: "案例研究",
    casesLead: "围绕住宿启动、东京住宿运营改善、中国企业日本市场调研等实际业务主题提供支持。",
    blogTitle: "洞察",
    blogLead: "发布住宿运营、日本创业、不动产投资、中国企业赴日、住宿业DX等实务信息。",
    contactTitle: "联系我们",
    contactLead: "欢迎咨询住宿、不动产、日本市场进入相关事项。确认内容后，我们将尽快联系您。",
    learnTitle: "教育服务",
    learnLead: "面向来日家庭与学生，提供日本教育环境、家庭教育和留学准备相关的实务支持。",
    learnIntroTitle: "Learn + Travel = Life Experience",
    learnIntro: "教育与旅行能够拓展人的成长和视野。开诚文旅帮助在日本生活的家庭和赴日留学的学生安心学习、成长。",
    educationConsultTitle: "家庭教育咨询服务",
    educationConsultText: "对于海外来日家庭，日本的教育制度和学校生活可能不容易理解。我们根据家庭情况，提供学校选择、升学考试、学习习惯和亲子关系等咨询。",
    educationConsultItems: ["日本小学、初中和高中的制度", "升学考试准备与升学流程", "不喜欢学习的孩子支持", "不愿上学孩子的咨询", "亲子关系与家庭教育咨询"],
    studySupportTitle: "赴日留学全面支持",
    studySupportText: "面向希望在日本学习的学生，支持留学目标整理、升学流程、日语学习、家长沟通以及来日后的生活关注。尤其对应高中生留学咨询。",
    studySupportItems: ["留学目标与规划", "学校参观与升学咨询", "日语学习准备", "家长支持", "留学生生活关注"],
    form: ["姓名", "公司名", "邮箱", "国家/地区", "咨询类别", "咨询内容"],
    categories: ["住宿", "不动产", "日本市场进入", "其他"]
  }
};

const serviceCards = {
  ja: [
    ["Hospitality", "宿泊事業支援", "宿泊開業、運営代行、OTA設定、清掃体制、宿泊者対応まで一体で支援します。", ["宿泊運営 / 運営代行", "宿泊立ち上げ", "旅館運営支援"]],
    ["Investment", "外国人向け投資支援", "日本法人設立、不動産購入、宿泊投資、許認可取得を実務ベースで支援します。", ["日本法人設立", "不動産購入支援", "許認可取得支援"]],
    ["Market Entry", "中国企業向け日本進出支援", "市場調査、日本語化、実証導入、代理店開拓、顧客紹介まで伴走します。", ["市場調査 / 販路開拓", "パートナー探索", "日本語対応支援"]]
  ],
  en: [
    ["Hospitality", "Hospitality and Accommodation Support", "Integrated support for launch, daily operations, OTA setup, cleaning systems, and guest communication.", ["Operations / outsourcing", "Accommodation launch", "Ryokan support"]],
    ["Investment", "Investment Support for Foreign Clients", "Practical support for company setup, property acquisition, accommodation investment, and permits.", ["Company setup", "Property acquisition", "Permit support"]],
    ["Market Entry", "Japan Entry for Chinese Companies", "Market research, localization, pilot introduction, partner development, and customer introductions.", ["Market research", "Partner search", "Japanese-language support"]]
  ],
  zh: [
    ["Hospitality", "住宿事业支援", "从住宿开业、运营代行、OTA设置，到清扫体系和住客沟通，提供一体化支持。", ["住宿运营 / 代运营", "住宿启动", "旅馆运营支援"]],
    ["Investment", "面向外国人的投资支援", "围绕日本法人设立、不动产购买、住宿投资和许可手续提供实务支持。", ["日本法人设立", "不动产购买支援", "许可手续支援"]],
    ["Market Entry", "中国企业日本市场进入支援", "支持市场调研、本地化、试点导入、代理商开拓和客户介绍。", ["市场调研 / 渠道开拓", "合作伙伴探索", "日语对应支援"]]
  ]
};

const whyItems = {
  ja: [["実運営経験", "東京での宿泊運営経験をもとに、計画だけでなく現場実務まで支援します。"], ["中国語対応", "中国語・日本語・英語で、海外投資家と日本側実務者の間をつなぎます。"], ["IT活用", "PMS、スマートロック、運営DXなど、宿泊事業の効率化を支援します。"], ["ワンストップ", "企画、設立、不動産、許認可、運営、改善まで一貫して対応します。"]],
  en: [["Operating Experience", "We support both planning and local operations based on hands-on accommodation experience in Tokyo."], ["Chinese Support", "We bridge overseas investors and Japanese operators in Chinese, Japanese, and English."], ["Technology Use", "We help improve operations with PMS, smart locks, and hospitality DX tools."], ["One Stop", "We cover planning, setup, property, permits, operations, and improvement."]],
  zh: [["实际运营经验", "基于东京住宿运营经验，不只停留在计划，也支持现场实务。"], ["中文对应", "以中文、日语、英语连接海外投资者与日本当地实务。"], ["IT活用", "通过PMS、智能门锁和运营DX提升住宿事业效率。"], ["一站式支持", "从企划、设立、不动产、许可、运营到改善，一体化对应。"]]
};

const cases = {
  ja: [["Hospitality", "中国投資家向け宿泊立ち上げ支援", "物件活用、許認可、OTA初期設定、清掃・宿泊者対応フローの整備を支援。"], ["Operations", "東京宿泊運営改善", "レビュー改善、価格調整、清掃品質、問い合わせ対応の見直しで収益性を改善。"], ["Market Entry", "中国メーカーの日本市場調査", "宿泊施設向け設備の競合調査、販売代理店候補、実証導入先の探索を支援。"]],
  en: [["Hospitality", "Accommodation Launch for a Chinese Investor", "Support for property use, permits, OTA setup, cleaning operations, and guest communication."], ["Operations", "Tokyo Accommodation Operations Improvement", "Improved profitability through review management, pricing, cleaning quality, and inquiry workflows."], ["Market Entry", "Japan Market Research for a Chinese Manufacturer", "Research on competitors, distributor candidates, and pilot sites for hospitality equipment."]],
  zh: [["Hospitality", "中国投资者住宿启动支援", "支持物业活用、许可手续、OTA初期设置、清扫与住客沟通流程。"], ["Operations", "东京住宿运营改善", "通过评价改善、价格调整、清扫质量和咨询对应流程提升收益性。"], ["Market Entry", "中国厂商日本市场调研", "支持住宿设施设备的竞品调研、代理商候选和试点导入场景探索。"]]
};

const posts = {
  ja: [["Accommodation", "外国人が日本で宿泊投資を始める前に確認すべきこと", "用途地域、管理体制、許認可、収支計画を初期段階で整理することが重要です。"], ["Company Setup", "日本法人設立と宿泊事業の進め方", "法人設立、不動産契約、許認可、運営準備の順序を実務目線で解説します。"], ["DX", "スマートロック・PMS導入で宿泊運営を効率化する", "宿泊者対応、鍵管理、清掃連携を効率化し、運営品質を安定させます。"]],
  en: [["Accommodation", "What Foreign Investors Should Check Before Starting Accommodation", "Zoning, management structure, permits, and revenue planning should be reviewed early."], ["Company Setup", "How to Set Up a Japanese Company for Hospitality", "A practical sequence for company setup, property contracts, permits, and operations preparation."], ["DX", "Using Smart Locks and PMS to Improve Accommodation Operations", "Improve guest handling, key management, cleaning coordination, and operating quality."]],
  zh: [["Accommodation", "外国人在日本开始住宿投资前应确认的事项", "用途地区、管理体制、许可手续和收支计划需要在初期整理清楚。"], ["Company Setup", "日本法人设立与住宿事业推进方法", "从实务角度说明法人设立、不动产合同、许可手续和运营准备的顺序。"], ["DX", "通过智能门锁和PMS提升住宿运营效率", "提升住客对应、钥匙管理、清扫协作和运营品质。"]]
};

function esc(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function languageSelect(lang, pageKey) {
  const options = languages.map((code) => {
    const selected = code === lang ? " selected" : "";
    return `<option value="../${code}/${files[pageKey]}"${selected}>${langMeta[code].label}</option>`;
  }).join("");
  return `<label class="language-select"><span class="sr-only">Language</span><select data-language-select aria-label="Language">${options}</select></label>`;
}

function header(lang, active) {
  const n = nav[lang];
  const links = [
    ["home", n.home],
    ["services", n.services],
    ["cases", n.cases],
    ["blog", n.blog],
    ["about", n.about],
    ["contact", n.contact]
  ];
  const navLinks = links.map(([key, label]) => `<a class="nav-link${active === key ? " is-active" : ""}" href="${files[key]}">${label}</a>`).join("");
  return `<header class="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
    <a class="flex items-center gap-3" href="index.html" aria-label="Kaisei Home"><img class="header-logo" src="../assets/img/logo/s_logo.jpg" alt="${esc(langMeta[lang].company)}"></a>
    <nav class="hidden items-center gap-7 lg:flex" aria-label="Main navigation">${navLinks}</nav>
    <div class="hidden items-center gap-3 lg:flex">${languageSelect(lang, active)}<a class="btn-primary" href="contact.html">${langMeta[lang].consult}</a></div>
    <button class="rounded-md border border-slate-300 px-3 py-2 text-sm font-bold text-slate-700 lg:hidden" type="button" data-menu-button aria-expanded="false">${langMeta[lang].menu}</button>
  </div>
  <div class="mobile-panel border-t border-slate-200 bg-white px-5 py-4 lg:hidden" data-mobile-panel>
    <nav class="grid gap-3" aria-label="Mobile navigation">${navLinks}</nav>
    <div class="mt-4">${languageSelect(lang, active)}</div>
  </div>
</header>`;
}

function footer(lang) {
  const f = footerCopy[lang];
  const n = nav[lang];
  const menuLinks = [
    ["home", n.home],
    ["services", n.services],
    ["cases", n.cases],
    ["blog", n.blog],
    ["about", n.about],
    ["contact", n.contact],
    ["learn", copy[lang].learnTitle]
  ].map(([key, label]) => `<li><a href="${files[key]}">${label}</a></li>`).join("");
  const serviceLinks = serviceCards[lang].map(([label, title]) => `<li><a href="services.html"><span>${label}</span>${title}</a></li>`).join("");
  return `<footer class="site-footer">
  <div class="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.15fr_0.85fr_1fr] lg:px-8">
    <div>
      <img class="footer-logo" src="../assets/img/logo/big_logo.jpg" alt="${esc(langMeta[lang].company)}">
      <p class="mt-5 max-w-sm text-sm leading-7 text-slate-300">${f.tagline}</p>
      <p class="mt-4 text-sm font-semibold text-amber-300">Build and Grow in Japan</p>
    </div>
    <div>
      <h2>${f.menuTitle}</h2>
      <ul class="footer-links">${menuLinks}</ul>
    </div>
    <div>
      <h2>${f.servicesTitle}</h2>
      <ul class="footer-service-links">${serviceLinks}</ul>
    </div>
  </div>
  <div class="border-t border-white/10">
    <div class="mx-auto max-w-7xl px-5 py-5 text-sm text-slate-400 lg:px-8">© 2026 Kaisei Travel Culture Co., Ltd. All rights reserved.</div>
  </div>
</footer>`;
}

function shell(lang, pageKey, title, description, body) {
  return `<!doctype html>
<html lang="${langMeta[lang].html}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)} | ${esc(copy[lang].titleSuffix)}</title>
  <meta name="description" content="${esc(description || copy[lang].description)}">
  <link rel="icon" href="../assets/img/favicon-32x32.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Noto+Sans+JP:wght@400;500;700;800&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="../assets/css/styles.css">
</head>
<body>
  <div class="site-shell">
    ${header(lang, pageKey)}
    <main class="flex-1">${body}</main>
    ${footer(lang)}
  </div>
  <script src="../assets/js/main.js"></script>
</body>
</html>
`;
}

function home(lang) {
  const c = copy[lang];
  const cards = serviceCards[lang].map(([label, title, text, items]) => `<article class="card p-7"><p class="text-sm font-extrabold text-blue-800">${label}</p><h3 class="mt-3 text-2xl font-extrabold text-slate-900">${title}</h3><p class="mt-4 leading-7 text-slate-600">${text}</p><ul class="mt-6 grid gap-2 text-sm font-semibold text-slate-700">${items.map((item) => `<li>${item}</li>`).join("")}</ul></article>`).join("");
  const whys = whyItems[lang].map(([title, text]) => `<div class="card p-6"><div class="stat"><h3 class="text-xl font-extrabold text-slate-900">${title}</h3><p class="mt-3 leading-7 text-slate-600">${text}</p></div></div>`).join("");
  return shell(lang, "home", "Build and Grow in Japan", c.description, `
<section class="hero-bg">
  <div class="mx-auto grid min-h-[680px] max-w-7xl items-center px-5 py-20 lg:px-8">
    <div class="max-w-3xl text-white">
      <p class="mb-5 text-sm font-extrabold uppercase tracking-[0.18em] text-amber-300">Build and Grow in Japan</p>
      <h1 class="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">${c.homeTitle}</h1>
      <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-100">${c.homeLead}</p>
      <div class="mt-9 flex flex-col gap-3 sm:flex-row"><a class="btn-primary" href="contact.html">${langMeta[lang].consult}</a><a class="btn-secondary" href="services.html">${c.ctaServices}</a></div>
    </div>
  </div>
</section>
<section class="bg-white py-20"><div class="mx-auto max-w-7xl px-5 lg:px-8"><div class="max-w-2xl"><p class="section-label">Services</p><h2 class="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">${c.servicesTitle}</h2><div class="gold-line mt-5"></div></div><div class="mt-12 grid gap-6 lg:grid-cols-3">${cards}</div></div></section>
<section class="py-20"><div class="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"><div><p class="section-label">Why Us</p><h2 class="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">${c.whyTitle}</h2><p class="mt-5 leading-8 text-slate-600">${c.whyLead}</p><div class="mt-8 image-card"><img src="../assets/img/hospitality-japan.jpg" alt=""></div></div><div class="grid gap-5 sm:grid-cols-2">${whys}</div></div></section>
<section class="bg-slate-900 py-16 text-white"><div class="mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div><p class="text-sm font-extrabold uppercase tracking-[0.18em] text-amber-300">Start in Japan</p><h2 class="mt-3 text-3xl font-extrabold">${c.ctaTitle}</h2></div><a class="btn-primary" href="contact.html">${langMeta[lang].consult}</a></div></section>`);
}

function about(lang) {
  const c = copy[lang];
  const info = c.companyInfo.map(([k, v]) => `<div class="grid gap-2 border-b border-slate-200 py-5 sm:grid-cols-[180px_1fr]"><dt class="font-extrabold text-slate-900">${k}</dt><dd class="text-slate-600">${v}</dd></div>`).join("");
  const scope = c.companyScope.map(([k, v]) => `<div class="grid gap-2 border-b border-slate-200 py-5 sm:grid-cols-[180px_1fr]"><dt class="font-extrabold text-slate-900">${k}</dt><dd class="text-slate-600">${v}</dd></div>`).join("");
  const values = c.values.map((value) => `<div class="card p-6"><h3 class="text-xl font-extrabold text-slate-900">${value}</h3></div>`).join("");
  return shell(lang, "about", c.aboutTitle, c.aboutLead, `
<section class="page-hero py-24 text-white" style="--page-image: url('../assets/img/hero-lounge.jpg')"><div class="mx-auto max-w-7xl px-5 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-[0.18em] text-amber-300">About</p><h1 class="mt-4 text-4xl font-extrabold sm:text-5xl">${c.aboutTitle}</h1><p class="mt-6 max-w-3xl text-lg leading-8 text-slate-100">${c.aboutLead}</p></div></section>
<section class="bg-white py-20"><div class="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"><div><p class="section-label">Mission / Vision</p><h2 class="mt-3 text-3xl font-extrabold text-slate-900">${c.vision}</h2><p class="mt-5 leading-8 text-slate-600">${c.mission}</p><div class="mt-8 grid gap-4 sm:grid-cols-3">${values}</div></div><div class="grid gap-6"><section class="card p-8"><h2 class="text-2xl font-extrabold text-slate-900">${c.companyInfoTitle}</h2><dl class="mt-4">${info}</dl></section><section class="card p-8"><h2 class="text-2xl font-extrabold text-slate-900">${c.companyScopeTitle}</h2><dl class="mt-4">${scope}</dl></section></div></div></section>`);
}

function services(lang) {
  const c = copy[lang];
  const rows = serviceCards[lang].map(([label, title, text, items], index) => {
    const image = index === 0 ? "hospitality-japan.jpg" : index === 1 ? "investment-property.jpg" : "market-entry.jpg";
    const textBlock = `<div class="card p-8"><p class="section-label">${label}</p><h2 class="mt-3 text-3xl font-extrabold text-slate-900">${title}</h2><p class="mt-4 leading-8 text-slate-600">${text}</p><div class="mt-6 grid gap-3 sm:grid-cols-2">${items.concat(index === 2 ? ["Sales material preparation", "Pilot support"] : ["Business support", "Specialist coordination"]).map((item) => `<span>${item}</span>`).join("")}</div></div>`;
    const imageBlock = `<div class="image-card"><img src="../assets/img/${image}" alt=""></div>`;
    return `<article class="grid gap-8 lg:grid-cols-[${index === 1 ? "1.15fr_0.85fr" : "0.85fr_1.15fr"}] lg:items-center">${index === 1 ? textBlock + imageBlock : imageBlock + textBlock}</article>`;
  }).join("");
  return shell(lang, "services", nav[lang].services, c.serviceLead, `<section class="page-hero py-24 text-white" style="--page-image: url('../assets/img/hero-lounge.jpg')"><div class="mx-auto max-w-7xl px-5 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-[0.18em] text-amber-300">Services</p><h1 class="mt-4 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">${c.servicesHero}</h1><p class="mt-6 max-w-3xl text-lg leading-8 text-slate-100">${c.serviceLead}</p></div></section><section class="bg-white py-20"><div class="mx-auto grid max-w-7xl gap-8 px-5 lg:px-8">${rows}</div></section>`);
}

function caseStudies(lang) {
  const c = copy[lang];
  const imgs = ["hospitality-japan.jpg", "hero-residence.jpg", "market-entry.jpg"];
  const cards = cases[lang].map(([label, title, text], i) => `<article class="card overflow-hidden"><div class="image-card rounded-none"><img src="../assets/img/${imgs[i]}" alt=""></div><div class="p-7"><p class="section-label">${label}</p><h2 class="mt-3 text-2xl font-extrabold text-slate-900">${title}</h2><p class="mt-4 leading-7 text-slate-600">${text}</p></div></article>`).join("");
  return shell(lang, "cases", c.casesTitle, c.casesLead, `<section class="page-hero py-24 text-white" style="--page-image: url('../assets/img/operations.jpg')"><div class="mx-auto max-w-7xl px-5 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-[0.18em] text-amber-300">Case Studies</p><h1 class="mt-4 text-4xl font-extrabold sm:text-5xl">${c.casesTitle}</h1><p class="mt-6 max-w-3xl text-lg leading-8 text-slate-100">${c.casesLead}</p></div></section><section class="bg-white py-20"><div class="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-3 lg:px-8">${cards}</div></section>`);
}

function blog(lang) {
  const c = copy[lang];
  const tags = c.categories.concat(["DX"]).map((tag) => `<span class="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">${tag}</span>`).join("");
  const cards = posts[lang].map(([label, title, text]) => `<article class="card p-7"><p class="section-label">${label}</p><h2 class="mt-3 text-2xl font-extrabold text-slate-900">${title}</h2><p class="mt-4 leading-7 text-slate-600">${text}</p></article>`).join("");
  return shell(lang, "blog", c.blogTitle, c.blogLead, `<section class="bg-slate-900 py-24 text-white"><div class="mx-auto max-w-7xl px-5 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-[0.18em] text-amber-300">Insights</p><h1 class="mt-4 text-4xl font-extrabold sm:text-5xl">${c.blogTitle}</h1><p class="mt-6 max-w-3xl text-lg leading-8 text-slate-100">${c.blogLead}</p></div></section><section class="py-20"><div class="mx-auto max-w-7xl px-5 lg:px-8"><div class="flex flex-wrap gap-3">${tags}</div><div class="mt-10 grid gap-6 lg:grid-cols-3">${cards}</div></div></section>`);
}

function contact(lang) {
  const c = copy[lang];
  const options = c.categories.map((item) => `<option>${item}</option>`).join("");
  return shell(lang, "contact", c.contactTitle, c.contactLead, `<section class="page-hero py-24 text-white" style="--page-image: url('../assets/img/contact.jpg')"><div class="mx-auto max-w-7xl px-5 lg:px-8"><p class="text-sm font-extrabold uppercase tracking-[0.18em] text-amber-300">Contact</p><h1 class="mt-4 text-4xl font-extrabold sm:text-5xl">${c.contactTitle}</h1><p class="mt-6 max-w-3xl text-lg leading-8 text-slate-100">${c.contactLead}</p></div></section><section class="bg-white py-20"><div class="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"><div><p class="section-label">Consultation</p><h2 class="mt-3 text-3xl font-extrabold text-slate-900">${c.form[4]}</h2><div class="gold-line mt-5"></div><div class="mt-8 grid gap-4">${c.categories.slice(0, 3).map((item) => `<div class="stat"><h3 class="font-extrabold text-slate-900">${item}</h3></div>`).join("")}</div></div><form class="card grid gap-5 p-7" action="#" method="post"><div class="grid gap-5 sm:grid-cols-2"><label class="grid gap-2 text-sm font-bold text-slate-700">${c.form[0]}<input class="form-field" name="name" autocomplete="name" required></label><label class="grid gap-2 text-sm font-bold text-slate-700">${c.form[1]}<input class="form-field" name="company" autocomplete="organization"></label></div><div class="grid gap-5 sm:grid-cols-2"><label class="grid gap-2 text-sm font-bold text-slate-700">${c.form[2]}<input class="form-field" type="email" name="email" autocomplete="email" required></label><label class="grid gap-2 text-sm font-bold text-slate-700">${c.form[3]}<input class="form-field" name="country" autocomplete="country-name"></label></div><label class="grid gap-2 text-sm font-bold text-slate-700">${c.form[4]}<select class="form-field" name="category">${options}</select></label><label class="grid gap-2 text-sm font-bold text-slate-700">${c.form[5]}<textarea class="form-field min-h-36" name="message" required></textarea></label><button class="btn-primary w-full sm:w-auto" type="submit">${langMeta[lang].submit}</button></form></div></section>`);
}

function learn(lang) {
  const c = copy[lang];
  const consultItems = c.educationConsultItems.map((item) => `<li>${item}</li>`).join("");
  const studyItems = c.studySupportItems.map((item) => `<li>${item}</li>`).join("");
  return shell(lang, "learn", c.learnTitle, c.learnLead, `
<section class="page-hero py-24 text-white" style="--page-image: url('../assets/img/hero-lounge.jpg')">
  <div class="mx-auto max-w-7xl px-5 lg:px-8">
    <p class="text-sm font-extrabold uppercase tracking-[0.18em] text-amber-300">Learn + Travel</p>
    <h1 class="mt-4 text-4xl font-extrabold sm:text-5xl">${c.learnTitle}</h1>
    <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-100">${c.learnLead}</p>
  </div>
</section>
<section class="bg-white py-20">
  <div class="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
    <div>
      <p class="section-label">Education</p>
      <h2 class="mt-3 text-3xl font-extrabold text-slate-900">${c.learnIntroTitle}</h2>
      <p class="mt-5 leading-8 text-slate-600">${c.learnIntro}</p>
      <div class="mt-8 image-card"><img src="../assets/img/hospitality-japan.jpg" alt=""></div>
    </div>
    <div class="grid gap-6">
      <article class="card p-8">
        <p class="section-label">Family Education</p>
        <h2 class="mt-3 text-2xl font-extrabold text-slate-900">${c.educationConsultTitle}</h2>
        <p class="mt-4 leading-8 text-slate-600">${c.educationConsultText}</p>
        <ul class="mt-6 grid gap-3 text-sm font-semibold text-slate-700">${consultItems}</ul>
      </article>
      <article class="card p-8">
        <p class="section-label">Study in Japan</p>
        <h2 class="mt-3 text-2xl font-extrabold text-slate-900">${c.studySupportTitle}</h2>
        <p class="mt-4 leading-8 text-slate-600">${c.studySupportText}</p>
        <ul class="mt-6 grid gap-3 text-sm font-semibold text-slate-700">${studyItems}</ul>
      </article>
    </div>
  </div>
</section>
<section class="bg-slate-900 py-16 text-white">
  <div class="mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
    <div>
      <p class="text-sm font-extrabold uppercase tracking-[0.18em] text-amber-300">Learn + Travel = Grow</p>
      <h2 class="mt-3 text-3xl font-extrabold">${c.contactTitle}</h2>
    </div>
    <a class="btn-primary" href="contact.html">${langMeta[lang].consult}</a>
  </div>
</section>`);
}

const renderers = { home, about, services, cases: caseStudies, blog, contact, learn };

await Promise.all(languages.map((lang) => mkdir(path.join(root, lang), { recursive: true })));
for (const lang of languages) {
  for (const pageKey of Object.keys(files)) {
    await writeFile(path.join(root, lang, files[pageKey]), renderers[pageKey](lang), "utf8");
  }
}

await writeFile(path.join(root, "index.html"), `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="refresh" content="0; url=ja/index.html">
  <title>Kaisei Travel Culture Co., Ltd.</title>
  <link rel="canonical" href="ja/index.html">
</head>
<body>
  <p><a href="ja/index.html">Kaisei Travel Culture Co., Ltd.</a></p>
</body>
</html>
`, "utf8");

for (const [pageKey, fileName] of Object.entries(files)) {
  if (pageKey === "home") continue;
  await writeFile(path.join(root, fileName), `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="refresh" content="0; url=ja/${fileName}">
  <title>Kaisei Travel Culture Co., Ltd.</title>
  <link rel="canonical" href="ja/${fileName}">
</head>
<body>
  <p><a href="ja/${fileName}">Kaisei Travel Culture Co., Ltd.</a></p>
</body>
</html>
`, "utf8");
}

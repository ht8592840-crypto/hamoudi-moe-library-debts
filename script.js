const translations = {
  ar: {
    nav_home: 'الرئيسية',
    nav_about: 'من نحن',
    nav_services: 'الخدمات',
    nav_apps: 'التطبيقات',
    nav_security: 'الأمان',
    nav_updates: 'التحديثات',
    nav_faq: 'الأسئلة',
    nav_contact: 'تواصل',
    download_now: 'تحميل التطبيق الآن (APK)',
    browse_apps: 'استعراض التطبيقات',
    hero_badge: 'منصة تطبيقات آمنة ومهيأة للنجاح',
    hero_title: 'ننشئ تطبيقات عملية، موثوقة، وسريعة… وموجهة لتلبية احتياجاتك اليومية.',
    hero_text: 'موقع حمودي مو ابتكار هو منصة مركزية لعرض تطبيقاتنا، مع تصميم فاخر، أمان عالي، وتحديثات مستمرة لضمان تجربة تحميل موثوقة وآمنة للمستخدمين.',
    stat_security: 'أمان',
    stat_speed: 'أداء سريع',
    stat_support: 'دعم مستمر',
    trust_safe: 'آمن 100% وخالٍ من الفيروسات',
    trust_private: 'حفظ البيانات محلياً بدون خوادم خارجية',
    trust_fast: 'سريع وخفيف الأداء',
    apps_badge: 'التطبيقات',
    apps_title: 'منصة متعددة التطبيقات',
    updates_badge: 'نظام التحديثات',
    updates_title: 'فحص الإصدار والتحديثات الآمنة',
    current_version: 'الإصدار الحالي',
    update_now: 'تحديث الآن',
    check_updates: 'فحص التحديثات',
    checking_updates: 'جاري فحص التحديثات...',
    features_badge: 'الميزات',
    features_title: 'تصميم متميز يخدم تجربة المستخدم وتحقيق الثقة',
    install_badge: 'دليل سريع',
    install_title: 'طريقة تثبيت تطبيق APK على هاتف الأندرويد',
    faq_badge: 'الأسئلة الشائعة',
    faq_title: 'معلومات مهمة للمستخدمين',
    about_title: 'من نحن',
    services_title: 'الخدمات',
    contact_title: 'تواصل معنا',
    premium_brand: 'حمودي مو ابتكار',
    premium_intro: 'نصنع حلولاً رقمية عملية، آمنة، وسريعة تتماشى مع احتياجات الأعمال ومشاريعك.'
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_apps: 'Apps',
    nav_security: 'Security',
    nav_updates: 'Updates',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    download_now: 'Download App Now (APK)',
    browse_apps: 'Browse Apps',
    hero_badge: 'Secure app platform built for growth',
    hero_title: 'We build practical, reliable, and fast apps that fit your daily needs.',
    hero_text: 'Hamoudi Mo Ibtikar is a central platform for showcasing our apps with premium design, strong privacy, and continuous updates for a safe download experience.',
    stat_security: 'Security',
    stat_speed: 'Fast',
    stat_support: 'Support',
    trust_safe: '100% safe and virus-free',
    trust_private: 'Data stored locally without external servers',
    trust_fast: 'Fast and lightweight',
    apps_badge: 'Apps',
    apps_title: 'Multi-App Platform',
    updates_badge: 'Update System',
    updates_title: 'Version Check & Safe Updates',
    current_version: 'Current Version',
    update_now: 'Update Now',
    check_updates: 'Check Updates',
    checking_updates: 'Checking for updates...',
    features_badge: 'Features',
    features_title: 'Premium design that builds trust and user confidence',
    install_badge: 'Quick Guide',
    install_title: 'How to install an APK on Android',
    faq_badge: 'FAQ',
    faq_title: 'Important information for users',
    about_title: 'About Us',
    services_title: 'Services',
    contact_title: 'Contact Us',
    premium_brand: 'Hamoudi Mo Ibtikar',
    premium_intro: 'We create practical, secure, fast digital solutions that fit your business and personal projects.'
  }
};

const appData = [
  {
    name: 'دفتر ديون المكتبة',
    icon: '📚',
    version: '1.0.0',
    description: 'تطبيق عملي لإدارة ديون الزبائن، متابعة المدفوعات، وإنشاء تقارير مبسطة وآمنة.',
    downloadUrl: 'https://ht8592840-crypto.github.io/hamoudi-moe-library-debts/app-release.apk',
    status: 'مستقر',
    badge: 'مميز'
  },
  {
    name: 'تطبيق جديد',
    icon: '🚀',
    version: 'قريباً',
    description: 'تطبيق قيد التطوير سيتم الإعلان عنه قريباً في هذه المنصة الاحترافية.',
    downloadUrl: '#',
    status: 'قيد التطوير',
    badge: 'قريباً'
  },
  {
    name: 'منصة الخدمات',
    icon: '🧩',
    version: 'قريباً',
    description: 'حل جديد وخفيف لمتابعة الخدمات والطلبات والمشاريع المصغرة في بيئة احترافية.',
    downloadUrl: '#',
    status: 'قيد التخطيط',
    badge: 'جديد'
  }
];

const appGrid = document.getElementById('appGrid');

function renderAppCards() {
  if (!appGrid) return;

  appGrid.innerHTML = appData
    .map(
      (app) => `
        <article class="app-card">
          <div class="app-icon">${app.icon}</div>
          <div class="app-header">
            <h3>${app.name}</h3>
            <span class="version-pill">${app.version}</span>
          </div>
          <p>${app.description}</p>
          <div class="card-footer">
            <span class="status-badge">${app.status}</span>
            ${
              app.downloadUrl === '#'
                ? '<span class="status-badge">قريباً</span>'
                : `<a class="button button-primary small" href="${app.downloadUrl}" target="_blank" rel="noopener">تحميل APK</a>`
            }
          </div>
        </article>
      `
    )
    .join('');
}

function applyTranslations(lang = 'ar') {
  const dict = translations[lang] || translations.ar;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
}

function detectLanguage() {
  const saved = localStorage.getItem('appLanguage');
  if (saved) return saved;

  const navLang = navigator.language || navigator.userLanguage || 'ar';
  return navLang.toLowerCase().startsWith('en') ? 'en' : 'ar';
}

function initLanguageSwitcher() {
  const preferred = detectLanguage();
  applyTranslations(preferred);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = btn.dataset.lang;
      localStorage.setItem('appLanguage', selected);
      applyTranslations(selected);
    });
  });
}

function initTheme() {
  const saved = localStorage.getItem('themeMode');
  const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const activeTheme = saved || (preferredDark ? 'dark' : 'light');
  document.body.classList.toggle('dark', activeTheme === 'dark');

  const toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.innerHTML = activeTheme === 'dark' ? '<span class="theme-icon">🌙</span>' : '<span class="theme-icon">☀️</span>';
    toggle.addEventListener('click', () => {
      const darkMode = !document.body.classList.contains('dark');
      document.body.classList.toggle('dark', darkMode);
      localStorage.setItem('themeMode', darkMode ? 'dark' : 'light');
      toggle.innerHTML = darkMode ? '<span class="theme-icon">🌙</span>' : '<span class="theme-icon">☀️</span>';
    });
  }
}

async function checkForUpdates() {
  const statusEl = document.getElementById('updateStatus');
  const versionNameEl = document.getElementById('versionName');
  const releaseNotesEl = document.getElementById('releaseNotes');
  const updateLinkEl = document.getElementById('updateLink');

  if (!statusEl || !versionNameEl || !releaseNotesEl || !updateLinkEl) return;

  statusEl.textContent = 'جارٍ فحص التحديثات...';
  statusEl.className = 'status status-default';

  try {
    const response = await fetch('version.json?_=' + Date.now());
    if (!response.ok) throw new Error('تعذّر قراءة ملف الإصدار');

    const data = await response.json();
    const versionName = data.versionName || '1.0.0';
    const releaseNotes = data.releaseNotes || 'لا توجد ملاحظات جديدة.';
    const downloadUrl = data.downloadUrl || 'https://ht8592840-crypto.github.io/hamoudi-moe-library-debts/app-release.apk';

    versionNameEl.textContent = versionName;
    releaseNotesEl.textContent = releaseNotes;
    updateLinkEl.href = downloadUrl;

    statusEl.textContent = 'أحدث إصدار متاح ✓';
    statusEl.className = 'status status-success';
  } catch (error) {
    statusEl.textContent = 'لا توجد تحديثات جديدة في هذه اللحظة';
    statusEl.className = 'status status-default';
  }
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const updateButton = document.getElementById('checkUpdateBtn');
if (updateButton) {
  updateButton.addEventListener('click', checkForUpdates);
}

renderAppCards();
initTheme();
initLanguageSwitcher();
checkForUpdates();

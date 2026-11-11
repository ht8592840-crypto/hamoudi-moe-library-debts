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
checkForUpdates();

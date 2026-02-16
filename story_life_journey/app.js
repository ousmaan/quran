let currentLang = 'en';
let currentStageIndex = 0;

const stageHeader = document.getElementById('stageHeader');
const split = document.getElementById('split');
const deepDive = document.getElementById('deepDive');
const prevStageBtn = document.getElementById('prevStage');
const nextStageBtn = document.getElementById('nextStage');

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  applyLangVisibility();
}

function applyLangVisibility() {
  const enEls = document.querySelectorAll('.lang-en');
  const urEls = document.querySelectorAll('.lang-ur');

  if (currentLang === 'en') {
    enEls.forEach(e => e.classList.remove('hidden'));
    urEls.forEach(e => e.classList.add('hidden'));
  } else if (currentLang === 'ur') {
    enEls.forEach(e => e.classList.add('hidden'));
    urEls.forEach(e => e.classList.remove('hidden'));
  } else {
    enEls.forEach(e => e.classList.remove('hidden'));
    urEls.forEach(e => e.classList.remove('hidden'));
  }
}

function renderAyahCard(ayah) {
  return `
    <div class="ayah-card">
      <div class="ayah-ref">${escapeHtml(ayah.ref)}</div>
      <div class="ayah-ar">${escapeHtml(ayah.arabic)}</div>
      <div class="ayah-tr lang-en">${escapeHtml(ayah.translation.en)}</div>
      <div class="ayah-tr lang-ur ur">${escapeHtml(ayah.translation.ur)}</div>
    </div>
  `;
}

function renderAyahListItem(item) {
  return `
    <div class="details">
      <div class="ayah-ref">${escapeHtml(item.ref)}</div>
      <div class="ayah-tr lang-en">${escapeHtml(item.en)}</div>
      <div class="ayah-tr lang-ur ur">${escapeHtml(item.ur)}</div>
    </div>
  `;
}

function renderPath(path, badgeClass) {
  const coreAyahsHtml = (path.coreAyahs || []).map(renderAyahCard).join('');
  const invocationHtml = path.invocation ? `
      <div class="block">
        <div class="block-title lang-en">Who he calls upon</div>
        <div class="block-title lang-ur ur">وہ کس کو پکارتا ہے</div>
        <div class="narr lang-en">${escapeHtml(path.invocation.en)}</div>
        <div class="narr lang-ur ur">${escapeHtml(path.invocation.ur)}</div>
      </div>
  ` : '';

  return `
    <article class="path ${badgeClass}">
      <div class="path-header">
        <div>
          <div class="path-title lang-en">${escapeHtml(path.label.en)}</div>
          <div class="path-title lang-ur ur">${escapeHtml(path.label.ur)}</div>
        </div>
        <div class="path-badge ${badgeClass}">${badgeClass === 'good' ? 'Guidance' : 'Turning away'}</div>
      </div>

      <div class="block">
        <div class="block-title lang-en">Narration</div>
        <div class="block-title lang-ur ur">بیان</div>
        <div class="narr lang-en">${escapeHtml(path.narration.en)}</div>
        <div class="narr lang-ur ur">${escapeHtml(path.narration.ur)}</div>
      </div>

      <div class="block">
        <div class="block-title lang-en">Core Ayahs</div>
        <div class="block-title lang-ur ur">بنیادی آیات</div>
        ${coreAyahsHtml}
      </div>

      ${invocationHtml}
    </article>
  `;
}

function renderStage(stage) {
  stageHeader.innerHTML = `
    <div class="stage-title lang-en">${escapeHtml(stage.title.en)}</div>
    <div class="stage-title lang-ur ur">${escapeHtml(stage.title.ur)}</div>
    <div class="stage-sub lang-en">${escapeHtml(stage.purpose.en)}</div>
    <div class="stage-sub lang-ur ur">${escapeHtml(stage.purpose.ur)}</div>
  `;

  split.innerHTML = `
    ${renderPath(stage.righteous, 'good')}
    ${renderPath(stage.rebellious, 'bad')}
  `;

  deepDive.innerHTML = renderDeepDive(stage);

  prevStageBtn.disabled = currentStageIndex === 0;
  nextStageBtn.disabled = currentStageIndex === storyStages.length - 1;

  applyLangVisibility();

  // wire deep-dive toggle
  const btn = document.getElementById('toggleMore');
  const panel = document.getElementById('morePanel');
  if (btn && panel) {
    btn.addEventListener('click', () => {
      panel.classList.toggle('hidden');
      btn.textContent = panel.classList.contains('hidden') ? 'Expand' : 'Collapse';
    });
  }
}

function renderDeepDive(stage) {
  const rMore = (stage.righteous.expandableAyahs || []).map(renderAyahListItem).join('') || '';
  const bMore = (stage.rebellious.expandableAyahs || []).map(renderAyahListItem).join('') || '';

  return `
    <div class="summary-row">
      <div>
        <div class="summary-title lang-en">Deep Dive (More Ayahs)</div>
        <div class="summary-title lang-ur ur">گہرا مطالعہ (مزید آیات)</div>
        <div class="stage-sub lang-en">Expandable list of additional Quranic passages related to this stage.</div>
        <div class="stage-sub lang-ur ur">اس مرحلے سے متعلق مزید قرآنی آیات کی فہرست (اختیاری)۔</div>
      </div>
      <button class="summary-btn" id="toggleMore">Expand</button>
    </div>

    <div id="morePanel" class="hidden">
      <div class="details">
        <div class="block-title lang-en">Righteous side — additional ayahs</div>
        <div class="block-title lang-ur ur">مؤمن — مزید آیات</div>
        ${rMore || '<div class="stage-sub lang-en">(none)</div><div class="stage-sub lang-ur ur">(کوئی نہیں)</div>'}
      </div>
      <div class="details">
        <div class="block-title lang-en">Rebellious side — additional ayahs</div>
        <div class="block-title lang-ur ur">مجرم/معرض — مزید آیات</div>
        ${bMore || '<div class="stage-sub lang-en">(none)</div><div class="stage-sub lang-ur ur">(کوئی نہیں)</div>'}
      </div>
    </div>
  `;
}

// Events
prevStageBtn.addEventListener('click', () => {
  if (currentStageIndex > 0) {
    currentStageIndex -= 1;
    renderStage(storyStages[currentStageIndex]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

nextStageBtn.addEventListener('click', () => {
  if (currentStageIndex < storyStages.length - 1) {
    currentStageIndex += 1;
    renderStage(storyStages[currentStageIndex]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// init
renderStage(storyStages[currentStageIndex]);
setLang('en');

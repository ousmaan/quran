// State management
let currentLanguage = 'both'; // 'en', 'ur', 'both'
let currentMisconceptionIndex = 0;
let isDarkMode = false;
let showTransliteration = true;
let showWBW = true;
let showTranslation = true;
let showRoots = true;
let showReflections = true;

// DOM Elements
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const contentBody = document.getElementById('contentBody');
const misconceptionsList = document.getElementById('misconceptionsList');
const menuToggle = document.getElementById('menuToggle');
const toggleDarkMode = document.getElementById('toggleDarkMode');
const searchInput = document.getElementById('searchInput');
// Previous/Next buttons removed; navigation via sidebar
const prevBtn = null;
const nextBtn = null;
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const closeSettings = document.getElementById('closeSettings');
const toggleTransliteration = document.getElementById('toggleTransliteration');
const toggleWBW = document.getElementById('toggleWBW');
const toggleTranslation = document.getElementById('toggleTranslation');
const toggleRoots = document.getElementById('toggleRoots');
const toggleReflections = document.getElementById('toggleReflections');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadSavedPreferences();
});

function escapeHtml(str) {
    return String(str)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

/**
 * Color-code Arabic sub-segments inside a word to help learning.
 * Heuristic segmentation:
 * - Prefix letters: و ف ب ك ل س (common attached particles)
 * - Definite article: ال
 * - Remaining core
 */
function renderArabicSegments(arabicWord) {
    const w = (arabicWord || '').trim();
    if (!w) return '';

    // Remove surrounding RTL marks/spaces only
    let remaining = w;

    // Extract leading prefixes (one or more)
    const prefixes = [];
    while (remaining.length > 1) {
        const ch = remaining[0];
        if ([ 'و', 'ف', 'ب', 'ك', 'ل', 'س' ].includes(ch)) {
            prefixes.push(ch);
            remaining = remaining.slice(1);
            continue;
        }
        break;
    }

    // Extract definite article
    let article = '';
    if (remaining.startsWith('ال') && remaining.length > 2) {
        article = 'ال';
        remaining = remaining.slice(2);
    }

    const core = remaining;

    const parts = [];
    if (prefixes.length) {
        parts.push(`<span class="arabic-seg seg-prefix">${escapeHtml(prefixes.join(''))}</span>`);
    }
    if (article) {
        parts.push(`<span class="arabic-seg seg-article">${escapeHtml(article)}</span>`);
    }
    if (core) {
        parts.push(`<span class="arabic-seg seg-core">${escapeHtml(core)}</span>`);
    }

    return parts.join('');
}

function initializeApp() {
    renderMisconceptionsList();
    loadMisconception(0);
    setupEventListeners();
}

function loadSavedPreferences() {
    // Load dark mode preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    }
    
    // Load language preference
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        currentLanguage = savedLang;
        updateLanguageButtons();
    }
    
    // Load display preferences
    showTransliteration = localStorage.getItem('showTransliteration') !== 'false';
    showWBW = localStorage.getItem('showWBW') !== 'false';
    showTranslation = localStorage.getItem('showTranslation') !== 'false';
    showRoots = localStorage.getItem('showRoots') !== 'false';
    showReflections = localStorage.getItem('showReflections') !== 'false';
    
    toggleTransliteration.checked = showTransliteration;
    toggleWBW.checked = showWBW;
    toggleTranslation.checked = showTranslation;
    toggleRoots.checked = showRoots;
    toggleReflections.checked = showReflections;
}

function setupEventListeners() {
    // Menu toggle for mobile
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
    
    // Dark mode toggle
    toggleDarkMode.addEventListener('click', () => {
        if (isDarkMode) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
    
    // Language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            setLanguage(lang);
        });
    });
    
    
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        filterMisconceptions(e.target.value);
    });
    
    // Settings panel
    settingsBtn.addEventListener('click', () => {
        settingsPanel.classList.remove('hidden');
    });
    
    closeSettings.addEventListener('click', () => {
        settingsPanel.classList.add('hidden');
    });
    
    // Settings toggles
    toggleTransliteration.addEventListener('change', (e) => {
        showTransliteration = e.target.checked;
        localStorage.setItem('showTransliteration', showTransliteration);
        applyDisplaySettings();
    });
    
    toggleWBW.addEventListener('change', (e) => {
        showWBW = e.target.checked;
        localStorage.setItem('showWBW', showWBW);
        applyDisplaySettings();
    });
    
    toggleTranslation.addEventListener('change', (e) => {
        showTranslation = e.target.checked;
        localStorage.setItem('showTranslation', showTranslation);
        applyDisplaySettings();
    });
    
    toggleRoots.addEventListener('change', (e) => {
        showRoots = e.target.checked;
        localStorage.setItem('showRoots', showRoots);
        applyDisplaySettings();
    });

    toggleReflections.addEventListener('change', (e) => {
        showReflections = e.target.checked;
        localStorage.setItem('showReflections', showReflections);
        applyDisplaySettings();
    });
    
    // Close sidebar on mobile when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 968) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });
}

function renderMisconceptionsList() {
    misconceptionsList.innerHTML = '';
    
    misconceptionsData.forEach((misconception, index) => {
        const item = document.createElement('div');
        item.className = 'misconception-item';
        if (index === currentMisconceptionIndex) {
            item.classList.add('active');
        }
        
        item.innerHTML = `
            <span class="misconception-number">${index + 1}</span>
            <span class="misconception-title">${misconception.title.en}</span>
        `;
        
        item.addEventListener('click', () => {
            loadMisconception(index);
            scrollToTop();
            if (window.innerWidth <= 968) {
                sidebar.classList.remove('active');
            }
        });
        
        misconceptionsList.appendChild(item);
    });
}

function loadMisconception(index) {
    currentMisconceptionIndex = index;
    const misconception = misconceptionsData[index];
    
    // Update active state in sidebar
    document.querySelectorAll('.misconception-item').forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Render content
    contentBody.innerHTML = renderMisconceptionContent(misconception);
    
    // Apply language filter
    applyLanguageFilter();
    
    // Apply display settings
    applyDisplaySettings();
}

function renderMisconceptionContent(misconception) {
    let html = `
        <div class="misconception-header">
            <div class="misconception-badge">Topic #${currentMisconceptionIndex + 1}</div>
            <h1 class="misconception-title-main">${misconception.title.en}</h1>
            <h2 class="misconception-title-urdu">${misconception.title.ur}</h2>
        </div>
    `;

    // Render each section, and auto-generate a reflection after it (unless section already is reflection)
    misconception.sections.forEach((section, idx) => {
        if (section.type === 'intro') {
            html += renderIntroSection(section);
            html += renderAutoReflectionForSection(section, misconception, idx);
        } else if (section.type === 'ayah') {
            html += renderAyahSection(section);
            html += renderAutoReflectionForSection(section, misconception, idx);
        } else if (section.type === 'explanation') {
            html += renderExplanationSection(section);
            html += renderAutoReflectionForSection(section, misconception, idx);
        } else if (section.type === 'example') {
            html += renderExampleSection(section);
            html += renderAutoReflectionForSection(section, misconception, idx);
        } else if (section.type === 'reflection') {
            html += renderReflectionSection(section);
        }
    });

    return html;
}

function renderIntroSection(section) {
    return `
        <div class="section intro-section">
            <div class="explanation-box">
                <p class="explanation-text lang-en">${section.content.en}</p>
                <p class="explanation-text explanation-text-urdu lang-ur">${section.content.ur}</p>
            </div>
        </div>
    `;
}

function renderAyahSection(section) {
    const ayahTransliteration = Array.isArray(section.wbw)
        ? section.wbw.map(w => (w.transliteration || '').trim()).filter(Boolean).join(' ')
        : '';

    const wbwHtml = section.wbw.map(word => `
        <div class="wbw-word">
            <div class="wbw-arabic">${escapeHtml(word.arabic || '')}</div>
            <div class="wbw-transliteration">${escapeHtml(word.transliteration || '')}</div>
            <div class="wbw-english lang-en">${escapeHtml(word.en || '')}</div>
            <div class="wbw-urdu lang-ur">${escapeHtml(word.ur || '')}</div>
            ${word.root ? `
                <div class="wbw-root">
                    <span class="wbw-root-arabic">${escapeHtml(word.root)}</span>
                    <span class="wbw-root-meaning lang-en"> - ${escapeHtml(word.rootMeaning || '')}</span>
                </div>
            ` : ''}
        </div>
    `).join('');
    
    return `
        <div class="section ayah-section">
            <div class="ayah-container">
                <div class="ayah-reference">
                    <span class="surah-info">${section.surahName} (${section.surah}:${section.ayahNumber})</span>
                    <span class="ayah-number">${section.surah}:${section.ayahNumber}</span>
                </div>
                
                <div class="ayah-arabic">${section.arabic}</div>

                ${ayahTransliteration ? `
                    <div class="ayah-transliteration" data-display="ayah-transliteration">
                        <div class="ayah-transliteration-text">${escapeHtml(ayahTransliteration)}</div>
                    </div>
                ` : ''}
                
                <div class="wbw-container">
                    <div class="wbw-grid">${wbwHtml}</div>
                </div>
                
                <div class="translation">
                    <p class="translation-text lang-en">${escapeHtml(section.translation.en || '')}</p>
                    <p class="translation-text translation-urdu lang-ur">${escapeHtml(section.translation.ur || '')}</p>
                </div>
            </div>
        </div>
    `;
}

function renderExplanationSection(section) {
    return `
        <div class="section explanation-section">
            <h2 class="section-title lang-en">Understanding</h2>
            <h2 class="section-title-urdu lang-ur">سمجھ</h2>
            
            <div class="explanation-box">
                <p class="explanation-text lang-en">${section.content.en}</p>
                <p class="explanation-text explanation-text-urdu lang-ur">${section.content.ur}</p>
            </div>
        </div>
    `;
}

function renderExampleSection(section) {
    return `
        <div class="section example-section">
            <h2 class="section-title lang-en">Real Life Example</h2>
            <h2 class="section-title-urdu lang-ur">حقیقی مثال</h2>
            
            <div class="example-box">
                <div class="example-content lang-en">${section.content.en}</div>
                <div class="example-content example-content-urdu lang-ur">${section.content.ur}</div>
            </div>
        </div>
    `;
}

function renderReflectionSection(section) {
    const itemsHtml = (section.items || section.questions || []).map(item => `
        <div class="reflection-item lang-en">${escapeHtml(item.en || '')}</div>
        <div class="reflection-item reflection-item-urdu lang-ur">${escapeHtml(item.ur || '')}</div>
    `).join('');

    return `
        <div class="section reflection-section reflection-section-auto" data-display="reflection">
            <div class="reflection-box">
                ${itemsHtml}
            </div>
        </div>
    `;
}

function renderAutoReflectionForSection(section, topic, sectionIndex) {
    // Do not auto-generate if reflections are off
    if (!showReflections) return '';

    const items = generateQuranSafeReflections(section, topic);
    if (!items.length) return '';

    // Curate: show the most useful, but keep it rich.
    const curated = items.slice(0, 6);

    return renderReflectionSection({ items: curated, auto: true, sourceType: section.type, sectionIndex });
}

function generateQuranSafeReflections(section, topic) {
    const items = [];

    // "Reflective understanding" (insights), still Quran-safe (no new claims)
    if (section.type === 'ayah') {
        const ref = `${section.surah}:${section.ayahNumber}`;

        items.push({
            en: `This ayah (${ref}) is meant to move me from information to submission — not just reading, but responding.`,
            ur: `یہ آیت (${ref}) مجھے معلومات سے اطاعت کی طرف لے جانے کے لیے ہے — صرف پڑھنا نہیں بلکہ جواب دینا۔`
        });

        items.push({
            en: `If my life does not change after hearing Allah’s words, then my relationship with the Quran has become passive, not living.`,
            ur: `اگر اللہ کا کلام سننے کے بعد میری زندگی نہیں بدلتی تو قرآن سے میرا تعلق زندہ نہیں بلکہ بے اثر ہو گیا ہے۔`
        });

        if (Array.isArray(section.wbw) && section.wbw.length) {
            const keyWords = section.wbw
                .filter(w => (w.rootMeaning || '').length)
                .slice(0, 4)
                .map(w => `${w.arabic} (${w.rootMeaning})`);

            if (keyWords.length) {
                items.push({
                    en: `Notice the key words: ${keyWords.join(', ')}. The Quran often reforms people by reforming what they pay attention to.`,
                    ur: `اہم الفاظ پر غور کریں: ${keyWords.join('، ')}۔ قرآن اکثر انسان کو اس کی توجہ کی اصلاح کے ذریعے بدلتا ہے۔`
                });
            }
        }

        items.push({
            en: `A Quranic way to honor this ayah is to take one concrete action that matches it, even if small — consistency is part of sincerity.`,
            ur: `اس آیت کی تعظیم کا قرآنی طریقہ یہ ہے کہ اس کے مطابق ایک عملی قدم اٹھایا جائے، چاہے چھوٹا ہو — تسلسل اخلاص کا حصہ ہے۔`
        });
    }

    if (section.type === 'intro' || section.type === 'explanation') {
        items.push({
            en: `This section is not asking me to win debates — it is asking me to examine my own assumptions under the light of Allah’s words.`,
            ur: `یہ حصہ مجھ سے بحث جیتنے کا نہیں کہہ رہا — یہ اللہ کے کلام کی روشنی میں اپنے مفروضات کا جائزہ لینے کو کہہ رہا ہے۔`
        });

        items.push({
            en: `The Quran repeatedly praises those who reflect and change; it condemns those who hear but remain the same.`,
            ur: `قرآن بار بار تدبر کرنے اور بدلنے والوں کی تعریف کرتا ہے؛ اور سن کر بھی نہ بدلنے والوں کی مذمت کرتا ہے۔`
        });
    }

    if (section.type === 'example') {
        items.push({
            en: `Examples are mirrors: the goal is not to judge others, but to recognize myself before the Day when Allah shows me my life as evidence.`,
            ur: `مثالیں آئینہ ہیں: مقصد دوسروں کو جج کرنا نہیں بلکہ خود کو پہچاننا ہے، اس دن سے پہلے جب اللہ میری زندگی کو ثبوت بنا کر دکھائے گا۔`
        });
    }

    return items;
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateLanguageButtons();
    applyLanguageFilter();
}

function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function applyLanguageFilter() {
    const enElements = document.querySelectorAll('.lang-en');
    const urElements = document.querySelectorAll('.lang-ur');
    
    if (currentLanguage === 'en') {
        enElements.forEach(el => el.style.display = '');
        urElements.forEach(el => el.style.display = 'none');
    } else if (currentLanguage === 'ur') {
        enElements.forEach(el => el.style.display = 'none');
        urElements.forEach(el => el.style.display = '');
    } else {
        enElements.forEach(el => el.style.display = '');
        urElements.forEach(el => el.style.display = '');
    }
}

function applyDisplaySettings() {
    // Toggle transliteration (WBW transliteration)
    const transliterationElements = document.querySelectorAll('.wbw-transliteration');
    transliterationElements.forEach(el => {
        el.style.display = showTransliteration ? '' : 'none';
    });

    // Toggle full-ayah transliteration line
    const ayahTranslitElements = document.querySelectorAll('[data-display="ayah-transliteration"]');
    ayahTranslitElements.forEach(el => {
        el.style.display = showTransliteration ? '' : 'none';
    });
    
    // Toggle WBW
    const wbwContainers = document.querySelectorAll('.wbw-container');
    wbwContainers.forEach(el => {
        el.style.display = showWBW ? '' : 'none';
    });
    
    // Toggle translations
    const translationElements = document.querySelectorAll('.translation');
    translationElements.forEach(el => {
        el.style.display = showTranslation ? '' : 'none';
    });
    
    // Toggle reflections
    const reflectionSections = document.querySelectorAll('.reflection-section');
    reflectionSections.forEach(el => {
        el.style.display = showReflections ? '' : 'none';
    });

    // Toggle roots - but respect language mode
    const rootElements = document.querySelectorAll('.wbw-root');
    rootElements.forEach(el => {
        if (showRoots) {
            el.style.display = '';
            // In Urdu-only mode, hide the root meaning (which is in English)
            const rootMeaning = el.querySelector('.wbw-root-meaning');
            if (rootMeaning && currentLanguage === 'ur') {
                rootMeaning.style.display = 'none';
            }
        } else {
            el.style.display = 'none';
        }
    });
}

function enableDarkMode() {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleDarkMode.textContent = '☀️ Light Mode';
    isDarkMode = true;
    localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
    document.documentElement.removeAttribute('data-theme');
    toggleDarkMode.textContent = '🌙 Dark Mode';
    isDarkMode = false;
    localStorage.setItem('theme', 'light');
}

function filterMisconceptions(searchTerm) {
    const items = document.querySelectorAll('.misconception-item');
    const lowerSearchTerm = searchTerm.toLowerCase();
    
    items.forEach((item, index) => {
        const misconception = misconceptionsData[index];
        const titleEn = misconception.title.en.toLowerCase();
        const titleUr = misconception.title.ur;
        
        if (titleEn.includes(lowerSearchTerm) || titleUr.includes(searchTerm)) {
            item.style.display = '';
        } else {
            // Also search in content
            let found = false;
            misconception.sections.forEach(section => {
                if (section.content) {
                    if (section.content.en.toLowerCase().includes(lowerSearchTerm) || 
                        section.content.ur.includes(searchTerm)) {
                        found = true;
                    }
                }
                if (section.translation) {
                    if (section.translation.en.toLowerCase().includes(lowerSearchTerm) || 
                        section.translation.ur.includes(searchTerm)) {
                        found = true;
                    }
                }
            });
            
            if (found) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        }
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


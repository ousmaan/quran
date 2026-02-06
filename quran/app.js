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
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
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
    
    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        if (currentMisconceptionIndex > 0) {
            loadMisconception(currentMisconceptionIndex - 1);
            scrollToTop();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentMisconceptionIndex < misconceptionsData.length - 1) {
            loadMisconception(currentMisconceptionIndex + 1);
            scrollToTop();
        }
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
    
    // Update navigation buttons
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === misconceptionsData.length - 1;
    
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
    const questionsHtml = (section.questions || []).map(q => `
        <div class="reflection-question lang-en">${escapeHtml(q.en || '')}</div>
        <div class="reflection-question reflection-question-urdu lang-ur">${escapeHtml(q.ur || '')}</div>
    `).join('');
    
    return `
        <div class="section reflection-section" data-display="reflection">
            <div class="reflection-box">
                ${questionsHtml}
            </div>
        </div>
    `;
}

function renderAutoReflectionForSection(section, topic, sectionIndex) {
    // Do not auto-generate if reflections are off
    if (!showReflections) return '';

    const questions = generateQuranSafeReflections(section, topic);
    if (!questions.length) return '';

    // Limit on screen to avoid overload, but keep richness by generating many and showing a curated subset.
    const curated = questions.slice(0, 6);

    return renderReflectionSection({ questions: curated, auto: true, sourceType: section.type, sectionIndex });
}

function generateQuranSafeReflections(section, topic) {
    const q = [];

    // Generic, Quran-safe reflections (no new claims)
    if (section.type === 'ayah') {
        const ref = `${section.surah}:${section.ayahNumber}`;
        q.push({
            en: `If Allah asked me today about ${ref}, what would my life prove — that I listened, or that I ignored it?`,
            ur: `اگر اللہ آج مجھ سے ${ref} کے بارے میں پوچھے تو میری زندگی کیا ثابت کرے گی — کہ میں نے سنا یا کہ میں نے نظر انداز کیا؟`
        });

        if (section.translation?.en) {
            q.push({
                en: `Which part of this ayah is hardest for me to accept or act upon — and why?`,
                ur: `اس آیت کا کون سا حصہ میرے لیے ماننا یا اس پر عمل کرنا سب سے مشکل ہے — اور کیوں؟`
            });
        }

        if (Array.isArray(section.wbw) && section.wbw.length) {
            const keyWords = section.wbw
                .filter(w => (w.rootMeaning || '').length)
                .slice(0, 4)
                .map(w => `${w.arabic} (${w.rootMeaning})`);

            if (keyWords.length) {
                q.push({
                    en: `The ayah uses key words like: ${keyWords.join(', ')}. Which of these words describes my current state — and which one do I need to change?`,
                    ur: `اس آیت میں اہم الفاظ ہیں: ${keyWords.join('، ')}۔ ان میں سے کون سا لفظ میری موجودہ حالت بیان کرتا ہے — اور مجھے کس کو بدلنے کی ضرورت ہے؟`
                });
            }
        }

        q.push({
            en: `What would it look like to obey this ayah in one concrete action within the next 24 hours?`,
            ur: `اگلے 24 گھنٹوں میں ایک عملی قدم کے طور پر اس آیت کی اطاعت کیسے نظر آئے گی؟`
        });

        q.push({
            en: `If I keep living the same way for 10 years, will this ayah be a proof for me or against me?`,
            ur: `اگر میں 10 سال اسی طرح جیتا رہا تو یہ آیت میرے حق میں دلیل بنے گی یا میرے خلاف؟`
        });
    }

    if (section.type === 'intro' || section.type === 'explanation') {
        q.push({
            en: `Do I want truth even if it exposes my habits — or do I only want comfort that confirms what I already do?`,
            ur: `کیا میں سچ چاہتا ہوں چاہے وہ میری عادات کو بے نقاب کر دے — یا میں صرف وہ سکون چاہتا ہوں جو میری موجودہ حالت کی تصدیق کرے؟`
        });
        q.push({
            en: `What is one assumption in my life that this section challenges?`,
            ur: `اس حصے نے میری زندگی کے کس ایک مفروضے کو چیلنج کیا ہے؟`
        });
    }

    if (section.type === 'example') {
        q.push({
            en: `Which part of this example resembles my own life most — and what change does the Quran demand from me?`,
            ur: `اس مثال کا کون سا حصہ میری زندگی سے سب سے زیادہ ملتا ہے — اور قرآن مجھ سے کون سی تبدیلی کا مطالبہ کرتا ہے؟`
        });
    }

    return q;
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

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
        prevBtn.click();
    } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
        nextBtn.click();
    }
});

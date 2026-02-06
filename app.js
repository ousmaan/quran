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

function stableHash(str) {
    // Simple deterministic hash (32-bit)
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
}

function extractKeywords(text, max = 5) {
    const stop = new Set([
        'the','and','or','to','of','in','on','for','with','from','is','are','was','were','be','been','that','this','those','these',
        'a','an','as','by','it','its','their','them','you','your','we','our','they','he','she','his','her',
        'not','no','but','then','so','if','only','indeed','surely','will','may','can','cannot','do','does','did',
        'allah'
    ]);

    const words = String(text || '')
        .toLowerCase()
        .replace(/[^a-z\s]/g, ' ')
        .split(/\s+/)
        .filter(Boolean)
        .filter(w => w.length >= 4)
        .filter(w => !stop.has(w));

    const freq = new Map();
    for (const w of words) freq.set(w, (freq.get(w) || 0) + 1);

    return [...freq.entries()]
        .sort((a,b) => b[1]-a[1])
        .slice(0, max)
        .map(([w]) => w);
}

function generateQuranSafeReflections(section, topic) {
    const items = [];

    // "Reflective understanding" that is SPECIFIC to each ayah/section
    if (section.type === 'ayah') {
        const ref = `${section.surah}:${section.ayahNumber}`;
        const enText = section.translation?.en || '';
        const urText = section.translation?.ur || '';
        const kws = extractKeywords(enText, 5);

        // Pull a few WBW root meanings too (more specific)
        const roots = Array.isArray(section.wbw)
            ? section.wbw
                .filter(w => (w.rootMeaning || '').trim().length)
                .slice(0, 6)
                .map(w => `${w.arabic} (${w.rootMeaning})`)
            : [];

        // Template bank (varied) — avoid simply restating the translation
        items.push({
            en: `Ayah focus (${ref}): What does Allah want me to notice here — a command, a warning, a promise, or a description of people?`,
            ur: `آیت کا فوکس (${ref}): اللہ یہاں مجھے کس چیز کی طرف متوجہ کر رہا ہے — حکم، تنبیہ، وعدہ، یا لوگوں کی کیفیت؟`
        });

        if (kws.length) {
            items.push({
                en: `This ayah revolves around themes like: ${kws.join(', ')}. Which of these themes is most present in my life right now?`,
                ur: `اس آیت کے گرد یہ موضوعات نمایاں ہیں: ${kws.join('، ')}۔ ان میں سے کون سا موضوع میری زندگی میں سب سے زیادہ نمایاں ہے؟`
            });
        }

        if (roots.length) {
            items.push({
                en: `Key Quran words here: ${roots.join(', ')}. The Quran reforms people by reforming what they notice and prioritize.`,
                ur: `یہاں اہم قرآنی الفاظ: ${roots.join('، ')}۔ قرآن انسان کو اس کی توجہ اور ترجیحات کی اصلاح سے بدلتا ہے۔`
            });
        }

        // Obedience angle without making new law
        items.push({
            en: `If I truly accept this ayah, one visible change should appear in my choices (speech, time, money, relationships) — not just in my feelings.`,
            ur: `اگر میں واقعی اس آیت کو مانتا ہوں تو میری ترجیحات میں کوئی واضح تبدیلی نظر آئے گی (بات، وقت، مال، تعلقات) — صرف جذبات میں نہیں۔`
        });

        // Warning/comfort framing (safe)
        items.push({
            en: `Ask: is this ayah warning me, guiding me, or giving me hope? If I treat it as “information only,” I lose its purpose.`,
            ur: `سوچیں: یہ آیت مجھے ڈرا رہی ہے، رہنمائی دے رہی ہے یا امید دے رہی ہے؟ اگر میں اسے صرف “معلومات” سمجھوں تو مقصد ضائع ہو جاتا ہے۔`
        });

        // Deterministic variety: shuffle using hash so different ayahs show different subsets
        const h = stableHash(ref);
        items.sort((a,b) => (stableHash(a.en + ref) ^ h) - (stableHash(b.en + ref) ^ h));

        // Also add a short, always-useful closer
        items.push({
            en: `A Quranic way to honor ${ref} is to take one concrete action today that matches it — then repeat until it becomes character.`,
            ur: `(${ref}) کی تعظیم کا قرآنی طریقہ: آج اس کے مطابق ایک عملی قدم اٹھائیں — پھر اسے دہراتے رہیں یہاں تک کہ یہ مزاج بن جائے۔`
        });

        return items;
    }

    if (section.type === 'intro' || section.type === 'explanation') {
        const en = section.content?.en || '';
        const ur = section.content?.ur || '';
        const kws = extractKeywords(en, 5);

        // Avoid repeating the full text as "Summary" (too long on mobile).
        // Instead: derive focused reflections from themes.

        if (kws.length) {
            items.push({
                en: `Key themes in this section: ${kws.join(', ')}. Which theme would fix the biggest problem in my life if I took it seriously?`,
                ur: `اس حصے کے اہم موضوعات: ${kws.join('، ')}۔ ان میں سے کون سا موضوع میری زندگی کے سب سے بڑے مسئلے کو ٹھیک کر سکتا ہے اگر میں اسے سنجیدگی سے لے لوں؟`
            });

            items.push({
                en: `Which theme (${kws[0]}) do I talk about, but fail to practice consistently?`,
                ur: `کون سا موضوع (${kws[0]}) میں زبان سے تو کہتا ہوں لیکن مستقل طور پر اس پر عمل نہیں کرتا؟`
            });
        }

        items.push({
            en: `If this section is true, what would I need to stop defending — and start changing?`,
            ur: `اگر یہ بات سچ ہے تو مجھے کس چیز کا دفاع چھوڑ کر کس چیز کو بدلنا شروع کرنا چاہیے؟`
        });

        items.push({
            en: `What is the smallest honest change I can make today that aligns with this section — without waiting for a "perfect" time?`,
            ur: `اس حصے کے مطابق آج میں سب سے چھوٹی سچی تبدیلی کیا کر سکتا ہوں — بغیر "کامل وقت" کا انتظار کیے؟`
        });

        return items;
    }

    if (section.type === 'example') {
        items.push({
            en: `This example is not to judge others — it’s a mirror so I recognize myself before Allah shows me my life as evidence.`,
            ur: `یہ مثال دوسروں کو جج کرنے کے لیے نہیں — یہ آئینہ ہے تاکہ میں خود کو پہچانوں اس سے پہلے کہ اللہ میری زندگی کو ثبوت بنا کر دکھائے۔`
        });
        items.push({
            en: `Which detail in this example feels uncomfortable because it resembles me — and what Quranic change does it demand?`,
            ur: `اس مثال کی کون سی بات مجھے اس لیے چبھتی ہے کہ وہ مجھ سے ملتی ہے — اور قرآن مجھ سے کون سی تبدیلی مانگتا ہے؟`
        });
        return items;
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


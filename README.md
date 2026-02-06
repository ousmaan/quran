# Return to Quran - رجوع إلى القرآن

A web-based presentation framework to address common misconceptions among Muslims by referring directly to the Quran, without sectarian interpretations.

## Purpose

This presentation is designed to help Muslims return to the pure message of the Quran, free from:
- Sectarian interpretations
- Cultural additions
- Blind following of traditions
- Misconceptions about faith and practice

## Features

### 🌐 Dual Language Support
- **English** and **Urdu** translations
- Toggle between languages or view both simultaneously
- Word-by-word (WBW) analysis with transliteration

### 📖 Quranic Focus
- Arabic text in Uthmani script
- Direct translations (not from mainstream sectarian scholars)
- Root word analysis for deeper understanding
- Cross-referencing within Quran

### 💡 Problem-Based Approach
Each misconception follows this structure:
1. **Statement of Misconception** - What people commonly believe
2. **Quranic Evidence** - Ayahs that address the misconception
3. **Word-by-Word Analysis** - Deep dive into Arabic meanings
4. **Explanation** - Clear understanding from Quran itself
5. **Real-Life Examples** - Practical applications

### 🎨 User Experience
- Clean, distraction-free interface
- Dark/Light mode
- Mobile responsive
- Search functionality
- Keyboard navigation (Arrow keys)
- Progress tracking

## How to Use

### Running Locally
1. Simply open `index.html` in any modern web browser
2. No server or installation required
3. Works offline once loaded

### Navigation
- **Sidebar**: Click on any misconception to jump to it
- **Arrow Keys**: Navigate between misconceptions
- **Search**: Find specific topics or ayahs
- **Language Toggle**: Switch between English, Urdu, or Both

## Structure

### Files
- `index.html` - Main HTML structure
- `styles.css` - All styling and themes
- `data.js` - Content data (misconceptions, ayahs, translations)
- `app.js` - Application logic and interactivity

### Adding New Misconceptions

Edit `data.js` and add new entries to the `misconceptionsData` array:

```javascript
{
    id: 2,
    title: {
        en: "English Title",
        ur: "اردو عنوان"
    },
    sections: [
        {
            type: "intro",
            content: {
                en: "Introduction in English",
                ur: "اردو میں تعارف"
            }
        },
        {
            type: "ayah",
            surah: 2,
            ayahNumber: 255,
            surahName: "Al-Baqarah",
            arabic: "ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ...",
            wbw: [
                {
                    arabic: "ٱللَّهُ",
                    transliteration: "Allahu",
                    en: "Allah",
                    ur: "اللہ",
                    root: "ا ل ه",
                    rootMeaning: "God/deity"
                }
                // ... more words
            ],
            translation: {
                en: "Complete translation in English",
                ur: "مکمل ترجمہ اردو میں"
            }
        },
        {
            type: "explanation",
            content: {
                en: "Explanation in English",
                ur: "وضاحت اردو میں"
            }
        }
    ]
}
```

## Current Misconceptions

### 1. Simply Saying 'La ilaha illallah' is Enough for Jannah
- Addresses the belief that mere verbal declaration is sufficient
- Shows Quranic evidence that faith must enter the heart
- Demonstrates the difference between claiming faith and having true faith

## Technology

- Pure HTML, CSS, and JavaScript
- No frameworks or dependencies
- Responsive design
- Local storage for preferences
- Clean, semantic markup

## Design Philosophy

### Translation Approach
- **No mainstream translations** - We translate directly from Arabic
- **No interpretive additions** - Let Quran speak for itself
- **Word-by-word analysis** - Learn Arabic while studying
- **Context from Quran** - Tafsir Quran bil Quran

### Visual Design
- **Minimalist** - Focus on content, not decoration
- **Readable** - Large, clear fonts for Arabic, English, and Urdu
- **Accessible** - Dark mode, responsive, keyboard navigation
- **Respectful** - Appropriate colors and styling for sacred text

## Future Enhancements

- [ ] Add more misconceptions
- [ ] Cross-referencing between related ayahs
- [ ] Bookmark/favorite system
- [ ] Personal notes feature
- [ ] Print/PDF export
- [ ] Audio recitation
- [ ] Share specific sections

## License

This is a personal family project to help understand the Quran better. Feel free to use and adapt for your own learning and teaching.

## Credits

All translations and interpretations are done independently, seeking to understand the Quran directly without sectarian bias.

May Allah guide us all to the straight path. Ameen.

---

**Remember**: The goal is not to criticize others, but to return to the pure message of Allah as revealed in the Quran. Approach this with humility and sincerity.

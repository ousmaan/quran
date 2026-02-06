// Data structure for misconceptions and their content
const misconceptionsData = [
    // PRE-TOPIC: Why I am doing this (Quranic duty toward family)
    {
        id: -1,
        title: {
            en: "Why I’m Doing This - My Duty Toward My Family (From the Quran)",
            ur: "میں یہ کیوں کر رہا ہوں؟ - اپنے خاندان کے بارے میں میری ذمہ داری (قرآن سے)"
        },
        sections: [
            {
                type: "intro",
                content: {
                    en: "This project is not about winning arguments, proving others wrong, or creating conflict. It is about obeying Allah. The Quran makes two things clear at the same time: (1) you cannot force guidance into anyone’s heart — guidance belongs to Allah; (2) you ARE commanded to remind, warn, invite with wisdom, and begin with your closest people. So I am doing this because Allah ordered us to protect ourselves and our families from the Fire and to establish prayer and remembrance in the home.",
                    ur: "یہ کام بحث جیتنے، دوسروں کو غلط ثابت کرنے، یا گھر میں جھگڑا پیدا کرنے کے لیے نہیں۔ یہ اللہ کی اطاعت کے لیے ہے۔ قرآن ایک ہی وقت میں دو باتیں واضح کرتا ہے: (1) آپ کسی کے دل میں زبردستی ہدایت داخل نہیں کر سکتے — ہدایت اللہ کے اختیار میں ہے؛ (2) آپ کو نصیحت، تنبیہ، اور حکمت کے ساتھ دعوت دینے کا حکم دیا گیا ہے، اور ابتدا اپنے قریبی لوگوں سے کرنی ہے۔ اس لیے میں یہ اس لیے کر رہا ہوں کہ اللہ نے ہمیں حکم دیا ہے کہ اپنے آپ کو اور اپنے گھر والوں کو آگ سے بچائیں اور گھر میں نماز اور ذکر کو قائم کریں۔"
                }
            },
            {
                type: "ayah",
                surah: 66,
                ayahNumber: 6,
                surahName: "At-Tahrim",
                arabic: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ قُوٓا۟ أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًۭا",
                wbw: [
                    {"arabic":"يَـٰٓأَيُّهَا","transliteration":"yaa ayyuhaa","en":"O you","ur":"اے","root":"","rootMeaning":"O"},
                    {"arabic":"ٱلَّذِينَ","transliteration":"alladheena","en":"who","ur":"جو","root":"","rootMeaning":"those who"},
                    {"arabic":"ءَامَنُوا۟","transliteration":"aamanoo","en":"believe","ur":"ایمان لائے","root":"ء م ن","rootMeaning":"to believe"},
                    {"arabic":"قُوٓا۟","transliteration":"qoo","en":"protect/save","ur":"بچاؤ","root":"و ق ی","rootMeaning":"to protect, shield"},
                    {"arabic":"أَنفُسَكُمْ","transliteration":"anfusakum","en":"yourselves","ur":"اپنے آپ کو","root":"ن ف س","rootMeaning":"self"},
                    {"arabic":"وَأَهْلِيكُمْ","transliteration":"wa ahleekum","en":"and your family","ur":"اور اپنے گھر والوں کو","root":"أ ه ل","rootMeaning":"family/household"},
                    {"arabic":"نَارًۭا","transliteration":"naaran","en":"a Fire","ur":"آگ سے","root":"ن و ر","rootMeaning":"fire"
                    }
                ],
                translation: {
                    en: "O you who believe! Protect yourselves and your families from a Fire...",
                    ur: "اے ایمان والو! اپنے آپ کو اور اپنے گھر والوں کو آگ سے بچاؤ..."
                }
            },
            {
                type: "explanation",
                content: {
                    en: "This is the clearest reason to begin with family. Allah did not say only 'save yourself' — He said protect yourself AND your family. This means: you cannot be satisfied with private religiosity while your home remains spiritually unattended. A Quranic reflection: if you install smoke alarms to protect your family from a physical fire, how can you ignore a warning from Allah about the Fire of the Hereafter? The believer who truly loves his family does not merely want them comfortable — he wants them safe in eternity.",
                    ur: "یہ خاندان سے شروع کرنے کی سب سے واضح دلیل ہے۔ اللہ نے صرف 'اپنے آپ کو بچاؤ' نہیں کہا — بلکہ اپنے آپ کو اور اپنے گھر والوں کو۔ یعنی: آپ صرف اپنی ذاتی عبادت پر مطمئن نہیں ہو سکتے جبکہ گھر کی روحانی حالت نظر انداز ہو۔ قرآنی زاویہ: اگر آپ جسمانی آگ سے بچانے کے لیے گھر میں حفاظتی انتظام کرتے ہیں، تو آخرت کی آگ کے بارے میں اللہ کی تنبیہ کو کیسے نظر انداز کر سکتے ہیں؟ جو واقعی اپنے گھر والوں سے محبت کرتا ہے وہ صرف دنیا کی آسائش نہیں چاہتا — وہ ابدیت کی سلامتی چاہتا ہے۔"
                }
            },
            {
                type: "ayah",
                surah: 20,
                ayahNumber: 132,
                surahName: "Ta-Ha",
                arabic: "وَأْمُرْ أَهْلَكَ بِٱلصَّلَوٰةِ وَٱصْطَبِرْ عَلَيْهَا",
                wbw: [
                    {"arabic":"وَأْمُرْ","transliteration":"wa'mur","en":"and command","ur":"اور حکم دو","root":"أ م ر","rootMeaning":"to command"},
                    {"arabic":"أَهْلَكَ","transliteration":"ahlaka","en":"your family","ur":"اپنے گھر والوں کو","root":"أ ه ل","rootMeaning":"family/household"},
                    {"arabic":"بِٱلصَّلَوٰةِ","transliteration":"bis-salaah","en":"with prayer","ur":"نماز کا","root":"ص ل و","rootMeaning":"prayer"},
                    {"arabic":"وَٱصْطَبِرْ","transliteration":"wastabir","en":"and be steadfast/patient","ur":"اور ثابت قدم رہو","root":"ص ب ر","rootMeaning":"patience/steadfastness"},
                    {"arabic":"عَلَيْهَا","transliteration":"alayhaa","en":"upon it","ur":"اس پر","root":"","rootMeaning":"upon it"}
                ],
                translation: {
                    en: "And command your family with prayer, and be steadfast upon it...",
                    ur: "اور اپنے گھر والوں کو نماز کا حکم دو اور اس پر ثابت قدم رہو..."
                }
            },
            {
                type: "explanation",
                content: {
                    en: "Notice Allah doesn’t command only 'teach' — He commands: establish a living routine of prayer in the home, and then be patient/steadfast. This means family reform is not a one-day lecture. It’s repetition, consistency, and gentle persistence. A Quran-aligned reflection: if you can be consistent for years in work and school schedules, you can also be consistent in what Allah calls the central pillar of daily life.",
                    ur: "اللہ صرف 'سکھانے' کا نہیں کہتا — وہ گھر میں نماز کا نظام قائم کرنے اور پھر اس پر ثابت قدم رہنے کا حکم دیتا ہے۔ یعنی گھر کی اصلاح ایک دن کے لیکچر سے نہیں ہوتی۔ یہ مسلسل مزاج، نرمی، اور تکرار ہے۔ قرآنی زاویہ: اگر آپ کام اور پڑھائی کے نظام پر سالوں ثابت قدم رہ سکتے ہیں، تو اللہ کے حکم کردہ روزمرہ ستون پر بھی ثابت قدم رہ سکتے ہیں۔"
                }
            },
            {
                type: "ayah",
                surah: 26,
                ayahNumber: 214,
                surahName: "Ash-Shu'ara",
                arabic: "وَأَنذِرْ عَشِيرَتَكَ ٱلْأَقْرَبِينَ",
                wbw: [
                    {"arabic":"وَأَنذِرْ","transliteration":"wa andhir","en":"and warn","ur":"اور خبردار کرو","root":"ن ذ ر","rootMeaning":"to warn"},
                    {"arabic":"عَشِيرَتَكَ","transliteration":"'asheerataka","en":"your close people/tribe","ur":"اپنے قریبی لوگوں کو","root":"ع ش ر","rootMeaning":"close group/tribe"},
                    {"arabic":"ٱلْأَقْرَبِينَ","transliteration":"al-aqrabeen","en":"the nearest","ur":"سب سے قریب","root":"ق ر ب","rootMeaning":"near"}
                ],
                translation: {
                    en: "And warn your nearest relatives.",
                    ur: "اور اپنے سب سے قریب رشتہ داروں کو خبردار کرو۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "Even the Messenger was commanded to begin close. This removes the excuse: 'I’ll worry about my family later; first I’ll fix the world.' The Quranic order is: start where you have real responsibility and real access — your home.",
                    ur: "یہاں تک کہ رسول کو بھی ابتدا اپنے قریبی لوگوں سے کرنے کا حکم دیا گیا۔ اس سے یہ عذر ختم ہو جاتا ہے: 'میں بعد میں اپنے خاندان کی فکر کروں گا؛ پہلے دنیا کو ٹھیک کروں۔' قرآنی ترتیب: وہاں سے شروع کرو جہاں تمہاری حقیقی ذمہ داری اور حقیقی رسائی ہے — یعنی گھر۔"
                }
            },
            {
                type: "ayah",
                surah: 28,
                ayahNumber: 56,
                surahName: "Al-Qasas",
                arabic: "إِنَّكَ لَا تَهْدِى مَنْ أَحْبَبْتَ وَلَـٰكِنَّ ٱللَّهَ يَهْدِى مَن يَشَآءُ",
                wbw: [
                    {"arabic":"إِنَّكَ","transliteration":"innaka","en":"Indeed you","ur":"بیشک تم","root":"","rootMeaning":"indeed you"},
                    {"arabic":"لَا","transliteration":"laa","en":"do not","ur":"نہیں","root":"","rootMeaning":"not"},
                    {"arabic":"تَهْدِى","transliteration":"tahdee","en":"guide","ur":"ہدایت دیتے","root":"هـ د ی","rootMeaning":"to guide"},
                    {"arabic":"مَنْ","transliteration":"man","en":"whom","ur":"جسے","root":"","rootMeaning":"whom"},
                    {"arabic":"أَحْبَبْتَ","transliteration":"ahbabta","en":"you love",
                        "ur":"تم چاہتے ہو","root":"ح ب ب","rootMeaning":"to love"},
                    {"arabic":"وَلَـٰكِنَّ","transliteration":"wa laakinna","en":"but",
                        "ur":"لیکن","root":"","rootMeaning":"but"},
                    {"arabic":"ٱللَّهَ","transliteration":"allaaha","en":"Allah",
                        "ur":"اللہ","root":"ا ل ه","rootMeaning":"Allah"},
                    {"arabic":"يَهْدِى","transliteration":"yahdee","en":"guides",
                        "ur":"ہدایت دیتا ہے","root":"هـ د ی","rootMeaning":"guides"},
                    {"arabic":"مَن","transliteration":"man","en":"whom",
                        "ur":"جسے","root":"","rootMeaning":"whom"},
                    {"arabic":"يَشَآءُ","transliteration":"yashaa'u","en":"He wills",
                        "ur":"وہ چاہے","root":"ش ی ء","rootMeaning":"to will"}
                ],
                translation: {
                    en: "Indeed, you do not guide whom you love, but Allah guides whom He wills.",
                    ur: "بیشک تم جسے چاہتے ہو ہدایت نہیں دے سکتے، بلکہ اللہ جسے چاہے ہدایت دیتا ہے۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "This ayah keeps the caller humble. It teaches: you are not the owner of results. Your job is sincerity, clarity, patience. Allah owns hearts. Quran-aligned reflection: if Allah is the One who guides, then your best weapon is not pressure — it is dua, gentle reminder, and presenting Allah’s words clearly.",
                    ur: "یہ آیت داعی کو عاجز رکھتی ہے۔ اس سے معلوم ہوتا ہے: نتائج آپ کے اختیار میں نہیں۔ آپ کا کام اخلاص، وضاحت، صبر ہے۔ دلوں کا مالک اللہ ہے۔ قرآنی زاویہ: جب ہدایت دینے والا اللہ ہے، تو آپ کا سب سے مضبوط ہتھیار دباؤ نہیں — بلکہ دعا، نرم نصیحت، اور اللہ کے کلام کو واضح طور پر پیش کرنا ہے۔"
                }
            },
            {
                type: "ayah",
                surah: 88,
                ayahNumber: 21,
                surahName: "Al-Ghashiyah",
                arabic: "فَذَكِّرْ إِنَّمَآ أَنتَ مُذَكِّرٌۭ",
                wbw: [
                    {"arabic":"فَذَكِّرْ","transliteration":"fadhakkir","en":"So remind","ur":"پس نصیحت کرو","root":"ذ ك ر","rootMeaning":"to remind"},
                    {"arabic":"إِنَّمَآ","transliteration":"innamaa","en":"only","ur":"صرف","root":"","rootMeaning":"only"},
                    {"arabic":"أَنتَ","transliteration":"anta","en":"you","ur":"تم","root":"","rootMeaning":"you"},
                    {"arabic":"مُذَكِّرٌۭ","transliteration":"mudhakkir","en":"a reminder",
                        "ur":"نصیحت کرنے والے","root":"ذ ك ر","rootMeaning":"one who reminds"}
                ],
                translation: {
                    en: "So remind; you are only a reminder.",
                    ur: "پس نصیحت کرو؛ تم تو صرف نصیحت کرنے والے ہو۔"
                }
            },
            {
                type: "ayah",
                surah: 88,
                ayahNumber: 22,
                surahName: "Al-Ghashiyah",
                arabic: "لَّسْتَ عَلَيْهِم بِمُصَيْطِرٍ",
                wbw: [
                    {"arabic":"لَّسْتَ","transliteration":"lasta","en":"you are not",
                        "ur":"تم نہیں ہو","root":"ل ی س","rootMeaning":"not be"},
                    {"arabic":"عَلَيْهِم","transliteration":"alayhim","en":"over them",
                        "ur":"ان پر","root":"","rootMeaning":"over them"},
                    {"arabic":"بِمُصَيْطِرٍ","transliteration":"bi-musaytir","en":"a controller",
                        "ur":"داروغہ/حاکم","root":"س ي ط ر","rootMeaning":"controller/one who dominates"}
                ],
                translation: {
                    en: "You are not over them a controller.",
                    ur: "تم ان پر داروغہ/حاکم نہیں ہو۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "This defines the etiquette of family دعوت: remind, don’t dominate. Invite, don’t police. The Quran is guidance, not a weapon to humiliate. Quran-aligned reflection: if you turn guidance into control, you may win an argument but lose hearts — and Allah is the One who guides hearts.",
                    ur: "یہ خاندان میں دعوت کا ادب بتاتا ہے: نصیحت کرو، کنٹرول نہ کرو۔ بلاؤ، پولیسنگ نہ کرو۔ قرآن ہدایت ہے، کسی کو ذلیل کرنے کا ہتھیار نہیں۔ قرآنی زاویہ: اگر آپ ہدایت کو کنٹرول بنا دیں، تو شاید بحث جیت لیں مگر دل کھو دیں — جبکہ دلوں کو ہدایت دینے والا اللہ ہے۔"
                }
            },
            {
                type: "ayah",
                surah: 16,
                ayahNumber: 125,
                surahName: "An-Nahl",
                arabic: "ٱدْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِٱلْحِكْمَةِ وَٱلْمَوْعِظَةِ ٱلْحَسَنَةِ",
                wbw: [
                    {"arabic":"ٱدْعُ","transliteration":"ud'u","en":"Invite",
                        "ur":"دعوت دو","root":"د ع و","rootMeaning":"invite/call"},
                    {"arabic":"إِلَىٰ","transliteration":"ilaa","en":"to",
                        "ur":"کی طرف","root":"","rootMeaning":"to"},
                    {"arabic":"سَبِيلِ","transliteration":"sabeel","en":"path",
                        "ur":"راستہ","root":"س ب ل","rootMeaning":"path"},
                    {"arabic":"رَبِّكَ","transliteration":"rabbika","en":"of your Lord",
                        "ur":"اپنے رب کا","root":"ر ب ب","rootMeaning":"Lord"},
                    {"arabic":"بِٱلْحِكْمَةِ","transliteration":"bil-hikmah","en":"with wisdom",
                        "ur":"حکمت کے ساتھ","root":"ح ك م","rootMeaning":"wisdom/judgment"}
                ],
                translation: {
                    en: "Invite to the path of your Lord with wisdom and good instruction...",
                    ur: "اپنے رب کے راستے کی طرف حکمت اور اچھی نصیحت کے ساتھ دعوت دو..."
                }
            },
            {
                type: "explanation",
                content: {
                    en: "Wisdom means: choose the right time, the right tone, the right sequence — like a ladder. Good instruction means: speak to hearts, not just brains. Quran-aligned reflection: if your دعوت makes your family feel attacked, you may be delivering truth with the wrong ظرف (container). Allah commands truth, and also commands wisdom in how it is carried.",
                    ur: "حکمت کا مطلب: صحیح وقت، صحیح انداز، صحیح ترتیب — سیڑھی کی طرح۔ اچھی نصیحت کا مطلب: دلوں سے بات، صرف دماغ سے نہیں۔ قرآنی زاویہ: اگر آپ کی دعوت سے گھر والے خود کو حملہ زدہ محسوس کریں، تو ممکن ہے سچ صحیح ہو مگر طریقہ/ظرف غلط ہو۔ اللہ سچ بھی حکم دیتا ہے اور اسے پہنچانے میں حکمت بھی حکم دیتا ہے۔"
                }
            },
            {
                type: "reflection",
                questions: [
                    {"en":"If I truly love my family, do I only care about their comfort in this world, or their safety in the next?","ur":"اگر میں واقعی اپنے گھر والوں سے محبت کرتا ہوں تو کیا میں صرف دنیا کی آسائش چاہتا ہوں یا آخرت کی سلامتی بھی؟"},
                    {"en":"When I remind my family, do I act like a controller — or a reminder? (88:21–22)","ur":"جب میں گھر والوں کو نصیحت کرتا ہوں تو کیا میں کنٹرولر بن جاتا ہوں یا صرف نصیحت کرنے والا؟ (88:21–22)"},
                    {"en":"Do I confuse ‘conveying’ with ‘forcing’? If Allah guides hearts (28:56), why am I pressuring instead of praying and presenting Quran clearly?","ur":"کیا میں ‘پہنچانے’ کو ‘مجبور کرنے’ کے ساتھ ملا رہا ہوں؟ جب دلوں کو ہدایت اللہ دیتا ہے (28:56) تو میں دباؤ کیوں ڈال رہا ہوں، دعا اور قرآن کی واضح پیشکش کیوں نہیں؟"}
                ]
            }
        ]
    },
    {
    id: 0,
    title: {
        en: "The Quran - Its Significance & How to Approach It",
        ur: "قرآن - اس کی اہمیت اور اس سے کیسے رجوع کریں"
    },
    sections: [
        {
            type: "intro",
            content: {
                en: "Before we learn WHAT the Quran says, we must first understand WHAT the Quran IS. This is not just any book - it is the direct Speech of Allah, the Creator of the universe. Just as you wouldn't approach a king carelessly, how much more careful should we be when approaching the words of the King of all Kings? Allah Himself tells us about the Quran's status and how we must approach it.",
                ur: "قرآن کیا کہتا ہے یہ سیکھنے سے پہلے، ہمیں پہلے یہ سمجھنا چاہیے کہ قرآن کیا ہے۔ یہ کوئی عام کتاب نہیں ہے - یہ اللہ کا براہ راست کلام ہے، کائنات کے خالق کا۔ جیسے آپ کسی بادشاہ سے لاپرواہی سے نہیں ملیں گے، تو ہمیں بادشاہوں کے بادشاہ کے کلام سے کتنا زیادہ احتیاط سے ملنا چاہیے؟ اللہ خود ہمیں قرآن کے مقام اور اس سے کیسے رجوع کرنا ہے کے بارے میں بتاتا ہے۔"
            }
        },
        {
            type: "ayah",
            surah: 56,
            ayahNumber: 77,
            surahName: "Al-Waqi'ah",
            arabic: "إِنَّهُۥ لَقُرْءَانٌۭ كَرِيمٌۭ",
            wbw: [
                {
                    arabic: "إِنَّهُۥ",
                    transliteration: "innahu",
                    en: "Indeed it",
                    ur: "بیشک یہ",
                    root: "Particle + Pronoun",
                    rootMeaning: "indeed/verily + it"
                },
                {
                    arabic: "لَقُرْءَانٌۭ",
                    transliteration: "la-qur'aanun",
                    en: "surely a Quran",
                    ur: "یقیناً ایک قرآن",
                    root: "ق ر ء",
                    rootMeaning: "to read/recite - that which is recited"
                },
                {
                    arabic: "كَرِيمٌۭ",
                    transliteration: "kareemun",
                    en: "noble/honored",
                    ur: "بزرگوار/عزت والا",
                    root: "ك ر م",
                    rootMeaning: "nobility, honor, generosity"
                }
            ],
            translation: {
                en: "Indeed, it is a noble Quran.",
                ur: "بیشک یہ ایک بزرگوار قرآن ہے۔"
            }
        },
        {
            type: "ayah",
            surah: 56,
            ayahNumber: 78,
            surahName: "Al-Waqi'ah",
            arabic: "فِى كِتَـٰبٍۢ مَّكْنُونٍۢ",
            wbw: [
                {
                    arabic: "فِى",
                    transliteration: "fee",
                    en: "In",
                    ur: "میں",
                    root: "Preposition",
                    rootMeaning: "in/within"
                },
                {
                    arabic: "كِتَـٰبٍۢ",
                    transliteration: "kitaabin",
                    en: "a Book/Record",
                    ur: "ایک کتاب",
                    root: "ك ت ب",
                    rootMeaning: "to write - written record"
                },
                {
                    arabic: "مَّكْنُونٍۢ",
                    transliteration: "maknoonin",
                    en: "well-protected/hidden",
                    ur: "محفوظ/چھپی ہوئی",
                    root: "ك ن ن",
                    rootMeaning: "to hide, preserve, protect"
                }
            ],
            translation: {
                en: "In a Book well-protected.",
                ur: "ایک محفوظ کتاب میں۔"
            }
        },
        {
            type: "ayah",
            surah: 56,
            ayahNumber: 79,
            surahName: "Al-Waqi'ah",
            arabic: "لَّا يَمَسُّهُۥٓ إِلَّا ٱلْمُطَهَّرُونَ",
            wbw: [
                {
                    arabic: "لَّا",
                    transliteration: "laa",
                    en: "None/not",
                    ur: "نہیں",
                    root: "Negation particle",
                    rootMeaning: "no/not"
                },
                {
                    arabic: "يَمَسُّهُۥٓ",
                    transliteration: "yamassuhu",
                    en: "touches it",
                    ur: "چھوتا ہے اسے",
                    root: "م س س",
                    rootMeaning: "to touch, contact"
                },
                {
                    arabic: "إِلَّا",
                    transliteration: "illa",
                    en: "except",
                    ur: "سوائے",
                    root: "Exception particle",
                    rootMeaning: "except/but"
                },
                {
                    arabic: "ٱلْمُطَهَّرُونَ",
                    transliteration: "al-mutahharoon",
                    en: "the purified ones",
                    ur: "پاک کیے گئے",
                    root: "ط هـ ر",
                    rootMeaning: "to purify, cleanse - those who are purified"
                }
            ],
            translation: {
                en: "None touch it except the purified.",
                ur: "اسے صرف پاک لوگ ہی چھوتے ہیں۔"
            }
        },
        {
            type: "ayah",
            surah: 56,
            ayahNumber: 80,
            surahName: "Al-Waqi'ah",
            arabic: "تَنزِيلٌۭ مِّن رَّبِّ ٱلْعَـٰلَمِينَ",
            wbw: [
                {
                    arabic: "تَنزِيلٌۭ",
                    transliteration: "tanzeelun",
                    en: "A revelation",
                    ur: "نازل کیا گیا",
                    root: "ن ز ل",
                    rootMeaning: "to descend, send down - that which is sent down"
                },
                {
                    arabic: "مِّن",
                    transliteration: "min",
                    en: "from",
                    ur: "سے",
                    root: "Preposition",
                    rootMeaning: "from"
                },
                {
                    arabic: "رَّبِّ",
                    transliteration: "rabbi",
                    en: "the Lord",
                    ur: "رب",
                    root: "ر ب ب",
                    rootMeaning: "Lord, Master, Sustainer"
                },
                {
                    arabic: "ٱلْعَـٰلَمِينَ",
                    transliteration: "al-'aalameen",
                    en: "of the worlds",
                    ur: "جہانوں کے",
                    root: "ع ل م",
                    rootMeaning: "worlds, all that exists"
                }
            ],
            translation: {
                en: "A revelation from the Lord of the worlds.",
                ur: "رب العالمین کی طرف سے نازل کردہ۔"
            }
        },
        {
            type: "explanation",
            content: {
                en: "SubhanAllah! Look at how Allah describes the Quran: NOBLE (كَرِيمٌۭ - kareem). This is the same word used to describe Allah's honored Messengers and noble character. The Quran is in a PROTECTED Record (مَّكْنُونٍۢ - maknoon) - preserved and guarded. And only the PURIFIED (ٱلْمُطَهَّرُونَ - mutahharoon) can truly touch its meanings. This is not just ink and paper - this is revelation from the Lord of ALL worlds. How can we approach it carelessly?",
                ur: "سبحان اللہ! دیکھیں اللہ قرآن کو کیسے بیان کرتا ہے: بزرگوار (كَرِيمٌۭ - کریم)۔ یہ وہی لفظ ہے جو اللہ کے معزز رسولوں اور نیک کردار کے لیے استعمال ہوتا ہے۔ قرآن ایک محفوظ ریکارڈ میں ہے (مَّكْنُونٍۢ - مکنون) - محفوظ اور پہرے میں۔ اور صرف پاک لوگ (ٱلْمُطَهَّرُونَ - متطہرون) ہی واقعی اس کے معانی کو چھو سکتے ہیں۔ یہ صرف سیاہی اور کاغذ نہیں - یہ تمام جہانوں کے رب کی طرف سے وحی ہے۔ ہم اس سے لاپرواہی سے کیسے رجوع کر سکتے ہیں؟"
            }
        },
        {
            type: "ayah",
            surah: 7,
            ayahNumber: 204,
            surahName: "Al-A'raf",
            arabic: "وَإِذَا قُرِئَ ٱلْقُرْءَانُ فَٱسْتَمِعُوا۟ لَهُۥ وَأَنصِتُوا۟ لَعَلَّكُمْ تُرْحَمُونَ",
            wbw: [
                {
                    arabic: "وَإِذَا",
                    transliteration: "wa idhaa",
                    en: "And when",
                    ur: "اور جب",
                    root: "Conjunction + temporal particle",
                    rootMeaning: "and + when"
                },
                {
                    arabic: "قُرِئَ",
                    transliteration: "quri'a",
                    en: "is recited",
                    ur: "پڑھا جائے",
                    root: "ق ر ء",
                    rootMeaning: "to read/recite - passive: is recited"
                },
                {
                    arabic: "ٱلْقُرْءَانُ",
                    transliteration: "al-qur'aanu",
                    en: "the Quran",
                    ur: "قرآن",
                    root: "ق ر ء",
                    rootMeaning: "the Recitation/Reading"
                },
                {
                    arabic: "فَٱسْتَمِعُوا۟",
                    transliteration: "fastami'oo",
                    en: "then listen",
                    ur: "تو سنو",
                    root: "س م ع",
                    rootMeaning: "to hear/listen - command: listen attentively"
                },
                {
                    arabic: "لَهُۥ",
                    transliteration: "lahu",
                    en: "to it",
                    ur: "اس کو",
                    root: "Preposition + pronoun",
                    rootMeaning: "to it"
                },
                {
                    arabic: "وَأَنصِتُوا۟",
                    transliteration: "wa ansitoo",
                    en: "and be silent",
                    ur: "اور خاموش رہو",
                    root: "ن ص ت",
                    rootMeaning: "to be silent, quiet - command: be silent!"
                },
                {
                    arabic: "لَعَلَّكُمْ",
                    transliteration: "la'allakum",
                    en: "so that you may",
                    ur: "تاکہ تم",
                    root: "Particle of hope",
                    rootMeaning: "perhaps/so that you may"
                },
                {
                    arabic: "تُرْحَمُونَ",
                    transliteration: "turhamoon",
                    en: "receive mercy",
                    ur: "رحم پاؤ",
                    root: "ر ح م",
                    rootMeaning: "mercy - passive: be shown mercy"
                }
            ],
            translation: {
                en: "And when the Quran is recited, then listen to it and be silent, so that you may receive mercy.",
                ur: "اور جب قرآن پڑھا جائے تو اسے غور سے سنو اور خاموش رہو تاکہ تم پر رحم کیا جائے۔"
            }
        },
        {
            type: "explanation",
            content: {
                en: "This is a DIRECT COMMAND from Allah! Two commands: (1) فَٱسْتَمِعُوا۟ - LISTEN attentively, (2) وَأَنصِتُوا۟ - BE SILENT. Not just 'be quiet' but complete silence and attention. Why? 'So that you may receive mercy.' Allah's mercy is connected to HOW we receive His words. Yet how many of us talk, use phones, or are distracted when Quran is being recited? We're cutting ourselves off from Allah's mercy!",
                ur: "یہ اللہ کا براہ راست حکم ہے! دو حکم: (1) فَٱسْتَمِعُوا۟ - غور سے سنو، (2) وَأَنصِتُوا۟ - خاموش رہو۔ صرف 'چپ رہو' نہیں بلکہ مکمل خاموشی اور توجہ۔ کیوں؟ 'تاکہ تم پر رحم کیا جائے۔' اللہ کی رحمت اس بات سے جڑی ہے کہ ہم اس کے کلام کو کیسے وصول کرتے ہیں۔ پھر بھی ہم میں سے کتنے لوگ بات کرتے ہیں، فون استعمال کرتے ہیں، یا قرآن کی تلاوت کے دوران مشغول ہوتے ہیں؟ ہم اللہ کی رحمت سے خود کو الگ کر رہے ہیں!"
            }
        },
        {
            type: "ayah",
            surah: 49,
            ayahNumber: 1,
            surahName: "Al-Hujurat",
            arabic: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تُقَدِّمُوا۟ بَيْنَ يَدَىِ ٱللَّهِ وَرَسُولِهِۦ ۖ وَٱتَّقُوا۟ ٱللَّهَ ۚ إِنَّ ٱللَّهَ سَمِيعٌ عَلِيمٌۭ",
            wbw: [
                {
                    arabic: "يَـٰٓأَيُّهَا",
                    transliteration: "yaa ayyuhaa",
                    en: "O",
                    ur: "اے",
                    root: "Vocative particle",
                    rootMeaning: "O (calling)"
                },
                {
                    arabic: "ٱلَّذِينَ",
                    transliteration: "alladheena",
                    en: "those who",
                    ur: "وہ لوگ جو",
                    root: "Relative pronoun",
                    rootMeaning: "those who"
                },
                {
                    arabic: "ءَامَنُوا۟",
                    transliteration: "aamanoo",
                    en: "believe",
                    ur: "ایمان لائے",
                    root: "ء م ن",
                    rootMeaning: "to believe/have faith"
                },
                {
                    arabic: "لَا",
                    transliteration: "laa",
                    en: "do not",
                    ur: "نہ",
                    root: "Negation",
                    rootMeaning: "not"
                },
                {
                    arabic: "تُقَدِّمُوا۟",
                    transliteration: "tuqaddimoo",
                    en: "put forward",
                    ur: "آگے نہ بڑھو",
                    root: "ق د م",
                    rootMeaning: "to advance, go before - command: do not put yourselves forward"
                },
                {
                    arabic: "بَيْنَ",
                    transliteration: "bayna",
                    en: "between",
                    ur: "درمیان",
                    root: "Preposition",
                    rootMeaning: "between"
                },
                {
                    arabic: "يَدَىِ",
                    transliteration: "yaday",
                    en: "hands",
                    ur: "ہاتھوں",
                    root: "ی د ی",
                    rootMeaning: "hands - idiom: before/in presence of"
                },
                {
                    arabic: "ٱللَّهِ",
                    transliteration: "allaahi",
                    en: "Allah",
                    ur: "اللہ",
                    root: "ا ل ه",
                    rootMeaning: "God/Allah"
                },
                {
                    arabic: "وَرَسُولِهِۦ",
                    transliteration: "wa rasoolihi",
                    en: "and His Messenger",
                    ur: "اور اس کے رسول",
                    root: "ر س ل",
                    rootMeaning: "messenger"
                },
                {
                    arabic: "وَٱتَّقُوا۟",
                    transliteration: "wattaqoo",
                    en: "and fear",
                    ur: "اور ڈرو",
                    root: "و ق ی",
                    rootMeaning: "to guard/fear - command: fear/be conscious"
                },
                {
                    arabic: "ٱللَّهَ",
                    transliteration: "allaaha",
                    en: "Allah",
                    ur: "اللہ سے",
                    root: "ا ل ه",
                    rootMeaning: "God/Allah"
                },
                {
                    arabic: "إِنَّ",
                    transliteration: "inna",
                    en: "Indeed",
                    ur: "بیشک",
                    root: "Emphasis particle",
                    rootMeaning: "indeed/verily"
                },
                {
                    arabic: "ٱللَّهَ",
                    transliteration: "allaaha",
                    en: "Allah",
                    ur: "اللہ",
                    root: "ا ل ه",
                    rootMeaning: "God/Allah"
                },
                {
                    arabic: "سَمِيعٌ",
                    transliteration: "samee'un",
                    en: "All-Hearing",
                    ur: "سننے والا",
                    root: "س م ع",
                    rootMeaning: "to hear - the All-Hearing"
                },
                {
                    arabic: "عَلِيمٌۭ",
                    transliteration: "'aleemun",
                    en: "All-Knowing",
                    ur: "جاننے والا",
                    root: "ع ل م",
                    rootMeaning: "to know - the All-Knowing"
                }
            ],
            translation: {
                en: "O you who believe! Do not put yourselves forward before Allah and His Messenger, and fear Allah. Indeed, Allah is All-Hearing, All-Knowing.",
                ur: "اے ایمان والو! اللہ اور اس کے رسول کے آگے اپنے آپ کو مت بڑھاؤ، اور اللہ سے ڈرو۔ بیشک اللہ سننے والا، جاننے والا ہے۔"
            }
        },
        {
            type: "explanation",
            content: {
                en: "CRITICAL AYAH! 'Do not put yourselves BEFORE Allah and His Messenger.' What does this mean? When Allah's Quran says something, you don't get to say 'but I think...' or 'but my imam said...' or 'but the hadith says...'. Your opinion, your tradition, your scholar's view - NONE of it comes BEFORE what Allah says in the Quran. This is the foundation of proper approach: Submit to Allah's words, don't try to put your understanding above it.",
                ur: "اہم آیت! 'اللہ اور اس کے رسول کے آگے اپنے آپ کو مت بڑھاؤ۔' اس کا کیا مطلب ہے؟ جب اللہ کا قرآن کچھ کہتا ہے، تو آپ یہ نہیں کہہ سکتے 'لیکن میں سوچتا ہوں...' یا 'لیکن میرے امام نے کہا...' یا 'لیکن حدیث میں ہے...'۔ آپ کی رائے، آپ کی روایت، آپ کے عالم کی رائے - ان میں سے کوئی بھی اللہ کے قرآن میں کہے گئے سے پہلے نہیں آتا۔ یہ صحیح طریقے سے رجوع کرنے کی بنیاد ہے: اللہ کے کلام کے سامنے سر جھکاؤ، اپنی سمجھ کو اس سے اوپر رکھنے کی کوشش نہ کرو۔"
            }
        },
        {
            type: "ayah",
            surah: 47,
            ayahNumber: 24,
            surahName: "Muhammad",
            arabic: "أَفَلَا يَتَدَبَّرُونَ ٱلْقُرْءَانَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَآ",
            wbw: [
                {
                    arabic: "أَفَلَا",
                    transliteration: "afalaa",
                    en: "Then do not",
                    ur: "کیا پھر نہیں",
                    root: "Question + negation",
                    rootMeaning: "do they not?"
                },
                {
                    arabic: "يَتَدَبَّرُونَ",
                    transliteration: "yatadabbaroon",
                    en: "they ponder/reflect deeply",
                    ur: "غور کرتے",
                    root: "د ب ر",
                    rootMeaning: "to contemplate deeply, ponder, reflect"
                },
                {
                    arabic: "ٱلْقُرْءَانَ",
                    transliteration: "al-qur'aana",
                    en: "the Quran",
                    ur: "قرآن پر",
                    root: "ق ر ء",
                    rootMeaning: "the Recitation"
                },
                {
                    arabic: "أَمْ",
                    transliteration: "am",
                    en: "or",
                    ur: "یا",
                    root: "Conjunction",
                    rootMeaning: "or"
                },
                {
                    arabic: "عَلَىٰ",
                    transliteration: "'alaa",
                    en: "upon",
                    ur: "پر",
                    root: "Preposition",
                    rootMeaning: "on/upon"
                },
                {
                    arabic: "قُلُوبٍ",
                    transliteration: "quloobin",
                    en: "hearts",
                    ur: "دلوں",
                    root: "ق ل ب",
                    rootMeaning: "heart"
                },
                {
                    arabic: "أَقْفَالُهَآ",
                    transliteration: "aqfaaluhaa",
                    en: "their locks",
                    ur: "ان کے تالے",
                    root: "ق ف ل",
                    rootMeaning: "lock - locks/barriers"
                }
            ],
            translation: {
                en: "Then do they not deeply ponder over the Quran, or are there locks upon their hearts?",
                ur: "کیا پھر وہ قرآن پر غور نہیں کرتے، یا ان کے دلوں پر تالے ہیں؟"
            }
        },
        {
            type: "explanation",
            content: {
                en: "Allah is asking a serious question: WHY don't you PONDER (يَتَدَبَّرُونَ - yatadabbaroon) over the Quran? This word means to think deeply, reflect, contemplate. Not just read the Arabic for blessings - but THINK about what it means! Allah gives only two options: Either you ponder, OR your hearts have LOCKS on them. Which category do you want to be in? The Quran is meant to be understood, reflected upon, and applied - not just recited without comprehension.",
                ur: "اللہ ایک سنجیدہ سوال پوچھ رہا ہے: تم قرآن پر غور کیوں نہیں کرتے (يَتَدَبَّرُونَ - یتدبرون)؟ اس لفظ کا مطلب ہے گہرائی سے سوچنا، غور کرنا، تدبر کرنا۔ صرف برکت کے لیے عربی پڑھنا نہیں - بلکہ سوچو کہ اس کا کیا مطلب ہے! اللہ صرف دو اختیارات دیتا ہے: یا تو تم غور کرتے ہو، یا تمہارے دلوں پر تالے ہیں۔ تم کس زمرے میں ہونا چاہتے ہو؟ قرآن کو سمجھنے، غور کرنے اور لاگو کرنے کے لیے ہے - نہ کہ صرف بغیر سمجھے تلاوت کرنے کے لیے۔"
            }
        },
        {
            type: "ayah",
            surah: 25,
            ayahNumber: 30,
            surahName: "Al-Furqan",
            arabic: "وَقَالَ ٱلرَّسُولُ يَـٰرَبِّ إِنَّ قَوْمِى ٱتَّخَذُوا۟ هَـٰذَا ٱلْقُرْءَانَ مَهْجُورًۭا",
            wbw: [
                {
                    arabic: "وَقَالَ",
                    transliteration: "wa qaala",
                    en: "And said",
                    ur: "اور کہا",
                    root: "ق و ل",
                    rootMeaning: "to say/speak"
                },
                {
                    arabic: "ٱلرَّسُولُ",
                    transliteration: "ar-rasoolu",
                    en: "the Messenger",
                    ur: "رسول نے",
                    root: "ر س ل",
                    rootMeaning: "messenger/apostle"
                },
                {
                    arabic: "يَـٰرَبِّ",
                    transliteration: "yaa rabbi",
                    en: "O my Lord",
                    ur: "اے میرے رب",
                    root: "ر ب ب",
                    rootMeaning: "Lord/Master/Sustainer"
                },
                {
                    arabic: "إِنَّ",
                    transliteration: "inna",
                    en: "Indeed",
                    ur: "بیشک",
                    root: "Emphasis particle",
                    rootMeaning: "indeed/verily"
                },
                {
                    arabic: "قَوْمِى",
                    transliteration: "qawmee",
                    en: "my people",
                    ur: "میری قوم",
                    root: "ق و م",
                    rootMeaning: "people/nation"
                },
                {
                    arabic: "ٱتَّخَذُوا۟",
                    transliteration: "ittakhadhoo",
                    en: "took/made",
                    ur: "بنایا",
                    root: "ء خ ذ",
                    rootMeaning: "to take/adopt/make"
                },
                {
                    arabic: "هَـٰذَا",
                    transliteration: "haadha",
                    en: "this",
                    ur: "اس",
                    root: "Demonstrative pronoun",
                    rootMeaning: "this"
                },
                {
                    arabic: "ٱلْقُرْءَانَ",
                    transliteration: "al-qur'aana",
                    en: "the Quran",
                    ur: "قرآن کو",
                    root: "ق ر ء",
                    rootMeaning: "the Recitation"
                },
                {
                    arabic: "مَهْجُورًۭا",
                    transliteration: "mahjooran",
                    en: "abandoned/forsaken",
                    ur: "چھوڑا ہوا/ترک شدہ",
                    root: "هـ ج ر",
                    rootMeaning: "to abandon, desert, forsake"
                }
            ],
            translation: {
                en: "And the Messenger will say, 'O my Lord, indeed my people took this Quran as a thing abandoned.'",
                ur: "اور رسول کہے گا، 'اے میرے رب، بیشک میری قوم نے اس قرآن کو چھوڑ دیا تھا۔'"
            }
        },
        {
            type: "explanation",
            content: {
                en: "THIS IS THE MOST CRITICAL AYAH! On the Day of Judgment, the Prophet Muhammad (peace be upon him) will COMPLAIN to Allah that his people ABANDONED (مَهْجُورًۭا - mahjooran) the Quran. How do we abandon it? By not reading it? By not understanding it? By following hadith and scholars INSTEAD of Quran? By reciting it without pondering? By having it but not living by it? All of the above! When you ignore what Allah says in Quran and follow traditions, you are among those who ABANDONED the Quran. The Prophet will complain about YOU on the Day of Judgment. Is this the position you want to be in?",
                ur: "یہ سب سے اہم آیت ہے! قیامت کے دن، نبی محمد (صلی اللہ علیہ وسلم) اللہ سے شکایت کریں گے کہ ان کی قوم نے قرآن کو چھوڑ دیا (مَهْجُورًۭا - مہجوران)۔ ہم اسے کیسے چھوڑتے ہیں؟ اسے نہ پڑھ کر؟ اسے نہ سمجھ کر؟ قرآن کی جگہ حدیث اور علماء کی پیروی کر کے؟ اسے بغیر غور کے پڑھ کر؟ اسے رکھ کر لیکن اس پر عمل نہ کر کے؟ یہ سب! جب آپ قرآن میں اللہ کی بات کو نظر انداز کرتے ہیں اور روایات کی پیروی کرتے ہیں، تو آپ ان لوگوں میں سے ہیں جنہوں نے قرآن کو چھوڑ دیا۔ نبی قیامت کے دن آپ کے بارے میں شکایت کریں گے۔ کیا آپ اس مقام پر ہونا چاہتے ہیں؟"
            }
        },
        {
            type: "ayah",
            surah: 17,
            ayahNumber: 82,
            surahName: "Al-Isra",
            arabic: "وَنُنَزِّلُ مِنَ ٱلْقُرْءَانِ مَا هُوَ شِفَآءٌۭ وَرَحْمَةٌۭ لِّلْمُؤْمِنِينَ ۙ وَلَا يَزِيدُ ٱلظَّـٰلِمِينَ إِلَّا خَسَارًۭا",
            wbw: [
                {
                    arabic: "وَنُنَزِّلُ",
                    transliteration: "wa nunazzilu",
                    en: "And We send down",
                    ur: "اور ہم نازل کرتے ہیں",
                    root: "ن ز ل",
                    rootMeaning: "to descend, send down"
                },
                {
                    arabic: "مِنَ",
                    transliteration: "mina",
                    en: "of",
                    ur: "میں سے",
                    root: "Preposition",
                    rootMeaning: "from/of"
                },
                {
                    arabic: "ٱلْقُرْءَانِ",
                    transliteration: "al-qur'aani",
                    en: "the Quran",
                    ur: "قرآن",
                    root: "ق ر ء",
                    rootMeaning: "the Recitation"
                },
                {
                    arabic: "مَا",
                    transliteration: "maa",
                    en: "that which",
                    ur: "جو",
                    root: "Relative pronoun",
                    rootMeaning: "that which/what"
                },
                {
                    arabic: "هُوَ",
                    transliteration: "huwa",
                    en: "it is",
                    ur: "یہ ہے",
                    root: "Pronoun",
                    rootMeaning: "he/it"
                },
                {
                    arabic: "شِفَآءٌۭ",
                    transliteration: "shifaa'un",
                    en: "healing",
                    ur: "شفا",
                    root: "ش ف ی",
                    rootMeaning: "healing, cure"
                },
                {
                    arabic: "وَرَحْمَةٌۭ",
                    transliteration: "wa rahmatun",
                    en: "and mercy",
                    ur: "اور رحمت",
                    root: "ر ح م",
                    rootMeaning: "mercy, compassion"
                },
                {
                    arabic: "لِّلْمُؤْمِنِينَ",
                    transliteration: "lil-mu'mineen",
                    en: "for the believers",
                    ur: "ایمان والوں کے لیے",
                    root: "ء م ن",
                    rootMeaning: "believers, those who have faith"
                },
                {
                    arabic: "وَلَا",
                    transliteration: "wa laa",
                    en: "and not",
                    ur: "اور نہیں",
                    root: "Conjunction + negation",
                    rootMeaning: "and not"
                },
                {
                    arabic: "يَزِيدُ",
                    transliteration: "yazeedu",
                    en: "it increases",
                    ur: "بڑھاتا",
                    root: "ز ی د",
                    rootMeaning: "to increase"
                },
                {
                    arabic: "ٱلظَّـٰلِمِينَ",
                    transliteration: "adh-dhaalimeen",
                    en: "the wrongdoers",
                    ur: "ظالموں کو",
                    root: "ظ ل م",
                    rootMeaning: "wrongdoers, oppressors"
                },
                {
                    arabic: "إِلَّا",
                    transliteration: "illa",
                    en: "except",
                    ur: "سوائے",
                    root: "Exception particle",
                    rootMeaning: "except"
                },
                {
                    arabic: "خَسَارًۭا",
                    transliteration: "khasaaran",
                    en: "loss",
                    ur: "نقصان",
                    root: "خ س ر",
                    rootMeaning: "loss, ruin"
                }
            ],
            translation: {
                en: "And We send down of the Quran that which is healing and mercy for the believers, but it does not increase the wrongdoers except in loss.",
                ur: "اور ہم قرآن میں سے وہ نازل کرتے ہیں جو ایمان والوں کے لیے شفا اور رحمت ہے، لیکن یہ ظالموں کو صرف نقصان میں بڑھاتا ہے۔"
            }
        },
        {
            type: "explanation",
            content: {
                en: "Beautiful promise and warning! The Quran is HEALING (شِفَآءٌۭ - shifaa) and MERCY (رَحْمَةٌۭ - rahmah) for BELIEVERS. But notice: it only increases the wrongdoers in LOSS. Who are the wrongdoers? Those who have the Quran but don't follow it! Those who hear it but ignore it! If you approach Quran with the right heart - seeking guidance, willing to change, ready to submit - it will heal your spiritual diseases and be mercy for you. But if you approach it with arrogance, wanting to prove your beliefs, following scholars over Allah - you only increase in loss.",
                ur: "خوبصورت وعدہ اور انتباہ! قرآن ایمان والوں کے لیے شفا (شِفَآءٌۭ - شفاء) اور رحمت (رَحْمَةٌۭ - رحمت) ہے۔ لیکن دیکھیں: یہ ظالموں کو صرف نقصان میں بڑھاتا ہے۔ ظالم کون ہیں؟ وہ جن کے پاس قرآن ہے لیکن اس پر عمل نہیں کرتے! وہ جو اسے سنتے ہیں لیکن نظر انداز کرتے ہیں! اگر آپ صحیح دل کے ساتھ قرآن سے رجوع کریں - رہنمائی تلاش کرتے ہوئے، بدلنے کے لیے تیار، سر جھکانے کے لیے تیار - تو یہ آپ کی روحانی بیماریوں کو شفا دے گا اور آپ کے لیے رحمت ہوگا۔ لیکن اگر آپ تکبر کے ساتھ، اپنے عقائد کو ثابت کرنا چاہتے ہوئے، اللہ کے بجائے علماء کی پیروی کرتے ہوئے اس سے رجوع کریں - تو آپ صرف نقصان میں بڑھیں گے۔"
            }
        },
        {
            type: "reflection",
            questions: [
                {
                    en: "When you hear Quran being recited, do you stop everything and listen in silence as Allah commanded?",
                    ur: "جب آپ قرآن کی تلاوت سنتے ہیں، تو کیا آپ سب کچھ روک کر خاموشی سے سنتے ہیں جیسا کہ اللہ نے حکم دیا؟"
                },
                {
                    en: "Do you ever put your own opinion or a scholar's opinion BEFORE what the Quran says?",
                    ur: "کیا آپ کبھی اپنی رائے یا کسی عالم کی رائے کو قرآن کی بات سے پہلے رکھتے ہیں؟"
                },
                {
                    en: "When was the last time you truly PONDERED over the meaning of what you read in Quran?",
                    ur: "آخری بار کب آپ نے واقعی قرآن میں جو پڑھا اس کے معنی پر غور کیا؟"
                },
                {
                    en: "Are you approaching the Quran with a humble heart seeking guidance, or with a closed mind seeking confirmation of what you already believe?",
                    ur: "کیا آپ عاجزی سے رہنمائی تلاش کرتے ہوئے قرآن سے رجوع کر رہے ہیں، یا بند ذہن سے اس چیز کی تصدیق تلاش کر رہے ہیں جو آپ پہلے سے مانتے ہیں؟"
                }
            ]
        }
    ]
    },
    // TOPIC 1: WAKE UP - Life is Short, Hereafter is Forever
    {
        id: 1,
        title: {
            en: "Wake Up! Life is Short, Hereafter is Forever",
            ur: "جاگ جاؤ! زندگی مختصر ہے، آخرت ہمیشہ کے لیے ہے"
        },
        sections: [
            {
                type: "intro",
                content: {
                    en: "Most of us live as if we will never die. We chase wealth, status, comfort - spending decades building empires in this temporary world. But Allah tells us a shocking truth: When you die and are resurrected, your ENTIRE life will feel like it was just one day, or even just an hour! All those years you spent chasing dunya will vanish in an instant. This realization is meant to WAKE YOU UP. If life is so short, what are you doing with it? Are you preparing for the eternal life ahead, or wasting time on what will disappear?",
                    ur: "ہم میں سے زیادہ تر لوگ ایسے جیتے ہیں جیسے ہم کبھی نہیں مریں گے۔ ہم دولت، حیثیت، آرام کے پیچھے بھاگتے ہیں - اس عارضی دنیا میں سلطنتیں بنانے میں دہائیاں صرف کرتے ہیں۔ لیکن اللہ ہمیں ایک چونکا دینے والی سچائی بتاتا ہے: جب آپ مریں گے اور دوبارہ زندہ کیے جائیں گے، تو آپ کی پوری زندگی ایسے محسوس ہوگی جیسے یہ صرف ایک دن تھی، یا صرف ایک گھنٹہ! وہ تمام سال جو آپ نے دنیا کے پیچھے بھاگنے میں گزارے، ایک لمحے میں غائب ہو جائیں گے۔ یہ احساس آپ کو جگانے کے لیے ہے۔ اگر زندگی اتنی مختصر ہے، تو آپ اس کے ساتھ کیا کر رہے ہیں؟ کیا آپ آگے آنے والی ابدی زندگی کی تیاری کر رہے ہیں، یا اس پر وقت ضائع کر رہے ہیں جو غائب ہو جائے گا؟"
                }
            },
            {
                type: "ayah",
                surah: 32,
                ayahNumber: 15,
                surahName: "As-Sajdah",
                arabic: "إِنَّمَا يُؤْمِنُ بِـَٔايَـٰتِنَا ٱلَّذِينَ إِذَا ذُكِّرُوا۟ بِهَا خَرُّوا۟ سُجَّدًۭا وَسَبَّحُوا۟ بِحَمْدِ رَبِّهِمْ وَهُمْ لَا يَسْتَكْبِرُونَ",
                wbw: [
                    {"arabic":"إِنَّمَا","transliteration":"innamaa","en":"Only","ur":"صرف","root":"","rootMeaning":"only"},
                    {"arabic":"يُؤْمِنُ","transliteration":"yu'minu","en":"believes","ur":"ایمان رکھتا ہے","root":"ء م ن","rootMeaning":"to believe"},
                    {"arabic":"بِـَٔايَـٰتِنَا","transliteration":"bi-aayaatinaa","en":"in Our verses","ur":"ہماری آیات پر","root":"ء ي ي","rootMeaning":"verses"},
                    {"arabic":"ٱلَّذِينَ","transliteration":"alladheena","en":"those who","ur":"وہ لوگ جو","root":"","rootMeaning":"those who"},
                    {"arabic":"إِذَا","transliteration":"idhaa","en":"when","ur":"جب","root":"","rootMeaning":"when"},
                    {"arabic":"ذُكِّرُوا۟","transliteration":"dhukkiruu","en":"are reminded","ur":"یاد دلائے جائیں","root":"ذ ك ر","rootMeaning":"to remind"},
                    {"arabic":"خَرُّوا۟","transliteration":"kharroo","en":"they fall down","ur":"گر پڑتے ہیں","root":"خ ر ر","rootMeaning":"to fall"},
                    {"arabic":"سُجَّدًۭا","transliteration":"sujjadan","en":"in prostration","ur":"سجدہ کرتے","root":"س ج د","rootMeaning":"to prostrate"},
                    {"arabic":"وَهُمْ","transliteration":"wa hum","en":"and they","ur":"اور وہ","root":"","rootMeaning":"and they"},
                    {"arabic":"لَا","transliteration":"laa","en":"not","ur":"نہیں","root":"","rootMeaning":"not"},
                    {"arabic":"يَسْتَكْبِرُونَ","transliteration":"yastakbiroon","en":"are arrogant","ur":"تکبر کرتے","root":"ك ب ر","rootMeaning":"to be arrogant"}
                ],
                translation: {
                    en: "Only those believe in Our verses who, when they are reminded by them, fall down in prostration and glorify with the praise of their Lord, and they are not arrogant.",
                    ur: "صرف وہی لوگ ہماری آیات پر ایمان رکھتے ہیں کہ جب انہیں ان کے ذریعے یاد دلایا جاتا ہے تو سجدہ کرتے ہوئے گر پڑتے ہیں اور اپنے رب کی حمد کے ساتھ تسبیح کرتے ہیں، اور وہ تکبر نہیں کرتے۔"
                }
            },
            {
                type: "ayah",
                surah: 32,
                ayahNumber: 16,
                surahName: "As-Sajdah",
                arabic: "تَتَجَافَىٰ جُنُوبُهُمْ عَنِ ٱلْمَضَاجِعِ يَدْعُونَ رَبَّهُمْ خَوْفًۭا وَطَمَعًۭا وَمِمَّا رَزَقْنَـٰهُمْ يُنفِقُونَ",
                wbw: [
                    {"arabic":"تَتَجَافَىٰ","transliteration":"tatajafaa","en":"withdraw/leave","ur":"الگ رہتے ہیں","root":"ج ف و","rootMeaning":"to keep away"},
                    {"arabic":"جُنُوبُهُمْ","transliteration":"junoobuhum","en":"their sides","ur":"ان کی کروٹیں","root":"ج ن ب","rootMeaning":"side"},
                    {"arabic":"عَنِ","transliteration":"'ani","en":"from","ur":"سے","root":"","rootMeaning":"from"},
                    {"arabic":"ٱلْمَضَاجِعِ","transliteration":"al-madaaji'","en":"beds","ur":"بستر","root":"ض ج ع","rootMeaning":"beds/resting places"},
                    {"arabic":"يَدْعُونَ","transliteration":"yad'oon","en":"they call upon","ur":"وہ پکارتے ہیں","root":"د ع و","rootMeaning":"to call/invoke"},
                    {"arabic":"رَبَّهُمْ","transliteration":"rabbahum","en":"their Lord","ur":"اپنے رب کو","root":"ر ب ب","rootMeaning":"Lord"},
                    {"arabic":"خَوْفًۭا","transliteration":"khawfan","en":"in fear","ur":"خوف کے ساتھ","root":"خ و ف","rootMeaning":"fear"},
                    {"arabic":"وَطَمَعًۭا","transliteration":"wa tama'an","en":"and hope","ur":"اور امید کے ساتھ","root":"ط م ع","rootMeaning":"hope/desire"}
                ],
                translation: {
                    en: "Their sides keep away from beds; they call upon their Lord in fear and hope, and from what We provided them they spend.",
                    ur: "ان کی کروٹیں بستروں سے الگ رہتی ہیں؛ وہ اپنے رب کو خوف اور امید کے ساتھ پکارتے ہیں، اور جو ہم نے انہیں دیا اس میں سے خرچ کرتے ہیں۔"
                }
            },
            {
                type: "ayah",
                surah: 32,
                ayahNumber: 17,
                surahName: "As-Sajdah",
                arabic: "فَلَا تَعْلَمُ نَفْسٌۭ مَّآ أُخْفِىَ لَهُم مِّن قُرَّةِ أَعْيُنٍۢ جَزَآءًۢ بِمَا كَانُوا۟ يَعْمَلُونَ",
                wbw: [
                    {"arabic":"فَلَا","transliteration":"fa-laa","en":"So not","ur":"پس نہیں","root":"","rootMeaning":"so not"},
                    {"arabic":"تَعْلَمُ","transliteration":"ta'lamu","en":"knows","ur":"جانتی","root":"ع ل م","rootMeaning":"to know"},
                    {"arabic":"نَفْسٌۭ","transliteration":"nafsun","en":"a soul","ur":"کوئی جان","root":"ن ف س","rootMeaning":"soul"},
                    {"arabic":"مَّآ","transliteration":"maa","en":"what","ur":"کیا","root":"","rootMeaning":"what"},
                    {"arabic":"أُخْفِىَ","transliteration":"ukhfiya","en":"is hidden","ur":"چھپا رکھا گیا","root":"خ ف ي","rootMeaning":"to hide"},
                    {"arabic":"لَهُم","transliteration":"lahum","en":"for them","ur":"ان کے لیے","root":"","rootMeaning":"for them"},
                    {"arabic":"جَزَآءًۢ","transliteration":"jazaa'an","en":"a recompense","ur":"بدلہ","root":"ج ز ي","rootMeaning":"recompense"},
                    {"arabic":"بِمَا","transliteration":"bimaa","en":"for what","ur":"اس کے بدلے","root":"","rootMeaning":"for what"},
                    {"arabic":"يَعْمَلُونَ","transliteration":"ya'maloon","en":"they used to do","ur":"وہ کرتے تھے","root":"ع م ل","rootMeaning":"to do"}
                ],
                translation: {
                    en: "So no soul knows what has been hidden for them of comfort of eyes — a recompense for what they used to do.",
                    ur: "پس کوئی جان نہیں جانتی کہ ان کے لیے آنکھوں کی ٹھنڈک میں سے کیا کچھ چھپا رکھا گیا ہے — اس کے بدلے جو وہ کرتے تھے۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "This passage gives a powerful mirror. Allah describes real believers: when reminded by His verses, they fall into سجود (not arguing), they glorify Allah, and they are not arrogant. Then Allah describes what happens in vulnerability and sincerity: their sides leave the beds (night awakens them), and they call upon their Lord with FEAR and HOPE. Notice the balance: fear without despair, hope without arrogance. A Quran-aligned reflection: many of us only become 'religious' when life becomes hard — illness, job loss, fear, uncertainty. The Quran is teaching: make that sincerity your NORMAL state, not your emergency state.",
                    ur: "یہ حصہ ایک طاقتور آئینہ ہے۔ اللہ سچے ایمان والوں کی تصویر دیتا ہے: جب انہیں آیات کے ذریعے یاد دلایا جاتا ہے تو وہ سجدہ کرتے ہیں (بحث نہیں کرتے)، اللہ کی تسبیح کرتے ہیں، اور تکبر نہیں کرتے۔ پھر اللہ بتاتا ہے کہ کمزوری/نرمی اور اخلاص کی حالت میں کیا ہوتا ہے: ان کی کروٹیں بستروں سے الگ رہتی ہیں (رات انہیں جگاتی ہے)، اور وہ اپنے رب کو خوف اور امید کے ساتھ پکارتے ہیں۔ توازن نوٹ کریں: خوف بغیر ناامیدی کے، امید بغیر تکبر کے۔ قرآنی زاویہ: ہم میں سے بہت سے لوگ صرف اس وقت 'دین دار' بنتے ہیں جب زندگی سخت ہو — بیماری، رزق کی تنگی، خوف، بے یقینی۔ قرآن سکھاتا ہے: اس اخلاص کو اپنی معمول کی حالت بنا لو، صرف ایمرجنسی کی حالت نہیں۔"
                }
            },
            {
                type: "reflection",
                questions: [
                    {"en":"Do I rush to Allah only when I’m desperate — and forget Him when I’m comfortable? If yes, what does that say about my faith?","ur":"کیا میں صرف مجبور ہونے پر اللہ کی طرف دوڑتا ہوں — اور آسانی میں اسے بھول جاتا ہوں؟ اگر ہاں تو یہ میرے ایمان کے بارے میں کیا بتاتا ہے؟"},
                    {"en":"When Allah’s verses are recited, do I fall into humility — or do I argue to defend my ego? (32:15)","ur":"جب اللہ کی آیات سنائی جائیں تو کیا میں عاجزی اختیار کرتا ہوں — یا اپنے نفس کو بچانے کے لیے بحث کرتا ہوں؟ (32:15)"},
                    {"en":"What is my ‘night worship’ like? If my bed never loses me for Allah, what am I really living for? (32:16)","ur":"میری رات کی عبادت کیسی ہے؟ اگر میرا بستر مجھے کبھی اللہ کے لیے نہیں کھوتا تو میں حقیقتاً کس کے لیے جی رہا ہوں؟ (32:16)"}
                ]
            },
            {
                type: "ayah",
                surah: 10,
                ayahNumber: 45,
                surahName: "Yunus",
                arabic: "وَيَوْمَ يَحْشُرُهُمْ كَأَن لَّمْ يَلْبَثُوٓا۟ إِلَّا سَاعَةًۭ مِّنَ ٱلنَّهَارِ يَتَعَارَفُونَ بَيْنَهُمْ",
                wbw: [
                    {
                        arabic: "وَيَوْمَ",
                        transliteration: "wa yawma",
                        en: "And the Day",
                        ur: "اور جس دن",
                        root: "ی و م",
                        rootMeaning: "day, time period"
                    },
                    {
                        arabic: "يَحْشُرُهُمْ",
                        transliteration: "yahshuruhum",
                        en: "He will gather them",
                        ur: "وہ انہیں اکٹھا کرے گا",
                        root: "ح ش ر",
                        rootMeaning: "to gather, assemble, resurrect"
                    },
                    {
                        arabic: "كَأَن",
                        transliteration: "ka'an",
                        en: "as if",
                        ur: "جیسے",
                        root: "ك + ا ن",
                        rootMeaning: "as if, as though"
                    },
                    {
                        arabic: "لَّمْ",
                        transliteration: "lam",
                        en: "not",
                        ur: "نہیں",
                        root: "Negation",
                        rootMeaning: "did not"
                    },
                    {
                        arabic: "يَلْبَثُوٓا۟",
                        transliteration: "yalbathoo",
                        en: "they remained",
                        ur: "وہ ٹھہرے",
                        root: "ل ب ث",
                        rootMeaning: "to remain, stay, linger"
                    },
                    {
                        arabic: "إِلَّا",
                        transliteration: "illa",
                        en: "except",
                        ur: "سوائے",
                        root: "Exception",
                        rootMeaning: "except, only"
                    },
                    {
                        arabic: "سَاعَةًۭ",
                        transliteration: "saa'atan",
                        en: "an hour",
                        ur: "ایک گھنٹہ",
                        root: "س و ع",
                        rootMeaning: "hour, short time"
                    },
                    {
                        arabic: "مِّنَ",
                        transliteration: "mina",
                        en: "of",
                        ur: "کا",
                        root: "Preposition",
                        rootMeaning: "from, of"
                    },
                    {
                        arabic: "ٱلنَّهَارِ",
                        transliteration: "an-nahaari",
                        en: "the day",
                        ur: "دن",
                        root: "ن هـ ر",
                        rootMeaning: "daytime, daylight"
                    },
                    {
                        arabic: "يَتَعَارَفُونَ",
                        transliteration: "yata'aarafoon",
                        en: "they will recognize each other",
                        ur: "وہ ایک دوسرے کو پہچانیں گے",
                        root: "ع ر ف",
                        rootMeaning: "to know, recognize"
                    },
                    {
                        arabic: "بَيْنَهُمْ",
                        transliteration: "baynahum",
                        en: "among themselves",
                        ur: "آپس میں",
                        root: "ب ی ن",
                        rootMeaning: "between, among"
                    }
                ],
                translation: {
                    en: "And on the Day when He will gather them, it will be as if they had not remained except an hour of the day, they will recognize one another.",
                    ur: "اور جس دن وہ انہیں اکٹھا کرے گا، ایسا ہوگا جیسے وہ دن کے ایک گھنٹے سے زیادہ نہیں ٹھہرے تھے، وہ ایک دوسرے کو پہچان لیں گے۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "Think about this carefully: Allah says when you're resurrected, it will feel like you lived for just ONE HOUR of one day! You might have lived 50, 60, 70 years - but it will ALL feel like just one hour. All the decades you spent chasing money, building houses, accumulating things - gone in what feels like an hour. This is meant to shake you awake. Your entire life will compress into what feels like a brief moment. What are you doing with this 'hour'?",
                    ur: "اس پر غور سے سوچیں: اللہ کہتا ہے کہ جب آپ دوبارہ زندہ کیے جائیں گے، تو ایسا محسوس ہوگا جیسے آپ ایک دن کے صرف ایک گھنٹے کے لیے جیے! آپ 50، 60، 70 سال جیے ہوں گے - لیکن یہ سب صرف ایک گھنٹے کی طرح محسوس ہوگا۔ وہ تمام دہائیاں جو آپ نے پیسے کے پیچھے بھاگنے، گھر بنانے، چیزیں جمع کرنے میں گزاریں - ایک گھنٹے کی طرح محسوس ہونے والے وقت میں ختم۔ یہ آپ کو جگانے کے لیے ہے۔ آپ کی پوری زندگی ایک مختصر لمحے کی طرح سکڑ جائے گی۔ آپ اس 'گھنٹے' کے ساتھ کیا کر رہے ہیں؟"
                }
            },
            {
                type: "ayah",
                surah: 23,
                ayahNumber: 112,
                surahName: "Al-Mu'minun",
                arabic: "قَالَ كَمْ لَبِثْتُمْ فِى ٱلْأَرْضِ عَدَدَ سِنِينَ",
                wbw: [
                    {
                        arabic: "قَالَ",
                        transliteration: "qaala",
                        en: "He will say",
                        ur: "وہ کہے گا",
                        root: "ق و ل",
                        rootMeaning: "to say, speak"
                    },
                    {
                        arabic: "كَمْ",
                        transliteration: "kam",
                        en: "how many",
                        ur: "کتنے",
                        root: "Interrogative",
                        rootMeaning: "how many, how much"
                    },
                    {
                        arabic: "لَبِثْتُمْ",
                        transliteration: "labithtum",
                        en: "you remained",
                        ur: "تم ٹھہرے",
                        root: "ل ب ث",
                        rootMeaning: "to remain, stay"
                    },
                    {
                        arabic: "فِى",
                        transliteration: "fee",
                        en: "in",
                        ur: "میں",
                        root: "Preposition",
                        rootMeaning: "in, within"
                    },
                    {
                        arabic: "ٱلْأَرْضِ",
                        transliteration: "al-ardi",
                        en: "the earth",
                        ur: "زمین",
                        root: "ا ر ض",
                        rootMeaning: "earth, land"
                    },
                    {
                        arabic: "عَدَدَ",
                        transliteration: "'adada",
                        en: "number of",
                        ur: "تعداد",
                        root: "ع د د",
                        rootMeaning: "number, count"
                    },
                    {
                        arabic: "سِنِينَ",
                        transliteration: "sineena",
                        en: "years",
                        ur: "سالوں",
                        root: "س ن و",
                        rootMeaning: "years"
                    }
                ],
                translation: {
                    en: "He will say: 'How many years did you remain on earth in number?'",
                    ur: "وہ کہے گا: 'تم زمین پر کتنے سال رہے تعداد میں؟'"
                }
            },
            {
                type: "ayah",
                surah: 23,
                ayahNumber: 113,
                surahName: "Al-Mu'minun",
                arabic: "قَالُوا۟ لَبِثْنَا يَوْمًا أَوْ بَعْضَ يَوْمٍۢ فَسْـَٔلِ ٱلْعَآدِّينَ",
                wbw: [
                    {
                        arabic: "قَالُوا۟",
                        transliteration: "qaaloo",
                        en: "They will say",
                        ur: "وہ کہیں گے",
                        root: "ق و ل",
                        rootMeaning: "to say"
                    },
                    {
                        arabic: "لَبِثْنَا",
                        transliteration: "labithnaa",
                        en: "we remained",
                        ur: "ہم ٹھہرے",
                        root: "ل ب ث",
                        rootMeaning: "to remain"
                    },
                    {
                        arabic: "يَوْمًا",
                        transliteration: "yawman",
                        en: "a day",
                        ur: "ایک دن",
                        root: "ی و م",
                        rootMeaning: "day"
                    },
                    {
                        arabic: "أَوْ",
                        transliteration: "aw",
                        en: "or",
                        ur: "یا",
                        root: "Conjunction",
                        rootMeaning: "or"
                    },
                    {
                        arabic: "بَعْضَ",
                        transliteration: "ba'da",
                        en: "part of",
                        ur: "کچھ حصہ",
                        root: "ب ع ض",
                        rootMeaning: "part, portion"
                    },
                    {
                        arabic: "يَوْمٍۢ",
                        transliteration: "yawmin",
                        en: "a day",
                        ur: "دن کا",
                        root: "ی و م",
                        rootMeaning: "day"
                    },
                    {
                        arabic: "فَسْـَٔلِ",
                        transliteration: "fas'ali",
                        en: "so ask",
                        ur: "تو پوچھو",
                        root: "س ء ل",
                        rootMeaning: "to ask"
                    },
                    {
                        arabic: "ٱلْعَآدِّينَ",
                        transliteration: "al-'aaddeena",
                        en: "those who keep count",
                        ur: "گننے والوں سے",
                        root: "ع د د",
                        rootMeaning: "those who count"
                    }
                ],
                translation: {
                    en: "They will say: 'We remained a day or part of a day, so ask those who keep count.'",
                    ur: "وہ کہیں گے: 'ہم ایک دن یا دن کا کچھ حصہ ٹھہرے، تو ان سے پوچھو جو گنتی رکھتے ہیں۔'"
                }
            },
            {
                type: "ayah",
                surah: 23,
                ayahNumber: 114,
                surahName: "Al-Mu'minun",
                arabic: "قَالَ إِن لَّبِثْتُمْ إِلَّا قَلِيلًۭا ۖ لَّوْ أَنَّكُمْ كُنتُمْ تَعْلَمُونَ",
                wbw: [
                    {
                        arabic: "قَالَ",
                        transliteration: "qaala",
                        en: "He will say",
                        ur: "وہ کہے گا",
                        root: "ق و ل",
                        rootMeaning: "to say"
                    },
                    {
                        arabic: "إِن",
                        transliteration: "in",
                        en: "not",
                        ur: "نہیں",
                        root: "Negation",
                        rootMeaning: "not"
                    },
                    {
                        arabic: "لَّبِثْتُمْ",
                        transliteration: "labithtum",
                        en: "you remained",
                        ur: "تم ٹھہرے",
                        root: "ل ب ث",
                        rootMeaning: "to remain"
                    },
                    {
                        arabic: "إِلَّا",
                        transliteration: "illa",
                        en: "except",
                        ur: "سوائے",
                        root: "Exception",
                        rootMeaning: "except, only"
                    },
                    {
                        arabic: "قَلِيلًۭا",
                        transliteration: "qaleelan",
                        en: "a little",
                        ur: "تھوڑا",
                        root: "ق ل ل",
                        rootMeaning: "little, few"
                    },
                    {
                        arabic: "لَّوْ",
                        transliteration: "law",
                        en: "if only",
                        ur: "کاش",
                        root: "Conditional",
                        rootMeaning: "if only"
                    },
                    {
                        arabic: "أَنَّكُمْ",
                        transliteration: "annakum",
                        en: "that you",
                        ur: "کہ تم",
                        root: "Particle",
                        rootMeaning: "that you"
                    },
                    {
                        arabic: "كُنتُمْ",
                        transliteration: "kuntum",
                        en: "you were",
                        ur: "تم تھے",
                        root: "ك و ن",
                        rootMeaning: "to be"
                    },
                    {
                        arabic: "تَعْلَمُونَ",
                        transliteration: "ta'lamoon",
                        en: "you knew",
                        ur: "تم جانتے",
                        root: "ع ل م",
                        rootMeaning: "to know"
                    }
                ],
                translation: {
                    en: "He will say: 'You remained not but a little - if only you had known!'",
                    ur: "وہ کہے گا: 'تم صرف تھوڑا ہی ٹھہرے - کاش تم جانتے ہوتے!'"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "This is a DIRECT conversation between Allah and people on the Day of Judgment! Allah asks: 'How long were you on earth?' They answer: 'A day or part of a day!' People who lived 60, 70, 80 years will say they stayed only ONE DAY! Then Allah delivers the crushing truth: 'You stayed only a LITTLE - if only you had known!' The phrase 'if only you had known' is full of regret. IF ONLY they had realized in their earthly life how SHORT it really was, they would have spent it differently. But now it's too late.",
                    ur: "یہ قیامت کے دن اللہ اور لوگوں کے درمیان براہ راست گفتگو ہے! اللہ پوچھتا ہے: 'تم زمین پر کتنے عرصے تھے؟' وہ جواب دیتے ہیں: 'ایک دن یا دن کا کچھ حصہ!' جو لوگ 60، 70، 80 سال جیے وہ کہیں گے کہ وہ صرف ایک دن ٹھہرے! پھر اللہ کچل دینے والی سچائی بیان کرتا ہے: 'تم صرف تھوڑا ہی ٹھہرے - کاش تم جانتے ہوتے!' جملہ 'کاش تم جانتے ہوتے' افسوس سے بھرا ہے۔ کاش انہیں اپنی زمینی زندگی میں احساس ہوتا کہ یہ واقعی کتنی مختصر تھی، تو وہ اسے مختلف طریقے سے گزارتے۔ لیکن اب بہت دیر ہو چکی ہے۔"
                }
            },
            {
                type: "ayah",
                surah: 35,
                ayahNumber: 37,
                surahName: "Fatir",
                arabic: "وَهُمْ يَصْطَرِخُونَ فِيهَا رَبَّنَآ أَخْرِجْنَا نَعْمَلْ صَـٰلِحًا غَيْرَ ٱلَّذِى كُنَّا نَعْمَلُ ۚ أَوَلَمْ نُعَمِّرْكُم مَّا يَتَذَكَّرُ فِيهِ مَن تَذَكَّرَ وَجَآءَكُمُ ٱلنَّذِيرُ",
                wbw: [
                    {
                        arabic: "وَهُمْ",
                        transliteration: "wa hum",
                        en: "And they",
                        ur: "اور وہ",
                        root: "Pronoun",
                        rootMeaning: "they"
                    },
                    {
                        arabic: "يَصْطَرِخُونَ",
                        transliteration: "yastarik hoon",
                        en: "will cry out",
                        ur: "چیخیں گے",
                        root: "ص ر خ",
                        rootMeaning: "to cry out, scream"
                    },
                    {
                        arabic: "فِيهَا",
                        transliteration: "feehaa",
                        en: "therein",
                        ur: "اس میں",
                        root: "Preposition",
                        rootMeaning: "in it"
                    },
                    {
                        arabic: "رَبَّنَآ",
                        transliteration: "rabbanaa",
                        en: "Our Lord",
                        ur: "اے ہمارے رب",
                        root: "ر ب ب",
                        rootMeaning: "our Lord"
                    },
                    {
                        arabic: "أَخْرِجْنَا",
                        transliteration: "akhrijnaa",
                        en: "remove us",
                        ur: "ہمیں نکال دے",
                        root: "خ ر ج",
                        rootMeaning: "to remove, bring out"
                    },
                    {
                        arabic: "نَعْمَلْ",
                        transliteration: "na'mal",
                        en: "we will do",
                        ur: "ہم کریں گے",
                        root: "ع م ل",
                        rootMeaning: "to do, work"
                    },
                    {
                        arabic: "صَـٰلِحًا",
                        transliteration: "saalihan",
                        en: "righteous",
                        ur: "نیک",
                        root: "ص ل ح",
                        rootMeaning: "righteous, good"
                    },
                    {
                        arabic: "غَيْرَ",
                        transliteration: "ghayra",
                        en: "other than",
                        ur: "اس کے علاوہ",
                        root: "غ ی ر",
                        rootMeaning: "other than"
                    },
                    {
                        arabic: "ٱلَّذِى",
                        transliteration: "alladhee",
                        en: "what",
                        ur: "جو",
                        root: "Relative",
                        rootMeaning: "that which"
                    },
                    {
                        arabic: "كُنَّا",
                        transliteration: "kunnaa",
                        en: "we were",
                        ur: "ہم تھے",
                        root: "ك و ن",
                        rootMeaning: "to be"
                    },
                    {
                        arabic: "نَعْمَلُ",
                        transliteration: "na'malu",
                        en: "doing",
                        ur: "کرتے",
                        root: "ع م ل",
                        rootMeaning: "to do"
                    },
                    {
                        arabic: "أَوَلَمْ",
                        transliteration: "awa lam",
                        en: "Did We not",
                        ur: "کیا ہم نے نہیں",
                        root: "Question",
                        rootMeaning: "did not"
                    },
                    {
                        arabic: "نُعَمِّرْكُم",
                        transliteration: "nu'ammirkum",
                        en: "grant you life",
                        ur: "تمہیں عمر دی",
                        root: "ع م ر",
                        rootMeaning: "to give life, grant age"
                    },
                    {
                        arabic: "مَّا",
                        transliteration: "maa",
                        en: "enough",
                        ur: "کافی",
                        root: "Relative",
                        rootMeaning: "that which"
                    },
                    {
                        arabic: "يَتَذَكَّرُ",
                        transliteration: "yatadhakkaru",
                        en: "would remember",
                        ur: "یاد کرتا",
                        root: "ذ ك ر",
                        rootMeaning: "to remember"
                    },
                    {
                        arabic: "فِيهِ",
                        transliteration: "feehi",
                        en: "therein",
                        ur: "اس میں",
                        root: "Preposition",
                        rootMeaning: "in it"
                    },
                    {
                        arabic: "مَن",
                        transliteration: "man",
                        en: "whoever",
                        ur: "جو",
                        root: "Relative",
                        rootMeaning: "whoever"
                    },
                    {
                        arabic: "تَذَكَّرَ",
                        transliteration: "tadhakkara",
                        en: "would remember",
                        ur: "یاد کرتا",
                        root: "ذ ك ر",
                        rootMeaning: "to remember"
                    },
                    {
                        arabic: "وَجَآءَكُمُ",
                        transliteration: "wa jaa'akum",
                        en: "and came to you",
                        ur: "اور آیا تمہارے پاس",
                        root: "ج ی ء",
                        rootMeaning: "to come"
                    },
                    {
                        arabic: "ٱلنَّذِيرُ",
                        transliteration: "an-nadheeru",
                        en: "the warner",
                        ur: "ڈرانے والا",
                        root: "ن ذ ر",
                        rootMeaning: "warner"
                    }
                ],
                translation: {
                    en: "And they will cry out therein: 'Our Lord, remove us; we will do righteousness - other than what we were doing!' But did We not grant you life long enough for whoever would remember therein to remember? And the warner had come to you.",
                    ur: "اور وہ اس میں چیخیں گے: 'اے ہمارے رب، ہمیں نکال دے؛ ہم نیک عمل کریں گے - اس سے مختلف جو ہم کرتے تھے!' لیکن کیا ہم نے تمہیں اتنی عمر نہیں دی کہ جو یاد کرنا چاہتا اس میں یاد کر لیتا؟ اور ڈرانے والا بھی تمہارے پاس آیا تھا۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "THIS IS THE MOST POWERFUL AYAH! People in Hell will BEG Allah: 'Give us another chance! We'll do good this time!' But Allah's response is CRUSHING: 'Did We not give you life LONG ENOUGH?' This question destroys all excuses. You had 40 years? 50 years? 60 years? That was ENOUGH! Anyone who wanted to think and remember had ENOUGH time. And not only that - the warner (the Quran) came to you! You had time, you had guidance, but you wasted both. Now taste the result. No second chances. This should terrify us. Are we using our time now?",
                    ur: "یہ سب سے طاقتور آیت ہے! جہنم میں لوگ اللہ سے التجا کریں گے: 'ہمیں ایک اور موقع دو! ہم اس بار اچھا کریں گے!' لیکن اللہ کا جواب کچلنے والا ہے: 'کیا ہم نے تمہیں کافی عمر نہیں دی؟' یہ سوال تمام عذر ختم کر دیتا ہے۔ آپ کے پاس 40 سال تھے؟ 50 سال؟ 60 سال؟ یہ کافی تھا! جو کوئی سوچنا اور یاد کرنا چاہتا تھا اس کے پاس کافی وقت تھا۔ اور نہ صرف یہ - ڈرانے والا (قرآن) تمہارے پاس آیا! تمہارے پاس وقت تھا، تمہارے پاس ہدایت تھی، لیکن تم نے دونوں ضائع کر دیے۔ اب نتیجہ چکھو۔ کوئی دوسرا موقع نہیں۔ یہ ہمیں خوفزدہ کرنا چاہیے۔ کیا ہم اب اپنا وقت استعمال کر رہے ہیں؟"
                }
            },
            {
                type: "example",
                content: {
                    en: "A successful businessman, 65 years old. Spent 40 years building his company. Worked 12-hour days. Accumulated wealth, properties, status. Prayed occasionally but never really pondered the Quran. Always said 'I'll focus on religion when I retire.' One day, heart attack. On his deathbed, his entire 65 years flash before him like a dream. He thinks: 'Where did all that time go? I spent decades chasing numbers in bank accounts. I built buildings that I can't take with me. I accumulated wealth I can't use now. But I neglected what Allah told me in the Quran. I didn't prepare for THIS moment.' Now imagine him on the Day of Judgment. Allah asks: 'How long were you on earth?' He says: 'It felt like... one day. Maybe less. It's all gone now like it never happened.' Then Allah asks: 'Did I not give you 65 years? Did the Quran not come to you? Did you not have every Friday to hear reminders? What stopped you?' No answer. Just regret. This could be YOU. Are you that businessman? How old are you now? 30? 40? 50? Those years will vanish like they never existed. What are you doing with them?",
                    ur: "ایک کامیاب تاجر، 65 سال کا۔ 40 سال اپنی کمپنی بنانے میں صرف کیے۔ 12 گھنٹے کام کیا۔ دولت، جائیدادیں، حیثیت جمع کی۔ کبھی کبھار نماز پڑھی لیکن قرآن پر کبھی واقعی غور نہیں کیا۔ ہمیشہ کہتا 'ریٹائرمنٹ کے بعد دین پر توجہ دوں گا۔' ایک دن، دل کا دورہ۔ موت کے بستر پر، اس کے پورے 65 سال خواب کی طرح اس کے سامنے آتے ہیں۔ وہ سوچتا ہے: 'وہ سارا وقت کہاں گیا؟ میں نے دہائیاں بینک اکاؤنٹس میں نمبروں کے پیچھے بھاگنے میں گزاریں۔ میں نے عمارتیں بنائیں جو میں اپنے ساتھ نہیں لے جا سکتا۔ میں نے دولت جمع کی جو اب استعمال نہیں کر سکتا۔ لیکن میں نے اس کو نظر انداز کیا جو اللہ نے مجھے قرآن میں بتایا۔ میں نے اس لمحے کی تیاری نہیں کی۔' اب قیامت کے دن اس کا تصور کریں۔ اللہ پوچھتا ہے: 'تم زمین پر کتنے عرصے تھے؟' وہ کہتا ہے: 'ایسا لگا جیسے... ایک دن۔ شاید کم۔ اب سب ختم ہو گیا جیسے کبھی ہوا ہی نہیں۔' پھر اللہ پوچھتا ہے: 'کیا میں نے تمہیں 65 سال نہیں دیے؟ کیا قرآن تمہارے پاس نہیں آیا؟ کیا ہر جمعہ کو تمہیں یاد دہانی نہیں ملتی تھی؟ تمہیں کس چیز نے روکا؟' کوئی جواب نہیں۔ صرف افسوس۔ یہ تم ہو سکتے ہو۔ کیا تم وہ تاجر ہو؟ اب تمہاری عمر کیا ہے؟ 30؟ 40؟ 50؟ وہ سال ایسے غائب ہو جائیں گے جیسے وہ کبھی تھے ہی نہیں۔ تم ان کے ساتھ کیا کر رہے ہو؟"
                }
            },
            {
                type: "reflection",
                questions: [
                    {
                        en: "If you knew you would die tomorrow, what would you regret not doing today? Why aren't you doing it now?",
                        ur: "اگر آپ جانتے کہ آپ کل مر جائیں گے، تو آج کیا کرنے کا افسوس ہوگا؟ اب کیوں نہیں کر رہے؟"
                    },
                    {
                        en: "When you're 70 years old looking back, will you wish you spent less time working and more time understanding the Quran? Then why not change NOW?",
                        ur: "جب آپ 70 سال کے ہوں گے اور پیچھے دیکھیں گے، کیا آپ چاہیں گے کہ آپ نے کم وقت کام میں اور زیادہ وقت قرآن کو سمجھنے میں صرف کیا ہوتا؟ تو اب کیوں نہیں بدلتے؟"
                    },
                    {
                        en: "Imagine it's the Day of Judgment. Allah shows you a replay of your last week. How much time did you spend on dunya vs. preparing for akhirah? What does that ratio tell you?",
                        ur: "تصور کریں کہ یہ قیامت کا دن ہے۔ اللہ آپ کو آپ کے گزشتہ ہفتے کا ری پلے دکھاتا ہے۔ آپ نے دنیا پر کتنا وقت صرف کیا بمقابلہ آخرت کی تیاری؟ یہ تناسب آپ کو کیا بتاتا ہے؟"
                    },
                    {
                        en: "If someone gave you $1 million but took away 10 years of your life, would you accept? No? Then why do you waste years chasing money that won't benefit you after death?",
                        ur: "اگر کوئی آپ کو 10 لاکھ ڈالر دے لیکن آپ کی زندگی کے 10 سال لے لے، کیا آپ قبول کریں گے؟ نہیں؟ تو پھر آپ پیسے کے پیچھے سال کیوں ضائع کرتے ہیں جو موت کے بعد آپ کو فائدہ نہیں دے گا؟"
                    },
                    {
                        en: "Your entire life will feel like one day on the Day of Judgment. When that moment comes, will you be satisfied with how you spent it? Or will you be begging for more time?",
                        ur: "قیامت کے دن آپ کی پوری زندگی ایک دن کی طرح محسوس ہوگی۔ جب وہ لمحہ آئے گا، کیا آپ اس سے مطمئن ہوں گے کہ آپ نے اسے کیسے گزارا؟ یا آپ مزید وقت کی بھیک مانگ رہے ہوں گے؟"
                    }
                ]
            }
        ]
    },
    // TOPIC 2: PURPOSE OF CREATION - Why Are We Here?
    {
        id: 2,
        title: {
            en: "Why Are We Here? - The Purpose of Creation",
            ur: "ہم یہاں کیوں ہیں؟ - تخلیق کا مقصد"
        },
        sections: [
            {
                type: "intro",
                content: {
                    en: "Now that you've woken up to how short life is, the next question is: WHY are you here? What's the PURPOSE of this brief existence? Most people think success means wealth, career, family, status. But Allah tells us a completely different purpose. You were NOT created to chase dunya. You were NOT created to accumulate wealth. You were created for ONE specific purpose - and on the Day of Judgment, you will be judged on whether you fulfilled that purpose or not. Everything else is secondary. Let's see what Allah says.",
                    ur: "اب جب آپ جاگ گئے ہیں کہ زندگی کتنی مختصر ہے، تو اگلا سوال یہ ہے: آپ یہاں کیوں ہیں؟ اس مختصر وجود کا مقصد کیا ہے؟ زیادہ تر لوگ سوچتے ہیں کہ کامیابی کا مطلب ہے دولت، کیریئر، خاندان، حیثیت۔ لیکن اللہ ہمیں بالکل مختلف مقصد بتاتا ہے۔ آپ کو دنیا کے پیچھے بھاگنے کے لیے نہیں بنایا گیا۔ آپ کو دولت جمع کرنے کے لیے نہیں بنایا گیا۔ آپ کو ایک خاص مقصد کے لیے بنایا گیا - اور قیامت کے دن، آپ سے پوچھا جائے گا کہ آیا آپ نے وہ مقصد پورا کیا یا نہیں۔ باقی سب ثانوی ہے۔ آئیں دیکھیں اللہ کیا کہتا ہے۔"
                }
            },
            {
                type: "ayah",
                surah: 51,
                ayahNumber: 56,
                surahName: "Adh-Dhariyat",
                arabic: "وَمَا خَلَقْتُ ٱلْجِنَّ وَٱلْإِنسَ إِلَّا لِيَعْبُدُونِ",
                wbw: [
                    {
                        arabic: "وَمَا",
                        transliteration: "wa maa",
                        en: "And not",
                        ur: "اور نہیں",
                        root: "Conjunction + negation",
                        rootMeaning: "and not"
                    },
                    {
                        arabic: "خَلَقْتُ",
                        transliteration: "khalaqtu",
                        en: "I created",
                        ur: "میں نے پیدا کیا",
                        root: "خ ل ق",
                        rootMeaning: "to create"
                    },
                    {
                        arabic: "ٱلْجِنَّ",
                        transliteration: "al-jinna",
                        en: "the jinn",
                        ur: "جنوں کو",
                        root: "ج ن ن",
                        rootMeaning: "jinn, unseen beings"
                    },
                    {
                        arabic: "وَٱلْإِنسَ",
                        transliteration: "wal-insa",
                        en: "and mankind",
                        ur: "اور انسانوں کو",
                        root: "ا ن س",
                        rootMeaning: "mankind, humans"
                    },
                    {
                        arabic: "إِلَّا",
                        transliteration: "illa",
                        en: "except",
                        ur: "سوائے",
                        root: "Exception",
                        rootMeaning: "except, only"
                    },
                    {
                        arabic: "لِيَعْبُدُونِ",
                        transliteration: "liya'budoon(i)",
                        en: "that they worship Me",
                        ur: "کہ وہ میری عبادت کریں",
                        root: "ع ب د",
                        rootMeaning: "to worship, serve"
                    }
                ],
                translation: {
                    en: "And I did not create the jinn and mankind except to worship Me.",
                    ur: "اور میں نے جنوں اور انسانوں کو نہیں پیدا کیا مگر اس لیے کہ وہ میری عبادت کریں۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "This is THE foundational ayah! Allah directly tells you WHY you exist: To WORSHIP Him. Not to accumulate wealth. Not to build empires. Not to chase status. To WORSHIP. Everything else - family, career, money - is secondary. This doesn't mean abandon everything; it means PRIORITIZE worship. Your job, your family, your life - all must serve this primary purpose. If your career prevents you from worshipping Allah properly, your career is wrong. If your pursuit of wealth makes you neglect Quran, you've failed your purpose. Simple and clear.",
                    ur: "یہ بنیادی آیت ہے! اللہ آپ کو براہ راست بتاتا ہے کہ آپ کیوں موجود ہیں: اس کی عبادت کے لیے۔ دولت جمع کرنے کے لیے نہیں۔ سلطنتیں بنانے کے لیے نہیں۔ حیثیت کے پیچھے بھاگنے کے لیے نہیں۔ عبادت کے لیے۔ باقی سب - خاندان، کیریئر، پیسہ - ثانوی ہے۔ اس کا مطلب یہ نہیں کہ سب کچھ چھوڑ دو؛ اس کا مطلب ہے عبادت کو ترجیح دو۔ آپ کی نوکری، آپ کا خاندان، آپ کی زندگی - سب کو اس بنیادی مقصد کی خدمت کرنی چاہیے۔ اگر آپ کا کیریئر آپ کو اللہ کی عبادت سے روکتا ہے، تو آپ کا کیریئر غلط ہے۔ اگر آپ کی دولت کی تلاش آپ کو قرآن سے غافل کرتی ہے، تو آپ نے اپنا مقصد کھو دیا۔ سادہ اور واضح۔"
                }
            },
            {
                type: "ayah",
                surah: 67,
                ayahNumber: 2,
                surahName: "Al-Mulk",
                arabic: "ٱلَّذِى خَلَقَ ٱلْمَوْتَ وَٱلْحَيَوٰةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًۭا ۚ وَهُوَ ٱلْعَزِيزُ ٱلْغَفُورُ",
                wbw: [
                    {
                        arabic: "ٱلَّذِى",
                        transliteration: "alladhee",
                        en: "The One Who",
                        ur: "وہ جس نے",
                        root: "Relative",
                        rootMeaning: "the one who"
                    },
                    {
                        arabic: "خَلَقَ",
                        transliteration: "khalaqa",
                        en: "created",
                        ur: "پیدا کیا",
                        root: "خ ل ق",
                        rootMeaning: "to create"
                    },
                    {
                        arabic: "ٱلْمَوْتَ",
                        transliteration: "al-mawta",
                        en: "death",
                        ur: "موت",
                        root: "م و ت",
                        rootMeaning: "death"
                    },
                    {
                        arabic: "وَٱلْحَيَوٰةَ",
                        transliteration: "wal-hayaata",
                        en: "and life",
                        ur: "اور زندگی",
                        root: "ح ی و",
                        rootMeaning: "life"
                    },
                    {
                        arabic: "لِيَبْلُوَكُمْ",
                        transliteration: "liyabluwakum",
                        en: "to test you",
                        ur: "تمہیں آزمانے کے لیے",
                        root: "ب ل و",
                        rootMeaning: "to test, try"
                    },
                    {
                        arabic: "أَيُّكُمْ",
                        transliteration: "ayyukum",
                        en: "which of you",
                        ur: "تم میں سے کون",
                        root: "Interrogative",
                        rootMeaning: "which of you"
                    },
                    {
                        arabic: "أَحْسَنُ",
                        transliteration: "ahsanu",
                        en: "best",
                        ur: "بہترین",
                        root: "ح س ن",
                        rootMeaning: "best, better, good"
                    },
                    {
                        arabic: "عَمَلًۭا",
                        transliteration: "amalan",
                        en: "in deed",
                        ur: "عمل میں",
                        root: "ع م ل",
                        rootMeaning: "deed, work, action"
                    },
                    {
                        arabic: "وَهُوَ",
                        transliteration: "wa huwa",
                        en: "And He",
                        ur: "اور وہ",
                        root: "Pronoun",
                        rootMeaning: "and He"
                    },
                    {
                        arabic: "ٱلْعَزِيزُ",
                        transliteration: "al-'azeez",
                        en: "the Almighty",
                        ur: "زبردست",
                        root: "ع ز ز",
                        rootMeaning: "mighty, strong"
                    },
                    {
                        arabic: "ٱلْغَفُورُ",
                        transliteration: "al-ghafoor",
                        en: "the Forgiving",
                        ur: "بخشنے والا",
                        root: "غ ف ر",
                        rootMeaning: "forgiving"
                    }
                ],
                translation: {
                    en: "He who created death and life to test you which of you is best in deed. And He is the Almighty, the Forgiving.",
                    ur: "جس نے موت اور زندگی کو پیدا کیا تاکہ تمہیں آزمائے کہ تم میں سے کون عمل میں بہتر ہے۔ اور وہ زبردست، بخشنے والا ہے۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "Life is a TEST! Not a vacation, not an opportunity to accumulate, but a TEST. Allah created death and life specifically to test who is BEST in deeds. Notice: not who does the MOST deeds, but who is BEST. Quality over quantity. You're being tested every moment. Your response to hardship - test. Your use of wealth - test. How you treat others - test. Whether you follow Quran or traditions - test. Everything is a test. Are you passing or failing?",
                    ur: "زندگی ایک امتحان ہے! چھٹی نہیں، جمع کرنے کا موقع نہیں، بلکہ ایک امتحان۔ اللہ نے موت اور زندگی خاص طور پر اس لیے بنائی تاکہ آزمائے کہ کون اعمال میں بہترین ہے۔ نوٹ کریں: نہ کہ کون سب سے زیادہ اعمال کرتا ہے، بلکہ کون بہترین ہے۔ مقدار پر معیار۔ آپ کا ہر لمحے امتحان لیا جا رہا ہے۔ مشکلات کا آپ کا جواب - امتحان۔ دولت کا استعمال - امتحان۔ دوسروں کے ساتھ سلوک - امتحان۔ آیا آپ قرآن کی پیروی کرتے ہیں یا روایات کی - امتحان۔ سب کچھ امتحان ہے۔ کیا آپ پاس ہو رہے ہیں یا فیل؟"
                }
            },
            {
                type: "ayah",
                surah: 103,
                ayahNumber: 1,
                surahName: "Al-Asr",
                arabic: "وَٱلْعَصْرِ",
                wbw: [
                    {
                        arabic: "وَٱلْعَصْرِ",
                        transliteration: "wal-'asr",
                        en: "By time",
                        ur: "قسم ہے عصر کی",
                        root: "ع ص ر",
                        rootMeaning: "time, afternoon, era"
                    }
                ],
                translation: {
                    en: "By time,",
                    ur: "قسم ہے وقت کی،"
                }
            },
            {
                type: "ayah",
                surah: 103,
                ayahNumber: 2,
                surahName: "Al-Asr",
                arabic: "إِنَّ ٱلْإِنسَـٰنَ لَفِى خُسْرٍ",
                wbw: [
                    {
                        arabic: "إِنَّ",
                        transliteration: "inna",
                        en: "Indeed",
                        ur: "بیشک",
                        root: "Emphasis",
                        rootMeaning: "indeed, verily"
                    },
                    {
                        arabic: "ٱلْإِنسَـٰنَ",
                        transliteration: "al-insaana",
                        en: "mankind",
                        ur: "انسان",
                        root: "ا ن س",
                        rootMeaning: "mankind, human"
                    },
                    {
                        arabic: "لَفِى",
                        transliteration: "lafee",
                        en: "surely in",
                        ur: "یقیناً میں",
                        root: "Preposition",
                        rootMeaning: "in"
                    },
                    {
                        arabic: "خُسْرٍ",
                        transliteration: "khusr",
                        en: "loss",
                        ur: "نقصان",
                        root: "خ س ر",
                        rootMeaning: "loss, ruin"
                    }
                ],
                translation: {
                    en: "Indeed, mankind is in loss,",
                    ur: "بیشک انسان خسارے میں ہے،"
                }
            },
            {
                type: "ayah",
                surah: 103,
                ayahNumber: 3,
                surahName: "Al-Asr",
                arabic: "إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ وَتَوَاصَوْا۟ بِٱلْحَقِّ وَتَوَاصَوْا۟ بِٱلصَّبْرِ",
                wbw: [
                    {
                        arabic: "إِلَّا",
                        transliteration: "illa",
                        en: "Except",
                        ur: "سوائے",
                        root: "Exception",
                        rootMeaning: "except"
                    },
                    {
                        arabic: "ٱلَّذِينَ",
                        transliteration: "alladheena",
                        en: "those who",
                        ur: "ان کے جو",
                        root: "Relative",
                        rootMeaning: "those who"
                    },
                    {
                        arabic: "ءَامَنُوا۟",
                        transliteration: "aamanoo",
                        en: "believe",
                        ur: "ایمان لائے",
                        root: "ء م ن",
                        rootMeaning: "to believe"
                    },
                    {
                        arabic: "وَعَمِلُوا۟",
                        transliteration: "wa 'amiloo",
                        en: "and do",
                        ur: "اور کیے",
                        root: "ع م ل",
                        rootMeaning: "to do, work"
                    },
                    {
                        arabic: "ٱلصَّـٰلِحَـٰتِ",
                        transliteration: "as-saalihaati",
                        en: "righteous deeds",
                        ur: "نیک اعمال",
                        root: "ص ل ح",
                        rootMeaning: "righteous, good"
                    },
                    {
                        arabic: "وَتَوَاصَوْا۟",
                        transliteration: "wa tawaasaw",
                        en: "and advised each other",
                        ur: "اور نصیحت کی ایک دوسرے کو",
                        root: "و ص ی",
                        rootMeaning: "to advise, recommend"
                    },
                    {
                        arabic: "بِٱلْحَقِّ",
                        transliteration: "bil-haqq",
                        en: "to the truth",
                        ur: "حق کی",
                        root: "ح ق ق",
                        rootMeaning: "truth, right"
                    },
                    {
                        arabic: "وَتَوَاصَوْا۟",
                        transliteration: "wa tawaasaw",
                        en: "and advised each other",
                        ur: "اور نصیحت کی",
                        root: "و ص ی",
                        rootMeaning: "to advise"
                    },
                    {
                        arabic: "بِٱلصَّبْرِ",
                        transliteration: "bis-sabr",
                        en: "to patience",
                        ur: "صبر کی",
                        root: "ص ب ر",
                        rootMeaning: "patience, perseverance"
                    }
                ],
                translation: {
                    en: "Except for those who believe and do righteous deeds and advise each other to truth and advise each other to patience.",
                    ur: "سوائے ان لوگوں کے جو ایمان لائے اور نیک اعمال کیے اور ایک دوسرے کو حق کی نصیحت کی اور ایک دوسرے کو صبر کی نصیحت کی۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "This tiny surah contains the FORMULA for success! Allah swears by TIME itself and declares: ALL of mankind is in LOSS - except those who meet FOUR conditions: (1) Believe (true faith, not just words), (2) Do righteous deeds (action, not just intention), (3) Advise each other to truth (spread Quranic guidance), (4) Advise each other to patience (support each other through difficulties). Miss even ONE of these four and you're in loss. This is your checklist. How many are you fulfilling?",
                    ur: "یہ چھوٹی سورہ کامیابی کا فارمولا رکھتی ہے! اللہ وقت کی قسم کھاتا ہے اور اعلان کرتا ہے: تمام انسان نقصان میں ہیں - سوائے ان کے جو چار شرطیں پوری کرتے ہیں: (1) ایمان (سچا ایمان، صرف الفاظ نہیں)، (2) نیک اعمال (عمل، صرف نیت نہیں)، (3) ایک دوسرے کو حق کی نصیحت (قرآنی رہنمائی پھیلانا)، (4) ایک دوسرے کو صبر کی نصیحت (مشکلات میں ایک دوسرے کی مدد)۔ ان چار میں سے ایک بھی چھوٹ گیا تو آپ نقصان میں ہیں۔ یہ آپ کی چیک لسٹ ہے۔ آپ کتنی پوری کر رہے ہیں؟"
                }
            },
            {
                type: "example",
                content: {
                    en: "A doctor, highly successful, helps hundreds of patients, earns well, provides for family. Dies at 55. At judgment, Allah shows him his life. He says: 'I helped so many people! I was a good person!' Allah asks: 'Did you fulfill your PURPOSE? You were created to worship Me - did you? You accumulated wealth - but did you spend it in My way? You helped people - but did you guide them to My Quran? You prayed sometimes - but did you PRIORITIZE worship over career?' The doctor realizes: He succeeded in his career but FAILED in his actual purpose. He was so busy being a 'good doctor' that he forgot why Allah created him. His patients will not help him now. His degrees will not help. Only his worship and submission to Allah's guidance would have helped. Don't be that doctor.",
                    ur: "ایک ڈاکٹر، بہت کامیاب، سینکڑوں مریضوں کی مدد کرتا ہے، اچھی کمائی کرتا ہے، خاندان کی دیکھ بھال کرتا ہے۔ 55 سال کی عمر میں مر جاتا ہے۔ فیصلے پر، اللہ اسے اس کی زندگی دکھاتا ہے۔ وہ کہتا ہے: 'میں نے بہت سے لوگوں کی مدد کی! میں اچھا انسان تھا!' اللہ پوچھتا ہے: 'کیا تم نے اپنا مقصد پورا کیا؟ تمہیں میری عبادت کے لیے بنایا گیا تھا - کیا تم نے کیا؟ تم نے دولت جمع کی - لیکن کیا تم نے میرے راستے میں خرچ کی؟ تم نے لوگوں کی مدد کی - لیکن کیا تم نے انہیں میرے قرآن کی طرف رہنمائی کی؟ تم نے کبھی کبھار نماز پڑھی - لیکن کیا تم نے کیریئر پر عبادت کو ترجیح دی؟' ڈاکٹر کو احساس ہوتا ہے: وہ اپنے کیریئر میں کامیاب ہوا لیکن اپنے اصل مقصد میں ناکام رہا۔ وہ 'اچھا ڈاکٹر' بننے میں اتنا مصروف تھا کہ بھول گیا اللہ نے اسے کیوں بنایا۔ اس کے مریض اب اس کی مدد نہیں کریں گے۔ اس کی ڈگریاں مدد نہیں کریں گی۔ صرف اس کی عبادت اور اللہ کی رہنمائی کے سامنے سر تسلیم خم کرنا مدد کرتا۔ وہ ڈاکٹر نہ بنو۔"
                }
            },
            {
                type: "reflection",
                questions: [
                    {
                        en: "If Allah asked you right now: 'Are you fulfilling the purpose I created you for?' - what would you honestly answer?",
                        ur: "اگر اللہ ابھی آپ سے پوچھے: 'کیا تم اس مقصد کو پورا کر رہے ہو جس کے لیے میں نے تمہیں بنایا؟' - آپ ایمانداری سے کیا جواب دیں گے؟"
                    },
                    {
                        en: "What percentage of your day is spent on worship vs. chasing dunya? If worship is your PURPOSE, shouldn't it get more time than your job?",
                        ur: "آپ کے دن کا کتنا فیصد عبادت میں صرف ہوتا ہے بمقابلہ دنیا کے پیچھے بھاگنے کے؟ اگر عبادت آپ کا مقصد ہے، تو کیا اسے آپ کی نوکری سے زیادہ وقت نہیں ملنا چاہیے؟"
                    },
                    {
                        en: "Check the 4 conditions in Surah Al-Asr: Do you have true faith? Do you do righteous deeds? Do you advise others to Quran? Do you have patience? Which ones are you missing?",
                        ur: "سورہ عصر کی 4 شرائط چیک کریں: کیا آپ کے پاس سچا ایمان ہے؟ کیا آپ نیک اعمال کرتے ہیں؟ کیا آپ دوسروں کو قرآن کی نصیحت کرتے ہیں؟ کیا آپ میں صبر ہے؟ کون سی کمی ہے؟"
                    }
                ]
            }
        ]
    },
    // TOPIC 3: QURAN AS COMPLETE & SUFFICIENT GUIDANCE
    {
        id: 3,
        title: {
            en: "The Quran - Complete & Sufficient Guidance",
            ur: "قرآن - مکمل اور کافی رہنمائی"
        },
        sections: [
            {
                type: "intro",
                content: {
                    en: "Now you know your purpose is to worship Allah. But HOW do you worship? What does Allah want from you? You need guidance. And Allah has given you that guidance - the QURAN. But here's where most Muslims go wrong: They think Quran is not enough. They say 'Quran is too difficult,' 'We need scholars to explain it,' 'We need hadith to understand it.' This is a HUGE mistake. Allah explicitly tells us the Quran is COMPLETE, DETAILED, and SUFFICIENT. Nothing is missing. No other source is needed. Let's see what Allah says about His own Book.",
                    ur: "اب آپ جانتے ہیں کہ آپ کا مقصد اللہ کی عبادت ہے۔ لیکن کیسے عبادت کریں؟ اللہ آپ سے کیا چاہتا ہے؟ آپ کو رہنمائی کی ضرورت ہے۔ اور اللہ نے آپ کو وہ رہنمائی دی ہے - قرآن۔ لیکن یہاں زیادہ تر مسلمان غلطی کرتے ہیں: وہ سوچتے ہیں قرآن کافی نہیں۔ وہ کہتے ہیں 'قرآن بہت مشکل ہے،' 'ہمیں اسے سمجھانے کے لیے علماء چاہیے،' 'ہمیں اسے سمجھنے کے لیے حدیث چاہیے۔' یہ ایک بہت بڑی غلطی ہے۔ اللہ واضح طور پر ہمیں بتاتا ہے کہ قرآن مکمل، تفصیلی، اور کافی ہے۔ کچھ بھی کمی نہیں۔ کسی اور ذریعے کی ضرورت نہیں۔ آئیں دیکھیں اللہ اپنی کتاب کے بارے میں کیا کہتا ہے۔"
                }
            },
            {
                type: "ayah",
                surah: 6,
                ayahNumber: 38,
                surahName: "Al-An'am",
                arabic: "وَمَا مِن دَآبَّةٍۢ فِى ٱلْأَرْضِ وَلَا طَـٰٓئِرٍۢ يَطِيرُ بِجَنَاحَيْهِ إِلَّا أُمَمٌ أَمْثَالُكُم ۚ مَّا فَرَّطْنَا فِى ٱلْكِتَـٰبِ مِن شَىْءٍۢ ۚ ثُمَّ إِلَىٰ رَبِّهِمْ يُحْشَرُونَ",
                wbw: [
                    {
                        arabic: "وَمَا",
                        transliteration: "wa maa",
                        en: "And not",
                        ur: "اور نہیں",
                        root: "Negation",
                        rootMeaning: "and not"
                    },
                    {
                        arabic: "مِن",
                        transliteration: "min",
                        en: "any",
                        ur: "کوئی",
                        root: "Preposition",
                        rootMeaning: "from, any"
                    },
                    {
                        arabic: "دَآبَّةٍۢ",
                        transliteration: "daabbatin",
                        en: "creature",
                        ur: "جانور",
                        root: "د ب ب",
                        rootMeaning: "creature that walks"
                    },
                    {
                        arabic: "فِى",
                        transliteration: "fee",
                        en: "on",
                        ur: "میں",
                        root: "Preposition",
                        rootMeaning: "in, on"
                    },
                    {
                        arabic: "ٱلْأَرْضِ",
                        transliteration: "al-ardi",
                        en: "the earth",
                        ur: "زمین",
                        root: "ا ر ض",
                        rootMeaning: "earth, land"
                    },
                    {
                        arabic: "وَلَا",
                        transliteration: "wa laa",
                        en: "and not",
                        ur: "اور نہیں",
                        root: "Conjunction",
                        rootMeaning: "and not"
                    },
                    {
                        arabic: "طَـٰٓئِرٍۢ",
                        transliteration: "taa'irin",
                        en: "a bird",
                        ur: "پرندہ",
                        root: "ط ی ر",
                        rootMeaning: "bird that flies"
                    },
                    {
                        arabic: "يَطِيرُ",
                        transliteration: "yateeru",
                        en: "that flies",
                        ur: "اڑتا ہے",
                        root: "ط ی ر",
                        rootMeaning: "to fly"
                    },
                    {
                        arabic: "بِجَنَاحَيْهِ",
                        transliteration: "bijanaahayhi",
                        en: "with its wings",
                        ur: "اپنے پروں سے",
                        root: "ج ن ح",
                        rootMeaning: "wing"
                    },
                    {
                        arabic: "إِلَّا",
                        transliteration: "illa",
                        en: "except",
                        ur: "مگر",
                        root: "Exception",
                        rootMeaning: "except"
                    },
                    {
                        arabic: "أُمَمٌ",
                        transliteration: "umamun",
                        en: "communities",
                        ur: "امتیں",
                        root: "ا م م",
                        rootMeaning: "nation, community"
                    },
                    {
                        arabic: "أَمْثَالُكُم",
                        transliteration: "amthaalukum",
                        en: "like you",
                        ur: "تمہاری مثل",
                        root: "م ث ل",
                        rootMeaning: "like, similar"
                    },
                    {
                        arabic: "مَّا",
                        transliteration: "maa",
                        en: "Not",
                        ur: "نہیں",
                        root: "Negation",
                        rootMeaning: "not"
                    },
                    {
                        arabic: "فَرَّطْنَا",
                        transliteration: "farratnaa",
                        en: "We have neglected",
                        ur: "ہم نے کوتاہی کی",
                        root: "ف ر ط",
                        rootMeaning: "to neglect, omit, leave out"
                    },
                    {
                        arabic: "فِى",
                        transliteration: "fee",
                        en: "in",
                        ur: "میں",
                        root: "Preposition",
                        rootMeaning: "in"
                    },
                    {
                        arabic: "ٱلْكِتَـٰبِ",
                        transliteration: "al-kitaabi",
                        en: "the Book",
                        ur: "کتاب",
                        root: "ك ت ب",
                        rootMeaning: "book, writing"
                    },
                    {
                        arabic: "مِن",
                        transliteration: "min",
                        en: "of",
                        ur: "کوئی",
                        root: "Preposition",
                        rootMeaning: "of, any"
                    },
                    {
                        arabic: "شَىْءٍۢ",
                        transliteration: "shay'in",
                        en: "anything",
                        ur: "چیز",
                        root: "ش ی ء",
                        rootMeaning: "thing, anything"
                    }
                ],
                translation: {
                    en: "And there is no creature on earth or bird that flies with its wings except that they are communities like you. We have not neglected in the Book a thing. Then unto their Lord they will be gathered.",
                    ur: "اور زمین پر کوئی جانور نہیں اور نہ کوئی پرندہ جو اپنے پروں سے اڑتا ہے مگر یہ کہ تمہاری مثل امتیں ہیں۔ ہم نے کتاب میں کوئی چیز نہیں چھوڑی۔ پھر اپنے رب کی طرف اکٹھے کیے جائیں گے۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "POWERFUL declaration! Allah says 'We have not NEGLECTED in the Book ANYTHING.' The word 'farraTnaa' (فَرَّطْنَا) means to neglect, omit, or leave out. Allah is saying: NOTHING is left out of this Book. Every guidance you need is here. People say 'but what about this detail?' or 'what about that situation?' Allah answers: NOTHING is neglected. If you can't find it in Quran, maybe you're not looking properly, or maybe it's not important for your guidance. But nothing NEEDED is missing.",
                    ur: "طاقتور اعلان! اللہ کہتا ہے 'ہم نے کتاب میں کوئی چیز نہیں چھوڑی۔' لفظ 'فَرَّطْنَا' (فرطنا) کا مطلب ہے کوتاہی کرنا، چھوڑنا، نظر انداز کرنا۔ اللہ کہہ رہا ہے: اس کتاب سے کچھ بھی نہیں چھوٹا۔ ہر رہنمائی جو آپ کو چاہیے یہاں ہے۔ لوگ کہتے ہیں 'لیکن اس تفصیل کا کیا؟' یا 'اس صورتحال کا کیا؟' اللہ جواب دیتا ہے: کچھ بھی نہیں چھوڑا۔ اگر آپ کو قرآن میں نہیں مل رہا، شاید آپ صحیح طریقے سے نہیں دیکھ رہے، یا شاید یہ آپ کی رہنمائی کے لیے اہم نہیں۔ لیکن جو ضروری ہے وہ موجود ہے۔"
                }
            },
            {
                type: "ayah",
                surah: 6,
                ayahNumber: 114,
                surahName: "Al-An'am",
                arabic: "أَفَغَيْرَ ٱللَّهِ أَبْتَغِى حَكَمًۭا وَهُوَ ٱلَّذِىٓ أَنزَلَ إِلَيْكُمُ ٱلْكِتَـٰبَ مُفَصَّلًۭا",
                wbw: [
                    {
                        arabic: "أَفَغَيْرَ",
                        transliteration: "afa ghayra",
                        en: "Then is it other than",
                        ur: "تو کیا اس کے علاوہ",
                        root: "غ ی ر",
                        rootMeaning: "other than"
                    },
                    {
                        arabic: "ٱللَّهِ",
                        transliteration: "allaahi",
                        en: "Allah",
                        ur: "اللہ",
                        root: "ا ل ه",
                        rootMeaning: "God, Allah"
                    },
                    {
                        arabic: "أَبْتَغِى",
                        transliteration: "abtaghee",
                        en: "I should seek",
                        ur: "میں تلاش کروں",
                        root: "ب غ ی",
                        rootMeaning: "to seek, desire"
                    },
                    {
                        arabic: "حَكَمًۭا",
                        transliteration: "hakaman",
                        en: "as judge",
                        ur: "فیصلہ کرنے والا",
                        root: "ح ك م",
                        rootMeaning: "judge, arbitrator, one who rules"
                    },
                    {
                        arabic: "وَهُوَ",
                        transliteration: "wa huwa",
                        en: "while it is He",
                        ur: "جبکہ وہ",
                        root: "Pronoun",
                        rootMeaning: "and He"
                    },
                    {
                        arabic: "ٱلَّذِىٓ",
                        transliteration: "alladhee",
                        en: "Who",
                        ur: "جس نے",
                        root: "Relative",
                        rootMeaning: "who, the one who"
                    },
                    {
                        arabic: "أَنزَلَ",
                        transliteration: "anzala",
                        en: "has revealed",
                        ur: "نازل کیا",
                        root: "ن ز ل",
                        rootMeaning: "to send down, reveal"
                    },
                    {
                        arabic: "إِلَيْكُمُ",
                        transliteration: "ilaykum",
                        en: "to you",
                        ur: "تمہاری طرف",
                        root: "Preposition",
                        rootMeaning: "to you"
                    },
                    {
                        arabic: "ٱلْكِتَـٰبَ",
                        transliteration: "al-kitaaba",
                        en: "the Book",
                        ur: "کتاب",
                        root: "ك ت ب",
                        rootMeaning: "book"
                    },
                    {
                        arabic: "مُفَصَّلًۭا",
                        transliteration: "mufassalan",
                        en: "explained in detail",
                        ur: "تفصیل سے بیان کیا ہوا",
                        root: "ف ص ل",
                        rootMeaning: "detailed, explained, made clear"
                    }
                ],
                translation: {
                    en: "Then is it other than Allah I should seek as judge while it is He who has revealed to you the Book explained in detail?",
                    ur: "تو کیا میں اللہ کے سوا کسی اور کو فیصلہ کرنے والا تلاش کروں جبکہ وہی ہے جس نے تمہاری طرف تفصیل سے بیان کی ہوئی کتاب نازل کی؟"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "THIS IS A RHETORICAL QUESTION that destroys all arguments! Allah is asking: Why would you seek ANYONE OTHER than Allah as judge when He sent you a Book that is DETAILED (مُفَصَّلًۭا - mufassalan)? When you follow hadith over Quran, you're making the hadith compiler your judge instead of Allah. When you follow a scholar's opinion over clear Quranic verse, you're making that scholar your judge instead of Allah. Allah sent you a DETAILED Book - why do you need anyone else to judge for you?",
                    ur: "یہ ایک بیانیہ سوال ہے جو تمام دلائل کو تباہ کر دیتا ہے! اللہ پوچھ رہا ہے: آپ اللہ کے سوا کسی اور کو فیصلہ کرنے والا کیوں تلاش کریں گے جبکہ اس نے آپ کو تفصیلی کتاب بھیجی (مُفَصَّلًۭا - مفصلاً)؟ جب آپ قرآن پر حدیث کی پیروی کرتے ہیں، تو آپ حدیث مرتب کرنے والے کو اللہ کی جگہ اپنا فیصلہ کرنے والا بنا رہے ہیں۔ جب آپ واضح قرآنی آیت پر عالم کی رائے کی پیروی کرتے ہیں، تو آپ اس عالم کو اللہ کی جگہ فیصلہ کرنے والا بنا رہے ہیں۔ اللہ نے آپ کو تفصیلی کتاب بھیجی - آپ کو کسی اور کی ضرورت کیوں ہے؟"
                }
            },
            {
                type: "ayah",
                surah: 45,
                ayahNumber: 6,
                surahName: "Al-Jathiyah",
                arabic: "تِلْكَ ءَايَـٰتُ ٱللَّهِ نَتْلُوهَا عَلَيْكَ بِٱلْحَقِّ ۖ فَبِأَىِّ حَدِيثٍۭ بَعْدَ ٱللَّهِ وَءَايَـٰتِهِۦ يُؤْمِنُونَ",
                wbw: [
                    {
                        arabic: "تِلْكَ",
                        transliteration: "tilka",
                        en: "These",
                        ur: "یہ",
                        root: "Demonstrative",
                        rootMeaning: "these, those"
                    },
                    {
                        arabic: "ءَايَـٰتُ",
                        transliteration: "aayaatu",
                        en: "verses",
                        ur: "آیات",
                        root: "ء ی ی",
                        rootMeaning: "signs, verses"
                    },
                    {
                        arabic: "ٱللَّهِ",
                        transliteration: "allaahi",
                        en: "of Allah",
                        ur: "اللہ کی",
                        root: "ا ل ه",
                        rootMeaning: "God, Allah"
                    },
                    {
                        arabic: "نَتْلُوهَا",
                        transliteration: "natloohaa",
                        en: "We recite them",
                        ur: "ہم پڑھتے ہیں انہیں",
                        root: "ت ل و",
                        rootMeaning: "to recite, follow"
                    },
                    {
                        arabic: "عَلَيْكَ",
                        transliteration: "'alayka",
                        en: "to you",
                        ur: "تم پر",
                        root: "Preposition",
                        rootMeaning: "upon you"
                    },
                    {
                        arabic: "بِٱلْحَقِّ",
                        transliteration: "bil-haqq",
                        en: "in truth",
                        ur: "حق کے ساتھ",
                        root: "ح ق ق",
                        rootMeaning: "truth, right"
                    },
                    {
                        arabic: "فَبِأَىِّ",
                        transliteration: "fabi'ayyi",
                        en: "Then in what",
                        ur: "تو کس",
                        root: "Interrogative",
                        rootMeaning: "in what, which"
                    },
                    {
                        arabic: "حَدِيثٍۭ",
                        transliteration: "hadeethin",
                        en: "statement/hadith",
                        ur: "حدیث/بیان",
                        root: "ح د ث",
                        rootMeaning: "statement, narration, hadith"
                    },
                    {
                        arabic: "بَعْدَ",
                        transliteration: "ba'da",
                        en: "after",
                        ur: "کے بعد",
                        root: "ب ع د",
                        rootMeaning: "after"
                    },
                    {
                        arabic: "ٱللَّهِ",
                        transliteration: "allaahi",
                        en: "Allah",
                        ur: "اللہ",
                        root: "ا ل ه",
                        rootMeaning: "God, Allah"
                    },
                    {
                        arabic: "وَءَايَـٰتِهِۦ",
                        transliteration: "wa aayaatihi",
                        en: "and His verses",
                        ur: "اور اس کی آیات",
                        root: "ء ی ی",
                        rootMeaning: "and His signs/verses"
                    },
                    {
                        arabic: "يُؤْمِنُونَ",
                        transliteration: "yu'minoon",
                        en: "will they believe",
                        ur: "وہ ایمان لائیں گے",
                        root: "ء م ن",
                        rootMeaning: "to believe"
                    }
                ],
                translation: {
                    en: "These are the verses of Allah which We recite to you in truth. Then in what statement (hadith) after Allah and His verses will they believe?",
                    ur: "یہ اللہ کی آیات ہیں جو ہم تم پر حق کے ساتھ پڑھتے ہیں۔ تو پھر اللہ اور اس کی آیات کے بعد کس حدیث پر وہ ایمان لائیں گے؟"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "THE GAME-CHANGING AYAH! Allah uses the EXACT WORD 'hadith' (حَدِيثٍۭ) and asks: What HADITH after Allah and His verses will you believe? This is DIRECT. Allah is saying: I've given you My verses - what OTHER hadith do you need? People say 'but we need Bukhari, we need Muslim, we need hadith collections!' Allah responds: 'What hadith AFTER My verses?' This doesn't mean Prophet didn't speak - of course he did. But his words were to EXPLAIN the Quran, not ADD to it. And if his explanations were essential, Allah would have preserved them IN the Quran. The fact that ONLY Quran is preserved tells you ONLY Quran is needed. Everything else is optional at best, shirk at worst when placed above Quran.",
                    ur: "گیم بدلنے والی آیت! اللہ عین لفظ 'حدیث' (حَدِيثٍۭ) استعمال کرتا ہے اور پوچھتا ہے: اللہ اور اس کی آیات کے بعد تم کس حدیث پر ایمان لاؤ گے؟ یہ براہ راست ہے۔ اللہ کہہ رہا ہے: میں نے تمہیں اپنی آیات دی ہیں - تمہیں کس اور حدیث کی ضرورت ہے؟ لوگ کہتے ہیں 'لیکن ہمیں بخاری چاہیے، ہمیں مسلم چاہیے، ہمیں حدیث کے مجموعے چاہیے!' اللہ جواب دیتا ہے: 'میری آیات کے بعد کونسی حدیث؟' اس کا مطلب یہ نہیں کہ نبی نے بات نہیں کی - یقیناً کی۔ لیکن ان کے الفاظ قرآن کی وضاحت کے لیے تھے، اس میں اضافہ کرنے کے لیے نہیں۔ اور اگر ان کی وضاحتیں ضروری ہوتیں، تو اللہ انہیں قرآن میں محفوظ کر دیتا۔ یہ حقیقت کہ صرف قرآن محفوظ ہے آپ کو بتاتی ہے کہ صرف قرآن کی ضرورت ہے۔ باقی سب کچھ بہترین صورت میں اختیاری ہے، بدترین صورت میں شرک جب قرآن سے اوپر رکھا جائے۔"
                }
            },
            {
                type: "example",
                content: {
                    en: "A scholar says: 'You must follow hadith! The Prophet said this, the Prophet did that!' You ask: 'But Allah says in 45:6 - what hadith after Allah will you believe?' Scholar gets angry: 'Are you rejecting the Prophet?' You respond: 'No, I'm asking: Why do you follow collections written 200 years after the Prophet died, over the Book Allah Himself preserved and guaranteed? If something was ESSENTIAL for my guidance, wouldn't Allah put it in the Quran? Allah says His Book is COMPLETE (6:38), DETAILED (6:114), SUFFICIENT (45:6). Why do you say it's not enough?' The scholar has no answer except anger, because you've exposed that he's making hadith into a judge OVER Allah's Book. On the Day of Judgment, Allah will ask you: 'Did I not give you a complete Book? Why did you follow [scholar's name]'s opinion?' What will you answer?",
                    ur: "ایک عالم کہتا ہے: 'تمہیں حدیث کی پیروی کرنی چاہیے! نبی نے یہ کہا، نبی نے وہ کیا!' آپ پوچھتے ہیں: 'لیکن اللہ 45:6 میں کہتا ہے - اللہ کے بعد کس حدیث پر ایمان لاؤ گے؟' عالم ناراض ہو جاتا ہے: 'کیا تم نبی کو رد کر رہے ہو؟' آپ جواب دیتے ہیں: 'نہیں، میں پوچھ رہا ہوں: آپ نبی کی وفات کے 200 سال بعد لکھے گئے مجموعوں کی پیروی کیوں کرتے ہیں، اس کتاب پر جسے اللہ نے خود محفوظ کیا اور ضمانت دی؟ اگر کوئی چیز میری رہنمائی کے لیے ضروری ہوتی، تو کیا اللہ اسے قرآن میں نہیں ڈالتا؟ اللہ کہتا ہے اس کی کتاب مکمل (6:38)، تفصیلی (6:114)، کافی (45:6) ہے۔ آپ کیوں کہتے ہیں کہ یہ کافی نہیں؟' عالم کے پاس غصے کے سوا کوئی جواب نہیں، کیونکہ آپ نے بے نقاب کر دیا ہے کہ وہ حدیث کو اللہ کی کتاب پر فیصلہ کرنے والا بنا رہا ہے۔ قیامت کے دن، اللہ آپ سے پوچھے گا: 'کیا میں نے تمہیں مکمل کتاب نہیں دی؟ تم نے [عالم کا نام] کی رائے کی پیروی کیوں کی؟' آپ کیا جواب دیں گے؟"
                }
            },
            {
                type: "reflection",
                questions: [
                    {
                        en: "When you have a question about Islam, do you search the Quran first, or do you immediately Google for a fatwa/hadith?",
                        ur: "جب آپ کو اسلام کے بارے میں سوال ہو، کیا آپ پہلے قرآن تلاش کرتے ہیں، یا فوراً فتوی/حدیث کے لیے گوگل کرتے ہیں؟"
                    },
                    {
                        en: "If someone's hadith contradicts a clear Quranic verse, which one do you follow? Be honest.",
                        ur: "اگر کسی کی حدیث واضح قرآنی آیت سے متصادم ہو، آپ کس کی پیروی کرتے ہیں؟ ایماندار بنیں۔"
                    },
                    {
                        en: "Allah says His Book is complete (6:38), detailed (6:114), and asks 'what hadith after Me?' (45:6). Do you believe Him or not?",
                        ur: "اللہ کہتا ہے اس کی کتاب مکمل (6:38)، تفصیلی (6:114) ہے، اور پوچھتا ہے 'میرے بعد کونسی حدیث؟' (45:6)۔ کیا آپ اس پر ایمان رکھتے ہیں یا نہیں؟"
                    }
                ]
            }
        ]
    },
    // TOPIC 4: USE YOUR BRAIN - Don't Follow Blindly
    {
        id: 4,
        title: {
            en: "Use Your Brain! - Don't Follow Blindly",
            ur: "اپنا دماغ استعمال کرو! - اندھی تقلید نہ کرو"
        },
        sections: [
            {
                type: "intro",
                content: {
                    en: "You now know: life is short, your purpose is worship, and the Quran is your complete guide. But there's a MAJOR obstacle stopping most people from following the Quran: BLIND FOLLOWING of traditions, fathers, and scholars. People say 'But my grandfather did this,' 'But our imam said that,' 'But we've always done it this way.' Allah DESTROYS this mentality. He gave you a BRAIN and He expects you to USE it. He commands you to THINK, PONDER, and QUESTION. Blind following is condemned throughout the Quran. Let's see what Allah says.",
                    ur: "اب آپ جانتے ہیں: زندگی مختصر ہے، آپ کا مقصد عبادت ہے، اور قرآن آپ کی مکمل رہنمائی ہے۔ لیکن ایک بڑی رکاوٹ ہے جو زیادہ تر لوگوں کو قرآن کی پیروی سے روکتی ہے: روایات، باپ دادا، اور علماء کی اندھی تقلید۔ لوگ کہتے ہیں 'لیکن میرے دادا نے یہ کیا،' 'لیکن ہمارے امام نے وہ کہا،' 'لیکن ہم ہمیشہ سے ایسے کرتے آئے ہیں۔' اللہ اس ذہنیت کو تباہ کرتا ہے۔ اس نے آپ کو دماغ دیا ہے اور وہ توقع کرتا ہے کہ آپ اسے استعمال کریں۔ وہ آپ کو سوچنے، غور کرنے، اور سوال کرنے کا حکم دیتا ہے۔ اندھی تقلید کی قرآن میں ہر جگہ مذمت کی گئی ہے۔ آئیں دیکھیں اللہ کیا کہتا ہے۔"
                }
            },
            {
                type: "ayah",
                surah: 2,
                ayahNumber: 170,
                surahName: "Al-Baqarah",
                arabic: "وَإِذَا قِيلَ لَهُمُ ٱتَّبِعُوا۟ مَآ أَنزَلَ ٱللَّهُ قَالُوا۟ بَلْ نَتَّبِعُ مَآ أَلْفَيْنَا عَلَيْهِ ءَابَآءَنَآ ۗ أَوَلَوْ كَانَ ءَابَآؤُهُمْ لَا يَعْقِلُونَ شَيْـًۭٔا وَلَا يَهْتَدُونَ",
                wbw: [
                    {
                        arabic: "وَإِذَا",
                        transliteration: "wa idhaa",
                        en: "And when",
                        ur: "اور جب",
                        root: "Conjunction",
                        rootMeaning: "and when"
                    },
                    {
                        arabic: "قِيلَ",
                        transliteration: "qeela",
                        en: "it is said",
                        ur: "کہا جائے",
                        root: "ق و ل",
                        rootMeaning: "to say - passive: is said"
                    },
                    {
                        arabic: "لَهُمُ",
                        transliteration: "lahum",
                        en: "to them",
                        ur: "ان سے",
                        root: "Preposition",
                        rootMeaning: "to them"
                    },
                    {
                        arabic: "ٱتَّبِعُوا۟",
                        transliteration: "ittabi'oo",
                        en: "Follow",
                        ur: "پیروی کرو",
                        root: "ت ب ع",
                        rootMeaning: "to follow - command: follow!"
                    },
                    {
                        arabic: "مَآ",
                        transliteration: "maa",
                        en: "what",
                        ur: "جو",
                        root: "Relative",
                        rootMeaning: "what, that which"
                    },
                    {
                        arabic: "أَنزَلَ",
                        transliteration: "anzala",
                        en: "has revealed",
                        ur: "نازل کیا",
                        root: "ن ز ل",
                        rootMeaning: "to send down, reveal"
                    },
                    {
                        arabic: "ٱللَّهُ",
                        transliteration: "allaahu",
                        en: "Allah",
                        ur: "اللہ نے",
                        root: "ا ل ه",
                        rootMeaning: "God, Allah"
                    },
                    {
                        arabic: "قَالُوا۟",
                        transliteration: "qaaloo",
                        en: "they say",
                        ur: "وہ کہتے ہیں",
                        root: "ق و ل",
                        rootMeaning: "to say"
                    },
                    {
                        arabic: "بَلْ",
                        transliteration: "bal",
                        en: "Nay",
                        ur: "بلکہ",
                        root: "Particle",
                        rootMeaning: "nay, rather, but"
                    },
                    {
                        arabic: "نَتَّبِعُ",
                        transliteration: "nattabi'u",
                        en: "we follow",
                        ur: "ہم پیروی کرتے ہیں",
                        root: "ت ب ع",
                        rootMeaning: "to follow"
                    },
                    {
                        arabic: "مَآ",
                        transliteration: "maa",
                        en: "what",
                        ur: "جس",
                        root: "Relative",
                        rootMeaning: "what"
                    },
                    {
                        arabic: "أَلْفَيْنَا",
                        transliteration: "alfaynaa",
                        en: "we found",
                        ur: "ہم نے پایا",
                        root: "ل ف ی",
                        rootMeaning: "to find"
                    },
                    {
                        arabic: "عَلَيْهِ",
                        transliteration: "alayhi",
                        en: "upon it",
                        ur: "اس پر",
                        root: "Preposition",
                        rootMeaning: "upon"
                    },
                    {
                        arabic: "ءَابَآءَنَآ",
                        transliteration: "aabaaa'anaa",
                        en: "our fathers",
                        ur: "ہمارے باپ دادا",
                        root: "ا ب و",
                        rootMeaning: "fathers, ancestors"
                    },
                    {
                        arabic: "أَوَلَوْ",
                        transliteration: "awa law",
                        en: "Even if",
                        ur: "کیا اگرچہ",
                        root: "Question + condition",
                        rootMeaning: "even if"
                    },
                    {
                        arabic: "كَانَ",
                        transliteration: "kaana",
                        en: "were",
                        ur: "تھے",
                        root: "ك و ن",
                        rootMeaning: "to be"
                    },
                    {
                        arabic: "ءَابَآؤُهُمْ",
                        transliteration: "aabaaa'uhum",
                        en: "their fathers",
                        ur: "ان کے باپ",
                        root: "ا ب و",
                        rootMeaning: "their fathers"
                    },
                    {
                        arabic: "لَا",
                        transliteration: "laa",
                        en: "not",
                        ur: "نہیں",
                        root: "Negation",
                        rootMeaning: "not"
                    },
                    {
                        arabic: "يَعْقِلُونَ",
                        transliteration: "ya'qiloon",
                        en: "understand",
                        ur: "سمجھتے",
                        root: "ع ق ل",
                        rootMeaning: "to understand, use reason"
                    },
                    {
                        arabic: "شَيْـًۭٔا",
                        transliteration: "shay'an",
                        en: "anything",
                        ur: "کچھ بھی",
                        root: "ش ی ء",
                        rootMeaning: "thing, anything"
                    },
                    {
                        arabic: "وَلَا",
                        transliteration: "wa laa",
                        en: "and not",
                        ur: "اور نہیں",
                        root: "Conjunction",
                        rootMeaning: "and not"
                    },
                    {
                        arabic: "يَهْتَدُونَ",
                        transliteration: "yahtadoon",
                        en: "they were guided",
                        ur: "وہ ہدایت یافتہ تھے",
                        root: "هـ د ی",
                        rootMeaning: "to be guided"
                    }
                ],
                translation: {
                    en: "And when it is said to them 'Follow what Allah has revealed,' they say 'Nay, we follow what we found our fathers upon.' Even if their fathers understood nothing and were not guided?",
                    ur: "اور جب ان سے کہا جائے 'اللہ نے جو نازل کیا اس کی پیروی کرو' تو وہ کہتے ہیں 'بلکہ ہم اس کی پیروی کرتے ہیں جس پر ہم نے اپنے باپ دادا کو پایا۔' کیا اگرچہ ان کے باپ کچھ بھی نہ سمجھتے ہوں اور ہدایت یافتہ نہ ہوں؟"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "DEVASTATING! Allah exposes the blind follower mentality. When told 'Follow what ALLAH revealed,' they respond 'No! We follow what our FATHERS did!' Allah then asks the crushing question: 'Even if your fathers understood NOTHING and were NOT GUIDED?' This is you. When someone shows you a clear Quranic verse, you say 'But my imam says...' or 'But we've always done it this way.' Allah is asking: What if your imam understands nothing? What if your tradition is wrong? Why would you follow fallible humans over Allah's perfect guidance? This is the disease destroying Muslims today - worshipping tradition instead of following Quran.",
                    ur: "تباہ کن! اللہ اندھے پیروکار کی ذہنیت کو بے نقاب کرتا ہے۔ جب کہا جائے 'اللہ نے جو نازل کیا اس کی پیروی کرو' تو وہ جواب دیتے ہیں 'نہیں! ہم اس کی پیروی کرتے ہیں جو ہمارے باپ نے کیا!' اللہ پھر کچل دینے والا سوال پوچھتا ہے: 'کیا اگرچہ تمہارے باپ کچھ بھی نہ سمجھتے ہوں اور ہدایت یافتہ نہ ہوں؟' یہ آپ ہیں۔ جب کوئی آپ کو واضح قرآنی آیت دکھائے، تو آپ کہتے ہیں 'لیکن میرے امام کہتے ہیں...' یا 'لیکن ہم ہمیشہ سے ایسے کرتے آئے ہیں۔' اللہ پوچھ رہا ہے: اگر آپ کا امام کچھ نہیں سمجھتا تو؟ اگر آپ کی روایت غلط ہے تو؟ آپ اللہ کی کامل رہنمائی پر غلطی کرنے والے انسانوں کی پیروی کیوں کریں گے؟ یہ وہ بیماری ہے جو آج مسلمانوں کو تباہ کر رہی ہے - قرآن کی پیروی کی بجائے روایت کی پوجا۔"
                }
            },
            {
                type: "ayah",
                surah: 47,
                ayahNumber: 24,
                surahName: "Muhammad",
                arabic: "أَفَلَا يَتَدَبَّرُونَ ٱلْقُرْءَانَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَآ",
                wbw: [
                    {
                        arabic: "أَفَلَا",
                        transliteration: "afalaa",
                        en: "Then do not",
                        ur: "تو کیا نہیں",
                        root: "Question + negation",
                        rootMeaning: "do they not?"
                    },
                    {
                        arabic: "يَتَدَبَّرُونَ",
                        transliteration: "yatadabbaroon",
                        en: "they ponder deeply",
                        ur: "وہ غور کرتے",
                        root: "د ب ر",
                        rootMeaning: "to ponder, reflect deeply, contemplate"
                    },
                    {
                        arabic: "ٱلْقُرْءَانَ",
                        transliteration: "al-qur'aana",
                        en: "the Quran",
                        ur: "قرآن پر",
                        root: "ق ر ء",
                        rootMeaning: "the Recitation"
                    },
                    {
                        arabic: "أَمْ",
                        transliteration: "am",
                        en: "or",
                        ur: "یا",
                        root: "Conjunction",
                        rootMeaning: "or"
                    },
                    {
                        arabic: "عَلَىٰ",
                        transliteration: "'alaa",
                        en: "upon",
                        ur: "پر",
                        root: "Preposition",
                        rootMeaning: "upon"
                    },
                    {
                        arabic: "قُلُوبٍ",
                        transliteration: "quloobin",
                        en: "hearts",
                        ur: "دلوں",
                        root: "ق ل ب",
                        rootMeaning: "heart"
                    },
                    {
                        arabic: "أَقْفَالُهَآ",
                        transliteration: "aqfaaluhaa",
                        en: "their locks",
                        ur: "ان کے تالے",
                        root: "ق ف ل",
                        rootMeaning: "locks, barriers"
                    }
                ],
                translation: {
                    en: "Then do they not deeply ponder over the Quran, or are there locks upon their hearts?",
                    ur: "تو کیا وہ قرآن پر غور نہیں کرتے، یا ان کے دلوں پر تالے لگے ہیں؟"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "Allah gives you ONLY TWO OPTIONS: Either you PONDER (يَتَدَبَّرُونَ - yatadabbaroon - deep thinking, reflection, contemplation) over the Quran, OR your hearts have LOCKS on them. There's no third option. No 'I'll just follow what scholars say.' No 'I'll just do what my parents did.' Either USE YOUR BRAIN to understand Quran, or admit your heart is LOCKED. The word 'tadabbur' means deep, careful thinking - not just reading Arabic for blessings. Allah is COMMANDING you to THINK. If you're not thinking about what you read in Quran, your heart is locked. Which category are you in?",
                    ur: "اللہ آپ کو صرف دو اختیارات دیتا ہے: یا تو آپ قرآن پر غور کرتے ہیں (يَتَدَبَّرُونَ - یتدبرون - گہری سوچ، غور و فکر، تدبر)، یا آپ کے دلوں پر تالے ہیں۔ تیسرا اختیار نہیں۔ نہ 'میں صرف وہ کروں گا جو علماء کہتے ہیں۔' نہ 'میں صرف وہ کروں گا جو میرے والدین نے کیا۔' یا تو اپنا دماغ استعمال کرو قرآن کو سمجھنے کے لیے، یا تسلیم کرو کہ تمہارا دل بند ہے۔ لفظ 'تدبر' کا مطلب ہے گہری، محتاط سوچ - نہ کہ صرف برکت کے لیے عربی پڑھنا۔ اللہ آپ کو سوچنے کا حکم دے رہا ہے۔ اگر آپ قرآن میں جو پڑھتے ہیں اس پر سوچ نہیں رہے، تو آپ کا دل بند ہے۔ آپ کس زمرے میں ہیں؟"
                }
            },
            {
                type: "ayah",
                surah: 8,
                ayahNumber: 22,
                surahName: "Al-Anfal",
                arabic: "إِنَّ شَرَّ ٱلدَّوَآبِّ عِندَ ٱللَّهِ ٱلصُّمُّ ٱلْبُكْمُ ٱلَّذِينَ لَا يَعْقِلُونَ",
                wbw: [
                    {
                        arabic: "إِنَّ",
                        transliteration: "inna",
                        en: "Indeed",
                        ur: "بیشک",
                        root: "Emphasis",
                        rootMeaning: "indeed"
                    },
                    {
                        arabic: "شَرَّ",
                        transliteration: "sharra",
                        en: "worst",
                        ur: "بدترین",
                        root: "ش ر ر",
                        rootMeaning: "worst, evil"
                    },
                    {
                        arabic: "ٱلدَّوَآبِّ",
                        transliteration: "ad-dawaabi",
                        en: "of creatures",
                        ur: "مخلوقات",
                        root: "د ب ب",
                        rootMeaning: "creatures that move"
                    },
                    {
                        arabic: "عِندَ",
                        transliteration: "'inda",
                        en: "with",
                        ur: "نزدیک",
                        root: "Preposition",
                        rootMeaning: "with, near"
                    },
                    {
                        arabic: "ٱللَّهِ",
                        transliteration: "allaahi",
                        en: "Allah",
                        ur: "اللہ کے",
                        root: "ا ل ه",
                        rootMeaning: "God, Allah"
                    },
                    {
                        arabic: "ٱلصُّمُّ",
                        transliteration: "as-summu",
                        en: "the deaf",
                        ur: "بہرے",
                        root: "ص م م",
                        rootMeaning: "deaf"
                    },
                    {
                        arabic: "ٱلْبُكْمُ",
                        transliteration: "al-bukmu",
                        en: "the dumb",
                        ur: "گونگے",
                        root: "ب ك م",
                        rootMeaning: "dumb, mute"
                    },
                    {
                        arabic: "ٱلَّذِينَ",
                        transliteration: "alladheena",
                        en: "those who",
                        ur: "وہ لوگ جو",
                        root: "Relative",
                        rootMeaning: "those who"
                    },
                    {
                        arabic: "لَا",
                        transliteration: "laa",
                        en: "not",
                        ur: "نہیں",
                        root: "Negation",
                        rootMeaning: "not"
                    },
                    {
                        arabic: "يَعْقِلُونَ",
                        transliteration: "ya'qiloon",
                        en: "they use reason",
                        ur: "وہ عقل استعمال کرتے",
                        root: "ع ق ل",
                        rootMeaning: "to use reason, understand, think"
                    }
                ],
                translation: {
                    en: "Indeed, the worst of creatures with Allah are the deaf and dumb - those who do not use reason.",
                    ur: "بیشک اللہ کے نزدیک بدترین مخلوقات وہ بہرے اور گونگے ہیں - وہ لوگ جو عقل استعمال نہیں کرتے۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "HARSH but TRUE! Allah calls the WORST creatures those who don't use REASON (عقل - 'aql). Not those who sin. Not those who make mistakes. The WORST are those who have brains but don't USE them. They're deaf - they hear Quran but don't really listen. They're dumb - they can't speak truth because they never thought about it. This is the blind follower. He hears clear ayahs but ignores them for tradition. He has a brain but doesn't use it to question what he's been taught. Allah is saying: If you don't use your reason, you're the WORST of creatures. Think about that. Are you using your brain or following blindly?",
                    ur: "سخت لیکن سچ! اللہ بدترین مخلوقات ان کو کہتا ہے جو عقل (عقل - 'عقل) استعمال نہیں کرتے۔ وہ نہیں جو گناہ کرتے ہیں۔ وہ نہیں جو غلطیاں کرتے ہیں۔ بدترین وہ ہیں جن کے پاس دماغ ہے لیکن اسے استعمال نہیں کرتے۔ وہ بہرے ہیں - قرآن سنتے ہیں لیکن واقعی نہیں سنتے۔ وہ گونگے ہیں - سچ بول نہیں سکتے کیونکہ انہوں نے کبھی اس پر سوچا ہی نہیں۔ یہ اندھا پیروکار ہے۔ وہ واضح آیات سنتا ہے لیکن روایت کے لیے انہیں نظر انداز کرتا ہے۔ اس کے پاس دماغ ہے لیکن اسے استعمال نہیں کرتا جو اسے سکھایا گیا اس پر سوال کرنے کے لیے۔ اللہ کہہ رہا ہے: اگر آپ اپنی عقل استعمال نہیں کرتے، تو آپ بدترین مخلوق ہیں۔ اس پر سوچیں۔ کیا آپ اپنا دماغ استعمال کر رہے ہیں یا اندھی تقلید کر رہے ہیں؟"
                }
            },
            {
                type: "example",
                content: {
                    en: "A young man reads a Quranic verse that clearly contradicts what his family has been practicing for generations. He goes to his father: 'Dad, look at this ayah. What we're doing is wrong.' His father gets angry: 'Who are you to question? Your grandfather did this, his father did this, we've always done it this way!' The son asks: 'But what does the Quran say?' Father: 'I don't care! This is our way!' Who is following Allah? The son who used his brain to read and understand, or the father who blindly follows without thinking? Allah says the father is among the WORST creatures - deaf and dumb, not using reason. Years later, both die. At judgment, Allah asks the father: 'Did I not give you a brain? Did I not give you My Book? Your son showed you the truth from My verses, but you chose your grandfather's way over My way. Why?' The father has no answer. He followed humans over Allah. He worshipped tradition over truth. Don't be that father.",
                    ur: "ایک نوجوان قرآن کی ایک آیت پڑھتا ہے جو واضح طور پر اس سے متصادم ہے جو اس کا خاندان نسلوں سے کر رہا ہے۔ وہ اپنے والد کے پاس جاتا ہے: 'ابا، اس آیت کو دیکھیں۔ ہم جو کر رہے ہیں وہ غلط ہے۔' اس کے والد ناراض ہو جاتے ہیں: 'تم کون ہو سوال کرنے والے؟ تمہارے دادا نے یہ کیا، ان کے والد نے یہ کیا، ہم ہمیشہ سے ایسے کرتے آئے ہیں!' بیٹا پوچھتا ہے: 'لیکن قرآن کیا کہتا ہے؟' والد: 'مجھے پرواہ نہیں! یہ ہمارا طریقہ ہے!' کون اللہ کی پیروی کر رہا ہے؟ بیٹا جس نے اپنا دماغ استعمال کیا پڑھنے اور سمجھنے کے لیے، یا والد جو اندھی تقلید کرتا ہے بغیر سوچے؟ اللہ کہتا ہے والد بدترین مخلوقات میں سے ہے - بہرا اور گونگا، عقل استعمال نہیں کرتا۔ سال بعد، دونوں مر جاتے ہیں۔ فیصلے پر، اللہ والد سے پوچھتا ہے: 'کیا میں نے تمہیں دماغ نہیں دیا؟ کیا میں نے تمہیں اپنی کتاب نہیں دی؟ تمہارے بیٹے نے تمہیں میری آیات سے سچائی دکھائی، لیکن تم نے اپنے دادا کے راستے کو میرے راستے پر ترجیح دی۔ کیوں؟' والد کے پاس کوئی جواب نہیں۔ اس نے انسانوں کی پیروی کی اللہ پر۔ اس نے روایت کی پوجا کی سچائی پر۔ وہ والد نہ بنو۔"
                }
            },
            {
                type: "reflection",
                questions: [
                    {
                        en: "If your family tradition contradicts a clear Quranic verse, which one would you follow? Be brutally honest.",
                        ur: "اگر آپ کی خاندانی روایت واضح قرآنی آیت سے متصادم ہو، تو آپ کس کی پیروی کریں گے؟ بالکل ایماندار بنیں۔"
                    },
                    {
                        en: "When was the last time you PONDERED deeply over a Quranic verse? Or do you just read Arabic without understanding, proving your heart has locks?",
                        ur: "آخری بار کب آپ نے قرآنی آیت پر گہرائی سے غور کیا؟ یا آپ صرف سمجھ کے بغیر عربی پڑھتے ہیں، ثابت کرتے ہوئے کہ آپ کے دل پر تالے ہیں؟"
                    },
                    {
                        en: "Allah calls those who don't use reason the WORST creatures. Are you using your brain to verify what you've been taught, or blindly following?",
                        ur: "اللہ ان لوگوں کو جو عقل استعمال نہیں کرتے بدترین مخلوق کہتا ہے۔ کیا آپ اپنا دماغ استعمال کر رہے ہیں جو آپ کو سکھایا گیا اس کی تصدیق کے لیے، یا اندھی تقلید کر رہے ہیں؟"
                    }
                ]
            }
        ]
    },
    // TOPIC 5: HISTORY REPEATS - Era of Jahiliyyah
    {
        id: 5,
        title: {
            en: "History Repeats - We Are in the Era of Jahiliyyah",
            ur: "تاریخ دہرائی جاتی ہے - ہم جاہلیت کے دور میں ہیں"
        },
        sections: [
            {
                type: "intro",
                content: {
                    en: "Now you understand: life is short, your purpose is worship, Quran is complete, and you must use your brain. But here's the shocking reality: WE ARE REPEATING THE EXACT MISTAKES OF PREVIOUS NATIONS. Christians elevated Prophet Isa (Jesus) to divine status - 'son of God.' Jews elevated Prophet Uzair (Ezra) the same way. And what are Muslims doing? Elevating Prophet Muhammad (peace be upon him) beyond what Allah intended! Calling upon him instead of Allah. Making his hadith equal to or above the Quran. This is EXACTLY what previous nations did. We are in a new era of Jahiliyyah (ignorance). Let's see what Allah warns us about.",
                    ur: "اب آپ سمجھتے ہیں: زندگی مختصر ہے، آپ کا مقصد عبادت ہے، قرآن مکمل ہے، اور آپ کو اپنا دماغ استعمال کرنا چاہیے۔ لیکن یہاں چونکا دینے والی حقیقت ہے: ہم پچھلی قوموں کی بالکل وہی غلطیاں دہرا رہے ہیں۔ عیسائیوں نے نبی عیسیٰ (یسوع) کو الہی مقام دیا - 'خدا کا بیٹا۔' یہودیوں نے نبی عزیر کو اسی طرح بلند کیا۔ اور مسلمان کیا کر رہے ہیں؟ نبی محمد (صلی اللہ علیہ وسلم) کو اس سے زیادہ بلند کر رہے ہیں جو اللہ نے چاہا! اللہ کی جگہ ان سے دعا مانگنا۔ ان کی حدیث کو قرآن کے برابر یا اس سے اوپر بنانا۔ یہ بالکل وہی ہے جو پچھلی قوموں نے کیا۔ ہم جاہلیت (جہالت) کے نئے دور میں ہیں۔ آئیں دیکھیں اللہ ہمیں کیا خبردار کرتا ہے۔"
                }
            },
            {
                type: "ayah",
                surah: 9,
                ayahNumber: 30,
                surahName: "At-Tawbah",
                arabic: "وَقَالَتِ ٱلْيَهُودُ عُزَيْرٌ ٱبْنُ ٱللَّهِ وَقَالَتِ ٱلنَّصَـٰرَى ٱلْمَسِيحُ ٱبْنُ ٱللَّهِ ۖ ذَٰلِكَ قَوْلُهُم بِأَفْوَٰهِهِمْ ۖ يُضَـٰهِـُٔونَ قَوْلَ ٱلَّذِينَ كَفَرُوا۟ مِن قَبْلُ",
                wbw: [
                    {
                        arabic: "وَقَالَتِ",
                        transliteration: "wa qaalat",
                        en: "And said",
                        ur: "اور کہا",
                        root: "ق و ل",
                        rootMeaning: "to say"
                    },
                    {
                        arabic: "ٱلْيَهُودُ",
                        transliteration: "al-yahoodu",
                        en: "the Jews",
                        ur: "یہودیوں نے",
                        root: "ی هـ و د",
                        rootMeaning: "Jews"
                    },
                    {
                        arabic: "عُزَيْرٌ",
                        transliteration: "'uzayrun",
                        en: "Uzair",
                        ur: "عزیر",
                        root: "Proper name",
                        rootMeaning: "Ezra"
                    },
                    {
                        arabic: "ٱبْنُ",
                        transliteration: "ibnu",
                        en: "son of",
                        ur: "بیٹا",
                        root: "ب ن ی",
                        rootMeaning: "son"
                    },
                    {
                        arabic: "ٱللَّهِ",
                        transliteration: "allaahi",
                        en: "Allah",
                        ur: "اللہ کا",
                        root: "ا ل ه",
                        rootMeaning: "God, Allah"
                    },
                    {
                        arabic: "وَقَالَتِ",
                        transliteration: "wa qaalat",
                        en: "And said",
                        ur: "اور کہا",
                        root: "ق و ل",
                        rootMeaning: "to say"
                    },
                    {
                        arabic: "ٱلنَّصَـٰرَى",
                        transliteration: "an-nasaaraa",
                        en: "the Christians",
                        ur: "عیسائیوں نے",
                        root: "ن ص ر",
                        rootMeaning: "Christians, Nazarenes"
                    },
                    {
                        arabic: "ٱلْمَسِيحُ",
                        transliteration: "al-maseehu",
                        en: "the Messiah",
                        ur: "مسیح",
                        root: "م س ح",
                        rootMeaning: "Messiah, Christ"
                    },
                    {
                        arabic: "ٱبْنُ",
                        transliteration: "ibnu",
                        en: "son of",
                        ur: "بیٹا",
                        root: "ب ن ی",
                        rootMeaning: "son"
                    },
                    {
                        arabic: "ٱللَّهِ",
                        transliteration: "allaahi",
                        en: "Allah",
                        ur: "اللہ کا",
                        root: "ا ل ه",
                        rootMeaning: "God, Allah"
                    },
                    {
                        arabic: "ذَٰلِكَ",
                        transliteration: "dhaalika",
                        en: "That",
                        ur: "یہ",
                        root: "Demonstrative",
                        rootMeaning: "that"
                    },
                    {
                        arabic: "قَوْلُهُم",
                        transliteration: "qawluhum",
                        en: "their saying",
                        ur: "ان کا کہنا",
                        root: "ق و ل",
                        rootMeaning: "their saying"
                    },
                    {
                        arabic: "بِأَفْوَٰهِهِمْ",
                        transliteration: "bi'afwaahihim",
                        en: "with their mouths",
                        ur: "اپنے منہ سے",
                        root: "ف و هـ",
                        rootMeaning: "with their mouths"
                    },
                    {
                        arabic: "يُضَـٰهِـُٔونَ",
                        transliteration: "yudaahi'oona",
                        en: "they imitate",
                        ur: "وہ نقل کرتے ہیں",
                        root: "ض هـ و",
                        rootMeaning: "to imitate, resemble"
                    },
                    {
                        arabic: "قَوْلَ",
                        transliteration: "qawla",
                        en: "the saying",
                        ur: "قول",
                        root: "ق و ل",
                        rootMeaning: "saying"
                    },
                    {
                        arabic: "ٱلَّذِينَ",
                        transliteration: "alladheena",
                        en: "of those who",
                        ur: "ان کا جو",
                        root: "Relative",
                        rootMeaning: "those who"
                    },
                    {
                        arabic: "كَفَرُوا۟",
                        transliteration: "kafaroo",
                        en: "disbelieved",
                        ur: "کفر کیا",
                        root: "ك ف ر",
                        rootMeaning: "to disbelieve"
                    },
                    {
                        arabic: "مِن",
                        transliteration: "min",
                        en: "from",
                        ur: "سے",
                        root: "Preposition",
                        rootMeaning: "from"
                    },
                    {
                        arabic: "قَبْلُ",
                        transliteration: "qablu",
                        en: "before",
                        ur: "پہلے",
                        root: "ق ب ل",
                        rootMeaning: "before"
                    }
                ],
                translation: {
                    en: "And the Jews said 'Uzair is the son of Allah' and the Christians said 'The Messiah is the son of Allah.' That is their saying with their mouths; they imitate the saying of those who disbelieved before.",
                    ur: "اور یہودیوں نے کہا 'عزیر اللہ کا بیٹا ہے' اور عیسائیوں نے کہا 'مسیح اللہ کا بیٹا ہے۔' یہ ان کا منہ سے کہنا ہے؛ وہ ان لوگوں کے قول کی نقل کرتے ہیں جنہوں نے پہلے کفر کیا۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "CRITICAL AYAH! Allah is showing us the PATTERN. Jews elevated Uzair. Christians elevated Isa. They IMITATED previous disbelievers. This is a CYCLE. And guess what? Muslims are doing the SAME. Not saying 'son of Allah' (Astaghfirullah) but elevating the Prophet in other ways: 'Ya Rasulallah help me!' (calling upon him instead of Allah), 'Hadith is equal to Quran' (making his words divine), building shrines and praying at graves. Allah is WARNING us: You're imitating the exact mistakes of those who went astray before you. Wake up!",
                    ur: "اہم آیت! اللہ ہمیں نمونہ دکھا رہا ہے۔ یہودیوں نے عزیر کو بلند کیا۔ عیسائیوں نے عیسیٰ کو بلند کیا۔ انہوں نے پچھلے کافروں کی نقل کی۔ یہ ایک چکر ہے۔ اور اندازہ لگائیں؟ مسلمان بھی وہی کر رہے ہیں۔ 'اللہ کا بیٹا' نہیں کہہ رہے (استغفر اللہ) لیکن نبی کو دوسرے طریقوں سے بلند کر رہے ہیں: 'یا رسول اللہ میری مدد کرو!' (اللہ کی جگہ ان سے دعا مانگنا)، 'حدیث قرآن کے برابر ہے' (ان کے الفاظ کو الہی بنانا)، مزار بنانا اور قبروں پر دعا کرنا۔ اللہ ہمیں خبردار کر رہا ہے: تم ان لوگوں کی بالکل وہی غلطیاں دہرا رہے ہو جو پہلے گمراہ ہوئے۔ جاگ جاؤ!"
                }
            },
            {
                type: "ayah",
                surah: 18,
                ayahNumber: 110,
                surahName: "Al-Kahf",
                arabic: "قُلْ إِنَّمَآ أَنَا۟ بَشَرٌۭ مِّثْلُكُمْ يُوحَىٰٓ إِلَىَّ أَنَّمَآ إِلَـٰهُكُمْ إِلَـٰهٌۭ وَٰحِدٌۭ",
                wbw: [
                    {
                        arabic: "قُلْ",
                        transliteration: "qul",
                        en: "Say",
                        ur: "کہہ دو",
                        root: "ق و ل",
                        rootMeaning: "to say - command: say!"
                    },
                    {
                        arabic: "إِنَّمَآ",
                        transliteration: "innamaa",
                        en: "Only",
                        ur: "صرف",
                        root: "Restriction particle",
                        rootMeaning: "only, merely"
                    },
                    {
                        arabic: "أَنَا۟",
                        transliteration: "anaa",
                        en: "I am",
                        ur: "میں ہوں",
                        root: "Pronoun",
                        rootMeaning: "I"
                    },
                    {
                        arabic: "بَشَرٌۭ",
                        transliteration: "basharun",
                        en: "a human",
                        ur: "انسان",
                        root: "ب ش ر",
                        rootMeaning: "human being"
                    },
                    {
                        arabic: "مِّثْلُكُمْ",
                        transliteration: "mithlukum",
                        en: "like you",
                        ur: "تمہاری مثل",
                        root: "م ث ل",
                        rootMeaning: "like, similar"
                    },
                    {
                        arabic: "يُوحَىٰٓ",
                        transliteration: "yoohaa",
                        en: "it is revealed",
                        ur: "وحی کی جاتی ہے",
                        root: "و ح ی",
                        rootMeaning: "to reveal - passive: is revealed"
                    },
                    {
                        arabic: "إِلَىَّ",
                        transliteration: "ilayya",
                        en: "to me",
                        ur: "میری طرف",
                        root: "Preposition",
                        rootMeaning: "to me"
                    },
                    {
                        arabic: "أَنَّمَآ",
                        transliteration: "annamaa",
                        en: "that only",
                        ur: "کہ صرف",
                        root: "Particle",
                        rootMeaning: "that only"
                    },
                    {
                        arabic: "إِلَـٰهُكُمْ",
                        transliteration: "ilaahukum",
                        en: "your God",
                        ur: "تمہارا الہ",
                        root: "ا ل ه",
                        rootMeaning: "your God"
                    },
                    {
                        arabic: "إِلَـٰهٌۭ",
                        transliteration: "ilaahun",
                        en: "God",
                        ur: "الہ",
                        root: "ا ل ه",
                        rootMeaning: "God, deity"
                    },
                    {
                        arabic: "وَٰحِدٌۭ",
                        transliteration: "waahidun",
                        en: "One",
                        ur: "ایک",
                        root: "و ح د",
                        rootMeaning: "one, single"
                    }
                ],
                translation: {
                    en: "Say: I am only a human like you. It is revealed to me that your God is One God.",
                    ur: "کہہ دو: میں صرف تمہاری مثل ایک انسان ہوں۔ میری طرف وحی کی جاتی ہے کہ تمہارا الہ ایک الہ ہے۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "DIRECTLY FROM THE PROPHET'S MOUTH! Allah commands him to say: 'I am ONLY a HUMAN like you.' Not superhuman. Not divine. Not able to help after death. Just a HUMAN who receives revelation. The ONLY difference: he receives revelation. That's it. Yet Muslims call 'Ya Muhammad!' at graves, ask him for help, celebrate his birthday like Christians celebrate Christmas. The Prophet HIMSELF says he's just human - but we treat him like Christians treat Isa. We're repeating the EXACT mistake. This is the new Jahiliyyah.",
                    ur: "براہ راست نبی کے منہ سے! اللہ انہیں کہنے کا حکم دیتا ہے: 'میں صرف تمہاری مثل ایک انسان ہوں۔' مافوق الفطرت نہیں۔ الہی نہیں۔ موت کے بعد مدد کرنے کے قابل نہیں۔ صرف ایک انسان جو وحی وصول کرتا ہے۔ صرف فرق: وہ وحی وصول کرتے ہیں۔ بس۔ پھر بھی مسلمان قبروں پر 'یا محمد!' پکارتے ہیں، ان سے مدد مانگتے ہیں، ان کی سالگرہ مناتے ہیں جیسے عیسائی کرسمس مناتے ہیں۔ نبی خود کہتے ہیں وہ صرف انسان ہیں - لیکن ہم ان کے ساتھ وہی سلوک کرتے ہیں جو عیسائی عیسیٰ کے ساتھ کرتے ہیں۔ ہم بالکل وہی غلطی دہرا رہے ہیں۔ یہ نیا جاہلیت ہے۔"
                }
            },
            {
                type: "example",
                content: {
                    en: "Visit any Muslim shrine or grave. You'll see people: touching the grave for blessings, asking the dead saint for help, throwing money as offerings, praying facing the grave. Ask them: 'Why?' They say: 'He was close to Allah, he can intercede for us!' This is EXACTLY what Christians say about Isa! 'He's the son of God, he intercedes for us!' SAME EXCUSE. Different prophet, same shirk. Now imagine: On the Day of Judgment, Prophet Muhammad (peace be upon him) sees his ummah calling upon him instead of Allah. How does he feel? Allah shows him the Jews calling 'Ya Uzair!' and Christians calling 'Ya Isa!' and then Muslims calling 'Ya Muhammad!' All the same. All elevating prophets beyond their role. All committing shirk. The Prophet will say: 'Ya Allah, I told them I'm just a human! I told them to worship You alone! But they didn't listen.' Don't be among those who make the Prophet sad on that Day.",
                    ur: "کسی بھی مسلمان مزار یا قبر پر جائیں۔ آپ لوگوں کو دیکھیں گے: قبر کو برکت کے لیے چھوتے، مردہ بزرگ سے مدد مانگتے، پیسے چڑھاتے، قبر کی طرف منہ کر کے دعا کرتے۔ ان سے پوچھیں: 'کیوں؟' وہ کہتے ہیں: 'وہ اللہ کے قریب تھے، وہ ہماری شفاعت کر سکتے ہیں!' یہ بالکل وہی ہے جو عیسائی عیسیٰ کے بارے میں کہتے ہیں! 'وہ خدا کا بیٹا ہے، وہ ہماری شفاعت کرتا ہے!' وہی عذر۔ مختلف نبی، وہی شرک۔ اب تصور کریں: قیامت کے دن، نبی محمد (صلی اللہ علیہ وسلم) اپنی امت کو اللہ کی جگہ انہیں پکارتے دیکھتے ہیں۔ وہ کیسا محسوس کرتے ہیں؟ اللہ انہیں یہودیوں کو 'یا عزیر!' اور عیسائیوں کو 'یا عیسیٰ!' اور پھر مسلمانوں کو 'یا محمد!' پکارتے دکھاتا ہے۔ سب ایک جیسے۔ سب نبیوں کو ان کے کردار سے بلند کرتے ہوئے۔ سب شرک کرتے ہوئے۔ نبی کہیں گے: 'یا اللہ، میں نے انہیں بتایا میں صرف انسان ہوں! میں نے انہیں کہا صرف تیری عبادت کریں! لیکن انہوں نے نہیں سنا۔' ان میں سے نہ بنو جو اس دن نبی کو غمگین کرتے ہیں۔"
                }
            },
            {
                type: "reflection",
                questions: [
                    {
                        en: "Have you ever said 'Ya Rasulallah' or asked the Prophet for help? If yes, isn't that exactly what Christians do with Isa?",
                        ur: "کیا آپ نے کبھی 'یا رسول اللہ' کہا یا نبی سے مدد مانگی؟ اگر ہاں، تو کیا یہ بالکل وہی نہیں جو عیسائی عیسیٰ کے ساتھ کرتے ہیں؟"
                    },
                    {
                        en: "The Prophet HIMSELF says 'I am only a human like you' (18:110). Why do Muslims treat him like he's superhuman?",
                        ur: "نبی خود کہتے ہیں 'میں صرف تمہاری مثل انسان ہوں' (18:110)۔ مسلمان ان کے ساتھ ایسا سلوک کیوں کرتے ہیں جیسے وہ مافوق الفطرت ہیں؟"
                    },
                    {
                        en: "If you criticize Christians for elevating Isa, but you elevate Muhammad beyond what Allah intended, aren't you a hypocrite?",
                        ur: "اگر آپ عیسائیوں پر تنقید کرتے ہیں عیسیٰ کو بلند کرنے پر، لیکن آپ محمد کو اللہ کی مرضی سے زیادہ بلند کرتے ہیں، تو کیا آپ منافق نہیں؟"
                    }
                ]
            }
        ]
    },
    // TOPIC 6: TRUE FAITH - Not Just Words
    {
        id: 6,
        title: {
            en: "True Faith - Not Just Words on the Tongue",
            ur: "سچا ایمان - صرف زبان کے الفاظ نہیں"
        },
        sections: [
            {
                type: "intro",
                content: {
                    en: "You've learned the foundation: life is short, Quran is complete, use your brain, don't repeat history. Now comes a CRUSHING reality: Most people who CLAIM to be Muslim are NOT truly believers according to Allah! They say 'La ilaha illallah' with their tongue, but their hearts are empty and their actions don't match. Allah makes it clear: Faith is NOT just words. It's belief in the heart PLUS righteous actions PLUS being tested. You can't just say the shahada and think you're done. Let's see what Allah says about who is REALLY a believer.",
                    ur: "آپ نے بنیاد سیکھ لی: زندگی مختصر ہے، قرآن مکمل ہے، اپنا دماغ استعمال کرو، تاریخ نہ دہراؤ۔ اب ایک کچل دینے والی حقیقت آتی ہے: زیادہ تر لوگ جو مسلمان ہونے کا دعویٰ کرتے ہیں وہ اللہ کے مطابق واقعی ایمان والے نہیں! وہ زبان سے 'لا الہ الا اللہ' کہتے ہیں، لیکن ان کے دل خالی ہیں اور ان کے اعمال میل نہیں کھاتے۔ اللہ واضح کرتا ہے: ایمان صرف الفاظ نہیں۔ یہ دل میں یقین ہے جمع نیک اعمال جمع امتحان سے گزرنا۔ آپ صرف کلمہ نہیں کہہ سکتے اور سوچ سکتے ہیں کہ آپ کا کام ہو گیا۔ آئیں دیکھیں اللہ کیا کہتا ہے کہ واقعی ایمان والا کون ہے۔"
                }
            },
            {
                type: "ayah",
                surah: 2,
                ayahNumber: 8,
                surahName: "Al-Baqarah",
                arabic: "وَمِنَ ٱلنَّاسِ مَن يَقُولُ ءَامَنَّا بِٱللَّهِ وَبِٱلْيَوْمِ ٱلْـَٔاخِرِ وَمَا هُم بِمُؤْمِنِينَ",
                wbw: [
                    {
                        arabic: "وَمِنَ",
                        transliteration: "wa mina",
                        en: "And from",
                        ur: "اور میں سے",
                        root: "م ن",
                        rootMeaning: "from, among"
                    },
                    {
                        arabic: "ٱلنَّاسِ",
                        transliteration: "an-naasi",
                        en: "the people",
                        ur: "لوگوں",
                        root: "ن و س",
                        rootMeaning: "people, mankind"
                    },
                    {
                        arabic: "مَن",
                        transliteration: "man",
                        en: "who",
                        ur: "جو",
                        root: "Relative",
                        rootMeaning: "who"
                    },
                    {
                        arabic: "يَقُولُ",
                        transliteration: "yaqoolu",
                        en: "says",
                        ur: "کہتا ہے",
                        root: "ق و ل",
                        rootMeaning: "to say"
                    },
                    {
                        arabic: "ءَامَنَّا",
                        transliteration: "aamannaa",
                        en: "we believe",
                        ur: "ہم ایمان لائے",
                        root: "ء م ن",
                        rootMeaning: "to believe, have faith"
                    },
                    {
                        arabic: "بِٱللَّهِ",
                        transliteration: "billaahi",
                        en: "in Allah",
                        ur: "اللہ پر",
                        root: "ا ل ه",
                        rootMeaning: "God, Allah"
                    },
                    {
                        arabic: "وَبِٱلْيَوْمِ",
                        transliteration: "wa bil-yawmi",
                        en: "and in the Day",
                        ur: "اور دن پر",
                        root: "ی و م",
                        rootMeaning: "day"
                    },
                    {
                        arabic: "ٱلْـَٔاخِرِ",
                        transliteration: "al-aakhiri",
                        en: "the Last",
                        ur: "آخری",
                        root: "ء خ ر",
                        rootMeaning: "last, final"
                    },
                    {
                        arabic: "وَمَا",
                        transliteration: "wa maa",
                        en: "and not",
                        ur: "اور نہیں",
                        root: "Negation",
                        rootMeaning: "and not"
                    },
                    {
                        arabic: "هُم",
                        transliteration: "hum",
                        en: "they",
                        ur: "وہ",
                        root: "Pronoun",
                        rootMeaning: "they"
                    },
                    {
                        arabic: "بِمُؤْمِنِينَ",
                        transliteration: "bi-mu'mineena",
                        en: "believers",
                        ur: "ایمان والے",
                        root: "ء م ن",
                        rootMeaning: "believers, those with faith"
                    }
                ],
                translation: {
                    en: "And from the people are those who say 'We believe in Allah and in the Last Day' but they are not believers.",
                    ur: "اور لوگوں میں سے کچھ وہ ہیں جو کہتے ہیں 'ہم اللہ پر اور آخری دن پر ایمان لاتے ہیں' لیکن وہ ایمان والے نہیں ہیں۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "DEVASTATING! People SAY 'we believe' but Allah says they are NOT believers. Simply SAYING you believe means NOTHING. This destroys the entire 'just say shahada' mentality. You can say 'La ilaha illallah' a million times - if your heart doesn't truly submit and your actions don't reflect it, Allah says you're NOT a believer. How many Muslims think they're guaranteed Jannah because they said the shahada once? Allah is exposing them: Your words mean nothing if your heart and actions don't match.",
                    ur: "تباہ کن! لوگ کہتے ہیں 'ہم ایمان لاتے ہیں' لیکن اللہ کہتا ہے وہ ایمان والے نہیں۔ صرف کہنا کہ آپ ایمان لاتے ہیں کا مطلب کچھ نہیں۔ یہ پوری 'صرف کلمہ کہو' ذہنیت کو تباہ کرتا ہے۔ آپ 'لا الہ الا اللہ' دس لاکھ بار کہ سکتے ہیں - اگر آپ کا دل واقعی تسلیم نہیں کرتا اور آپ کے اعمال اس کی عکاسی نہیں کرتے، اللہ کہتا ہے آپ ایمان والے نہیں۔ کتنے مسلمان سوچتے ہیں کہ انہیں جنت کی ضمانت ہے کیونکہ انہوں نے ایک بار کلمہ کہا؟ اللہ انہیں بے نقاب کر رہا ہے: آپ کے الفاظ کا مطلب کچھ نہیں اگر آپ کا دل اور اعمال میل نہیں کھاتے۔"
                }
            },
            {
                type: "ayah",
                surah: 49,
                ayahNumber: 14,
                surahName: "Al-Hujurat",
                arabic: "قَالَتِ ٱلْأَعْرَابُ ءَامَنَّا ۖ قُل لَّمْ تُؤْمِنُوا۟ وَلَـٰكِن قُولُوٓا۟ أَسْلَمْنَا وَلَمَّا يَدْخُلِ ٱلْإِيمَـٰنُ فِى قُلُوبِكُمْ",
                wbw: [
                    {
                        arabic: "قَالَتِ",
                        transliteration: "qaalat",
                        en: "Said",
                        ur: "کہا",
                        root: "ق و ل",
                        rootMeaning: "to say"
                    },
                    {
                        arabic: "ٱلْأَعْرَابُ",
                        transliteration: "al-a'raabu",
                        en: "the bedouins",
                        ur: "بدوی",
                        root: "ع ر ب",
                        rootMeaning: "Arabs, bedouins"
                    },
                    {
                        arabic: "ءَامَنَّا",
                        transliteration: "aamannaa",
                        en: "we believe",
                        ur: "ہم ایمان لائے",
                        root: "ء م ن",
                        rootMeaning: "to believe"
                    },
                    {
                        arabic: "قُل",
                        transliteration: "qul",
                        en: "Say",
                        ur: "کہو",
                        root: "ق و ل",
                        rootMeaning: "to say - command"
                    },
                    {
                        arabic: "لَّمْ",
                        transliteration: "lam",
                        en: "not",
                        ur: "نہیں",
                        root: "Negation",
                        rootMeaning: "did not"
                    },
                    {
                        arabic: "تُؤْمِنُوا۟",
                        transliteration: "tu'minoo",
                        en: "you believe",
                        ur: "تم ایمان لائے",
                        root: "ء م ن",
                        rootMeaning: "to believe"
                    },
                    {
                        arabic: "وَلَـٰكِن",
                        transliteration: "wa laakin",
                        en: "but rather",
                        ur: "بلکہ",
                        root: "ل ك ن",
                        rootMeaning: "but, however"
                    },
                    {
                        arabic: "قُولُوٓا۟",
                        transliteration: "qooloo",
                        en: "say",
                        ur: "کہو",
                        root: "ق و ل",
                        rootMeaning: "to say"
                    },
                    {
                        arabic: "أَسْلَمْنَا",
                        transliteration: "aslamnaa",
                        en: "we submitted",
                        ur: "ہم نے اسلام قبول کیا",
                        root: "س ل م",
                        rootMeaning: "to submit, surrender"
                    },
                    {
                        arabic: "وَلَمَّا",
                        transliteration: "wa lammaa",
                        en: "and not yet",
                        ur: "اور ابھی نہیں",
                        root: "ل م",
                        rootMeaning: "not yet"
                    },
                    {
                        arabic: "يَدْخُلِ",
                        transliteration: "yadkhul",
                        en: "entered",
                        ur: "داخل ہوا",
                        root: "د خ ل",
                        rootMeaning: "to enter"
                    },
                    {
                        arabic: "ٱلْإِيمَـٰنُ",
                        transliteration: "al-eemaanu",
                        en: "the faith",
                        ur: "ایمان",
                        root: "ء م ن",
                        rootMeaning: "faith, belief"
                    },
                    {
                        arabic: "فِى",
                        transliteration: "fee",
                        en: "in",
                        ur: "میں",
                        root: "Preposition",
                        rootMeaning: "in"
                    },
                    {
                        arabic: "قُلُوبِكُمْ",
                        transliteration: "quloobikum",
                        en: "your hearts",
                        ur: "تمہارے دلوں",
                        root: "ق ل ب",
                        rootMeaning: "heart"
                    }
                ],
                translation: {
                    en: "The bedouins said 'We believe.' Say: 'You have not believed, but rather say we have submitted, for faith has not yet entered into your hearts.'",
                    ur: "بدویوں نے کہا 'ہم ایمان لائے'۔ کہہ دو: 'تم ایمان نہیں لائے، بلکہ کہو ہم نے اسلام قبول کیا، کیونکہ ایمان ابھی تمہارے دلوں میں داخل نہیں ہوا۔'"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "Allah DIRECTLY CORRECTS them! They say 'we believe' - Allah says 'NO, you DON'T believe!' Allah makes a distinction: You SUBMITTED (said the words) but FAITH hasn't entered your HEARTS. This is most Muslims today! They said shahada, they pray sometimes, they call themselves Muslim - but has faith truly entered their hearts? If it had, they would follow QURAN not traditions. They would ponder Quran not just recite it. They would change their lives not just go through motions. Faith in the heart transforms you. Empty words don't.",
                    ur: "اللہ براہ راست انہیں درست کرتا ہے! وہ کہتے ہیں 'ہم ایمان لائے' - اللہ کہتا ہے 'نہیں، تم ایمان نہیں لائے!' اللہ فرق کرتا ہے: تم نے اسلام قبول کیا (الفاظ کہے) لیکن ایمان تمہارے دلوں میں داخل نہیں ہوا۔ یہ آج کے زیادہ تر مسلمان ہیں! انہوں نے کلمہ کہا، وہ کبھی کبھار نماز پڑھتے ہیں، وہ اپنے آپ کو مسلمان کہتے ہیں - لیکن کیا ایمان واقعی ان کے دلوں میں داخل ہوا ہے؟ اگر ہوتا، تو وہ قرآن کی پیروی کرتے نہ کہ روایات کی۔ وہ قرآن پر غور کرتے نہ کہ صرف پڑھتے۔ وہ اپنی زندگیاں بدلتے نہ کہ صرف رسمی کام کرتے۔ دل میں ایمان آپ کو بدل دیتا ہے۔ خالی الفاظ نہیں۔"
                }
            },
            {
                type: "example",
                content: {
                    en: "Two men die. Both said 'La ilaha illallah.' Both prayed five times a day. Both fasted in Ramadan. At judgment, Allah judges them. First man: He said shahada but followed hadith over Quran. Prayed five times but never pondered what he was saying. Fasted but spent the rest of the year in haram earnings. Allah says: 'You said the words, but your heart never truly submitted to Me. You followed traditions over My Book. You went through motions without understanding. Your faith never entered your heart. You are not among the believers.' Second man: He said shahada and MEANT it. Studied Quran deeply, changed his life according to it. Prayed with understanding and consciousness. Made mistakes but always returned to Quran for guidance. Allah says: 'You truly believed. Your heart submitted. Your actions proved your faith. Welcome to Jannah.' Same shahada. Different hearts. Different outcomes. Which one are you?",
                    ur: "دو آدمی مرتے ہیں۔ دونوں نے 'لا الہ الا اللہ' کہا۔ دونوں دن میں پانچ بار نماز پڑھتے تھے۔ دونوں رمضان میں روزے رکھتے تھے۔ فیصلے پر، اللہ ان کا فیصلہ کرتا ہے۔ پہلا آدمی: اس نے کلمہ کہا لیکن قرآن پر حدیث کی پیروی کی۔ پانچ بار نماز پڑھی لیکن کبھی نہیں سوچا کہ وہ کیا کہہ رہا ہے۔ روزے رکھے لیکن سال کا باقی حصہ حرام کمائی میں گزارا۔ اللہ کہتا ہے: 'تم نے الفاظ کہے، لیکن تمہارے دل نے کبھی واقعی میرے سامنے سر نہیں جھکایا۔ تم نے میری کتاب پر روایات کی پیروی کی۔ تم نے سمجھ کے بغیر رسمی کام کیے۔ تمہارا ایمان کبھی تمہارے دل میں داخل نہیں ہوا۔ تم ایمان والوں میں سے نہیں ہو۔' دوسرا آدمی: اس نے کلمہ کہا اور اس کا مطلب سمجھا۔ قرآن کی گہرائی سے تعلیم حاصل کی، اس کے مطابق اپنی زندگی بدلی۔ سمجھ اور شعور کے ساتھ نماز پڑھی۔ غلطیاں کیں لیکن ہمیشہ رہنمائی کے لیے قرآن کی طرف لوٹا۔ اللہ کہتا ہے: 'تم واقعی ایمان لائے۔ تمہارے دل نے سر جھکایا۔ تمہارے اعمال نے تمہارے ایمان کو ثابت کیا۔ جنت میں خوش آمدید۔' وہی کلمہ۔ مختلف دل۔ مختلف نتائج۔ تم کون سے ہو؟"
                }
            },
            {
                type: "reflection",
                questions: [
                    {
                        en: "You said 'La ilaha illallah' - but has faith truly ENTERED your heart? Or are you just going through the motions?",
                        ur: "آپ نے 'لا الہ الا اللہ' کہا - لیکن کیا ایمان واقعی آپ کے دل میں داخل ہوا ہے؟ یا آپ صرف رسمی کام کر رہے ہیں؟"
                    },
                    {
                        en: "If you truly believed, would you follow Quran completely? Or would you keep making excuses to follow traditions instead?",
                        ur: "اگر آپ واقعی ایمان رکھتے ہیں، تو کیا آپ قرآن کی مکمل پیروی کریں گے؟ یا آپ روایات کی پیروی کے لیے بہانے بناتے رہیں گے؟"
                    },
                    {
                        en: "On judgment Day, when Allah asks 'Did you truly believe?' - what proof will you show? Just that you said shahada? Or that you changed your entire life for Me?",
                        ur: "قیامت کے دن، جب اللہ پوچھے گا 'کیا تم واقعی ایمان لائے؟' - آپ کیا ثبوت دکھائیں گے؟ صرف یہ کہ آپ نے کلمہ کہا؟ یا یہ کہ آپ نے میرے لیے اپنی پوری زندگی بدل دی؟"
                    }
                ]
            }
        ]
    },
    // TOPIC 7: SHIRK TODAY - Modern Forms of Associating Partners
    {
        id: 7,
        title: {
            en: "Shirk Today - Calling Upon Others Besides Allah",
            ur: "آج کا شرک - اللہ کے سوا دوسروں کو پکارنا"
        },
        sections: [
            {
                type: "intro",
                content: {
                    en: "You now understand: true faith must be in the heart with actions. But here's what breaks that faith completely: SHIRK - associating partners with Allah. Most Muslims think shirk means worshipping idols. But shirk has many forms, and Muslims today are committing shirk without realizing it. Calling upon Prophet Muhammad at his grave? Shirk. Asking dead saints for help? Shirk. Saying 'Ya Ali madad!'? Shirk. Believing someone can intercede without Allah's permission? Shirk. Following scholars and hadith OVER Quran? Shirk. Allah is VERY clear about this. Let's see what He says.",
                    ur: "اب آپ سمجھتے ہیں: سچا ایمان دل میں ہونا چاہیے اعمال کے ساتھ۔ لیکن یہاں وہ ہے جو اس ایمان کو مکمل طور پر توڑ دیتا ہے: شرک - اللہ کے ساتھ شریک ٹھہرانا۔ زیادہ تر مسلمان سوچتے ہیں شرک کا مطلب بتوں کی پوجا ہے۔ لیکن شرک کی بہت سی شکلیں ہیں، اور آج مسلمان احساس کیے بغیر شرک کر رہے ہیں۔ نبی محمد کو ان کی قبر پر پکارنا؟ شرک۔ مردہ بزرگوں سے مدد مانگنا؟ شرک۔ 'یا علی مدد!' کہنا؟ شرک۔ یقین کرنا کہ کوئی اللہ کی اجازت کے بغیر شفاعت کر سکتا ہے؟ شرک۔ قرآن پر علماء اور حدیث کی پیروی؟ شرک۔ اللہ اس بارے میں بہت واضح ہے۔ آئیں دیکھیں وہ کیا کہتا ہے۔"
                }
            },
            {
                type: "ayah",
                surah: 10,
                ayahNumber: 106,
                surahName: "Yunus",
                arabic: "وَلَا تَدْعُ مِن دُونِ ٱللَّهِ مَا لَا يَنفَعُكَ وَلَا يَضُرُّكَ ۖ فَإِن فَعَلْتَ فَإِنَّكَ إِذًۭا مِّنَ ٱلظَّـٰلِمِينَ",
                wbw: [
                    {
                        arabic: "وَلَا",
                        transliteration: "wa laa",
                        en: "And do not",
                        ur: "اور نہ",
                        root: "Negation",
                        rootMeaning: "and not"
                    },
                    {
                        arabic: "تَدْعُ",
                        transliteration: "tad'u",
                        en: "call upon",
                        ur: "پکارو",
                        root: "د ع و",
                        rootMeaning: "to call, invoke, pray to"
                    },
                    {
                        arabic: "مِن",
                        transliteration: "min",
                        en: "besides",
                        ur: "سوا",
                        root: "Preposition",
                        rootMeaning: "from, besides"
                    },
                    {
                        arabic: "دُونِ",
                        transliteration: "dooni",
                        en: "other than",
                        ur: "کے علاوہ",
                        root: "د و ن",
                        rootMeaning: "besides, other than, excluding"
                    },
                    {
                        arabic: "ٱللَّهِ",
                        transliteration: "allaahi",
                        en: "Allah",
                        ur: "اللہ",
                        root: "ا ل ه",
                        rootMeaning: "God, Allah"
                    },
                    {
                        arabic: "مَا",
                        transliteration: "maa",
                        en: "what",
                        ur: "جو",
                        root: "Relative",
                        rootMeaning: "what, that which"
                    },
                    {
                        arabic: "لَا",
                        transliteration: "laa",
                        en: "not",
                        ur: "نہیں",
                        root: "Negation",
                        rootMeaning: "not"
                    },
                    {
                        arabic: "يَنفَعُكَ",
                        transliteration: "yanfa'uka",
                        en: "benefits you",
                        ur: "تمہیں فائدہ دے",
                        root: "ن ف ع",
                        rootMeaning: "to benefit, profit"
                    },
                    {
                        arabic: "وَلَا",
                        transliteration: "wa laa",
                        en: "and not",
                        ur: "اور نہیں",
                        root: "Negation",
                        rootMeaning: "and not"
                    },
                    {
                        arabic: "يَضُرُّكَ",
                        transliteration: "yadurruka",
                        en: "harms you",
                        ur: "تمہیں نقصان دے",
                        root: "ض ر ر",
                        rootMeaning: "to harm, hurt"
                    },
                    {
                        arabic: "فَإِن",
                        transliteration: "fa'in",
                        en: "For if",
                        ur: "اگر",
                        root: "Conditional",
                        rootMeaning: "if"
                    },
                    {
                        arabic: "فَعَلْتَ",
                        transliteration: "fa'alta",
                        en: "you do",
                        ur: "تم کرو",
                        root: "ف ع ل",
                        rootMeaning: "to do"
                    },
                    {
                        arabic: "فَإِنَّكَ",
                        transliteration: "fa'innaka",
                        en: "then indeed you",
                        ur: "تو بیشک تم",
                        root: "Emphasis",
                        rootMeaning: "then indeed you"
                    },
                    {
                        arabic: "إِذًۭا",
                        transliteration: "idhan",
                        en: "then",
                        ur: "پھر",
                        root: "Particle",
                        rootMeaning: "then, at that time"
                    },
                    {
                        arabic: "مِّنَ",
                        transliteration: "mina",
                        en: "among",
                        ur: "میں سے",
                        root: "Preposition",
                        rootMeaning: "from, among"
                    },
                    {
                        arabic: "ٱلظَّـٰلِمِينَ",
                        transliteration: "adh-dhaalimeen",
                        en: "the wrongdoers",
                        ur: "ظالموں",
                        root: "ظ ل م",
                        rootMeaning: "wrongdoers, oppressors"
                    }
                ],
                translation: {
                    en: "And do not call upon besides Allah that which neither benefits you nor harms you. For if you do, then indeed you are among the wrongdoers.",
                    ur: "اور اللہ کے سوا اس کو نہ پکارو جو نہ تمہیں فائدہ دے سکے اور نہ نقصان۔ اگر تم ایسا کرو تو پھر بیشک تم ظالموں میں سے ہو۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "DIRECT PROHIBITION! 'Do NOT call upon BESIDES Allah...' The word 'tad'u' (تَدْعُ) means to call, invoke, pray to. Muslims go to graves and say 'Ya Rasulallah!' or 'Ya Ali!' - calling upon them. Allah says if you do this, you are among the WRONGDOERS (ٱلظَّـٰلِمِينَ - dhaalimeen). Not just making a mistake - you are a WRONGDOER. The Prophet can't benefit or harm you now - he's dead! Only Allah can. Yet people stand at shrines calling upon the dead. This is shirk. Clear shirk. Undeniable shirk.",
                    ur: "براہ راست ممانعت! 'اللہ کے سوا نہ پکارو...' لفظ 'تَدْعُ' (تدع) کا مطلب ہے پکارنا، دعا کرنا، التجا کرنا۔ مسلمان قبروں پر جا کر کہتے ہیں 'یا رسول اللہ!' یا 'یا علی!' - انہیں پکارتے ہیں۔ اللہ کہتا ہے اگر تم ایسا کرتے ہو، تو تم ظالموں (ٱلظَّـٰلِمِينَ - ظالمین) میں سے ہو۔ صرف غلطی نہیں کر رہے - تم ظالم ہو۔ نبی اب تمہیں فائدہ یا نقصان نہیں پہنچا سکتے - وہ فوت ہو چکے ہیں! صرف اللہ کر سکتا ہے۔ پھر بھی لوگ مزاروں پر کھڑے ہو کر مردوں کو پکارتے ہیں۔ یہ شرک ہے۔ واضح شرک۔ ناقابل تردید شرک۔"
                }
            }
        ]
    },
    // TOPIC 8: SECTARIANISM FORBIDDEN - No Sunni, No Shia
    {
        id: 8,
        title: {
            en: "Sectarianism Forbidden - No Sunni, No Shia, Only Muslim",
            ur: "فرقہ بندی ممنوع - نہ سنی، نہ شیعہ، صرف مسلم"
        },
        sections: [
            {
                type: "intro",
                content: {
                    en: "You've learned about shirk - calling upon others, following hadith over Quran. But there's another MAJOR form of shirk that Muslims don't recognize: SECTARIANISM. Allah commands ONE ummah, ONE religion, following ONE Book. But what have Muslims done? Split into Sunni, Shia, Hanafi, Maliki, Shafi, Hanbali, Salafi, Sufi - endless divisions! Each sect claims they're right, others are wrong. Each has their own scholars, their own hadith collections, their own practices. Allah EXPLICITLY forbids this. Division in religion is a form of shirk - you're creating multiple versions of Islam when Allah sent only ONE. Let's see what Allah says.",
                    ur: "آپ نے شرک کے بارے میں سیکھا - دوسروں کو پکارنا، قرآن پر حدیث کی پیروی کرنا۔ لیکن شرک کی ایک اور بڑی شکل ہے جسے مسلمان نہیں پہچانتے: فرقہ بندی۔ اللہ ایک امت، ایک دین، ایک کتاب کی پیروی کا حکم دیتا ہے۔ لیکن مسلمانوں نے کیا کیا؟ سنی، شیعہ، حنفی، مالکی، شافعی، حنبلی، سلفی، صوفی میں تقسیم ہو گئے - لامتناہی تقسیمیں! ہر فرقہ دعویٰ کرتا ہے کہ وہ صحیح ہے، دوسرے غلط ہیں۔ ہر ایک کے اپنے علماء ہیں، اپنے حدیث کے مجموعے ہیں، اپنے طریقے ہیں۔ اللہ واضح طور پر اس سے منع کرتا ہے۔ دین میں تقسیم شرک کی ایک شکل ہے - آپ اسلام کے متعدد ورژن بنا رہے ہیں جبکہ اللہ نے صرف ایک بھیجا۔ آئیں دیکھیں اللہ کیا کہتا ہے۔"
                }
            },
            {
                type: "ayah",
                surah: 6,
                ayahNumber: 159,
                surahName: "Al-An'am",
                arabic: "إِنَّ ٱلَّذِينَ فَرَّقُوا۟ دِينَهُمْ وَكَانُوا۟ شِيَعًۭا لَّسْتَ مِنْهُمْ فِى شَىْءٍ ۚ إِنَّمَآ أَمْرُهُمْ إِلَى ٱللَّهِ ثُمَّ يُنَبِّئُهُم بِمَا كَانُوا۟ يَفْعَلُونَ",
                wbw: [
                    {
                        arabic: "إِنَّ",
                        transliteration: "inna",
                        en: "Indeed",
                        ur: "بیشک",
                        root: "Emphasis",
                        rootMeaning: "indeed"
                    },
                    {
                        arabic: "ٱلَّذِينَ",
                        transliteration: "alladheena",
                        en: "those who",
                        ur: "وہ لوگ جنہوں نے",
                        root: "Relative",
                        rootMeaning: "those who"
                    },
                    {
                        arabic: "فَرَّقُوا۟",
                        transliteration: "farraqoo",
                        en: "divided",
                        ur: "تقسیم کیا",
                        root: "ف ر ق",
                        rootMeaning: "to divide, separate, split"
                    },
                    {
                        arabic: "دِينَهُمْ",
                        transliteration: "deenahum",
                        en: "their religion",
                        ur: "اپنے دین کو",
                        root: "د ی ن",
                        rootMeaning: "religion, way of life"
                    },
                    {
                        arabic: "وَكَانُوا۟",
                        transliteration: "wa kaanoo",
                        en: "and became",
                        ur: "اور بن گئے",
                        root: "ك و ن",
                        rootMeaning: "to be"
                    },
                    {
                        arabic: "شِيَعًۭا",
                        transliteration: "shiya'an",
                        en: "sects",
                        ur: "فرقے",
                        root: "ش ی ع",
                        rootMeaning: "sects, groups, parties"
                    },
                    {
                        arabic: "لَّسْتَ",
                        transliteration: "lasta",
                        en: "you are not",
                        ur: "تم نہیں ہو",
                        root: "ل ی س",
                        rootMeaning: "to not be"
                    },
                    {
                        arabic: "مِنْهُمْ",
                        transliteration: "minhum",
                        en: "of them",
                        ur: "ان میں سے",
                        root: "Preposition",
                        rootMeaning: "from them"
                    },
                    {
                        arabic: "فِى",
                        transliteration: "fee",
                        en: "in",
                        ur: "میں",
                        root: "Preposition",
                        rootMeaning: "in"
                    },
                    {
                        arabic: "شَىْءٍ",
                        transliteration: "shay'in",
                        en: "anything",
                        ur: "کسی چیز",
                        root: "ش ی ء",
                        rootMeaning: "thing, anything"
                    },
                    {
                        arabic: "إِنَّمَآ",
                        transliteration: "innamaa",
                        en: "Only",
                        ur: "صرف",
                        root: "Restriction",
                        rootMeaning: "only"
                    },
                    {
                        arabic: "أَمْرُهُمْ",
                        transliteration: "amruhum",
                        en: "their affair",
                        ur: "ان کا معاملہ",
                        root: "ا م ر",
                        rootMeaning: "affair, matter"
                    },
                    {
                        arabic: "إِلَى",
                        transliteration: "ilaa",
                        en: "to",
                        ur: "کی طرف",
                        root: "Preposition",
                        rootMeaning: "to"
                    },
                    {
                        arabic: "ٱللَّهِ",
                        transliteration: "allaahi",
                        en: "Allah",
                        ur: "اللہ",
                        root: "ا ل ه",
                        rootMeaning: "God, Allah"
                    }
                ],
                translation: {
                    en: "Indeed, those who divided their religion and became sects - you have nothing to do with them in anything. Their affair is only with Allah, then He will inform them about what they used to do.",
                    ur: "بیشک جن لوگوں نے اپنے دین کو تقسیم کیا اور فرقے بن گئے - تمہارا ان سے کسی چیز میں کوئی تعلق نہیں۔ ان کا معاملہ صرف اللہ کے ساتھ ہے، پھر وہ انہیں بتائے گا جو وہ کرتے تھے۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "CRYSTAL CLEAR! Those who DIVIDED their religion into SECTS (شِيَعًۭا - shiya'an - the word LITERALLY means sects!) - you have NOTHING to do with them. Allah will deal with them. Notice the word 'shiya' - it's the ROOT of 'Shia'! But this applies to ALL sects - Sunni, Shia, Sufi, Salafi - ALL divisions. Allah sent ONE religion. You divided it into competing groups, each following different scholars, different books, different practices. Allah says: I have nothing to do with your sects. Don't call yourself Sunni. Don't call yourself Shia. Call yourself MUSLIM - a submitter to Allah following His Quran ALONE.",
                    ur: "بالکل واضح! جن لوگوں نے اپنے دین کو فرقوں میں تقسیم کیا (شِيَعًۭا - شیعاً - یہ لفظ لفظی طور پر فرقوں کا مطلب ہے!) - تمہارا ان سے کوئی تعلق نہیں۔ اللہ ان سے نمٹے گا۔ لفظ 'شیع' نوٹ کریں - یہ 'شیعہ' کی جڑ ہے! لیکن یہ تمام فرقوں پر لاگو ہوتا ہے - سنی، شیعہ، صوفی، سلفی - تمام تقسیمیں۔ اللہ نے ایک دین بھیجا۔ تم نے اسے مقابلہ کرنے والے گروپوں میں تقسیم کیا، ہر ایک مختلف علماء، مختلف کتابوں، مختلف طریقوں کی پیروی کرتا ہے۔ اللہ کہتا ہے: تمہارے فرقوں سے میرا کوئی تعلق نہیں۔ اپنے آپ کو سنی نہ کہو۔ اپنے آپ کو شیعہ نہ کہو۔ اپنے آپ کو مسلم کہو - اللہ کے سامنے سر جھکانے والا جو صرف اس کے قرآن کی پیروی کرتا ہے۔"
                }
            },
            {
                type: "example",
                content: {
                    en: "A funeral. The family discusses: 'Should we follow Hanafi method or Shafi method?' They argue. One says 'Our imam is Sunni,' another says 'We follow Barelvi way.' In the chaos, NO ONE opens the Quran to see what ALLAH says about funerals. They're more concerned about following their sect than following Allah. This is the disease. On judgment Day, Allah asks: 'I sent you ONE clear Book with funeral guidance. Why were you following Imam Abu Hanifa's opinion instead of My words? Did I tell you to divide into Hanafi and Shafi? Or did I say follow the QURAN?' They have no answer. They chose sectarian loyalty over Allah's guidance. They divided what Allah commanded to be ONE. This is shirk in authority - making scholars into partners with Allah in legislation.",
                    ur: "ایک جنازہ۔ خاندان بحث کرتا ہے: 'کیا ہمیں حنفی طریقہ یا شافعی طریقہ اپنانا چاہیے؟' وہ بحث کرتے ہیں۔ ایک کہتا ہے 'ہمارے امام سنی ہیں،' دوسرا کہتا ہے 'ہم بریلوی طریقہ مانتے ہیں۔' انتشار میں، کوئی بھی قرآن نہیں کھولتا یہ دیکھنے کے لیے کہ اللہ جنازوں کے بارے میں کیا کہتا ہے۔ وہ اللہ کی پیروی کرنے سے زیادہ اپنے فرقے کی پیروی کرنے کے بارے میں فکرمند ہیں۔ یہ بیماری ہے۔ قیامت کے دن، اللہ پوچھتا ہے: 'میں نے تمہیں جنازے کی رہنمائی کے ساتھ ایک واضح کتاب بھیجی۔ تم میرے الفاظ کی بجائے امام ابو حنیفہ کی رائے کی پیروی کیوں کر رہے تھے؟ کیا میں نے تمہیں حنفی اور شافعی میں تقسیم ہونے کو کہا؟ یا میں نے کہا قرآن کی پیروی کرو؟' ان کے پاس کوئی جواب نہیں۔ انہوں نے اللہ کی رہنمائی پر فرقہ وارانہ وفاداری کو ترجیح دی۔ انہوں نے اسے تقسیم کیا جسے اللہ نے ایک رہنے کا حکم دیا۔ یہ اختیار میں شرک ہے - علماء کو قانون سازی میں اللہ کے ساتھ شریک بنانا۔"
                }
            },
            {
                type: "reflection",
                questions: [
                    {
                        en: "Do you call yourself Sunni or Shia before calling yourself Muslim? If yes, you've divided the religion Allah told you to keep united.",
                        ur: "کیا آپ اپنے آپ کو مسلمان کہنے سے پہلے سنی یا شیعہ کہتے ہیں؟ اگر ہاں، تو آپ نے اس دین کو تقسیم کیا جسے اللہ نے متحد رکھنے کو کہا۔"
                    },
                    {
                        en: "Allah says He has nothing to do with those who divide into sects (6:159). Are you comfortable being in a group Allah wants nothing to do with?",
                        ur: "اللہ کہتا ہے کہ ان لوگوں سے جو فرقوں میں تقسیم ہوتے ہیں اس کا کوئی تعلق نہیں (6:159)۔ کیا آپ ایسے گروپ میں ہونے سے مطمئن ہیں جس سے اللہ کوئی تعلق نہیں چاہتا؟"
                    }
                ]
            }
        ]
    },
    // TOPIC 9: PRACTICAL MATTERS - What Allah Actually Commanded (Quran-only)
    {
        id: 9,
        title: {
            en: "Practical Guidance - What Allah Actually Commanded",
            ur: "عملی رہنمائی - اللہ نے حقیقتاً کیا حکم دیا"
        },
        sections: [
            {
                type: "intro",
                content: {
                    en: "After foundations (Quran is sufficient, avoid shirk, avoid sects), we must ask: What does Allah actually command us to DO day-to-day? Many practices today come from culture, sect rules, or extra sources — and people treat them as religion. Here we'll focus on a few practical areas where Allah speaks clearly in the Quran: (1) Salah (prayer) and its times, (2) Halal/Haram — do not invent prohibitions, (3) The core principle: obey Allah and follow what He revealed.",
                    ur: "بنیاد کے بعد (قرآن کافی ہے، شرک سے بچو، فرقوں سے بچو)، اب سوال یہ ہے: اللہ ہمیں روزمرہ میں حقیقتاً کیا کرنے کا حکم دیتا ہے؟ آج بہت سے اعمال ثقافت، فرقہ وارانہ قواعد، یا اضافی ذرائع سے آتے ہیں — اور لوگ انہیں دین سمجھ لیتے ہیں۔ یہاں ہم چند عملی امور میں صرف قرآن کی واضح ہدایت دیکھیں گے: (1) نماز اور اس کے اوقات، (2) حلال/حرام — حرام خود سے نہ بناؤ، (3) بنیادی اصول: اللہ کی اطاعت اور اسی وحی کی پیروی۔"
                }
            },
            {
                type: "ayah",
                surah: 17,
                ayahNumber: 78,
                surahName: "Al-Isra",
                arabic: "أَقِمِ ٱلصَّلَوٰةَ لِدُلُوكِ ٱلشَّمْسِ إِلَىٰ غَسَقِ ٱلَّيْلِ وَقُرْءَانَ ٱلْفَجْرِ ۖ إِنَّ قُرْءَانَ ٱلْفَجْرِ كَانَ مَشْهُودًۭا",
                wbw: [
                    {"arabic":"أَقِمِ","transliteration":"aqim","en":"Establish","ur":"قائم کرو","root":"ق و م","rootMeaning":"to establish/stand"},
                    {"arabic":"ٱلصَّلَوٰةَ","transliteration":"as-salaata","en":"the prayer","ur":"نماز","root":"ص ل و","rootMeaning":"prayer"},
                    {"arabic":"لِدُلُوكِ","transliteration":"li-dulook","en":"at/for decline","ur":"ڈھلنے پر","root":"د ل ك","rootMeaning":"decline (of sun)"},
                    {"arabic":"ٱلشَّمْسِ","transliteration":"ash-shams","en":"the sun","ur":"سورج","root":"ش م س","rootMeaning":"sun"},
                    {"arabic":"إِلَىٰ","transliteration":"ilaa","en":"to","ur":"تک","root":"","rootMeaning":"to"},
                    {"arabic":"غَسَقِ","transliteration":"ghasaq","en":"darkness","ur":"تاریکی","root":"غ س ق","rootMeaning":"darkness of night"},
                    {"arabic":"ٱلَّيْلِ","transliteration":"al-layl","en":"the night","ur":"رات","root":"ل ي ل","rootMeaning":"night"},
                    {"arabic":"وَقُرْءَانَ","transliteration":"wa qur'aana","en":"and recitation","ur":"اور قراءت","root":"ق ر ء","rootMeaning":"recitation"},
                    {"arabic":"ٱلْفَجْرِ","transliteration":"al-fajr","en":"of dawn","ur":"فجر کی","root":"ف ج ر","rootMeaning":"dawn"}
                ],
                translation: {
                    en: "Establish the prayer from the decline of the sun until the darkness of the night, and the recitation of dawn. Indeed, the recitation of dawn is witnessed.",
                    ur: "نماز قائم کرو سورج کے ڈھلنے سے رات کی تاریکی تک، اور فجر کی قراءت۔ بیشک فجر کی قراءت حاضر کی جاتی ہے۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "This ayah gives a clear time framework for Salah: from the sun's decline (after midday) until the darkness of night, plus the specific mention of Qur'an/recitation at dawn (Fajr). The Quran gives time anchors and expects believers to establish prayer accordingly.",
                    ur: "یہ آیت نماز کے اوقات کا واضح دائرہ دیتی ہے: سورج کے ڈھلنے (دوپہر کے بعد) سے رات کی تاریکی تک، اور فجر کی قراءت کا خاص ذکر۔ قرآن وقت کے نشانات دیتا ہے اور مومنوں سے توقع کرتا ہے کہ اسی کے مطابق نماز قائم کریں۔"
                }
            },
            {
                type: "ayah",
                surah: 5,
                ayahNumber: 87,
                surahName: "Al-Ma'idah",
                arabic: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تُحَرِّمُوا۟ طَيِّبَـٰتِ مَآ أَحَلَّ ٱللَّهُ لَكُمْ وَلَا تَعْتَدُوٓا۟ ۚ إِنَّ ٱللَّهَ لَا يُحِبُّ ٱلْمُعْتَدِينَ",
                wbw: [
                    {"arabic":"يَـٰٓأَيُّهَا","transliteration":"yaa ayyuhaa","en":"O you","ur":"اے","root":"","rootMeaning":"O"},
                    {"arabic":"ٱلَّذِينَ","transliteration":"alladheena","en":"who","ur":"جو","root":"","rootMeaning":"those who"},
                    {"arabic":"ءَامَنُوا۟","transliteration":"aamanoo","en":"believe","ur":"ایمان لائے","root":"ء م ن","rootMeaning":"to believe"},
                    {"arabic":"لَا","transliteration":"laa","en":"do not","ur":"نہ","root":"","rootMeaning":"not"},
                    {"arabic":"تُحَرِّمُوا۟","transliteration":"tuharrimoo","en":"make forbidden","ur":"حرام کرو","root":"ح ر م","rootMeaning":"to forbid"},
                    {"arabic":"طَيِّبَـٰتِ","transliteration":"tayyibaat","en":"good things","ur":"پاک چیزیں","root":"ط ي ب","rootMeaning":"good/pure"},
                    {"arabic":"أَحَلَّ","transliteration":"ahalla","en":"made lawful","ur":"حلال کیا","root":"ح ل ل","rootMeaning":"to make lawful"},
                    {"arabic":"ٱللَّهُ","transliteration":"allaah","en":"Allah","ur":"اللہ","root":"ا ل ه","rootMeaning":"Allah"},
                    {"arabic":"لَكُمْ","transliteration":"lakum","en":"for you","ur":"تمہارے لیے","root":"","rootMeaning":"for you"}
                ],
                translation: {
                    en: "O you who believe! Do not forbid the good things Allah has made lawful for you, and do not transgress. Indeed Allah does not love the transgressors.",
                    ur: "اے ایمان والو! پاک چیزوں کو حرام نہ کرو جو اللہ نے تمہارے لیے حلال کی ہیں، اور حد سے نہ بڑھو۔ بیشک اللہ حد سے بڑھنے والوں کو پسند نہیں کرتا۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "A major practical corruption: people invent haram/halal. Allah says: do NOT forbid what Allah made lawful. When sect rules forbid things without Quranic proof, that is transgression.",
                    ur: "ایک بڑی عملی خرابی: لوگ خود حلال/حرام گھڑتے ہیں۔ اللہ کہتا ہے: جسے اللہ نے حلال کیا اسے حرام نہ کرو۔ جب فرقہ وارانہ قواعد قرآن کی دلیل کے بغیر چیزوں کو حرام کرتے ہیں، یہ حد سے بڑھنا ہے۔"
                }
            },
            {
                type: "example",
                content: {
                    en: "Someone says: 'This food is haram because our scholar said so' — but Allah says do not make haram what He made halal (5:87). Or someone says: 'Prayer times must be only from hadith' — but Allah Himself gives time anchors in the Quran (17:78). The practical rule is simple: when Allah speaks clearly, do not override it with culture.",
                    ur: "کوئی کہتا ہے: 'یہ کھانا حرام ہے کیونکہ ہمارے عالم نے کہا' — لیکن اللہ کہتا ہے جسے اللہ نے حلال کیا اسے حرام نہ کرو (5:87)۔ یا کوئی کہتا ہے: 'نماز کے اوقات صرف حدیث سے ہوں گے' — مگر اللہ خود قرآن میں وقت کے نشانات دیتا ہے (17:78)۔ عملی اصول سادہ ہے: جب اللہ واضح بات کرے تو ثقافت سے اس پر فوقیت نہ دو۔"
                }
            },
            {
                type: "reflection",
                questions: [
                    {"en":"Before you label something halal/haram, do you demand a clear Quranic proof?","ur":"کسی چیز کو حلال/حرام کہنے سے پہلے کیا آپ قرآن کی واضح دلیل مانگتے ہیں؟"},
                    {"en":"Do you let your schedule control your Salah, or do you structure your day around Allah's command to establish prayer?","ur":"کیا آپ کا شیڈول آپ کی نماز کو کنٹرول کرتا ہے، یا آپ اپنا دن اللہ کے حکم کے مطابق ترتیب دیتے ہیں؟"}
                ]
            }
        ]
    },
    // TOPIC 10: PATH FORWARD - How to Study & Live by Quran
    {
        id: 10,
        title: {
            en: "The Path Forward - How to Study and Live by the Quran",
            ur: "آگے کا راستہ - قرآن کو کیسے سمجھیں اور اس پر کیسے چلیں"
        },
        sections: [
            {
                type: "intro",
                content: {
                    en: "By now, you've seen how easily communities go astray: wasting life, blind following, sectarianism, and even shirk. So what is the solution? Allah didn't leave you without a method. The Quran itself tells you how to approach it: ponder deeply, seek understanding, and follow what is revealed. This final topic gives a practical Quran-based method to continue your journey.",
                    ur: "اب تک آپ نے دیکھ لیا کہ قومیں کیسے آسانی سے گمراہ ہو جاتی ہیں: زندگی ضائع کرنا، اندھی تقلید، فرقہ بندی، حتیٰ کہ شرک۔ تو حل کیا ہے؟ اللہ نے آپ کو طریقہ کے بغیر نہیں چھوڑا۔ قرآن خود بتاتا ہے کہ اس سے کیسے رجوع کرنا ہے: تدبر کرو، سمجھ حاصل کرو، اور اسی وحی کی پیروی کرو۔ یہ آخری موضوع قرآن کی بنیاد پر آگے بڑھنے کا عملی طریقہ دیتا ہے۔"
                }
            },
            {
                type: "ayah",
                surah: 38,
                ayahNumber: 29,
                surahName: "Sad",
                arabic: "كِتَـٰبٌ أَنزَلْنَـٰهُ إِلَيْكَ مُبَارَكٌۭ لِّيَدَّبَّرُوٓا۟ ءَايَـٰتِهِۦ وَلِيَتَذَكَّرَ أُو۟لُوا۟ ٱلْأَلْبَـٰبِ",
                wbw: [
                    {"arabic":"كِتَـٰبٌ","transliteration":"kitaabun","en":"A Book","ur":"ایک کتاب","root":"ك ت ب","rootMeaning":"book"},
                    {"arabic":"أَنزَلْنَـٰهُ","transliteration":"anzalnaahu","en":"We sent down it","ur":"ہم نے نازل کیا","root":"ن ز ل","rootMeaning":"send down"},
                    {"arabic":"مُبَارَكٌۭ","transliteration":"mubaarak","en":"blessed","ur":"بابرکت","root":"ب ر ك","rootMeaning":"blessed"},
                    {"arabic":"لِّيَدَّبَّرُوٓا۟","transliteration":"liyaddabbaroo","en":"so they may ponder","ur":"تاکہ وہ تدبر کریں","root":"د ب ر","rootMeaning":"ponder deeply"},
                    {"arabic":"ءَايَـٰتِهِۦ","transliteration":"aayaatihi","en":"its verses","ur":"اس کی آیات","root":"ء ي ي","rootMeaning":"verses"},
                    {"arabic":"أُو۟لُوا۟","transliteration":"uloo","en":"people of","ur":"والے","root":"","rootMeaning":"possessors"},
                    {"arabic":"ٱلْأَلْبَـٰبِ","transliteration":"al-albaab","en":"understanding","ur":"عقل","root":"ل ب ب","rootMeaning":"intellect/core"}
                ],
                translation: {
                    en: "A blessed Book which We have revealed to you so that they may ponder over its verses and that people of understanding may be reminded.",
                    ur: "یہ ایک بابرکت کتاب ہے جو ہم نے تمہاری طرف نازل کی تاکہ وہ اس کی آیات میں تدبر کریں اور عقل والے نصیحت حاصل کریں۔"
                }
            },
            {
                type: "explanation",
                content: {
                    en: "Allah reveals the Quran for TADABBUR (deep pondering), not mindless recitation. The goal: people of intellect get reminded and change. If your Quran reading doesn't change you, you're not doing tadabbur.",
                    ur: "اللہ نے قرآن تدبر کے لیے نازل کیا ہے، بے سوچ تلاوت کے لیے نہیں۔ مقصد: عقل والے نصیحت لیں اور بدلیں۔ اگر آپ کی تلاوت آپ کو نہیں بدلتی، تو آپ تدبر نہیں کر رہے۔"
                }
            },
            {
                type: "ayah",
                surah: 16,
                ayahNumber: 125,
                surahName: "An-Nahl",
                arabic: "ٱدْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِٱلْحِكْمَةِ وَٱلْمَوْعِظَةِ ٱلْحَسَنَةِ",
                wbw: [
                    {"arabic":"ٱدْعُ","transliteration":"ud'u","en":"Invite","ur":"دعوت دو","root":"د ع و","rootMeaning":"invite/call"},
                    {"arabic":"إِلَىٰ","transliteration":"ilaa","en":"to","ur":"کی طرف","root":"","rootMeaning":"to"},
                    {"arabic":"سَبِيلِ","transliteration":"sabeel","en":"path","ur":"راستہ","root":"س ب ل","rootMeaning":"path"},
                    {"arabic":"رَبِّكَ","transliteration":"rabbika","en":"of your Lord","ur":"اپنے رب کا","root":"ر ب ب","rootMeaning":"Lord"},
                    {"arabic":"بِٱلْحِكْمَةِ","transliteration":"bil-hikmah","en":"with wisdom","ur":"حکمت کے ساتھ","root":"ح ك م","rootMeaning":"wisdom/judgment"}
                ],
                translation: {
                    en: "Invite to the path of your Lord with wisdom and good instruction...",
                    ur: "اپنے رب کے راستے کی طرف حکمت اور اچھی نصیحت کے ساتھ دعوت دو..."
                }
            },
            {
                type: "explanation",
                content: {
                    en: "Returning to Quran isn't about arrogance or fighting family. It's with wisdom, patience, and good instruction. Speak gently. Let Quran speak. Focus on guidance, not winning arguments.",
                    ur: "قرآن کی طرف واپسی تکبر یا خاندان سے لڑائی نہیں۔ یہ حکمت، صبر، اور اچھی نصیحت کے ساتھ ہے۔ نرمی سے بات کرو۔ قرآن کو بولنے دو۔ مقصد ہدایت ہو، بحث جیتنا نہیں۔"
                }
            },
            {
                type: "example",
                content: {
                    en: "Practical study method: Pick one topic (e.g., shirk). Collect ALL related ayahs. Read them in Arabic. Do WBW. Compare contexts. Let Quran explain Quran. Then change ONE practice in your life accordingly. Repeat weekly. This is how a family returns to Quran step by step.",
                    ur: "عملی مطالعہ کا طریقہ: ایک موضوع لو (مثلاً شرک)۔ اس کے متعلق تمام آیات جمع کرو۔ عربی میں پڑھو۔ لفظ بہ لفظ کرو۔ سیاق دیکھو۔ قرآن کو قرآن سے سمجھو۔ پھر اپنی زندگی میں اس کے مطابق ایک عمل بدلو۔ ہفتہ وار دہراتے رہو۔ اسی طرح خاندان قدم بہ قدم قرآن کی طرف لوٹتا ہے۔"
                }
            },
            {
                type: "reflection",
                questions: [
                    {"en":"Will you commit to a weekly family Quran session focused on understanding (tadabbur) rather than just recitation?","ur":"کیا آپ ہفتہ وار خاندانی قرآن نشست کا عہد کریں گے جو صرف تلاوت نہیں بلکہ سمجھ (تدبر) پر ہو؟"},
                    {"en":"When Quran shows you a truth that contradicts your habit, will you change the habit or reinterpret the Quran?","ur":"جب قرآن آپ کو ایسی بات دکھائے جو آپ کی عادت کے خلاف ہو، تو آپ عادت بدلیں گے یا قرآن کو اپنے مطابق موڑیں گے؟"}
                ]
            }
        ]
    }
];

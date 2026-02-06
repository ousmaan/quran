// Data structure for misconceptions and their content
const misconceptionsData = [
    {
        id: 1,
        title: {
            en: "Simply Saying 'La ilaha illallah' is Enough for Jannah",
            ur: "صرف 'لا الہ الا اللہ' کہنا جنت کے لیے کافی ہے"
        },
        sections: [
            {
                type: "intro",
                content: {
                    en: "Many Muslims believe that merely saying 'La ilaha illallah' (There is no god but Allah) is sufficient to guarantee entry into Jannah. They think belief alone, without true understanding and action, is enough. Let us see what Allah says in the Quran.",
                    ur: "بہت سے مسلمان یہ سمجھتے ہیں کہ صرف 'لا الہ الا اللہ' کہنا جنت میں داخلے کے لیے کافی ہے۔ وہ سمجھتے ہیں کہ صرف ایمان، سچی سمجھ اور عمل کے بغیر، کافی ہے۔ آئیں دیکھیں کہ اللہ قرآن میں کیا فرماتا ہے۔"
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
                        transliteration: "wa min",
                        en: "And from",
                        ur: "اور میں سے",
                        root: "م ن",
                        rootMeaning: "from/among"
                    },
                    {
                        arabic: "ٱلنَّاسِ",
                        transliteration: "an-naasi",
                        en: "the people",
                        ur: "لوگوں",
                        root: "ن و س / ن ی س",
                        rootMeaning: "people/mankind"
                    },
                    {
                        arabic: "مَن",
                        transliteration: "man",
                        en: "who",
                        ur: "جو",
                        root: "relative pronoun",
                        rootMeaning: "who/those who"
                    },
                    {
                        arabic: "يَقُولُ",
                        transliteration: "yaqoolu",
                        en: "say",
                        ur: "کہتے ہیں",
                        root: "ق و ل",
                        rootMeaning: "to say/speak"
                    },
                    {
                        arabic: "ءَامَنَّا",
                        transliteration: "aamannaa",
                        en: "we believe",
                        ur: "ہم ایمان لائے",
                        root: "ء م ن",
                        rootMeaning: "to believe/have faith"
                    },
                    {
                        arabic: "بِٱللَّهِ",
                        transliteration: "billaahi",
                        en: "in Allah",
                        ur: "اللہ پر",
                        root: "ا ل ه",
                        rootMeaning: "God/deity"
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
                        rootMeaning: "last/final/end"
                    },
                    {
                        arabic: "وَمَا",
                        transliteration: "wa maa",
                        en: "and not",
                        ur: "اور نہیں",
                        root: "negation particle",
                        rootMeaning: "not"
                    },
                    {
                        arabic: "هُم",
                        transliteration: "hum",
                        en: "they",
                        ur: "وہ",
                        root: "pronoun",
                        rootMeaning: "they/them"
                    },
                    {
                        arabic: "بِمُؤْمِنِينَ",
                        transliteration: "bi-mu'mineena",
                        en: "with believers",
                        ur: "ایمان والے",
                        root: "ء م ن",
                        rootMeaning: "believers/faithful ones"
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
                    en: "Allah clearly states that there are people who CLAIM to believe, who SAY the words, but they are NOT believers. Simply saying words with the tongue is not enough. Allah is telling us that true faith requires more than verbal declaration.",
                    ur: "اللہ واضح طور پر فرماتا ہے کہ ایسے لوگ ہیں جو ایمان کا دعویٰ کرتے ہیں، جو الفاظ کہتے ہیں، لیکن وہ ایمان والے نہیں ہیں۔ صرف زبان سے الفاظ کہنا کافی نہیں۔ اللہ ہمیں بتا رہا ہے کہ سچے ایمان کے لیے زبانی اعلان سے زیادہ کی ضرورت ہے۔"
                }
            },
            {
                type: "ayah",
                surah: 49,
                ayahNumber: 14,
                surahName: "Al-Hujurat",
                arabic: "قَالَتِ ٱلْأَعْرَابُ ءَامَنَّا ۖ قُل لَّمْ تُؤْمِنُوا۟ وَلَـٰكِن قُولُوٓا۟ أَسْلَمْنَا وَلَمَّا يَدْخُلِ ٱلْإِيمَـٰنُ فِى قُلُوبِكُمْ ۖ وَإِن تُطِيعُوا۟ ٱللَّهَ وَرَسُولَهُۥ لَا يَلِتْكُم مِّنْ أَعْمَـٰلِكُمْ شَيْـًٔا ۚ إِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌ",
                wbw: [
                    {
                        arabic: "قَالَتِ",
                        transliteration: "qaalat",
                        en: "said",
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
                        rootMeaning: "Arabs/bedouins"
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
                        en: "say",
                        ur: "کہو",
                        root: "ق و ل",
                        rootMeaning: "to say/command to say"
                    },
                    {
                        arabic: "لَّمْ",
                        transliteration: "lam",
                        en: "not",
                        ur: "نہیں",
                        root: "negation particle",
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
                        rootMeaning: "but/however"
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
                        rootMeaning: "to submit/surrender"
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
                        rootMeaning: "faith/belief"
                    },
                    {
                        arabic: "فِى",
                        transliteration: "fee",
                        en: "in",
                        ur: "میں",
                        root: "preposition",
                        rootMeaning: "in/into"
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
                    en: "SubhanAllah! Allah is directly correcting those who merely claim faith with their tongues. He distinguishes between saying 'we believe' and TRUE belief that enters the heart. Faith (Iman) must penetrate the heart - it's not just words on the tongue. Allah knows what is in the hearts.",
                    ur: "سبحان اللہ! اللہ براہ راست ان لوگوں کی اصلاح کر رہا ہے جو صرف اپنی زبان سے ایمان کا دعویٰ کرتے ہیں۔ وہ 'ہم ایمان لائے' کہنے اور سچے ایمان میں فرق کرتا ہے جو دل میں داخل ہوتا ہے۔ ایمان دل میں سرایت کرنا چاہیے - یہ صرف زبان پر الفاظ نہیں۔ اللہ جانتا ہے کہ دلوں میں کیا ہے۔"
                }
            }
        ]
    }
];

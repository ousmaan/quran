// Quran Life Journey (Split Story) - Quran-only data
// Full lifecycle: Stages 0–12 (righteous vs rebellious)
// Core ayahs are shown on screen; expandable ayahs appear in Deep Dive.

const storyStages = [
  {
    id: 0,
    title: { en: "Stage 0 — The Universe: Signs Everywhere", ur: "مرحلہ 0 — کائنات: ہر طرف نشانیاں" },
    purpose: {
      en: "Allah presents the heavens and the earth as evidence. The first decision is whether the human reflects and returns to Allah, or passes by in heedlessness.",
      ur: "اللہ آسمان و زمین کو دلیل کے طور پر پیش کرتا ہے۔ پہلا فیصلہ یہ ہے کہ انسان غور کر کے اللہ کی طرف رجوع کرے یا غفلت میں گزر جائے۔"
    },
    righteous: {
      label: { en: "Righteous", ur: "مؤمن" },
      narration: {
        en: "He looks at the sky and earth and does not treat them as entertainment. He recognizes purpose and returns to Allah with humility.",
        ur: "وہ آسمان و زمین کو محض تماشہ نہیں سمجھتا۔ وہ مقصد پہچانتا ہے اور عاجزی کے ساتھ اللہ کی طرف رجوع کرتا ہے۔"
      },
      invocation: {
        en: "He directs awe, gratitude, and fear toward Allah — the Creator of what he is observing.",
        ur: "وہ اپنے خوف، شکر، اور تعظیم کو اللہ کی طرف موڑ دیتا ہے — جو اس سب کا خالق ہے جسے وہ دیکھ رہا ہے۔"
      },
      coreAyahs: [
        {
          ref: "3:190–191",
          arabic: "إِنَّ فِى خَلْقِ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ... رَبَّنَا مَا خَلَقْتَ هَـٰذَا بَـٰطِلًا ...",
          translation: {
            en: "In the creation of the heavens and the earth and the alternation of night and day are signs for people of understanding… ‘Our Lord, You did not create this without purpose…’",
            ur: "آسمانوں اور زمین کی پیدائش اور رات دن کے بدلنے میں عقل والوں کے لیے نشانیاں ہیں… ‘اے ہمارے رب! تو نے یہ سب بے مقصد نہیں بنایا…’"
          }
        },
        {
          ref: "2:164",
          arabic: "إِنَّ فِى خَلْقِ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ... لَـَٔايَـٰتٍ لِّقَوْمٍ يَعْقِلُونَ",
          translation: {
            en: "In the creation of the heavens and the earth… are signs for a people who use reason.",
            ur: "آسمانوں اور زمین کی پیدائش… میں عقل استعمال کرنے والوں کے لیے نشانیاں ہیں۔"
          }
        }
      ],
      expandableAyahs: [
        { ref: "51:20–21", en: "In the earth are signs… and in yourselves—will you not see?", ur: "زمین میں نشانیاں… اور تمہاری جانوں میں بھی—کیا تم نہیں دیکھتے؟" },
        { ref: "30:8", en: "Do they not reflect within themselves?", ur: "کیا وہ اپنے آپ میں غور نہیں کرتے؟" },
        { ref: "41:53", en: "We will show them Our signs in the horizons and in themselves…", ur: "ہم انہیں اپنی نشانیاں آفاق میں بھی دکھائیں گے اور ان کی جانوں میں بھی…" }
      ]
    },
    rebellious: {
      label: { en: "Rebellious", ur: "مجرم/معرض" },
      narration: {
        en: "He passes by countless signs but treats them as ‘normal life.’ He follows desire and remains heedless instead of returning to Allah.",
        ur: "وہ بے شمار نشانیوں کے پاس سے گزرتا ہے مگر انہیں ‘معمول’ سمجھتا ہے۔ وہ اللہ کی طرف رجوع کرنے کے بجائے خواہش اور غفلت کی پیروی کرتا ہے۔"
      },
      invocation: {
        en: "Instead of turning to Allah, he turns to what controls him most: desire, ego, and worldly approval.",
        ur: "اللہ کی طرف رجوع کرنے کے بجائے وہ اس چیز کی طرف جھکتا ہے جو اسے سب سے زیادہ قابو کرتی ہے: خواہش، نفس، اور دنیا کی پسندیدگی۔"
      },
      coreAyahs: [
        {
          ref: "12:105",
          arabic: "وَكَأَيِّن مِّنْ ءَايَةٍ ... وَهُمْ عَنْهَا مُعْرِضُونَ",
          translation: {
            en: "How many a sign in the heavens and the earth they pass by while turning away.",
            ur: "آسمانوں اور زمین میں کتنی ہی نشانیاں ہیں جن کے پاس سے وہ گزرتے ہیں اور ان سے منہ موڑتے ہیں۔"
          }
        },
        {
          ref: "45:23",
          arabic: "أَفَرَءَيْتَ مَنِ ٱتَّخَذَ إِلَـٰهَهُۥ هَوَىٰهُ",
          translation: {
            en: "Have you seen the one who takes his desire as his god?",
            ur: "کیا تم نے اسے دیکھا جس نے اپنی خواہش کو اپنا معبود بنا لیا؟"
          }
        }
      ],
      expandableAyahs: [
        { ref: "7:179", en: "They are like cattle—rather more astray.", ur: "وہ چوپایوں کی مانند ہیں بلکہ ان سے بھی زیادہ بھٹکے ہوئے۔" }
      ]
    }
  },

  {
    id: 1,
    title: { en: "Stage 1 — Adam, Descent, and Guidance", ur: "مرحلہ 1 — آدم، اترنا، اور ہدایت" },
    purpose: { en: "Life is a guided test. Safety is for those who follow guidance.", ur: "زندگی ہدایت کے ساتھ امتحان ہے۔ سلامتی ہدایت کی پیروی میں ہے۔" },
    righteous: {
      label: { en: "Follows Guidance", ur: "ہدایت کی پیروی" },
      narration: { en: "When guidance comes, he follows it.", ur: "جب ہدایت آتی ہے تو وہ پیروی کرتا ہے۔" },
      invocation: { en: "He asks Allah for guidance and submits.", ur: "وہ اللہ سے ہدایت مانگتا اور سر جھکاتا ہے۔" },
      coreAyahs: [
        { ref: "2:38", arabic: "فَمَن تَبِعَ هُدَاىَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ", translation: { en: "Whoever follows My guidance—no fear, no grief.", ur: "جو میری ہدایت کی پیروی کرے—نہ خوف، نہ غم۔" } }
      ],
      expandableAyahs: [
        { ref: "20:123", en: "Whoever follows My guidance will not go astray nor suffer.", ur: "جو میری ہدایت کی پیروی کرے نہ بھٹکے گا نہ بدحال ہوگا۔" }
      ]
    },
    rebellious: {
      label: { en: "Turns Away", ur: "اعراض" },
      narration: { en: "He denies and turns away.", ur: "وہ جھٹلاتا اور منہ موڑتا ہے۔" },
      invocation: { en: "He chooses other authorities.", ur: "وہ دوسرے اختیار چنتا ہے۔" },
      coreAyahs: [
        { ref: "2:39", arabic: "أُو۟لَـٰٓئِكَ أَصْحَـٰبُ ٱلنَّارِ", translation: { en: "Those are companions of the Fire.", ur: "وہ آگ والے ہیں۔" } }
      ],
      expandableAyahs: [
        { ref: "20:124", en: "Whoever turns away from My remembrance will have a narrow life.", ur: "جو میرے ذکر سے منہ موڑے اس کے لیے تنگ زندگی ہے۔" }
      ]
    }
  },

  {
    id: 2,
    title: { en: "Stage 2 — Created in the Womb", ur: "مرحلہ 2 — رحم میں تخلیق" },
    purpose: { en: "The Quran describes your origin to break arrogance.", ur: "قرآن ابتدا بیان کر کے تکبر توڑتا ہے۔" },
    righteous: {
      label: { en: "Humbles Himself", ur: "عاجزی" },
      narration: { en: "He remembers he did not create himself.", ur: "وہ یاد رکھتا ہے کہ اس نے خود کو پیدا نہیں کیا۔" },
      invocation: { en: "Gratitude to Allah.", ur: "اللہ کا شکر۔" },
      coreAyahs: [
        { ref: "23:12–14", arabic: "ثُمَّ خَلَقْنَا ٱلنُّطْفَةَ عَلَقَةً ...", translation: { en: "We created the drop into a clinging form…", ur: "ہم نے نطفہ کو علقہ بنایا…" } }
      ],
      expandableAyahs: [
        { ref: "22:5", en: "We created you from dust, then from a drop…", ur: "ہم نے تمہیں مٹی سے، پھر نطفہ سے…" },
        { ref: "96:1–2", en: "Created man from a clinging form.", ur: "انسان کو علقہ سے پیدا کیا۔" }
      ]
    },
    rebellious: {
      label: { en: "Becomes Arrogant", ur: "تکبر" },
      narration: { en: "He later sees himself self-sufficient.", ur: "وہ خود کو بے نیاز سمجھنے لگتا ہے۔" },
      invocation: { en: "Self and desire.", ur: "خود اور خواہش۔" },
      coreAyahs: [
        { ref: "96:6–7", arabic: "إِنَّ ٱلْإِنسَـٰنَ لَيَطْغَىٰ ...", translation: { en: "Mankind transgresses because he sees himself self-sufficient.", ur: "انسان سرکشی کرتا ہے کیونکہ وہ خود کو بے نیاز سمجھتا ہے۔" } }
      ],
      expandableAyahs: [
        { ref: "36:78", en: "He forgets his creation…", ur: "وہ اپنی پیدائش بھول جاتا ہے…" }
      ]
    }
  },

  {
    id: 3,
    title: { en: "Stage 3 — Born Knowing Nothing", ur: "مرحلہ 3 — نادان پیدا ہونا" },
    purpose: { en: "You are given hearing/sight/hearts and then questioned.", ur: "تمہیں کان/آنکھ/دل دیے گئے اور پھر پوچھا جائے گا۔" },
    righteous: {
      label: { en: "Uses the Gifts", ur: "نعمتوں کا استعمال" },
      narration: { en: "He uses hearing and sight to learn truth.", ur: "وہ سچ سیکھنے کے لیے کان اور آنکھ استعمال کرتا ہے۔" },
      invocation: { en: "Asks for a living heart.", ur: "دل کی زندگی مانگتا ہے۔" },
      coreAyahs: [
        { ref: "16:78", arabic: "وَجَعَلَ لَكُمُ ٱلسَّمْعَ وَٱلْأَبْصَـٰرَ وَٱلْأَفْـِٔدَةَ", translation: { en: "He made hearing, sight, and hearts so you may be grateful.", ur: "اس نے کان، آنکھیں، اور دل بنائے تاکہ تم شکر کرو۔" } }
      ],
      expandableAyahs: [
        { ref: "17:36", en: "Hearing, sight, and heart — all will be questioned.", ur: "کان، آنکھ، دل — سب کے بارے میں پوچھا جائے گا۔" }
      ]
    },
    rebellious: {
      label: { en: "Wastes the Gifts", ur: "نعمتوں کی ناقدری" },
      narration: { en: "He becomes spiritually deaf and blind.", ur: "وہ روحانی طور پر بہرا اور اندھا ہو جاتا ہے۔" },
      invocation: { en: "Crowd and habit.", ur: "بھیڑ اور عادت۔" },
      coreAyahs: [
        { ref: "7:179", arabic: "لَهُمْ قُلُوبٌ ... بَلْ هُمْ أَضَلُّ", translation: { en: "Hearts that do not understand… like cattle, more astray.", ur: "دل جو سمجھتے نہیں… چوپایوں کی مانند بلکہ زیادہ بھٹکے۔" } }
      ],
      expandableAyahs: [
        { ref: "8:22", en: "Worst creatures: those who do not use reason.", ur: "بدترین مخلوق: جو عقل استعمال نہیں کرتے۔" }
      ]
    }
  },

  {
    id: 4,
    title: { en: "Stage 4 — Youth: Desire vs Discipline", ur: "مرحلہ 4 — جوانی: خواہش بمقابلہ ضبط" },
    purpose: { en: "The Quran contrasts restraint with worship of desire.", ur: "قرآن ضبط نفس اور خواہش کی عبادت کا فرق بتاتا ہے۔" },
    righteous: {
      label: { en: "Restrains the Soul", ur: "نفس کو روکتا ہے" },
      narration: { en: "He restrains desire and fears standing before Allah.", ur: "وہ خواہش روکتا ہے اور اللہ کے سامنے کھڑے ہونے سے ڈرتا ہے۔" },
      invocation: { en: "Seeks Allah’s help.", ur: "اللہ کی مدد چاہتا ہے۔" },
      coreAyahs: [
        { ref: "79:40–41", arabic: "وَنَهَى ٱلنَّفْسَ عَنِ ٱلْهَوَىٰ", translation: { en: "He restrained the soul from desire.", ur: "اس نے نفس کو خواہش سے روکا۔" } }
      ],
      expandableAyahs: [
        { ref: "91:9–10", en: "Successful is the one who purifies the soul…", ur: "کامیاب وہ جس نے نفس کو پاک کیا…" }
      ]
    },
    rebellious: {
      label: { en: "Follows Desire", ur: "خواہش کی پیروی" },
      narration: { en: "He takes desire as a god.", ur: "وہ خواہش کو معبود بنا لیتا ہے۔" },
      invocation: { en: "Impulse.", ur: "خواہش۔" },
      coreAyahs: [
        { ref: "25:43", arabic: "ٱتَّخَذَ إِلَـٰهَهُۥ هَوَىٰهُ", translation: { en: "He takes his desire as his god.", ur: "اس نے اپنی خواہش کو معبود بنا لیا۔" } }
      ],
      expandableAyahs: [
        { ref: "45:23", en: "He takes desire as god…", ur: "وہ خواہش کو معبود بناتا ہے…" }
      ]
    }
  },

  {
    id: 5,
    title: { en: "Stage 5 — Vulnerability: Sincerity vs Forgetfulness", ur: "مرحلہ 5 — کمزوری: اخلاص یا بھول" },
    purpose: { en: "Hardship reveals hearts.", ur: "مصیبت دل ظاہر کرتی ہے۔" },
    righteous: {
      label: { en: "Consistent Sincerity", ur: "مستقل اخلاص" },
      narration: { en: "He calls Allah in fear and hope consistently.", ur: "وہ مستقل خوف و امید کے ساتھ اللہ کو پکارتا ہے۔" },
      invocation: { en: "Allah alone.", ur: "صرف اللہ۔" },
      coreAyahs: [
        { ref: "32:16", arabic: "يَدْعُونَ رَبَّهُمْ خَوْفًا وَطَمَعًا", translation: { en: "They call their Lord in fear and hope.", ur: "وہ اپنے رب کو خوف اور امید کے ساتھ پکارتے ہیں۔" } }
      ],
      expandableAyahs: [
        { ref: "32:15–17", en: "Night worship + hidden reward.", ur: "رات کی عبادت + چھپا ہوا انعام۔" }
      ]
    },
    rebellious: {
      label: { en: "Emergency Religion", ur: "عارضی دین داری" },
      narration: { en: "He calls Allah in harm, forgets in ease.", ur: "مصیبت میں پکارتا ہے، آسانی میں بھول جاتا ہے۔" },
      invocation: { en: "Crisis: Allah; Ease: other priorities.", ur: "بحران: اللہ؛ آسانی: دوسری ترجیحات۔" },
      coreAyahs: [
        { ref: "10:12", arabic: "فَلَمَّا كَشَفْنَا عَنْهُ ضُرَّهُۥ مَرَّ كَأَن لَّمْ يَدْعُنَا", translation: { en: "When We remove harm, he passes on as if he never called Us.", ur: "جب ہم تکلیف دور کر دیتے ہیں تو وہ یوں گزر جاتا ہے جیسے کبھی پکارا ہی نہ تھا۔" } }
      ],
      expandableAyahs: [
        { ref: "29:65", en: "Ship pattern: sincerity then association.", ur: "کشتی: اخلاص پھر شریک۔" }
      ]
    }
  },

  {
    id: 6,
    title: { en: "Stage 6 — Reminder: Humility vs Argument", ur: "مرحلہ 6 — نصیحت: عاجزی یا بحث" },
    purpose: { en: "Listen and change, or argue and turn away.", ur: "سنو اور بدلو، یا بحث کر کے منہ موڑو۔" },
    righteous: {
      label: { en: "Listens & Submits", ur: "سنتا اور جھکتا ہے" },
      narration: { en: "He listens in silence and seeks mercy.", ur: "وہ خاموشی سے سنتا ہے اور رحمت چاہتا ہے۔" },
      invocation: { en: "Mercy.", ur: "رحمت۔" },
      coreAyahs: [
        { ref: "7:204", arabic: "فَٱسْتَمِعُوا۟ لَهُۥ وَأَنصِتُوا۟", translation: { en: "Listen to it and be silent.", ur: "اسے سنو اور خاموش رہو۔" } }
      ],
      expandableAyahs: [
        { ref: "47:24", en: "Do they not ponder the Quran?", ur: "کیا وہ قرآن میں تدبر نہیں کرتے؟" }
      ]
    },
    rebellious: {
      label: { en: "Follows Fathers", ur: "باپ دادا کی پیروی" },
      narration: { en: "He uses inherited practice as proof.", ur: "وہ روایت کو دلیل بناتا ہے۔" },
      invocation: { en: "Tradition.", ur: "روایت۔" },
      coreAyahs: [
        { ref: "2:170", arabic: "بَلْ نَتَّبِعُ مَا أَلْفَيْنَا عَلَيْهِ آبَاءَنَا", translation: { en: "We follow what we found our fathers upon.", ur: "ہم اپنے باپ دادا پر پائے گئے طریقے کی پیروی کرتے ہیں۔" } }
      ],
      expandableAyahs: [
        { ref: "17:46", en: "They turn back in aversion.", ur: "وہ نفرت سے پلٹتے ہیں۔" }
      ]
    }
  },

  {
    id: 7,
    title: { en: "Stage 7 — Wealth Test (Qarun)", ur: "مرحلہ 7 — مال کا امتحان (قارون)" },
    purpose: { en: "Wealth exposes gratitude or ego.", ur: "مال شکر یا غرور ظاہر کرتا ہے۔" },
    righteous: {
      label: { en: "Grateful & Gives", ur: "شکر اور انفاق" },
      narration: { en: "He sees wealth as a test.", ur: "وہ مال کو امتحان سمجھتا ہے۔" },
      invocation: { en: "Allah.", ur: "اللہ۔" },
      coreAyahs: [
        { ref: "67:2", arabic: "لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا", translation: { en: "To test which of you is best in deeds.", ur: "تاکہ تمہیں آزمائے کہ کون بہتر عمل کرتا ہے۔" } }
      ],
      expandableAyahs: [
        { ref: "2:177", en: "Giving wealth is part of righteousness.", ur: "مال خرچ کرنا نیکی کا حصہ ہے۔" }
      ]
    },
    rebellious: {
      label: { en: "Qarun Ego", ur: "قارونی غرور" },
      narration: { en: "He credits himself.", ur: "وہ خود کو کریڈٹ دیتا ہے۔" },
      invocation: { en: "Status.", ur: "حیثیت۔" },
      coreAyahs: [
        { ref: "28:78", arabic: "إِنَّمَا أُوتِيتُهُ عَلَىٰ عِلْمٍ عِندِى", translation: { en: "I was given it because of knowledge I have.", ur: "یہ مجھے میرے علم کی وجہ سے دیا گیا۔" } }
      ],
      expandableAyahs: [
        { ref: "28:79–82", en: "Wishing to be like him then seeing the end.", ur: "اس جیسے ہونے کی تمنا پھر انجام دیکھنا۔" }
      ]
    }
  },

  {
    id: 8,
    title: { en: "Stage 8 — Delay vs Return", ur: "مرحلہ 8 — تاخیر یا رجوع" },
    purpose: { en: "One returns; the other keeps delaying.", ur: "ایک رجوع کرتا ہے، دوسرا ٹالتا رہتا ہے۔" },
    righteous: {
      label: { en: "Repents", ur: "توبہ" },
      narration: { en: "He returns to Allah.", ur: "وہ اللہ کی طرف لوٹتا ہے۔" },
      invocation: { en: "Mercy.", ur: "رحمت۔" },
      coreAyahs: [
        { ref: "39:53", arabic: "لَا تَقْنَطُوا۟ مِن رَّحْمَةِ ٱللَّهِ", translation: { en: "Do not despair of Allah’s mercy.", ur: "اللہ کی رحمت سے ناامید نہ ہو۔" } }
      ],
      expandableAyahs: [
        { ref: "66:8", en: "Sincere repentance.", ur: "خالص توبہ۔" }
      ]
    },
    rebellious: {
      label: { en: "Delays", ur: "تاخیر" },
      narration: { en: "He asks for time only at the end.", ur: "وہ آخر میں مہلت مانگتا ہے۔" },
      invocation: { en: "False security.", ur: "جھوٹی سلامتی۔" },
      coreAyahs: [
        { ref: "63:10", arabic: "رَبِّ لَوْلَآ أَخَّرْتَنِىٓ إِلَىٰٓ أَجَلٍ قَرِيبٍ", translation: { en: "If only You would delay me…", ur: "اگر تو مجھے مہلت دے دیتا…" } }
      ],
      expandableAyahs: [
        { ref: "63:11", en: "Allah will not delay a soul when its term comes.", ur: "جب وقت آئے تو اللہ مہلت نہیں دیتا۔" }
      ]
    }
  }

  ,
  {
    id: 9,
    title: { en: "Stage 9 — Death and Regret", ur: "مرحلہ 9 — موت اور افسوس" },
    purpose: { en: "Death ends the test; regret exposes what was real.", ur: "موت امتحان ختم کرتی ہے؛ افسوس حقیقت ظاہر کرتا ہے۔" },
    righteous: {
      label: { en: "Meets death with hope", ur: "امید کے ساتھ" },
      narration: { en: "He prepared, so he meets Allah with hope and humility.", ur: "اس نے تیاری کی، اس لیے وہ امید اور عاجزی کے ساتھ ملاقات کرتا ہے۔" },
      invocation: { en: "Allah’s mercy.", ur: "اللہ کی رحمت۔" },
      coreAyahs: [
        { ref: "89:27–30 (idea)", arabic: "يَـٰأَيَّتُهَا ٱلنَّفْسُ ٱلْمُطْمَئِنَّةُ", translation: { en: "O tranquil soul… return to your Lord…", ur: "اے مطمئن جان… اپنے رب کی طرف لوٹ…" } }
      ],
      expandableAyahs: [
        { ref: "13:28", en: "Hearts find rest in remembrance of Allah.", ur: "دل اللہ کے ذکر سے مطمئن ہوتے ہیں۔" }
      ]
    },
    rebellious: {
      label: { en: "Begs to return", ur: "واپسی کی بھیک" },
      narration: { en: "He realizes too late and begs to go back and fix life.", ur: "وہ بہت دیر سے سمجھتا ہے اور واپسی کی بھیک مانگتا ہے۔" },
      invocation: { en: "Late regret.", ur: "دیر کا افسوس۔" },
      coreAyahs: [
        { ref: "23:99–100 (idea)", arabic: "رَبِّ ٱرْجِعُونِ", translation: { en: "My Lord, send me back…", ur: "اے رب! مجھے واپس بھیج دے…" } }
      ],
      expandableAyahs: [
        { ref: "35:37", en: "Did We not give you life long enough?", ur: "کیا ہم نے تمہیں کافی عمر نہیں دی؟" }
      ]
    }
  },
  {
    id: 10,
    title: { en: "Stage 10 — Resurrection & Gathering", ur: "مرحلہ 10 — دوبارہ اٹھایا جانا اور جمع ہونا" },
    purpose: { en: "On that Day, dunya feels like a brief moment.", ur: "اس دن دنیا ایک لمحہ محسوس ہوتی ہے۔" },
    righteous: {
      label: { en: "Sees the truth clearly", ur: "حق واضح" },
      narration: { en: "He sees Allah’s promise as truth and is not surprised.", ur: "وہ اللہ کے وعدے کو حق پاتا ہے اور حیران نہیں ہوتا۔" },
      invocation: { en: "Allah.", ur: "اللہ۔" },
      coreAyahs: [
        { ref: "10:45", arabic: "كَأَن لَّمْ يَلْبَثُوٓا۟ إِلَّا سَاعَةًۭ مِّنَ ٱلنَّهَارِ", translation: { en: "As if they had not remained except an hour of the day.", ur: "گویا وہ دن کے ایک گھنٹے سے زیادہ نہیں ٹھہرے۔" } }
      ],
      expandableAyahs: [
        { ref: "23:112–114", en: "A day or part of a day…", ur: "ایک دن یا دن کا کچھ حصہ…" },
        { ref: "79:46", en: "As if an evening or its morning.", ur: "گویا ایک شام یا اس کی صبح۔" }
      ]
    },
    rebellious: {
      label: { en: "Shocked and deluded", ur: "حیرت و دھوکا" },
      narration: { en: "He swears it was only an hour—still deluded.", ur: "وہ قسم کھاتا ہے کہ بس ایک گھڑی تھی—پھر بھی دھوکے میں۔" },
      invocation: { en: "Excuses.", ur: "بہانے۔" },
      coreAyahs: [
        { ref: "30:55", arabic: "مَا لَبِثُوا۟ غَيْرَ سَاعَةٍۢ", translation: { en: "They swear they remained but an hour.", ur: "وہ قسم کھاتے ہیں کہ ایک گھڑی سے زیادہ نہیں رہے۔" } }
      ],
      expandableAyahs: [
        { ref: "20:103–104", en: "Ten days… one day.", ur: "دس دن… ایک دن۔" }
      ]
    }
  },
  {
    id: 11,
    title: { en: "Stage 11 — Judgment: Record & Witnesses", ur: "مرحلہ 11 — حساب: نامۂ اعمال اور گواہ" },
    purpose: { en: "Truth becomes undeniable; excuses collapse.", ur: "حق واضح ہو جاتا ہے؛ عذر ٹوٹ جاتے ہیں۔" },
    righteous: {
      label: { en: "Receives record with joy", ur: "خوشی سے نامہ" },
      narration: { en: "He receives his record and welcomes accountability.", ur: "وہ نامۂ اعمال لیتا ہے اور حساب کو حق سمجھتا ہے۔" },
      invocation: { en: "Gratitude.", ur: "شکر۔" },
      coreAyahs: [
        { ref: "69:19 (idea)", arabic: "هَآؤُمُ ٱقْرَءُوا۟ كِتَـٰبِيَهْ", translation: { en: "Here, read my record!", ur: "لو! میرا نامہ پڑھو!" } }
      ],
      expandableAyahs: [
        { ref: "84:7–9", en: "Given his book in his right hand… easy account.", ur: "دایاں ہاتھ… آسان حساب۔" }
      ]
    },
    rebellious: {
      label: { en: "Receives record with shame", ur: "شرمندگی" },
      narration: { en: "He wishes he had never received his record.", ur: "وہ چاہتا ہے کاش اسے نامہ نہ ملتا۔" },
      invocation: { en: "Blame and despair.", ur: "الزام اور ناامیدی۔" },
      coreAyahs: [
        { ref: "69:25 (idea)", arabic: "يَـٰلَيْتَنِى لَمْ أُوتَ كِتَـٰبِيَهْ", translation: { en: "I wish I had not been given my record.", ur: "کاش مجھے میرا نامہ نہ دیا جاتا۔" } }
      ],
      expandableAyahs: [
        { ref: "24:24", en: "Their tongues, hands, feet testify…", ur: "زبانیں، ہاتھ، پاؤں گواہی دیں گے…" }
      ]
    }
  },
  {
    id: 12,
    title: { en: "Stage 12 — Destination: Jannah vs Jahannam", ur: "مرحلہ 12 — انجام: جنت یا جہنم" },
    purpose: { en: "The journey ends where choices lead: peace or regret.", ur: "سفر وہاں ختم ہوتا ہے جہاں انتخاب لے جاتا ہے: سلامتی یا افسوس۔" },
    righteous: {
      label: { en: "Welcome and peace", ur: "سلامتی" },
      narration: { en: "He is welcomed with peace; fear and grief leave him.", ur: "اسے سلامتی کے ساتھ خوش آمدید کہا جاتا ہے؛ خوف و غم دور ہو جاتے ہیں۔" },
      invocation: { en: "Praise to Allah.", ur: "الحمد للہ۔" },
      coreAyahs: [
        { ref: "10:62–64 (idea)", arabic: "أَلَآ إِنَّ أَوْلِيَآءَ ٱللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ", translation: { en: "No fear upon them, nor will they grieve.", ur: "نہ ان پر خوف ہوگا نہ وہ غمگین ہوں گے۔" } }
      ],
      expandableAyahs: [
        { ref: "36:58", en: "Peace — a word from a Merciful Lord.", ur: "سلام — رحیم رب کی طرف سے۔" }
      ]
    },
    rebellious: {
      label: { en: "Regret and begging", ur: "پچھتاوا" },
      narration: { en: "He begs to return and do good, but the test is over.", ur: "وہ واپسی اور نیکی کی بھیک مانگتا ہے مگر امتحان ختم۔" },
      invocation: { en: "Begging, but too late.", ur: "فریاد، مگر دیر۔" },
      coreAyahs: [
        { ref: "35:37 (idea)", arabic: "أَوَلَمْ نُعَمِّرْكُم مَّا يَتَذَكَّرُ فِيهِ مَن تَذَكَّرَ", translation: { en: "Did We not give you life long enough for whoever would remember to remember?", ur: "کیا ہم نے تمہیں اتنی عمر نہیں دی کہ جو یاد کرنا چاہتا یاد کر لیتا؟" } }
      ],
      expandableAyahs: [
        { ref: "23:106–108", en: "Our Lord, our wretchedness overcame us…", ur: "اے رب! ہماری بدبختی ہم پر غالب آ گئی…" }
      ]
    }
  }
];

// Model data
const models = [
  {
    name: {
      en: "Marshal Multicrop Thresher (MMT-2.5) | ₹232249",
      hi: "मार्शल मल्टीक्रॉप थ्रेसर (MMT-2.5) | ₹232249",
      gu: "માર્શલ મલ્ટીક્રોપ થ્રેસર (MMT-2.5) | ₹232249"
    },
    images: [
      "Marshal Smart Threshar.webp",
      "Smart-2.webp",
      "Smart-3.webp",
      "Smart-4.webp"
    ],
    sections: [
      {
        modelName: {
          en: "Marshal Smart Single Shaft Simple Threshar",
          hi: "मार्शल स्मार्ट सिंगल शाफ्ट सादा थ्रेसर",
          gu: "માર્શલ સ્માર્ટ સિંગલ શાફ્ટ સાદું થ્રેસર"
        },
        crops: {
          en: "Wheat, Millet, Mustard, Sorghum, Guar, Cumin, Fennel, Isabgol, Amaranth, Fenugreek, Ajwain, Dill, etc.",
          hi: "गेहूं, बाजरा, सरसों, ज्वार, ग्वार, जीरा, सौंफ, इसबगोल, राजगिरा, मेथी, अजवायन, डिल, आदि",
          gu: "ઘઉં, બાજરી, રાયડો, જુવાર, ગુવાર, જીરું, વરીયાળી, ઈસબગુલ, રાજગરો, મેથી, અજમો, સુવા, વગેરે"
        }
      },
      {
        modelName: {
          en: "Marshal Smart Double Shaft Simple Threshar",
          hi: "मार्शल स्मार्ट डबल शाफ्ट सादा थ्रेसर",
          gu: "માર્શલ સ્માર્ટ ડબલ શાફ્ટ સાદું થ્રેસર"
        },
        crops: {
          en: "Wheat, Millet, Mustard, Sorghum, Guar, Cumin, Fennel, Isabgol, Amaranth, Fenugreek, Ajwain, Dill, Castor, Moong, Moth, Urad, Pigeon Pea, Chickpea, Soybean, Maize, Val, Choli, Chola, Coriander, etc.",
          hi: "गेहूं, बाजरा, सरसों, ज्वार, ग्वार, जीरा, सौंफ, इसबगोल, राजगिरा, मेथी, अजवायन, डिल, अरंडी, मूंग, मठ, उड़द, तुअर, चना, सोयाबीन, मकई, वाल, चोली, चोला, धनिया, आदि",
          gu: "ઘઉં, બાજરી, રાયડો, જુવાર, ગુવાર, જીરું, વરીયાળી, ઈસબગુલ, રાજગરો, મેથી, અજમો, સુવા, એરંડા, મગ, મઠ, અડદ, તુવેર, ચણા, સોયાબીન, મકાઈ, વાલ, ચોળી, ચોળા, ધાણા, વગેરે"
        }
      },
      {
        modelName: {
          en: "Marshal Smart Single Shaft Autofeeder Threshar",
          hi: "मार्शल स्मार्ट सिंगल शाफ्ट ऑटोफीडर थ्रेसर",
          gu: "માર્શલ સ્માર્ટ સિંગલ શાફ્ટ ઓટોફીડર થ્રેસર"
        },
        crops: {
          en: "Wheat, Millet, Mustard, Sorghum, Guar, Cumin, Fennel, Isabgol, Amaranth, Fenugreek, Ajwain, Dill, etc.",
          hi: "गेहूं, बाजरा, सरसों, ज्वार, ग्वार, जीरा, सौंफ, इसबगोल, राजगिरा, मेथी, अजवायन, डिल, आदि",
          gu: "ઘઉં, બાજરી, રાયડો, જુવાર, ગુવાર, જીરું, વરીયાળી, ઈસબગુલ, રાજગરો, મેથી, અજમો, સુવા, વગેરે"
        }
      },
      {
        modelName: {
          en: "Marshal Smart Double Shaft Autofeeder Threshar",
          hi: "मार्शल स्मार्ट डबल शाफ्ट ऑटोफीडर थ्रेसर",
          gu: "માર્શલ સ્માર્ટ ડબલ શાફ્ટ ઓટોફીડર થ્રેસર"
        },
        crops: {
          en: "Wheat, Millet, Mustard, Sorghum, Guar, Cumin, Fennel, Isabgol, Amaranth, Fenugreek, Ajwain, Dill, Castor, Moong, Moth, Urad, Pigeon Pea, Chickpea, Soybean, Maize, Val, Choli, Chola, Coriander, etc.",
          hi: "गेहूं, बाजरा, सरसों, ज्वार, ग्वार, जीरा, सौंफ, इसबगोल, राजगिरा, मेथी, अजवायन, डिल, अरंडी, मूंग, मठ, उड़द, तुअर, चना, सोयाबीन, मकई, वाल, चोली, चोला, धनिया, आदि",
          gu: "ઘઉં, બાજરી, રાયડો, જુવાર, ગુવાર, જીરું, વરીયાળી, ઈસબગુલ, રાજગરો, મેથી, અજમો, સુવા, એરંડા, મગ, મઠ, અડદ, તુવેર, ચણા, સોયાબીન, મકાઈ, વાલ, ચોળી, ચોળા, ધાણા, વગેરે"
        }
      }
    ]
  },
  {
    name: {
      en: "Marshal Multicrop Thresher (JDDA) | ₹232249",
      hi: "मार्शल मल्टीक्रॉप थ्रेसर (JDDA) | ₹232249",
      gu: "માર્શલ મલ્ટીક્રોપ થ્રેસર (JDDA) | ₹232249"
    },
    images: [
      "Marshal Jagirdar Threshar.webp",
      "Jagirdar-2.webp",
      "Jagirdar-3.webp",
      "Jagirdar-4.webp"
    ],
    sections: [
      {
        modelName: {
          en: "Marshal Jagirdar Single Shaft Autofeeder Threshar",
          hi: "मार्शल जागीरदार सिंगल शाफ्ट ऑटोफीडर थ्रेसर",
          gu: "માર્શલ જાગીરદાર સિંગલ શાફ્ટ ઓટોફીડર થ્રેસર"
        },
        crops: {
          en: "Wheat, Millet, Mustard, Sorghum, Guar, Cumin, Fennel, Isabgol, Amaranth, Fenugreek, Ajwain, Dill, etc.",
          hi: "गेहूं, बाजरा, सरसों, ज्वार, ग्वार, जीरा, सौंफ, इसबगोल, राजगिरा, मेथी, अजवायन, डिल, आदि",
          gu: "ઘઉં, બાજરી, રાયડો, જુવાર, ગુવાર, જીરું, વરીયાળી, ઈસબગુલ, રાજગરો, મેથી, અજમો, સુવા, વગેરે"
        }
      },
      {
        modelName: {
          en: "Marshal Jagirdar Double Shaft Autofeeder Threshar",
          hi: "मार्शल जागीरदार डबल शाफ्ट ऑटोफीडर थ्रेसर",
          gu: "માર્શલ જાગીરદાર ડબલ શાફ્ટ ઓટોફીડર થ્રેસર"
        },
        crops: {
          en: "Wheat, Millet, Mustard, Sorghum, Guar, Cumin, Fennel, Isabgol, Amaranth, Fenugreek, Ajwain, Dill, Castor, Moong, Moth, Urad, Pigeon Pea, Chickpea, Soybean, Maize, Val, Choli, Chola, Coriander, etc.",
          hi: "गेहूं, बाजरा, सरसों, ज्वार, ग्वार, जीरा, सौंफ, इसबगोल, राजगिरा, मेथी, अजवायन, डिल, अरंडी, मूंग, मठ, उड़द, तुअर, चना, सोयाबीन, मकई, वाल, चोली, चोला, धनिया, आदि",
          gu: "ઘઉં, બાજરી, રાયડો, જુવાર, ગુવાર, જીરું, વરીયાળી, ઈસબગુલ, રાજગરો, મેથી, અજમો, સુવા, એરંડા, મગ, મઠ, અડદ, તુવેર, ચણા, સોયાબીન, મકાઈ, વાલ, ચોળી, ચોળા, ધાણા, વગેરે"
        }
      }
    ]
  },
  {
    name: {
      en: "Marshal Multicrop Thresher",
      hi: "मार्शल मल्टीक्रॉप थ्रेसर",
      gu: "માર્શલ મલ્ટીક્રોપ થ્રેસર"
    },
    images: [
      "Marshal Shahenshah Threshar.webp",
      "Shahenshah-2.webp",
      "Shahenshah-3.webp",
      "Shahenshah-4.webp"
    ],
    sections: [
      {
        modelName: {
          en: "Marshal Shahenshah Single Shaft Autofeeder Threshar",
          hi: "मार्शल शहंशाह सिंगल शाफ्ट ऑटोफीडर थ्रेसर",
          gu: "માર્શલ શહેનશાહ સિંગલ શાફ્ટ ઓટોફીડર થ્રેસર"
        },
        crops: {
          en: "Wheat, Millet, Mustard, Sorghum, Guar, Cumin, Fennel, Isabgol, Amaranth, Fenugreek, Ajwain, Dill, etc.",
          hi: "गेहूं, बाजरा, सरसों, ज्वार, ग्वार, जीरा, सौंफ, इसबगोल, राजगिरा, मेथी, अजवायन, डिल, आदि",
          gu: "ઘઉં, બાજરી, રાયડો, જુવાર, ગુવાર, જીરું, વરીયાળી, ઈસબગુલ, રાજગરો, મેથી, અજમો, સુવા, વગેરે"
        }
      }
    ],
    features: [
      { en: "Tokri", hi: "टोकरी", gu: "ટોકરી" },
      { en: "Elevator", hi: "एलिवेटर", gu: "એલિવેટર" },
      { en: "Screw Conveyor", hi: "स्क्रू कन्वेयर", gu: "સ્ક્રૂ કન્વેયર" }
    ]
  },
  {
    name: {
      en: "Marshal Multicrop Thresher (MMTA) | ₹232249",
      hi: "मार्शल मल्टीक्रॉप थ्रेसर (MMTA) | ₹232249",
      gu: "માર્શલ મલ્ટીક્રોપ થ્રેસર (MMTA) | ₹232249"
    },
    images: [
      "Marshal Maharaja Threshar.webp",
      "Maharaja-2.webp",
      "Maharaja-3.webp",
      "Maharaja-4.webp"
    ],
    sections: [
      {
        modelName: {
          en: "Marshal Maharaja Triple Shaft Autofeeder Threshar",
          hi: "मार्शल महाराजा ट्रिपल शाफ्ट ऑटोफीडर थ्रेसर",
          gu: "માર્શલ મહારાજા ત્રણ શાફ્ટ ઓટોફીડર થ્રેસર"
        },
        crops: {
          en: "Wheat, Millet, Mustard, Sorghum, Guar, Cumin, Fennel, Isabgol, Amaranth, Fenugreek, Ajwain, Dill, Castor, Moong, Moth, Urad, Pigeon Pea, Chickpea, Soybean, Maize, Val, Choli, Chola, Coriander, etc.",
          hi: "गेहूं, बाजरा, सरसों, ज्वार, ग्वार, जीरा, सौंफ, इसबगोल, राजगिरा, मेथी, अजवायन, डिल, अरंडी, मूंग, मठ, उड़द, तुअर, चना, सोयाबीन, मकई, वाल, चोली, चोला, धनिया, आदि",
          gu: "ઘઉં, બાજરી, રાયડો, જુવાર, ગુવાર, જીરું, વરીયાળી, ઈસબગુલ, રાજગરો, મેથી, અજમો, સુવા, એરંડા, મગ, મઠ, અડદ, તુવેર, ચણા, સોયાબીન, મકાઈ, વાલ, ચોળી, ચોળા, ધાણા, વગેરે"
        }
      }
    ],
    features: [
      { en: "Tokri", hi: "टोकरी", gu: "ટોકરી" },
      { en: "Elevator", hi: "एलिवेटर", gu: "એલિવેટર" },
      { en: "Screw Conveyor", hi: "स्क्रू कन्वेयर", gu: "સ્ક્રૂ કન્વેયર" }
    ]
  }
];

// Testimonial data
const testimonials = [
  {
    name: { en: "Gajabhai Bhurabhai Chaudhary", hi: "गजाभाई भूराभाई चौधरी", gu: "ગજાભાઈ ભુરાભાઈ ચૌધરી" },
    village: { en: "Karbun, Tharad, Banaskantha", hi: "करबुण, थराद, बनासकांठा", gu: "કરબુણ, થરાદ, બનાસકાંઠા" },
    image: "T1.png",
    quote: {
      en: "Eight years ago, I bought a Marshal Threshar and used it for about 3000 hours. When I sold it to buy a new model with improvements, I got 20-25 thousand rupees more than its purchase price. Using the Threshar was profitable, and today, I still own a Marshal Threshar.",
      hi: "आठ साल पहले, मैंने एक मार्शल थ्रेसर खरीदा और इसे लगभग 3000 घंटे तक इस्तेमाल किया। जब मैंने इसे बेचकर सुधारों के साथ नया मॉडल खरीदा, तो मुझे इसकी खरीद मूल्य से 20-25 हजार रुपये अधिक मिले। थ्रेसर का उपयोग लाभदायक था, और आज भी मेरे पास मार्शल थ्रेसर है।",
      gu: "આજથી આઠ વર્ષ પહેલાં મેં માર્શલ થ્રેસર ખરીદ્યું હતું. આ વર્ષો દરમિયાન મેં માર્શલ થ્રેસર લગભગ ૩૦૦૦ કલાક ચલાવ્યું હતું. નવા સુધારા-વધારા સાથ્રેનું થ્રેસર ખરીદવા માટે આ થ્રેસર વેચીને મેં નવું થ્રેસર ખરીદ્યું હતું. મેં જે તે વખત માર્શલ થ્રેસર ખરીદ્યું હતું, તેની ખરીદ કિંમત કરતાં વીસથી પચ્ચીસ હજાર રૂપિયા વધારે મળ્યા હતા. થ્રેસર ચલાવ્યું એ નફામાં હતું. આજે મારી પાસે માર્શલ થ્રેસર જ છે."
    }
  },
  {
    name: { en: "Ketanbhai Amrutbhai Patel", hi: "केतनभाई अमृतभाई पटेल", gu: "કેતનભાઈ અમૃતભાઈ પટેલ" },
    village: { en: "Jam Jodhpur, Jam Jodhpur, Jamnagar", hi: "जाम जोधपुर, जाम जोधपुर, जामनगर", gu: "જામ જોધપુર, જામ જોધપુર, જામનગર" },
    image: "T2.png",
    quote: {
      en: "Whenever any farmer in our area talks about buying a Threshar, they always come to me for advice. With 35 years of experience with tractors and Threshars, I recommend only Marshal Threshar to every farmer. The reason is that Marshal has something no one else does. Marshal Threshar is truly unique.",
      hi: "जब भी हमारे क्षेत्र में कोई किसान थ्रेसर खरीदने की बात करता है, वे हमेशा मेरी सलाह लेने आते हैं। ट्रैक्टर और थ्रेसर के 35 वर्षों के अनुभव के साथ, मैं हर किसान को केवल मार्शल थ्रेसर की सिफारिश करता हूँ। इसका कारण यह है कि मार्शल के पास वह है जो किसी और के पास नहीं। मार्शल थ्रेसर वास्तव में अनोखा है।",
      gu: "અમારા વિસ્તારમાં જ્યારે કોઈ પણ ખેડૂત થ્રેસર લેવા ની વાત કરે ત્યારે મારી સલાહ લેવા માટે અવશ્ય આવે છે. મને ટ્રેક્ટર અને થ્રેસરનો છેલ્લા પાંત્રીસ વર્ષનો અનુભવ છે. હું માર્શલ થ્રેસર જ લેવાય તેવી ભલામણો દરેક ખેડૂતોને કરું છું. એનું કારણ છે જે માર્શલ પાસે છે, એ બીજા કોઈ પાસે નથી. માર્શલ થ્રેસરની વાત જ કંઈક અલગ છે."
    }
  },
  {
    name: { en: "Veljibhai Govabhai Patel", hi: "वेलजीभाई गोवाभाई पटेल", gu: "વેલજીભાઈ ગોવાભાઈ પટેલ" },
    village: { en: "Sai, Rapar, Kutch", hi: "सई, रापर, कच्छ", gu: "સઈ, રાપર, કચ્છ" },
    image: "T3.png",
    quote: {
      en: "There wasn’t a single Marshal Threshar in my village. Despite having 150-200 tractors, other companies’ Threshars were used. I took a chance and bought a Marshal Threshar. Now, every farmer in the village who owns a Threshar has a Marshal Threshar. Marshal has something others don’t.",
      hi: "मेरे गाँव में एक भी मार्शल थ्रेसर नहीं था। 150-200 ट्रैक्टर होने के बावजूद, अन्य कंपनियों के थ्रेसर उपयोग में थे। मैंने जोखिम लिया और मार्शल थ्रेसर खरीदा। अब गाँव में हर किसान जो थ्रेसर रखता है, उसके पास मार्शल थ्रेसर है। मार्शल में वह है जो दूसरों के पास नहीं।",
      gu: "મારા ગામમાં એક પણ માર્શલ થ્રેસર ન હતું. અમારું ગામ બહુ મોટું છે. ગામમાં ૧૫૦ થી ૨૦૦ ટ્રેક્ટરો છે. અત્યાર સુધી બીજી કંપનીઓના થ્રેસરો ચાલતાં હતાં. મેં સાહસ કરીને માર્શલ થ્રેસર ખરીદ્યું હતું. આજે ગામમાં જે જે ખેડૂતો થ્રેસર રાખે છે, એ તમામ ખેડૂતો પાસે માર્શલ થ્રેસર છે. માર્શલ થ્રેસરમાં એવું કંઈક છે જે બીજાઓ પાસે નથી."
    }
  },
  {
    name: { en: "Ravjibhai Rupabhai Chaudhary", hi: "रवजीभाई रूपाभाई चौधरी", gu: "રવજીભાઈ રૂપાભાઈ ચૌધરી" },
    village: { en: "Khengarpura, Tharad, Banaskantha", hi: "खेंगारपुरा, थराद, बनासकांठा", gu: "ખેંગારપુરા, થરાદ, બનાસકાંઠા" },
    image: "T4.png",
    quote: {
      en: "When I set out to buy a new Threshar, my son insisted on getting a Marshal Threshar. At the showroom, I learned there was high demand and no stock. I returned home empty-handed, and my son’s disappointed face is still vivid. The next year, I bought a Marshal Threshar early, and my son was overjoyed.",
      hi: "जब मैं नया थ्रेसर खरीदने निकला, तो मेरे बेटे ने जोर देकर कहा कि मार्शल थ्रेसर ही लेना। शोरूम में पता चला कि मांग ज्यादा है और स्टॉक नहीं है। मैं खाली हाथ घर लौटा, और मेरे बेटे का निराश चेहरा आज भी याद है। अगले साल, मैंने जल्दी मार्शल थ्रेसर खरीदा, और मेरा बेटा खुशी से झूम उठा।",
      gu: "હું ઘેરથી નવું થ્રેસર લેવા નીકળ્યો ત્યારે મારા દીકરાએ કહ્યું હતું, 'પપ્પા, થ્રેસર તો માર્શલનું જ લાવવા નું છે.' માર્શલ થ્રેસરમાં પહોંચ્યા પછી ખબર પડી કે માર્શલ થ્રેસરમાં ઓર્ડર વધારે છે. થ્રેસર મળી શકે તેમ નથી. ત્યારે હું થ્રેસર લીધા વિના જ ઘેર ગયો. ત્યારે મારા દીકરાનો એ ચહેરો આજે પણ મને યાદ છે. બીજા વર્ષે થોડા વહેલા માર્શલ થ્રેસર લાવ્યો હતો. મારું ગુલાબ ખીલી ઉઠ્યું હતું."
    }
  },
  {
    name: { en: "Mahobatsinh Nanubha Jadeja", hi: "महोबतसिंह नानुभा जडेजा", gu: "મહોબતસિંહ નાનુભા જાડેજા" },
    village: { en: "Viraniya, Mundra, Kutch", hi: "विरानिया, मुंद्रा, कच्छ", gu: "વિરાણીયા, મુન્દ્રા, કચ્છ" },
    image: "T5.png",
    quote: {
      en: "Everywhere you go, you hear Marshal... Marshal... Marshal. They’ve worked magic! Today, Marshal Threshar has a huge name in the market. I give all the credit to their hard work, dedication, and sincere commitment. Everyone works hard, but Marshal’s heart is vast.",
      hi: "उठते-बैठते, खाते-पीते, हर जगह मार्शल... मार्शल... मार्शल की बातें। उन्होंने जादू कर दिया है! आज बाजार में मार्शल थ्रेसर का बहुत बड़ा नाम है। मैं इसका सारा श्रेय उनकी मेहनत, लगन और सच्ची निष्ठा को देता हूँ। मेहनत तो सभी करते हैं, लेकिन मार्शल का दिल विशाल है।",
      gu: "ઉઠતા-બેસતાં, ખાતાં-પીતા-જ્યાં જુઓ ત્યાં માર્શલ... માર્શલ... માર્શલ વાળાઓએ તો જાદુ કર્યો છે ભાઈ. આજે બજારમાં માર્શલ થ્રેસરનું બહુ મોટું નામ છે. આ બધો જશ માર્શલ વાળાઓની મહેનત, લગન અને એમની સાચી નિષ્ઠાને આપું છું. મહેનત તો બધા કરે છે, કોઈ દિલથી કરે છે તો કોઈ દિમાગથી. માર્શલ વાળાઓનું દિલ વિશાળ છે."
    }
  },
  {
    name: { en: "Maldebhai Vejabhai Goraniya", hi: "मालदेभाई वेजाभाई गोरानिया", gu: "માલદેભાઈ વેજાભાઈ ગોરાણીયા" },
    village: { en: "Gorana, Kalyanpur, Devbhumi Dwarka", hi: "गोराना, कल्याणपुर, देवभूमि द्वारका", gu: "ગોરાણા, કલ્યાણપુર, દેવભૂમિ દ્વારકા" },
    image: "T6.png",
    quote: {
      en: "My uncle Parshottam is very knowledgeable. When I decided to buy a Threshar, we checked every Threshar company in Gujarat. Among all, my uncle recommended only Marshal Threshar. His advice was 100% correct, backed by years of experience. Marshal Threshar has a strength that others lack.",
      hi: "मेरे काका परषोत्तम बहुत ज्ञानी हैं। जब मैंने थ्रेसर खरीदने का फैसला किया, तो हमने गुजरात की एक भी थ्रेसर कंपनी को छोड़ा नहीं। इन सभी में, मेरे काका ने केवल मार्शल थ्रेसर की सिफारिश की। उनकी सलाह 100% सही थी, जो वर्षों के अनुभव पर आधारित थी। मार्शल थ्रेसर में वह दम है जो दूसरों के पास नहीं है।",
      gu: "મારા પરષોત્તમ કાકા બહુ અભ્યાસી જીવ છે. મેં થ્રેસર લેવા નું નક્કી કર્યું હતું ત્યારે હું અને અમારા કાકા ગુજરાતની એક પણ થ્રેસર કંપની બાકી રાખી ન હતી. આ બધી કંપનીઓમાં મારા કાકાએ માર્શલ થ્રેસર જ લેવાય એવું મને સૂચન કર્યું હતું. એમની સલાહ સો ટકા સાચી અને વર્ષોના અનુભવનો નિચોડ હતી. માર્શલ થ્રેસરમાં દમ છે જે બીજાઓ પાસે નથી."
    }
  },
  {
    name: { en: "Shamjibhai Bhemabhai Chaudhary", hi: "शामजीभाई भेमाभाई चौधरी", gu: "શામજીભાઈ ભેમાભાઈ ચૌધરી" },
    village: { en: "Lorvada, Tharad, Banaskantha", hi: "लोरवाडा, थराद, बनासकांठा", gu: "લોરવાડા, થરાદ, બનાસકાંઠા" },
    image: "T7.png",
    quote: {
      en: "I heartily congratulate Marshal Threshar for receiving the number 1 award. Our support and cooperation will always be with Marshal in its progress and development. My best wishes are always with you, and I pray that you continue to receive divine blessings.",
      hi: "मार्शल थ्रेसर को नंबर 1 का पुरस्कार मिलने पर मैं हार्दिक बधाई देता हूँ। इसके प्रगति और विकास में हमारा साथ और सहयोग हमेशा बना रहेगा। मेरी शुभकामनाएँ हमेशा आपके साथ हैं, और मैं प्रार्थना करता हूँ कि आपको ईश्वरीय आशीर्वाद मिलता रहे।",
      gu: "માર્શલ થ્રેસરને નંબર 1 નો એવોર્ડ મળવા બદલ હાર્દિક અભિનંદન આપું છું. માર્શલ થ્રેસરના પ્રગતિ અને વિકાસમાં અમારો સાથ અને સહકાર સતત મળતો રહેશે તેવી હું ખાતરી સાથ્રે બાંહેધરી આપું છું. અમારી શુભકામનાઓ સદા તમારી સાથ્રે છે. પરમ કૃપાળુ પરમેશ્વરના આશીર્વાદ આપને મળતા રહે તેવી હું હૃદયપૂર્વક પ્રાર્થના કરું છું. જય હો માર્શલ..."
    }
  },
  {
    name: { en: "Lakhmanbhai Vejabhai Kuchhadiya", hi: "लखमनभाई वेजाभाई कुच्छडिया", gu: "લખમણભાઈ વેજાભાઈ કુછડીયા" },
    village: { en: "Kuchhadi, Porbandar, Porbandar", hi: "कुच्छडी, पोरबंदर, पोरबंदर", gu: "કુછડી, પોરબંદર, પોરબંદર" },
    image: "T8.png",
    quote: {
      en: "The saying ‘A son’s qualities are seen in the cradle, a bride’s in the doorway, and a Threshar’s in the field’ is absolutely true. Cheap things end up costly, and costly things end up cheap. I bought a Marshal Threshar, while my friend bought a cheaper one from another company. Marshal is slightly more expensive, but it’s far superior. Today, my friend regrets not choosing Marshal.",
      hi: "कहावत ‘पुत्र के लक्षण पालने में, वधू के दरवाजे में, और थ्रेसर के खेत में’ बिल्कुल सही है। सस्ता महंगा पड़ता है, और महंगा सस्ता पड़ता है। मैंने मार्शल थ्रेसर खरीदा, जबकि मेरे मित्र ने दूसरी कंपनी का सस्ता थ्रेसर लिया। मार्शल थोड़ा महंगा है, लेकिन बहुत बेहतर है। आज मेरा मित्र पछता रहा है कि काश उसने भी मार्शल लिया होता।",
      gu: "પુત્રના લક્ષણ પારણામાં, વહુના લક્ષણ બારણામાં, ભેંસરના લક્ષણ ખરવાડમાં - આ કહેવત સો ટકા સાચી છે. સસ્તું સરવાળે મોંઘું પડે અને મોંઘું સરવાળે સસ્તું પડે એ પણ સાચી વાત છે. હું માર્શલ થ્રેસર લાવ્યો હતો અને અમારા મિત્ર બીજી કંપનીનું સસ્તું થ્રેસર લાવ્યા હતા. માર્શલ થ્રેસર બીજી કંપનીઓના થ્રેસર કરતાં થોડું મોંઘું આવે છે, પણ સાથ્રે સાથ્રે સારું આવે છે. આજે એ મિત્ર પસ્તાય છે. હું પણ માર્શલ થ્રેસર લાવ્યો હોત તો..."
    }
  },
  {
    name: { en: "Mohanbhai Jivanbhai Brahmin", hi: "मोहनभाई जीवनभाई ब्राह्मण", gu: "મોહનભાઈ જીવનભાઈ બ્રાહ્મણ" },
    village: { en: "Mokar, Ranavav, Porbandar", hi: "मोकर, राणावाव, पोरबंदर", gu: "મોકર, રાણાવાવ, પોરબંદર" },
    image: "T9.png",
    quote: {
      en: "We organized a competition in our village to compare different companies’ Threshars. On the designated day, we ran all the Threshars together in a field. Marshal Threshar outperformed all others in the competition, and even other Threshar owners praised it.",
      hi: "हमने अपने गाँव में विभिन्न कंपनियों के थ्रेसरों की तुलना के लिए एक प्रतियोगिता आयोजित की। निर्धारित दिन पर, हमने सभी थ्रेसरों को एक साथ खेत में चलाया। मार्शल थ्रेसर ने प्रतियोगिता में सभी को पछाड़ दिया, और अन्य थ्रेसर मालिकों ने भी इसकी प्रशंसा की।",
      gu: "આ થ્રેસર સારું છે, પેલું થ્રેસર સારું છે. આમાં આ છે, પેલામાં પેલું નથી - આ બધામાં અમે ગામમાં અલગ અલગ કંપનીઓના થ્રેસરની ફરીફાઈ ગોઠવી હતી. એક દિવસે નક્કી કરેલા ખેતરમાં અમે બધા થ્રેસરો એક સાથ્રે ચાલુ કરાવ્યા હતા. આ બધા થ્રેસરોમાં માર્શલ થ્રેસર બીજા થ્રેસરો કરતાં હરીફાઈમાં આગળ નીકળી ગયું હતું. બીજા થ્રેસર વાળાઓએ પણ માર્શલ થ્રેસરના વખાણ કર્યા હતા."
    }
  },
  {
    name: { en: "Parshottambhai Dhirubhai Patel", hi: "परषोत्तमभाई धीरूभाई पटेल", gu: "પરષોત્તમભાઈ ધીરૂભાઈ પટેલ" },
    village: { en: "Sodvadi, Bhensana, Junagadh", hi: "सोडवडी, भेंसाण, जूनागढ़", gu: "સોડવડી, ભેંસાણ, જુનાગઢ" },
    image: "T10.png",
    quote: {
      en: "Marshal Threshar is number 1. It’s like gold. Its reputation is unmatched. These aren’t just words but facts. I heard about Marshal Threshar’s great name, and its performance proves it. You only understand what Marshal Threshar is when you use it!",
      hi: "मार्शल थ्रेसर नंबर 1 है। यह सोने जैसा है। इसकी प्रतिष्ठा बेजोड़ है। ये सिर्फ़ शब्द नहीं, बल्कि हकीकत है। मैंने मार्शल थ्रेसर के बड़े नाम के बारे में सुना था, और इसका प्रदर्शन इसे साबित करता है। मार्शल थ्रेसर क्या है, यह आपको तब पता चलता है जब आप इसका उपयोग करते हैं!",
      gu: "માર્શલ થ્રેસર નંબર 1 છે. માર્શલ થ્રેસર સોનું છે. માર્શલ થ્રેસરની વાહ વાહ છે. આ વાક્યોમાં વજન છે. આ ફક્ત વાતો જ નથી પણ હકીકત છે. મેં પણ સાંભળ્યું હતું કે માર્શલ થ્રેસરનું બહુ મોટું નામ છે. સાથ્રે સાથ્રે માર્શલ થ્રેસરનું એવું કામ પણ છે. માર્શલ થ્રેસર ચલાવો તો ખબર પડે માર્શલ થ્રેસર શું છે!"
    }
  }
];

// Navigation smooth scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Language switching functionality
const languageSelector = document.getElementById('language-selector');
let currentLanguage = languageSelector ? languageSelector.value : 'gu';

function updateContent() {
  // Update text content based on language
  document.querySelectorAll('[data-lang-en]').forEach(element => {
    element.textContent = element.getAttribute(`data-lang-${currentLanguage}`);
  });

  // Update model section
  const modelGrid = document.querySelector('.model-grid');
  modelGrid.innerHTML = '';
  models.forEach(model => {
    const modelCard = document.createElement('div');
    modelCard.classList.add('model-card');

    const gallery = document.createElement('div');
    gallery.classList.add('model-gallery');
    model.images.forEach((image, index) => {
      const img = document.createElement('img');
      img.src = image;
      img.alt = `${model.name[currentLanguage]} Image ${index + 1}`;
      img.loading = index === 0 ? 'eager' : 'lazy';
      gallery.appendChild(img);
    });

    const modelTitle = document.createElement('h3');
    modelTitle.textContent = model.name[currentLanguage];

    modelCard.appendChild(gallery);
    modelCard.appendChild(modelTitle);

    model.sections.forEach(section => {
      const sectionDiv = document.createElement('div');
      sectionDiv.classList.add('model-section');
      
      const modelNameP = document.createElement('p');
      modelNameP.classList.add('shaft');
      modelNameP.innerHTML = `<span class="model-name">${section.modelName[currentLanguage]}</span>`;
      sectionDiv.appendChild(modelNameP);

      const cropsP = document.createElement('p');
      cropsP.classList.add('crop');
      cropsP.innerHTML = `<span>${section.crops[currentLanguage]}</span>`;
      sectionDiv.appendChild(cropsP);

      modelCard.appendChild(sectionDiv);
    });

    if (model.features) {
      const featuresDiv = document.createElement('div');
      featuresDiv.classList.add('features');
      const featuresTitle = document.createElement('h4');
      featuresTitle.textContent = currentLanguage === 'en' ? 'Features' : currentLanguage === 'hi' ? 'विशेषताएँ' : 'વિશેષતાઓ';
      featuresDiv.appendChild(featuresTitle);

      const featureList = document.createElement('ul');
      featureList.classList.add('feature-list');
      model.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature[currentLanguage];
        featureList.appendChild(li);
      });
      featuresDiv.appendChild(featureList);
      modelCard.appendChild(featuresDiv);
    }

    modelGrid.appendChild(modelCard);
  });

  // Update testimonials
  const sliderWrapper = document.querySelector('.slider-wrapper');
  sliderWrapper.innerHTML = '';
  testimonials.forEach(testimonial => {
    const card = document.createElement('div');
    card.classList.add('testimonial-card');
    card.innerHTML = `
      <img src="${testimonial.image}" alt="${testimonial.name[currentLanguage]}" loading="lazy">
      <p>"${testimonial.quote[currentLanguage]}"</p>
      <h4>${testimonial.name[currentLanguage]}</h4>
      <p>${testimonial.village[currentLanguage]}</p>
    `;
    sliderWrapper.appendChild(card);
  });

  // Duplicate testimonials for infinite scroll
  testimonials.forEach(testimonial => {
    const card = document.createElement('div');
    card.classList.add('testimonial-card');
    card.innerHTML = `
      <img src="${testimonial.image}" alt="${testimonial.name[currentLanguage]}" loading="lazy">
      <p>"${testimonial.quote[currentLanguage]}"</p>
      <h4>${testimonial.name[currentLanguage]}</h4>
      <p>${testimonial.village[currentLanguage]}</p>
    `;
    sliderWrapper.appendChild(card);
  });
}

// Initialize content on page load
document.addEventListener('DOMContentLoaded', () => {
  // Add fixed phone button with dynamic language support
  const phoneBtn = document.createElement('a');
  phoneBtn.id = 'fixed-phone-btn';
  phoneBtn.href = 'tel:+919824362867';
  phoneBtn.title = currentLanguage === 'en' ? 'Call Us' : currentLanguage === 'hi' ? 'हमें कॉल करें' : 'અમને કૉલ કરો';
  phoneBtn.innerHTML = '<i class="fas fa-phone-alt"></i>';
  phoneBtn.setAttribute('aria-label', currentLanguage === 'en' ? 'Call Marshal Threshar' : currentLanguage === 'hi' ? 'मार्शल थ्रेसर को कॉल करें' : 'માર્શલ થ્રેસરને કૉલ કરો');
  document.body.appendChild(phoneBtn);

  // Add logo click to redirect to home
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', () => {
      window.location.href = '/';
    });
  }

  // Language selector change event
  if (languageSelector) {
    languageSelector.addEventListener('change', (e) => {
      currentLanguage = e.target.value;
      updateContent();
      // Update phone button text and aria-label on language change
      phoneBtn.title = currentLanguage === 'en' ? 'Call Us' : currentLanguage === 'hi' ? 'हमें कॉल करें' : 'અમને કૉલ કરો';
      phoneBtn.setAttribute('aria-label', currentLanguage === 'en' ? 'Call Marshal Threshar' : currentLanguage === 'hi' ? 'मार्शल थ्रेसर को कॉल करें' : 'માર્શલ થ્રેસરને કૉલ કરો');
    });
  }

  // Image modal functionality
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeModal = document.querySelector('.modal-close');
  const prevArrow = document.querySelector('.modal-arrow.left');
  const nextArrow = document.querySelector('.modal-arrow.right');
  let currentImages = [];
  let currentImageIndex = 0;

  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG' && e.target.closest('.model-gallery')) {
      const gallery = e.target.closest('.model-gallery');
      currentImages = Array.from(gallery.querySelectorAll('img')).map(img => img.src);
      currentImageIndex = currentImages.indexOf(e.target.src);
      modalImg.src = currentImages[currentImageIndex];
      modal.classList.add('show');
    }
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  prevArrow.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    modalImg.src = currentImages[currentImageIndex];
  });

  nextArrow.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    modalImg.src = currentImages[currentImageIndex];
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });

  // Initialize content
  updateContent();
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Optimize scroll performance
let isScrolling = false;
window.addEventListener('scroll', () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      isScrolling = false;
    });
    isScrolling = true;
  }
});

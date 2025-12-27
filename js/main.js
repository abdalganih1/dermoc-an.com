/**
 * Dermocean Main Logic
 * Handling Navigation, Forms, Language, and General Interactions
 */

// Comprehensive Translations for all pages
const translations = {
    en: {
        // Navigation
        home: "Home",
        aboutUs: "About Us",
        products: "Products",
        howToUse: "How to Use",
        articles: "Articles",
        videos: "Videos",
        register: "B2B Register",
        protocols: "Protocols",

        // Hero Section
        heroTitle: "Pure Nature, <span>Proven Results.</span>",
        heroDesc: "Advanced skincare formulations designed effectively for professional beauty centers. Experience the power of marine algae.",
        discoverProducts: "Discover Products",

        // Products
        ourCollection: "Our Collection",
        professionalGrade: "Professional Grade Skincare",

        // Protocols
        treatmentProtocols: "Treatment Protocols",
        chooseProtocol: "Choose Your Protocol",
        protocolSubtitle: "Select based on skin type and desired intensity",
        gentleProtocol: "Gentle",
        gentleDesc: "For sensitive skin. 2g peeling powder, 4 minutes massage.",
        moderateProtocol: "Moderate",
        moderateDesc: "For normal skin. 2g peeling powder, 6 minutes massage.",
        intensiveProtocol: "Intensive",
        intensiveDesc: "For resistant skin. 2g peeling powder, 8 minutes massage.",
        learnMore: "Learn More",
        downloadCatalog: "Download Catalog",
        viewGuide: "View Guide",
        closeGuide: "Close Guide",
        protocolsDesc: "Professional guidelines for optimal results",
        fullGuide: "Full Protocol Guide",

        // Footer
        aboutDermocean: "About Dermocean",
        aboutText: "Leading B2B skincare provider for beauty centers. Combining nature's finest ingredients with scientific innovation.",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        contactDesc: "Get in touch with our professional support team",
        paymentMethods: "Payment Methods",
        cashOnDelivery: "Cash on Delivery",
        bankTransfer: "Bank Transfer",

        // Contact Form
        fullName: "Full Name",
        email: "Email Address",
        phoneNumber: "Phone Number",
        message: "Message",
        sendMessage: "Send Message",

        // Registration
        b2bRegistration: "B2B Center Registration",
        joinNetwork: "Join our network of professional beauty centers",
        centerName: "Beauty Center Name",
        ownerName: "Owner Full Name",
        licenseNumber: "License Number",
        submitApplication: "Submit Application",
        verificationNote: "We strictly verify all applicants. Accounts are activated manually after license verification (24-48 hours).",
        applicationReceived: "Application Received",
        thankYouMessage: "Thank you for registering. Your application is now under review. We will contact you via phone or email to finalize the verification process.",
        returnHome: "Return Home",

        // Videos
        educationalVideos: "Educational Videos",
        protocolsSessions: "Protocols & Treatment Sessions",
        registerCenter: "Register Center",

        // About Page
        aboutHeroTitle: "The Science of <span>Natural Beauty</span>",
        aboutHeroDesc: "Dermocean combines the power of marine algae with advanced dermatological science to deliver professional-grade skincare solutions.",
        ourStory: "Our Story",
        storyP1: "Dermocean was born from a vision to revolutionize professional skincare by harnessing the untapped potential of marine biology. Our founders, a team of dermatologists and marine biologists, discovered that specific species of algae contain powerful bioactive compounds that can transform skin at the cellular level.",
        storyP2: "Today, we are proud to serve hundreds of beauty centers and dermatology clinics across the region, providing them with tools that deliver visible, lasting results for their clients.",
        naturalIngredients: "Natural Ingredients",
        ingredientsSubtitle: "100% natural formulations powered by science",
        marineAlgae: "Marine Algae",
        marineAlgaeDesc: "Rich in minerals, vitamins, and antioxidants for deep cellular renewal.",
        calendula: "Calendula Extract",
        calendulaDesc: "Soothes irritation and promotes natural healing.",
        chamomile: "Chamomile",
        chamomileDesc: "Anti-inflammatory properties to reduce redness and calm sensitive skin.",
        hyaluronicAcid: "Hyaluronic Acid",
        hyaluronicAcidDesc: "Deep hydration that plumps and rejuvenates from within.",
        professionalStandards: "Professional Standards",
        certificationsDesc: "All Dermocean products are developed in accordance with international dermatological standards and are tested for safety and efficacy.",
        dermatologistTested: "Dermatologist Tested",
        hypoallergenic: "Hypoallergenic Formulas",
        crueltyFree: "Cruelty-Free",
        ecoFriendly: "Eco-Friendly Packaging",
        becomePartner: "Become a Dermocean Partner",
        partnerDesc: "Join our network of professional beauty centers and offer your clients the best in skincare technology.",
        registerNow: "Register Now",

        // How to Use Page
        howToUseTitle: "Professional <span>Application Guide</span>",
        howToUseDesc: "Follow our step-by-step protocol for optimal treatment results",
        stepByStep: "Step-by-Step Guide",
        step1Title: "Cleanse the Skin",
        step1Desc: "Thoroughly cleanse the treatment area using a gentle, pH-balanced cleanser. Remove all traces of makeup, oil, and impurities.",
        step1Tip: "Pro Tip: Use lukewarm water to open pores before treatment.",
        step2Title: "Prepare the Mixture",
        step2Desc: "Mix 2g of Algae Peeling Powder with the Support Solution until you achieve a smooth, even paste consistency.",
        step2Tip: "Pro Tip: Use a ceramic or glass bowl - avoid metal containers.",
        step3Title: "Apply Evenly",
        step3Desc: "Using clean fingers or a brush, apply the mixture evenly across the face, avoiding the eye and lip areas.",
        step3Tip: "Pro Tip: Work in sections - forehead, cheeks, nose, chin.",
        step4Title: "Massage",
        step4Desc: "Massage gently in circular motions for the duration specified by your chosen protocol (4-8 minutes).",
        step4Tip: "Pro Tip: Increase pressure gradually on resistant areas like T-zone.",
        step5Title: "Rinse Thoroughly",
        step5Desc: "Rinse the treatment area with lukewarm water until all product residue is removed.",
        step5Tip: "Pro Tip: Pat dry gently - do not rub.",
        step6Title: "Apply Calming Mask",
        step6Desc: "Apply a generous layer of Calming Mask and leave for 15-20 minutes to soothe and hydrate the skin.",
        step6Tip: "Pro Tip: Cover with a damp towel to enhance absorption.",
        step7Title: "Sun Protection",
        step7Desc: "Finish with SPF 50+ sunscreen. This is MANDATORY for the next 7 days post-treatment.",
        step7Warning: "Warning: Skipping sun protection can cause hyperpigmentation!",
        watchTutorial: "Watch the Tutorial",
        tutorialDesc: "See the complete application process in action",
        viewVideos: "View All Videos",
        precautions: "Precautions",
        sunExposure: "Avoid Sun Exposure",
        sunExposureDesc: "Stay out of direct sunlight for 7 days after treatment.",
        noAcids: "No Active Acids",
        noAcidsDesc: "Avoid retinol, AHA/BHA for 5 days before and after.",
        stayHydrated: "Stay Hydrated",
        stayHydratedDesc: "Drink plenty of water and moisturize regularly.",
        treatmentInterval: "Treatment Interval",
        treatmentIntervalDesc: "Wait 2-4 weeks between sessions based on skin response.",

        // Articles Page
        faqTitle: "Frequently Asked Questions",
        articlesTitle: "Expert Skincare Insights",
        articlesDesc: "Discover tips, guides, and professional knowledge",
        faq1Q: "How often can I use the peeling treatment?",
        faq1A: "We recommend waiting 2-4 weeks between sessions, depending on your skin's sensitivity and response to treatment.",
        faq2Q: "Is the treatment suitable for sensitive skin?",
        faq2A: "Yes! Our Gentle Protocol is specifically designed for sensitive skin types. Start with the lowest intensity and gradually increase.",
        faq3Q: "How long until I see results?",
        faq3A: "Many clients see immediate improvement in skin texture. For deeper concerns like pigmentation, 3-6 sessions are typically needed.",
        faq4Q: "Can I use the products at home?",
        faq4A: "Dermocean products are formulated for professional use in licensed beauty centers. For home care, we recommend our Sunscreen and Calming Mask.",

        // Protocol Details
        prot_duration: "Duration",
        prot_powder: "Powder Amount",
        prot_pressure: "Pressure",
        prot_target: "Target Client",
        prot_skin: "Skin Type",

        // Gentle Steps
        gentle_step1: "4 minutes massage",
        gentle_step2: "Use 2g of peeling powder",
        gentle_step3: "Light pressure only",
        gentle_step4: "Ideal for first-time clients",
        gentle_step5: "Best for sensitive skin types",

        // Moderate Steps
        moderate_step1: "6 minutes massage",
        moderate_step2: "Use 2g of peeling powder",
        moderate_step3: "Medium pressure application",
        moderate_step4: "For normal skin types",
        moderate_step5: "Recommended for maintenance sessions",

        // Intensive Steps
        intensive_step1: "8 minutes massage",
        intensive_step2: "Use 2g of peeling powder",
        intensive_step3: "Firm, deep pressure",
        intensive_step4: "For resistant skin only",
        intensive_step5: "Maximum results, requires experience",

        // Product Pages
        cat_peeling: "Peeling",
        cat_activator: "Activator",
        cat_mask: "Mask",
        cat_sunscreen: "Protection",

        // Algae Peeling Powder
        prod_peeling_name: "Algae Peeling Powder",
        prod_peeling_desc: "100% Natural Formula containing microcrystals of marine algae for deep exfoliation.",
        natural100: "100% Natural",
        professionalUse: "Professional Use",
        orderNow: "Order Now",
        keyIngredients: "Key Ingredients",
        benefits: "Benefits",
        viewFullProtocol: "View Full Protocol",

        // Ingredients
        ing_algae: "Deep hydration",
        ing_calendula: "Soothes irritation",
        ing_melissa: "Boosts collagen",
        ing_chamomile: "Reduces redness",
        ing_h2o2: "Purifies skin",
        ing_glycerin: "Deep hydration",
        ing_daisy: "Evens skin tone",

        // Benefits
        benefit_exfoliate: "Exfoliates dead skin",
        benefit_pores: "Cleanses pores",
        benefit_pigmentation: "Fades pigmentation",
        benefit_acne: "Treats acne",
        benefit_activate: "Activates peeling",
        benefit_antiseptic: "Antiseptic action",
        benefit_hydrate: "Hydrates",
        benefit_soothe: "Soothes skin",
        benefit_redness: "Reduces redness",
        benefit_protect: "UV Protection",

        // Usage
        usage_peeling: "Mix 2g with Support Solution. Massage for 4-8 mins based on protocol.",
        usage_support: "Combine with Algae Peeling Powder to form paste.",
        usage_mask: "Apply after peeling treatment. Leave for 15-20 minutes.",
        usage_sunscreen: "Apply generously 15 minutes before sun exposure.",

        // Support Solution
        prod_support_name: "Peeling Support Solution",
        prod_support_desc: "Bioactive liquid to activate the peeling powder. Antiseptic and deeply hydrating.",
        hydrating: "Hydrating",
        antiseptic: "Antiseptic",

        // Calming Mask
        prod_mask_name: "Calming Mask",
        prod_mask_desc: "Soothing post-peel mask to calm and restore skin after treatment.",
        soothing: "Soothing",
        restorative: "Restorative",

        // Sunscreen
        prod_sunscreen_name: "SPF 50+ Sunscreen",
        prod_sunscreen_desc: "Essential protection after peeling treatments. Lightweight, non-greasy formula.",
        spf50: "SPF 50+",
        lightweight: "Lightweight",

        loading: "Loading..."
    },
    ar: {
        // Navigation
        home: "الرئيسية",
        aboutUs: "من نحن",
        products: "المنتجات",
        howToUse: "طريقة الاستخدام",
        articles: "المقالات",
        videos: "الفيديوهات",
        register: "تسجيل B2B",
        protocols: "البروتوكولات",

        // Hero Section
        heroTitle: "طبيعة نقية، <span>نتائج مثبتة.</span>",
        heroDesc: "تركيبات متقدمة للعناية بالبشرة مصممة بفعالية لمراكز التجميل المهنية. اكتشف قوة الطحالب البحرية.",
        discoverProducts: "اكتشف المنتجات",

        // Products
        ourCollection: "مجموعتنا",
        professionalGrade: "منتجات احترافية للعناية بالبشرة",

        // Protocols
        treatmentProtocols: "بروتوكولات العلاج",
        chooseProtocol: "اختر البروتوكول",
        protocolSubtitle: "اختر بناءً على نوع البشرة والنتيجة المطلوبة",
        gentleProtocol: "لطيف",
        gentleDesc: "للبشرة الحساسة. 2 غرام بودر تقشير، 4 دقائق تدليك.",
        moderateProtocol: "معتدل",
        moderateDesc: "للبشرة العادية. 2 غرام بودر تقشير، 6 دقائق تدليك.",
        intensiveProtocol: "مكثف",
        intensiveDesc: "للبشرة المقاومة. 2 غرام بودر تقشير، 8 دقائق تدليك.",
        learnMore: "اعرف المزيد",
        downloadCatalog: "تحميل الكتالوج",
        viewGuide: "عرض الدليل",
        closeGuide: "إغلاق الدليل",
        protocolsDesc: "إرشادات مهنية للحصول على أفضل النتائج",
        fullGuide: "دليل البروتوكول الكامل",

        // Footer
        aboutDermocean: "عن ديرموشيان",
        aboutText: "المزود الرائد لمنتجات العناية بالبشرة لمراكز التجميل. نجمع بين أفضل مكونات الطبيعة والابتكار العلمي.",
        quickLinks: "روابط سريعة",
        contactUs: "اتصل بنا",
        contactDesc: "تواصل مع فريق الدعم المحترف لدينا",
        paymentMethods: "طرق الدفع",
        cashOnDelivery: "الدفع عند الاستلام",
        bankTransfer: "تحويل بنكي",

        // Contact Form
        fullName: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phoneNumber: "رقم الهاتف",
        message: "الرسالة",
        sendMessage: "إرسال الرسالة",

        // Registration
        b2bRegistration: "تسجيل مركز تجميل",
        joinNetwork: "انضم إلى شبكتنا من مراكز التجميل المهنية",
        centerName: "اسم المركز",
        ownerName: "اسم المالك",
        licenseNumber: "رقم الترخيص",
        submitApplication: "إرسال الطلب",
        verificationNote: "يتم التحقق من الحسابات يدوياً وتفعيلها خلال 24-48 ساعة.",
        applicationReceived: "تم استلام الطلب",
        thankYouMessage: "شكراً لتسجيلك. سنقوم بمراجعة طلبك والتواصل معك قريباً.",
        returnHome: "العودة للرئيسية",

        // Videos
        educationalVideos: "فيديوهات تعليمية",
        protocolsSessions: "البروتوكولات وجلسات العلاج",
        registerCenter: "تسجيل المركز",

        // About Page
        aboutHeroTitle: "علم <span>الجمال الطبيعي</span>",
        aboutHeroDesc: "تجمع ديرموشيان بين قوة الطحالب البحرية وعلم الجلدية المتقدم لتقديم حلول العناية بالبشرة الاحترافية.",
        ourStory: "قصتنا",
        storyP1: "ولدت ديرموشيان من رؤية لإحداث ثورة في العناية بالبشرة المهنية من خلال تسخير الإمكانات غير المستغلة للبيولوجيا البحرية. اكتشف مؤسسونا، وهم فريق من أطباء الجلدية وعلماء الأحياء البحرية، أن أنواعاً معينة من الطحالب تحتوي على مركبات نشطة بيولوجياً قوية يمكنها تحويل البشرة على المستوى الخلوي.",
        storyP2: "اليوم، نفخر بخدمة مئات من مراكز التجميل وعيادات الأمراض الجلدية في المنطقة، ونزودهم بأدوات تحقق نتائج مرئية ودائمة لعملائهم.",
        naturalIngredients: "مكونات طبيعية",
        ingredientsSubtitle: "تركيبات طبيعية 100% مدعومة بالعلم",
        marineAlgae: "الطحالب البحرية",
        marineAlgaeDesc: "غنية بالمعادن والفيتامينات ومضادات الأكسدة للتجديد الخلوي العميق.",
        calendula: "خلاصة الآذريون",
        calendulaDesc: "تهدئ التهيج وتعزز الشفاء الطبيعي.",
        chamomile: "البابونج",
        chamomileDesc: "خصائص مضادة للالتهاب لتقليل الاحمرار وتهدئة البشرة الحساسة.",
        hyaluronicAcid: "حمض الهيالورونيك",
        hyaluronicAcidDesc: "ترطيب عميق ينفخ البشرة ويجددها من الداخل.",
        professionalStandards: "المعايير المهنية",
        certificationsDesc: "جميع منتجات ديرموشيان مطورة وفقاً للمعايير الدولية لطب الجلد ومختبرة للسلامة والفعالية.",
        dermatologistTested: "مختبرة من قبل أطباء الجلدية",
        hypoallergenic: "تركيبات مضادة للحساسية",
        crueltyFree: "خالية من القسوة",
        ecoFriendly: "تغليف صديق للبيئة",
        becomePartner: "كن شريكاً لديرموشيان",
        partnerDesc: "انضم إلى شبكتنا من مراكز التجميل المهنية وقدم لعملائك أفضل تقنيات العناية بالبشرة.",
        registerNow: "سجل الآن",

        // How to Use Page
        howToUseTitle: "دليل <span>التطبيق الاحترافي</span>",
        howToUseDesc: "اتبع بروتوكولنا خطوة بخطوة للحصول على أفضل نتائج العلاج",
        stepByStep: "دليل خطوة بخطوة",
        step1Title: "تنظيف البشرة",
        step1Desc: "نظفي منطقة العلاج جيداً باستخدام منظف لطيف متوازن الحموضة. أزيلي جميع آثار المكياج والزيوت والشوائب.",
        step1Tip: "نصيحة احترافية: استخدمي الماء الفاتر لفتح المسام قبل العلاج.",
        step2Title: "تحضير الخليط",
        step2Desc: "امزجي 2 غرام من بودر التقشير بالطحالب مع محلول الدعم حتى تحصلي على عجينة ناعمة ومتساوية.",
        step2Tip: "نصيحة احترافية: استخدمي وعاء سيراميك أو زجاج - تجنبي الأوعية المعدنية.",
        step3Title: "التطبيق بالتساوي",
        step3Desc: "باستخدام أصابع نظيفة أو فرشاة، ضعي الخليط بالتساوي على الوجه، مع تجنب منطقة العين والشفاه.",
        step3Tip: "نصيحة احترافية: اعملي على أقسام - الجبهة، الخدود، الأنف، الذقن.",
        step4Title: "التدليك",
        step4Desc: "دلكي بلطف بحركات دائرية للمدة المحددة حسب البروتوكول المختار (4-8 دقائق).",
        step4Tip: "نصيحة احترافية: زيدي الضغط تدريجياً على المناطق المقاومة مثل منطقة T.",
        step5Title: "الشطف جيداً",
        step5Desc: "اشطفي منطقة العلاج بالماء الفاتر حتى تتم إزالة جميع بقايا المنتج.",
        step5Tip: "نصيحة احترافية: جففي برفق بالتربيت - لا تفركي.",
        step6Title: "تطبيق ماسك التهدئة",
        step6Desc: "ضعي طبقة سخية من ماسك التهدئة واتركيها لمدة 15-20 دقيقة لتهدئة وترطيب البشرة.",
        step6Tip: "نصيحة احترافية: غطي بمنشفة رطبة لتعزيز الامتصاص.",
        step7Title: "الحماية من الشمس",
        step7Desc: "أنهي بواقي شمس SPF 50+. هذا إلزامي للأيام السبعة التالية بعد العلاج.",
        step7Warning: "تحذير: تخطي الحماية من الشمس يمكن أن يسبب فرط التصبغ!",
        watchTutorial: "شاهد الفيديو التعليمي",
        tutorialDesc: "شاهد عملية التطبيق الكاملة",
        viewVideos: "عرض جميع الفيديوهات",
        precautions: "الاحتياطات",
        sunExposure: "تجنب التعرض للشمس",
        sunExposureDesc: "ابتعد عن أشعة الشمس المباشرة لمدة 7 أيام بعد العلاج.",
        noAcids: "لا أحماض نشطة",
        noAcidsDesc: "تجنب الريتينول و AHA/BHA لمدة 5 أيام قبل وبعد.",
        stayHydrated: "حافظ على الترطيب",
        stayHydratedDesc: "اشرب الكثير من الماء ورطب بانتظام.",
        treatmentInterval: "الفاصل بين الجلسات",
        treatmentIntervalDesc: "انتظر 2-4 أسابيع بين الجلسات حسب استجابة البشرة.",

        // Articles Page
        faqTitle: "الأسئلة الشائعة",
        articlesTitle: "رؤى خبراء البشرة",
        articlesDesc: "اكتشف النصائح والأدلة والمعرفة المهنية",
        faq1Q: "كم مرة يمكنني استخدام علاج التقشير؟",
        faq1A: "نوصي بالانتظار 2-4 أسابيع بين الجلسات، حسب حساسية بشرتك واستجابتها للعلاج.",
        faq2Q: "هل العلاج مناسب للبشرة الحساسة؟",
        faq2A: "نعم! البروتوكول اللطيف مصمم خصيصاً للبشرة الحساسة. ابدأ بأقل شدة وزدها تدريجياً.",
        faq3Q: "متى سأرى النتائج؟",
        faq3A: "يلاحظ العديد من العملاء تحسناً فورياً في ملمس البشرة. للمشاكل العميقة كالتصبغات، عادةً ما تحتاج 3-6 جلسات.",
        faq4Q: "هل يمكنني استخدام المنتجات في المنزل؟",
        faq4A: "منتجات ديرموشيان مصممة للاستخدام المهني في مراكز التجميل المرخصة. للعناية المنزلية، ننصح بواقي الشمس وماسك التهدئة.",

        // Protocol Details
        prot_duration: "المدة",
        prot_powder: "كمية البودرة",
        prot_pressure: "الضغط",
        prot_target: "العميل المستهدف",
        prot_skin: "نوع البشرة",

        // Gentle Steps
        gentle_step1: "تدليك لمدة 4 دقائق",
        gentle_step2: "استخدام 2 غرام من بودرة التقشير",
        gentle_step3: "ضغط خفيف فقط",
        gentle_step4: "مثالي للعملاء لأول مرة",
        gentle_step5: "الأفضل للبشرة الحساسة",

        // Moderate Steps
        moderate_step1: "تدليك لمدة 6 دقائق",
        moderate_step2: "استخدام 2 غرام من بودرة التقشير",
        moderate_step3: "تطبيق بضغط متوسط",
        moderate_step4: "لأنواع البشرة العادية",
        moderate_step5: "موصى به لجلسات الصيانة",

        // Intensive Steps
        intensive_step1: "تدليك لمدة 8 دقائق",
        intensive_step2: "استخدام 2 غرام من بودرة التقشير",
        intensive_step3: "ضغط قوي وعميق",
        intensive_step4: "للبشرة المقاومة فقط",
        intensive_step5: "أقصى نتائج، يتطلب خبرة",

        // صفحات المنتجات
        cat_peeling: "تقشير",
        cat_activator: "محفز",
        cat_mask: "ماسك",
        cat_sunscreen: "حماية",

        prod_peeling_name: "بودرة التقشير بالطحالب",
        prod_peeling_desc: "تركيبة طبيعية 100% تحتوي على بلورات دقيقة من الطحالب البحرية للتقشير العميق.",
        natural100: "طبيعي 100%",
        professionalUse: "للاستخدام المهني",
        orderNow: "اطلب الآن",
        keyIngredients: "المكونات الرئيسية",
        benefits: "الفوائد",
        viewFullProtocol: "عرض البروتوكول الكامل",

        ing_algae: "ترطيب عميق",
        ing_calendula: "يهدئ التهيج",
        ing_melissa: "يعزز الكولاجين",
        ing_chamomile: "يقلل الاحمرار",
        ing_h2o2: "ينقي البشرة",
        ing_glycerin: "ترطيب عميق",
        ing_daisy: "يوحد لون البشرة",

        benefit_exfoliate: "يقشر الجلد الميت",
        benefit_pores: "ينظف المسام",
        benefit_pigmentation: "يخفف التصبغات",
        benefit_acne: "يعالج حب الشباب",
        benefit_activate: "ينشط التقشير",
        benefit_antiseptic: "مفعول مطهر",
        benefit_hydrate: "يرطب",
        benefit_soothe: "يهدئ البشرة",
        benefit_redness: "يقلل الاحمرار",
        benefit_protect: "حماية من الأشعة",

        usage_peeling: "امزج 2 غرام مع محلول الدعم. دلك لمدة 4-8 دقائق حسب البروتوكول.",
        usage_support: "امزج مع بودرة التقشير لتشكيل عجينة.",
        usage_mask: "ضع بعد علاج التقشير. اتركه لمدة 15-20 دقيقة.",
        usage_sunscreen: "ضع بسخاء قبل 15 دقيقة من التعرض للشمس.",

        prod_support_name: "محلول دعم التقشير",
        prod_support_desc: "سائل بيولوجي لتنشيط بودرة التقشير. مطهر ومرطب بعمق.",
        hydrating: "مرطب",
        antiseptic: "مطهر",

        prod_mask_name: "ماسك التهدئة",
        prod_mask_desc: "ماسك مهدئ بعد التقشير لتهدئة واستعادة البشرة.",
        soothing: "مهدئ",
        restorative: "مجدد",

        prod_sunscreen_name: "واقي شمس SPF 50+",
        prod_sunscreen_desc: "حماية أساسية بعد علاجات التقشير. تركيبة خفيفة وغير دهنية.",
        spf50: "SPF 50+",
        lightweight: "خفيف",

        loading: "جاري التحميل..."
    },
    fr: {
        // Navigation
        home: "Accueil",
        aboutUs: "À propos",
        products: "Produits",
        howToUse: "Utilisation",
        articles: "Articles",
        videos: "Vidéos",
        register: "Inscription B2B",
        protocols: "Protocoles",

        // Hero Section
        heroTitle: "Nature Pure, <span>Résultats Prouvés.</span>",
        heroDesc: "Formulations de soins avancées conçues pour les centres de beauté professionnels.",
        discoverProducts: "Découvrir",

        // Products
        ourCollection: "Notre Collection",
        professionalGrade: "Soins de Qualité Professionnelle",

        // Protocols
        treatmentProtocols: "Protocoles de Traitement",
        chooseProtocol: "Choisissez Votre Protocole",
        protocolSubtitle: "Sélectionnez selon le type de peau",
        gentleProtocol: "Doux",
        gentleDesc: "Pour peaux sensibles. 2g de poudre, 4 min de massage.",
        moderateProtocol: "Modéré",
        moderateDesc: "Pour peaux normales. 2g de poudre, 6 min de massage.",
        intensiveProtocol: "Intensif",
        intensiveDesc: "Pour peaux résistantes. 2g de poudre, 8 min de massage.",
        learnMore: "En Savoir Plus",
        downloadCatalog: "Télécharger",
        viewGuide: "Voir le Guide",
        closeGuide: "Fermer le Guide",
        protocolsDesc: "Directives professionnelles pour des résultats optimaux",
        fullGuide: "Guide Complet du Protocole",

        // Footer
        aboutDermocean: "À propos de Dermocean",
        aboutText: "Fournisseur leader de soins pour les centres de beauté.",
        quickLinks: "Liens Rapides",
        contactUs: "Contactez-nous",
        contactDesc: "Entrez en contact avec notre équipe",
        paymentMethods: "Modes de Paiement",
        cashOnDelivery: "Paiement à la livraison",
        bankTransfer: "Virement Bancaire",

        // Contact Form
        fullName: "Nom Complet",
        email: "Email",
        phoneNumber: "Téléphone",
        message: "Message",
        sendMessage: "Envoyer",

        // Registration
        b2bRegistration: "Inscription Centre",
        joinNetwork: "Rejoignez notre réseau professionnel",
        centerName: "Nom du Centre",
        ownerName: "Nom du Propriétaire",
        licenseNumber: "Numéro de Licence",
        submitApplication: "Soumettre",
        verificationNote: "Vérification manuelle des comptes sous 24-48h.",
        applicationReceived: "Demande Reçue",
        thankYouMessage: "Merci. Nous vous contacterons après vérification.",
        returnHome: "Retour Accueil",

        // Videos
        educationalVideos: "Vidéos Éducatives",
        protocolsSessions: "Protocoles et Séances",
        registerCenter: "S'inscrire",

        // About Page
        aboutHeroTitle: "La Science de la <span>Beauté Naturelle</span>",
        aboutHeroDesc: "Dermocean combine la puissance des algues marines avec la science dermatologique avancée.",
        ourStory: "Notre Histoire",
        storyP1: "Dermocean est né d'une vision de révolutionner les soins professionnels en exploitant le potentiel inexploité de la biologie marine.",
        storyP2: "Aujourd'hui, nous sommes fiers de servir des centaines de centres de beauté dans la région.",
        naturalIngredients: "Ingrédients Naturels",
        ingredientsSubtitle: "Formulations 100% naturelles soutenues par la science",
        marineAlgae: "Algues Marines",
        marineAlgaeDesc: "Riches en minéraux, vitamines et antioxydants pour le renouvellement cellulaire.",
        calendula: "Extrait de Calendula",
        calendulaDesc: "Apaise les irritations et favorise la guérison naturelle.",
        chamomile: "Camomille",
        chamomileDesc: "Propriétés anti-inflammatoires pour réduire les rougeurs.",
        hyaluronicAcid: "Acide Hyaluronique",
        hyaluronicAcidDesc: "Hydratation profonde qui repulpe et rajeunit de l'intérieur.",
        professionalStandards: "Normes Professionnelles",
        certificationsDesc: "Tous les produits Dermocean sont développés selon les normes dermatologiques internationales.",
        dermatologistTested: "Testé par Dermatologues",
        hypoallergenic: "Formules Hypoallergéniques",
        crueltyFree: "Sans Cruauté",
        ecoFriendly: "Emballage Écologique",
        becomePartner: "Devenez Partenaire Dermocean",
        partnerDesc: "Rejoignez notre réseau de centres de beauté professionnels.",
        registerNow: "S'inscrire Maintenant",

        // How to Use Page
        howToUseTitle: "Guide <span>d'Application Professionnelle</span>",
        howToUseDesc: "Suivez notre protocole étape par étape pour des résultats optimaux",
        stepByStep: "Guide Étape par Étape",
        step1Title: "Nettoyer la Peau",
        step1Desc: "Nettoyez soigneusement la zone de traitement avec un nettoyant doux au pH équilibré.",
        step1Tip: "Conseil Pro: Utilisez de l'eau tiède pour ouvrir les pores avant le traitement.",
        step2Title: "Préparer le Mélange",
        step2Desc: "Mélangez 2g de Poudre de Peeling aux Algues avec la Solution Support jusqu'à obtenir une pâte lisse.",
        step2Tip: "Conseil Pro: Utilisez un bol en céramique ou en verre - évitez les récipients métalliques.",
        step3Title: "Appliquer Uniformément",
        step3Desc: "Avec des doigts propres ou un pinceau, appliquez le mélange uniformément sur le visage.",
        step3Tip: "Conseil Pro: Travaillez par sections - front, joues, nez, menton.",
        step4Title: "Masser",
        step4Desc: "Massez doucement en mouvements circulaires pendant la durée spécifiée (4-8 minutes).",
        step4Tip: "Conseil Pro: Augmentez progressivement la pression sur les zones résistantes.",
        step5Title: "Rincer Soigneusement",
        step5Desc: "Rincez la zone de traitement à l'eau tiède jusqu'à élimination complète du produit.",
        step5Tip: "Conseil Pro: Séchez doucement en tapotant - ne frottez pas.",
        step6Title: "Appliquer le Masque Apaisant",
        step6Desc: "Appliquez une couche généreuse de Masque Apaisant pendant 15-20 minutes.",
        step6Tip: "Conseil Pro: Couvrez d'une serviette humide pour améliorer l'absorption.",
        step7Title: "Protection Solaire",
        step7Desc: "Terminez avec un écran solaire SPF 50+. C'est OBLIGATOIRE pendant 7 jours après le traitement.",
        step7Warning: "Attention: Sauter la protection solaire peut causer une hyperpigmentation!",
        watchTutorial: "Regarder le Tutoriel",
        tutorialDesc: "Voir le processus d'application complet en action",
        viewVideos: "Voir Toutes les Vidéos",
        precautions: "Précautions",
        sunExposure: "Éviter l'Exposition au Soleil",
        sunExposureDesc: "Restez à l'écart de la lumière directe du soleil pendant 7 jours après le traitement.",
        noAcids: "Pas d'Acides Actifs",
        noAcidsDesc: "Évitez le rétinol, AHA/BHA pendant 5 jours avant et après.",
        stayHydrated: "Restez Hydraté",
        stayHydratedDesc: "Buvez beaucoup d'eau et hydratez régulièrement.",
        treatmentInterval: "Intervalle de Traitement",
        treatmentIntervalDesc: "Attendez 2-4 semaines entre les séances selon la réponse de la peau.",

        // Articles Page
        faqTitle: "FAQ",
        articlesTitle: "Conseils d'Experts",
        articlesDesc: "Découvrez nos conseils professionnels",
        faq1Q: "À quelle fréquence puis-je utiliser le traitement de peeling?",
        faq1A: "Nous recommandons d'attendre 2-4 semaines entre les séances, selon la sensibilité de votre peau.",
        faq2Q: "Le traitement convient-il aux peaux sensibles?",
        faq2A: "Oui! Notre Protocole Doux est spécialement conçu pour les peaux sensibles. Commencez par l'intensité la plus faible.",
        faq3Q: "Combien de temps avant de voir les résultats?",
        faq3A: "De nombreux clients voient une amélioration immédiate. Pour les problèmes plus profonds comme la pigmentation, 3-6 séances sont généralement nécessaires.",
        faq4Q: "Puis-je utiliser les produits à la maison?",
        faq4A: "Les produits Dermocean sont formulés pour un usage professionnel. Pour les soins à domicile, nous recommandons notre écran solaire et masque apaisant.",

        // Protocol Details
        prot_duration: "Durée",
        prot_powder: "Quantité de Poudre",
        prot_pressure: "Pression",
        prot_target: "Client Cible",
        prot_skin: "Type de Peau",

        // Gentle Steps
        gentle_step1: "4 minutes de massage",
        gentle_step2: "Utilisez 2g de poudre",
        gentle_step3: "Pression légère seulement",
        gentle_step4: "Idéal pour les premiers clients",
        gentle_step5: "Meilleur pour les peaux sensibles",

        // Moderate Steps
        moderate_step1: "6 minutes de massage",
        moderate_step2: "Utilisez 2g de poudre",
        moderate_step3: "Pression moyenne",
        moderate_step4: "Pour les peaux normales",
        moderate_step5: "Recommandé pour l'entretien",

        // Intensive Steps
        intensive_step1: "8 minutes de massage",
        intensive_step2: "Utilisez 2g de poudre",
        intensive_step3: "Pression ferme et profonde",
        intensive_step4: "Pour peaux résistantes uniquement",
        intensive_step5: "Résultats maximaux, nécessite expérience",

        // Pages Produits
        cat_peeling: "Peeling",
        cat_activator: "Activateur",
        cat_mask: "Masque",
        cat_sunscreen: "Protection",

        prod_peeling_name: "Poudre de Peeling aux Algues",
        prod_peeling_desc: "Formule 100% naturelle contenant des microcristaux d'algues marines pour une exfoliation profonde.",
        natural100: "100% Naturel",
        professionalUse: "Usage Professionnel",
        orderNow: "Commander",
        keyIngredients: "Ingrédients Clés",
        benefits: "Avantages",
        viewFullProtocol: "Voir le Protocole Complet",

        ing_algae: "Hydratation profonde",
        ing_calendula: "Apaise les irritations",
        ing_melissa: "Stimule le collagène",
        ing_chamomile: "Réduit les rougeurs",
        ing_h2o2: "Purifie la peau",
        ing_glycerin: "Hydratation profonde",
        ing_daisy: "Unifie le teint",

        benefit_exfoliate: "Exfolie les peaux mortes",
        benefit_pores: "Nettoie les pores",
        benefit_pigmentation: "Atténue les taches",
        benefit_acne: "Traite l'acné",
        benefit_activate: "Active le peeling",
        benefit_antiseptic: "Action antiseptique",
        benefit_hydrate: "Hydrate",
        benefit_soothe: "Apaise la peau",
        benefit_redness: "Réduit les rougeurs",
        benefit_protect: "Protection UV",

        usage_peeling: "Mélangez 2g avec la Solution Support. Massez 4-8 min selon le protocole.",
        usage_support: "Combinez avec la Poudre de Peeling pour former une pâte.",
        usage_mask: "Appliquez après le traitement. Laissez 15-20 minutes.",
        usage_sunscreen: "Appliquez généreusement 15 min avant l'exposition au soleil.",

        prod_support_name: "Solution Support Peeling",
        prod_support_desc: "Liquide bioactif pour activer la poudre de peeling. Antiseptique et profondément hydratant.",
        hydrating: "Hydratant",
        antiseptic: "Antiseptique",

        prod_mask_name: "Masque Apaisant",
        prod_mask_desc: "Masque post-peeling pour calmer et restaurer la peau.",
        soothing: "Apaisant",
        restorative: "Réparateur",

        prod_sunscreen_name: "Écran Solaire SPF 50+",
        prod_sunscreen_desc: "Protection essentielle après les traitements. Formule légère et non grasse.",
        spf50: "SPF 50+",
        lightweight: "Légère",

        loading: "Chargement..."
    },
    tr: {
        // Navigation
        home: "Ana Sayfa",
        aboutUs: "Hakkımızda",
        products: "Ürünler",
        howToUse: "Nasıl Kullanılır",
        articles: "Makaleler",
        videos: "Videolar",
        register: "B2B Kayıt",
        protocols: "Protokoller",

        // Hero Section
        heroTitle: "Saf Doğa, <span>Kanıtlanmış Sonuçlar.</span>",
        heroDesc: "Profesyonel güzellik merkezleri için tasarlanmış gelişmiş cilt bakım formülleri.",
        discoverProducts: "Ürünleri Keşfet",

        // Products
        ourCollection: "Koleksiyonumuz",
        professionalGrade: "Profesyonel Cilt Bakımı",

        // Protocols
        treatmentProtocols: "Tedavi Protokolleri",
        chooseProtocol: "Protokol Seçin",
        protocolSubtitle: "Cilt tipine göre seçiniz",
        gentleProtocol: "Hafif",
        gentleDesc: "Hassas ciltler için. 2g toz, 4 dk masaj.",
        moderateProtocol: "Orta",
        moderateDesc: "Normal ciltler için. 2g toz, 6 dk masaj.",
        intensiveProtocol: "Yoğun",
        intensiveDesc: "Dirençli ciltler için. 2g toz, 8 dk masaj.",
        learnMore: "Daha Fazla",
        downloadCatalog: "Kataloğu İndir",
        viewGuide: "Rehberi Gör",
        closeGuide: "Rehberi Kapat",
        protocolsDesc: "En iyi sonuçlar için profesyonel talimatlar",
        fullGuide: "Tam Protokol Rehberi",

        // Footer
        aboutDermocean: "Dermocean Hakkında",
        aboutText: "Güzellik merkezleri için lider cilt bakım sağlayıcısı.",
        quickLinks: "Hızlı Linkler",
        contactUs: "İletişim",
        contactDesc: "Profesyonel ekibimizle iletişime geçin",
        paymentMethods: "Ödeme Yöntemleri",
        cashOnDelivery: "Kapıda Ödeme",
        bankTransfer: "Havale/EFT",

        // Contact Form
        fullName: "Ad Soyad",
        email: "E-posta",
        phoneNumber: "Telefon",
        message: "Mesaj",
        sendMessage: "Gönder",

        // Registration
        b2bRegistration: "Merkez Kaydı",
        joinNetwork: "Profesyonel ağımıza katılın",
        centerName: "Merkez Adı",
        ownerName: "Sahibinin Adı",
        licenseNumber: "Lisans Numarası",
        submitApplication: "Başvur",
        verificationNote: "Hesaplar 24-48 saat içinde manuel olarak doğrulanır.",
        applicationReceived: "Başvuru Alındı",
        thankYouMessage: "Teşekkürler. Doğrulama sonrası sizinle iletişime geçeceğiz.",
        returnHome: "Ana Sayfaya Dön",

        // Videos
        educationalVideos: "Eğitim Videoları",
        protocolsSessions: "Protokoller ve Seanslar",
        registerCenter: "Kayıt Ol",

        // About Page
        aboutHeroTitle: "<span>Doğal Güzelliğin</span> Bilimi",
        aboutHeroDesc: "Dermocean, deniz yosunlarının gücünü gelişmiş dermatoloji bilimi ile birleştirir.",
        ourStory: "Hikayemiz",
        storyP1: "Dermocean, deniz biyolojisinin kullanılmamış potansiyelini kullanarak profesyonel cilt bakımını devrimleştirme vizyonuyla doğdu.",
        storyP2: "Bugün, bölgedeki yüzlerce güzellik merkezi ve dermatoloji kliniğine hizmet vermekten gurur duyuyoruz.",
        naturalIngredients: "Doğal İçerikler",
        ingredientsSubtitle: "Bilim destekli %100 doğal formülasyonlar",
        marineAlgae: "Deniz Yosunları",
        marineAlgaeDesc: "Derin hücresel yenilenme için mineral, vitamin ve antioksidanlar açısından zengin.",
        calendula: "Aynısefa Özütü",
        calendulaDesc: "Tahriş olmuş cildi yatıştırır ve doğal iyileşmeyi destekler.",
        chamomile: "Papatya",
        chamomileDesc: "Kızarıklığı azaltmak için anti-enflamatuar özellikler.",
        hyaluronicAcid: "Hyaluronik Asit",
        hyaluronicAcidDesc: "İçeriden dolgunlaştıran ve gençleştiren derin nemlendirme.",
        professionalStandards: "Profesyonel Standartlar",
        certificationsDesc: "Tüm Dermocean ürünleri uluslararası dermatolojik standartlara göre geliştirilmiştir.",
        dermatologistTested: "Dermatolog Onaylı",
        hypoallergenic: "Hipoalerjenik Formüller",
        crueltyFree: "Hayvan Deneysiz",
        ecoFriendly: "Çevre Dostu Ambalaj",
        becomePartner: "Dermocean Ortağı Olun",
        partnerDesc: "Profesyonel güzellik merkezleri ağımıza katılın.",
        registerNow: "Şimdi Kayıt Ol",

        // How to Use Page
        howToUseTitle: "Profesyonel <span>Uygulama Rehberi</span>",
        howToUseDesc: "Optimal tedavi sonuçları için adım adım protokolümüzü takip edin",
        stepByStep: "Adım Adım Rehber",
        step1Title: "Cildi Temizleyin",
        step1Desc: "Tedavi bölgesini nazik, pH dengeli bir temizleyici ile iyice temizleyin.",
        step1Tip: "Pro İpucu: Tedaviden önce gözenekleri açmak için ılık su kullanın.",
        step2Title: "Karışımı Hazırlayın",
        step2Desc: "2g Yosun Peeling Tozunu Destek Solüsyonu ile pürüzsüz bir macun kıvamına gelene kadar karıştırın.",
        step2Tip: "Pro İpucu: Seramik veya cam kap kullanın - metal kaplardan kaçının.",
        step3Title: "Eşit Şekilde Uygulayın",
        step3Desc: "Temiz parmaklarla veya fırça ile karışımı göz ve dudak bölgesinden kaçınarak yüze eşit şekilde uygulayın.",
        step3Tip: "Pro İpucu: Bölümler halinde çalışın - alın, yanaklar, burun, çene.",
        step4Title: "Masaj Yapın",
        step4Desc: "Seçtiğiniz protokolün belirttiği süre boyunca (4-8 dakika) dairesel hareketlerle nazikçe masaj yapın.",
        step4Tip: "Pro İpucu: T-bölgesi gibi dirençli bölgelerde yavaş yavaş baskıyı artırın.",
        step5Title: "İyice Durulayın",
        step5Desc: "Tüm ürün kalıntıları giderilene kadar tedavi bölgesini ılık suyla durulayın.",
        step5Tip: "Pro İpucu: Nazikçe vurarak kurulayın - ovmayın.",
        step6Title: "Yatıştırıcı Maske Uygulayın",
        step6Desc: "Yatıştırıcı Maske'den bol miktarda uygulayın ve cildi yatıştırmak için 15-20 dakika bekletin.",
        step6Tip: "Pro İpucu: Emilimi artırmak için nemli bir havlu ile örtün.",
        step7Title: "Güneş Koruması",
        step7Desc: "SPF 50+ güneş kremi ile bitirin. Bu, tedaviden sonraki 7 gün boyunca ZORUNLUDUR.",
        step7Warning: "Uyarı: Güneş korumasını atlamak hiperpigmentasyona neden olabilir!",
        watchTutorial: "Eğitim Videosunu İzle",
        tutorialDesc: "Tam uygulama sürecini izleyin",
        viewVideos: "Tüm Videoları Gör",
        precautions: "Önlemler",
        sunExposure: "Güneşe Maruz Kalmaktan Kaçının",
        sunExposureDesc: "Tedaviden sonra 7 gün doğrudan güneş ışığından uzak durun.",
        noAcids: "Aktif Asitler Yok",
        noAcidsDesc: "Tedaviden 5 gün önce ve sonra retinol, AHA/BHA'dan kaçının.",
        stayHydrated: "Nemlendirin",
        stayHydratedDesc: "Bol su için ve düzenli olarak nemlendirin.",
        treatmentInterval: "Tedavi Aralığı",
        treatmentIntervalDesc: "Cilt tepkisine göre seanslar arasında 2-4 hafta bekleyin.",

        // Articles Page
        faqTitle: "Sıkça Sorulan Sorular",
        articlesTitle: "Uzman Görüşleri",
        articlesDesc: "İpuçları ve profesyonel bilgileri keşfedin",
        faq1Q: "Peeling tedavisini ne sıklıkla kullanabilirim?",
        faq1A: "Cildinizin hassasiyetine göre seanslar arasında 2-4 hafta beklemenizi öneririz.",
        faq2Q: "Tedavi hassas ciltler için uygun mu?",
        faq2A: "Evet! Hafif Protokolümüz hassas cilt tipleri için özel olarak tasarlanmıştır. En düşük yoğunlukla başlayın.",
        faq3Q: "Sonuçları ne zaman göreceğim?",
        faq3A: "Birçok müşteri cilt dokusunda hemen iyileşme görür. Pigmentasyon gibi derin sorunlar için genellikle 3-6 seans gerekir.",
        faq4Q: "Ürünleri evde kullanabilir miyim?",
        faq4A: "Dermocean ürünleri lisanslı güzellik merkezlerinde profesyonel kullanım için formüle edilmiştir. Evde bakım için güneş kremi ve yatıştırıcı maskemizi öneriyoruz.",

        // Protocol Details
        prot_duration: "Süre",
        prot_powder: "Toz Miktarı",
        prot_pressure: "Basınç",
        prot_target: "Hedef Müşteri",
        prot_skin: "Cilt Tipi",

        // Gentle Steps
        gentle_step1: "4 dakika masaj",
        gentle_step2: "2g peeling tozu kullanın",
        gentle_step3: "Sadece hafif baskı",
        gentle_step4: "İlk kez gelen müşteriler için ideal",
        gentle_step5: "Hassas ciltler için en iyisi",

        // Moderate Steps
        moderate_step1: "6 dakika masaj",
        moderate_step2: "2g peeling tozu kullanın",
        moderate_step3: "Orta baskı uygulaması",
        moderate_step4: "Normal cilt tipleri için",
        moderate_step5: "Bakım seansları için önerilir",

        // Intensive Steps
        intensive_step1: "8 dakika masaj",
        intensive_step2: "2g peeling tozu kullanın",
        intensive_step3: "Sıkı, derin baskı",
        intensive_step4: "Sadece dirençli ciltler için",
        intensive_step5: "Maksimum sonuç, deneyim gerektirir",

        // Ürün Sayfaları
        cat_peeling: "Peeling",
        cat_activator: "Aktivatör",
        cat_mask: "Maske",
        cat_sunscreen: "Koruma",

        prod_peeling_name: "Yosun Peeling Tozu",
        prod_peeling_desc: "Derin eksfoliasyon için deniz yosunu mikrokristallerinden oluşan %100 doğal formül.",
        natural100: "%100 Doğal",
        professionalUse: "Profesyonel Kullanım",
        orderNow: "Sipariş Ver",
        keyIngredients: "Temel İçerikler",
        benefits: "Faydalar",
        viewFullProtocol: "Tam Protokole Bak",

        ing_algae: "Derin nemlendirme",
        ing_calendula: "Tahrişi yatıştırır",
        ing_melissa: "Kolajen üretimini artırır",
        ing_chamomile: "Kızarıklığı azaltır",
        ing_h2o2: "Cildi arındırır",
        ing_glycerin: "Derin nemlendirme",
        ing_daisy: "Cilt tonunu eşitler",

        benefit_exfoliate: "Ölü deriyi eksfoliye eder",
        benefit_pores: "Gözenekleri temizler",
        benefit_pigmentation: "Lekeleri giderir",
        benefit_acne: "Akneyi tedavi eder",
        benefit_activate: "Peeling'i aktive eder",
        benefit_antiseptic: "Antiseptik etki",
        benefit_hydrate: "Nemlendirir",
        benefit_soothe: "Cildi yatıştırır",
        benefit_redness: "Kızarıklığı azaltır",
        benefit_protect: "UV Koruması",

        usage_peeling: "2g'ı Destek Solüsyonu ile karıştırın. Protokole göre 4-8 dk masaj yapın.",
        usage_support: "Peeling Tozu ile karıştırarak macun oluşturun.",
        usage_mask: "Tedaviden sonra uygulayın. 15-20 dakika bekletin.",
        usage_sunscreen: "Güneşe çıkmadan 15 dk önce bol miktarda uygulayın.",

        prod_support_name: "Peeling Destek Solüsyonu",
        prod_support_desc: "Peeling tozunu aktive eden biyoaktif sıvı. Antiseptik ve derin nemlendirici.",
        hydrating: "Nemlendirici",
        antiseptic: "Antiseptik",

        prod_mask_name: "Yatıştırıcı Maske",
        prod_mask_desc: "Peeling sonrası cildi yatıştırmak ve onarmak için maske.",
        soothing: "Yatıştırıcı",
        restorative: "Onarıcı",

        prod_sunscreen_name: "SPF 50+ Güneş Kremi",
        prod_sunscreen_desc: "Peeling tedavileri sonrası temel koruma. Hafif ve yağsız formül.",
        spf50: "SPF 50+",
        lightweight: "Hafif",

        loading: "Yükleniyor..."
    }
};

// Toast Notification System
function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.addEventListener('transitionend', () => toast.remove());
    }, 3000);
}

// Global Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('page-loader');
    if (loader) {
        document.body.classList.add('loaded');
        setTimeout(() => loader.remove(), 600); // Remove from DOM
    }
});

// Expose to window
window.showToast = showToast;

document.addEventListener('DOMContentLoaded', () => {

    // Initialize Language
    const savedLang = localStorage.getItem('dermocean_lang') || 'en';
    changeLanguage(savedLang, false);

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const mobileSidebar = document.querySelector('.mobile-menu-sidebar');
    const closeMenu = document.querySelector('.close-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileSidebar.classList.add('active');
            mobileOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', closeMobileMenu);
    }

    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeMobileMenu);
    }

    function closeMobileMenu() {
        mobileSidebar.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Sticky Header
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                closeMobileMenu();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Registration Form Submission
    const registrationForm = document.querySelector('.registration-form');
    const modal = document.querySelector('.modal');

    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Show success modal
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Protocol Tabs (How to Use Page)
    const protocolTabs = document.querySelectorAll('.protocol-tab');
    if (protocolTabs.length > 0) {
        protocolTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                protocolTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });
    }

});

/**
 * Language Switching
 */
function changeLanguage(lang, save = true) {
    // Update HTML attributes
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update active state on language selectors
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.classList.toggle('active', el.dataset.lang === lang);
    });

    // Apply translations
    const langData = translations[lang] || translations['en'];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langData[key]) {
            el.innerHTML = langData[key];
        }
    });

    // Save preference
    if (save) {
        localStorage.setItem('dermocean_lang', lang);
    }

    return false;
}

/**
 * Protocol Modals
 */
function openProtocolModal(level) {
    const modal = document.getElementById('protocol-modal');
    const title = document.getElementById('protocol-title');
    const content = document.getElementById('protocol-content');

    const lang = localStorage.getItem('dermocean_lang') || 'en';
    const langData = translations[lang];

    const icons = [
        '<i class="fas fa-clock"></i>',
        '<i class="fas fa-balance-scale"></i>',
        '<i class="fas fa-hand-holding-water"></i>',
        '<i class="fas fa-user-check"></i>',
        '<i class="fas fa-star"></i>'
    ];

    const labels = [
        langData.prot_duration,
        langData.prot_powder,
        langData.prot_pressure,
        langData.prot_target,
        langData.prot_skin
    ];

    let protocolTitle = '';
    let steps = [];

    if (level === 'gentle') {
        protocolTitle = langData.gentleProtocol || "Gentle Protocol";
        steps = [
            langData.gentle_step1,
            langData.gentle_step2,
            langData.gentle_step3,
            langData.gentle_step4,
            langData.gentle_step5
        ];
    } else if (level === 'moderate') {
        protocolTitle = langData.moderateProtocol || "Moderate Protocol";
        steps = [
            langData.moderate_step1,
            langData.moderate_step2,
            langData.moderate_step3,
            langData.moderate_step4,
            langData.moderate_step5
        ];
    } else if (level === 'intensive') {
        protocolTitle = langData.intensiveProtocol || "Intensive Protocol";
        steps = [
            langData.intensive_step1,
            langData.intensive_step2,
            langData.intensive_step3,
            langData.intensive_step4,
            langData.intensive_step5
        ];
    }

    if (protocolTitle) {
        title.innerHTML = `${protocolTitle}`;
        title.className = `modal-title-gradient ${level}`; // For CSS styling

        // Inject Image
        const imgContainer = document.getElementById('protocol-image-container');
        if (imgContainer) {
            imgContainer.innerHTML = `<img src="images/protocols/${level}.png" alt="${level}" class="protocol-modal-img">`;
        }

        content.innerHTML = `<div class="protocol-steps-grid">` +
            steps.map((s, index) => `
                <div class="protocol-step-item">
                    <div class="step-icon ${level}">${icons[index]}</div>
                    <div class="step-content">
                        <span class="step-label">${labels[index] || ''}</span>
                        <p class="step-desc">${s}</p>
                    </div>
                </div>
            `).join('') +
            `</div>`;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeProtocolModal() {
    const modal = document.getElementById('protocol-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Toggle PDF Viewer
function togglePdfViewer() {
    const container = document.getElementById('pdf-viewer-container');
    const btn = document.getElementById('pdf-toggle-btn');
    const iframe = document.getElementById('pdf-iframe');
    if (!container || !btn) return;

    const isActive = container.classList.contains('active');

    // Lazy load PDF on first open
    if (!isActive && iframe && !iframe.src) {
        iframe.src = iframe.dataset.src;
    }

    // Toggle class
    container.classList.toggle('active');

    // Update Button Text & Icon
    const lang = localStorage.getItem('dermocean_lang') || 'en';
    const langData = translations[lang] || translations['en'];

    if (!isActive) {
        // Now Open
        btn.innerHTML = `<i class="fas fa-times"></i> <span>${langData.closeGuide || 'Close Guide'}</span>`;
        btn.classList.add('btn-outline');
        btn.classList.remove('btn-primary');
    } else {
        // Now Closed
        btn.innerHTML = `<i class="fas fa-book-open"></i> <span>${langData.viewGuide || 'View Guide'}</span>`;
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-outline');
    }
}

/**
 * 5-Case Slider Logic
 */
const sliderCases = {
    pigmentation: {
        before: 'images/comparison/pigmentation-before.jpeg',
        after: 'images/comparison/pigmentation-after.jpeg'
    },
    acne: {
        before: 'images/comparison/acne-before.jpeg',
        after: 'images/comparison/acne-after.jpeg'
    },
    scars: {
        before: 'images/comparison/scars-before.jpeg',
        after: 'images/comparison/scars-after.jpeg'
    },
    lines: {
        before: 'images/comparison/lines-before.jpeg',
        after: 'images/comparison/lines-after.jpeg'
    },
    pores: {
        before: 'images/comparison/pores-before.jpeg',
        after: 'images/comparison/pores-after.jpeg'
    }
};

function switchCase(caseId) {
    const caseData = sliderCases[caseId];
    if (!caseData) return;

    // Update Images
    const beforeImg = document.getElementById('before-img');
    const afterImg = document.getElementById('after-img');

    if (beforeImg) beforeImg.src = caseData.before;
    if (afterImg) afterImg.src = caseData.after;

    // Update Active Tab
    document.querySelectorAll('.case-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.case === caseId);
    });

    // Re-init Slider if exists
    if (typeof ComparisonSlider !== 'undefined') {
        const container = document.querySelector('.comparison-container');
        if (container) {
            new ComparisonSlider(container);
        }
    }
}

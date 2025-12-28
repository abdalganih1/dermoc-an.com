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
        resources: "Resources",
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

        loading: "Loading...",
        backToArticles: "Back to Articles",

        // FAQ Page
        faqNav: "FAQ",
        faqPageTitle: "Frequently Asked <span>Questions</span>",
        faqPageDesc: "Find answers to common questions about our treatments, protocols, and products",
        faqCatAll: "All Questions",
        faqCatTreatment: "Treatment",
        faqCatAftercare: "Aftercare",
        faqCatResults: "Results",
        faqCatSafety: "Safety",
        faq_q1: "Can I wash my face after the treatment?",
        faq_a1: "No. According to the protocol, water should be strictly avoided for 48 to 72 hours after the treatment. This allows the marine microcrystals to remain active and achieve optimal results.",
        faq_a1_warning: "Water contact duration varies by protocol: Gentle (2 days), Moderate (4 days), Intensive (5 days).",
        faq_q2: "Will I experience pain or discomfort?",
        faq_a2: "Most clients report only a mild tingling or warm sensation within the first 24 hours. This is due to the presence of micro-crystals (natural algae-based particles) embedded in the stratum corneum. The procedure is generally well-tolerated without the need for numbing creams.",
        faq_q3: "When will I start seeing results?",
        faq_a3: "Many clients see immediate improvement in skin texture and glow. For deeper concerns like pigmentation, scars, or wrinkles, 3-6 sessions are typically needed, with visible improvement after each session.",
        faq_q4: "Can I use the products at home?",
        faq_a4: "Dermocean Peel is for professional use by doctors, cosmetologists, and beauty salons only. For home care, we recommend our Sunscreen SPF 50+ and Calming Mask for post-treatment maintenance.",
        faq_q5: "How important is sun protection after peeling?",
        faq_a5: "It's crucial. Following a peeling session, the skin enters a highly sensitive and vulnerable state. The integrity of the skin barrier is temporarily compromised. Clients must avoid direct sunlight, wear a hat, and reapply a UVA/UVB SPF 50+ sunscreen every 3 hours.",
        faq_q6: "How many sessions do I need?",
        faq_a6: "Clients may require 1 to 4 sessions, based on skin condition and treatment goals. Sessions must be spaced no less than 4 weeks apart, depending on the skin's healing capacity.",
        faq_q7: "Is the treatment suitable for all skin types?",
        faq_a7: "The treatment is suitable for most skin types, but there are important contraindications. The treatment is NOT suitable for:",
        contra1: "Use of Isotretinoin in the past 6 months",
        contra2: "Pregnancy",
        contra3: "Seafood/Shellfish allergy",
        contra4: "Wounded skin or open wounds",
        contra5: "Keloid or hypertrophic scarring tendency",
        contra6: "Excessive sun exposure or tanning habits",
        faq_q8: "What should I do about the peeling skin?",
        faq_a8: "Never pick or pull off peeling skin. You may trim loose skin with sanitized eyebrow or manicure scissors. Avoid friction from pillows, towels, or hands. Dry skin is part of the peeling process and helps achieve optimal results.",
        faq_q9: "What should I avoid after the treatment?",
        faq_a9_intro: "After the treatment, you should avoid:",
        avoid1: "Rubbing, scratching, or manually exfoliating the skin",
        avoid2: "Water contact for 48-72 hours (based on protocol)",
        avoid3: "Applying any makeup",
        avoid4: "Sun exposure, heat, and steam",
        avoid5: "Swimming pools, saunas, or steam rooms for 7 days",
        avoid6: "Heavy moisturizing (dry skin is part of the process)",
        faq_q10: "How should I prepare for the treatment?",
        faq_a10_intro: "Before the treatment:",
        prep1: "Avoid direct sun exposure for 5-7 days prior",
        prep2: "Discontinue retinol, AHA/BHA, and other active acids 5 days before",
        prep3: "Do not undergo other cosmetic procedures (Botox, fillers, laser, microneedling) within the recommended timeframes",
        prep4: "Inform your specialist about any medications you're taking",
        faqCtaTitle: "Still Have Questions?",
        faqCtaDesc: "Our team is here to help you with any additional questions",

        // Care Guide Page
        careGuideNav: "Care Guide",
        carePageTitle: "Pre & Post <span>Treatment Care</span>",
        carePageDesc: "Essential guidelines to maximize your treatment results and ensure safe recovery",
        prePhaseTitle: "Before Treatment",
        prePhaseSubtitle: "5-7 days before your appointment",
        immediatePhaseTitle: "Immediately After",
        immediatePhaseSubtitle: "First 24-72 hours",
        daysAfterPhaseTitle: "Days 3-7",
        daysAfterPhaseSubtitle: "Peeling and recovery phase",
        preCare1Title: "Avoid Sun Exposure",
        preCare1Desc: "Refrain from sun exposure for at least 5-7 days prior to minimize the risk of post-inflammatory hyperpigmentation.",
        preCare2Title: "Stop Active Ingredients",
        preCare2Desc: "Discontinue retinol, AHA, BHA, and other active acids 5 days before the treatment to prevent over-sensitization.",
        preCare3Title: "No Other Procedures",
        preCare3Desc: "Do not undergo Botox, fillers, laser therapy, microneedling, or chemical peels within the recommended time frames.",
        preCare4Title: "Disclose Medications",
        preCare4Desc: "Inform your specialist about any medications you're taking, especially isotretinoin or blood thinners.",
        immediateCare1Title: "No Water Contact",
        immediateCare1Desc: "Avoid water contact for 48-72 hours based on protocol intensity. This is crucial for crystal activation.",
        immediateCare2Title: "Don't Touch or Rub",
        immediateCare2Desc: "Do not rub, scratch, or manually exfoliate the skin. Let the microcrystals work naturally.",
        immediateCare3Title: "No Makeup",
        immediateCare3Desc: "Do not apply any makeup products for the duration specified by your protocol.",
        immediateCare4Title: "Avoid Heat",
        immediateCare4Desc: "Avoid sun exposure, saunas, steam rooms, hot yoga, and any activities that cause sweating.",
        daysCare1Title: "Gentle Cleansing",
        daysCare1Desc: "After the water-free period, gently wash using a pH-balanced, mild gel cleanser. No scrubs or exfoliants.",
        daysCare2Title: "Don't Pick Peeling Skin",
        daysCare2Desc: "Never pick or pull off peeling skin. You may trim loose skin with sanitized scissors only.",
        daysCare3Title: "Sunscreen Every 3 Hours",
        daysCare3Desc: "Apply SPF 50+ sunscreen every 3 hours. Wear a hat and avoid direct sunlight for 7 days.",
        daysCare4Title: "No Pools or Saunas",
        daysCare4Desc: "Avoid swimming pools, saunas, or steam rooms for at least 7 days post-treatment.",
        protocolTableTitle: "Water Avoidance by Protocol",
        protocolTableDesc: "Duration varies based on your treatment intensity",
        tableProtocol: "Protocol",
        tableDuration: "Massage",
        tableWater: "No Water",
        tableBestFor: "Best For",
        twoDays: "2 days",
        fourDays: "4 days",
        fiveDays: "5 days",
        tableSensitive: "Sensitive skin, first-timers",
        tableNormal: "Normal/dull skin",
        tableThick: "Thick, oily, aging skin",
        contraTitle: "Important Contraindications",
        contraDesc: "The treatment is NOT suitable for clients with the following conditions:",
        careCtaTitle: "Ready for Your Treatment?",
        careCtaDesc: "Contact us to schedule your professional Dermocean treatment",

        // Skin Concerns Page
        skinConcernsNav: "Skin Concerns",
        skinConcernsTitle: "Skin Concerns <span>We Treat</span>",
        skinConcernsDesc: "Discover how algae peeling can address your specific skin issues naturally and effectively",
        catPigmentation: "Pigmentation & Damage",
        catAging: "Aging & Texture",
        catTexture: "Texture & Impurities",
        concernSunDamage: "Sun-Damaged Skin",
        concernSunDamageDesc: "Repair UV damage and restore skin's natural radiance with deep exfoliation and cell renewal.",
        concernHyperpigmentation: "Hyperpigmentation",
        concernHyperpigmentationDesc: "Fade dark spots and even out skin tone through accelerated cell turnover and brightening agents.",
        concernScars: "Scars",
        concernScarsDesc: "Minimize the appearance of acne scars and post-inflammatory marks with deep tissue renewal.",
        concernPIH: "Post-Inflammatory Marks",
        concernPIHDesc: "Address discoloration left behind after acne or skin injuries with targeted exfoliation.",
        concernWrinkles: "Fine Lines & Wrinkles",
        concernWrinklesDesc: "Stimulate collagen production and reduce the appearance of early aging signs naturally.",
        concernElasticity: "Loss of Elasticity",
        concernElasticityDesc: "Boost skin firmness and resilience through deep cell regeneration and collagen stimulation.",
        concernSagging: "Sagging Skin",
        concernSaggingDesc: "Tighten and lift skin through intensive treatments that promote structural protein renewal.",
        concernDull: "Tired & Dull Complexion",
        concernDullDesc: "Revive radiance and brightness by removing dead cells and boosting circulation.",
        concernStretch: "Stretch Marks",
        concernStretchDesc: "Improve the appearance of stretch marks through deep exfoliation and collagen stimulation.",
        concernPores: "Enlarged Pores",
        concernPoresDesc: "Deep cleanse and refine pores while improving overall skin texture and smoothness.",
        concernKeratosis: "Keratosis Pilaris",
        concernKeratosisDesc: "Smooth rough, bumpy texture caused by keratin buildup with deep physical exfoliation.",
        concernAcne: "Acne-Prone Skin",
        concernAcneDesc: "Clear congested skin and reduce breakouts with antiseptic properties and pore cleansing.",
        concernImpure: "Impure & Oily Skin",
        concernImpureDesc: "Balance oil production and remove impurities for clearer, healthier-looking skin.",
        concernsCtaTitle: "Ready to Transform Your Skin?",
        concernsCtaDesc: "Find a certified Dermocean professional near you and start your journey to healthier skin",
        findProfessional: "Find a Professional",

        // Ingredients Page
        ingredientsNav: "Ingredients",
        ingredientsTitle: "The Science of <span>Natural Beauty</span>",
        ingredientsDesc: "Discover the powerful marine and botanical ingredients that make Dermocean treatments effective",
        catMarineAlgae: "Marine Algae Power",
        catMarineAlgaeDesc: "The core of our peeling powder - 100% natural marine microcrystals",
        catBotanical: "Botanical Extracts",
        catBotanicalDesc: "Soothing and healing plant extracts in our peeling powder",
        catSupportSolution: "Support Solution Actives",
        catSupportSolutionDesc: "Bioactive compounds that activate and enhance the peeling treatment",
        catCalmingMask: "Calming Mask Actives",
        catCalmingMaskDesc: "Soothing and restorative ingredients for post-treatment care",
        catSunscreen: "Sunscreen Actives",
        catSunscreenDesc: "Protection and brightening for post-treatment skin",
        ingChlorophyll: "Chlorophyll",
        ingChlorophyllDesc: "The green pigment in algae that provides powerful UV protection and anti-aging benefits while promoting skin cell renewal.",
        ingPolysaccharide: "Polysaccharides",
        ingPolysaccharideDesc: "Natural hydrating compounds that lock in moisture and create a protective barrier on the skin surface.",
        ingAminoAcids: "Amino Acids",
        ingAminoAcidsDesc: "Essential building blocks that stimulate collagen production and repair damaged skin tissue.",
        ingCarotenoids: "Carotenoids",
        ingCarotenoidsDesc: "Powerful antioxidants that protect skin from environmental stress and free radical damage.",
        ingCalendula: "Calendula Extract",
        ingCalendulaDesc: "Known for its powerful healing and anti-inflammatory properties. Soothes irritated skin and accelerates recovery.",
        ingChamomile: "Chamomile Extract",
        ingChamomileDesc: "A gentle yet effective extract that reduces redness, calms inflammation, and soothes sensitive skin.",
        ingMelissa: "Melissa Extract",
        ingMelissaDesc: "Also known as Lemon Balm, this extract boosts collagen production and helps reduce fine lines and wrinkles.",
        ingDaisy: "Daisy Flower Extract",
        ingDaisyDesc: "Reduces dark spots and evens out skin tone while providing antiseptic protection and soothing irritation.",
        ingGlycerin: "Glycerin",
        ingGlycerinDesc: "A humectant that deeply hydrates and softens the skin, preparing it for optimal treatment penetration.",
        ingCucumber: "Cucumber Fruit Extract",
        ingCucumberDesc: "Rich in vitamins (C, B1, B2, B5, B6) and minerals (iron, zinc, calcium, potassium). Hydrates, refreshes, and reduces puffiness.",
        ingAloe: "Aloe Vera",
        ingAloeDesc: "The ultimate soothing ingredient. Calms inflammation, moisturizes, and promotes skin healing and regeneration.",
        ingHyaluronate: "Sodium Hyaluronate",
        ingHyaluronateDesc: "A form of hyaluronic acid that deeply hydrates, locks in moisture, enhances elasticity, and plumps fine lines.",
        ingArbutin: "Arbutin",
        ingArbutinDesc: "A natural skin brightener that inhibits melanin production, reducing dark spots and evening out skin tone safely.",
        ingVitaminE: "Tocopherol (Vitamin E)",
        ingVitaminEDesc: "A powerful antioxidant that protects from free radicals, nourishes the skin, and supports the healing process.",
        ingCassia: "Cassia Alata Extract",
        ingCassiaDesc: "A tropical plant extract that soothes skin, defends against environmental damage, and supports healing.",
        benefitUV: "UV Protection",
        benefitAntiAging: "Anti-Aging",
        benefitRenewal: "Cell Renewal",
        benefitHydration: "Deep Hydration",
        benefitBarrier: "Skin Barrier",
        benefitCollagen: "Collagen Boost",
        benefitRepair: "Skin Repair",
        benefitAntioxidant: "Antioxidant",
        benefitProtection: "Protection",
        benefitHealing: "Healing",
        benefitSoothing: "Soothing",
        benefitAntiInflam: "Anti-Inflammatory",
        benefitCalming: "Calming",
        benefitRedness: "Reduces Redness",
        benefitWrinkles: "Anti-Wrinkle",
        benefitBrightening: "Brightening",
        benefitEvenTone: "Even Tone",
        benefitAntiseptic: "Antiseptic",
        benefitSoftening: "Softening",
        benefitVitamins: "Vitamin Rich",
        benefitRefreshing: "Refreshing",
        benefitDePuff: "De-Puffing",
        benefitRegeneration: "Regeneration",
        benefitPlumping: "Plumping",
        benefitElasticity: "Elasticity",
        benefitSpots: "Fades Spots",
        benefitNourishing: "Nourishing",
        benefitDefense: "Defense",
        philosophyTitle: "Our Natural Philosophy",
        phil100Natural: "100% Botanical",
        phil100NaturalDesc: "All ingredients from algae, herbs, and flowers",
        philMicrobiome: "Microbiome Safe",
        philMicrobiomeDesc: "Preserves skin barrier and natural flora",
        philNoChemicals: "No Harsh Chemicals",
        philNoChemicalsDesc: "No synthetic acids or harmful additives",
        philFastHealing: "Fast Recovery",
        philFastHealingDesc: "Healing time reduced to just 5 days",

        // Product Pages New Content
        concernsTreated: "Skin Concerns Treated",
        scientificFormula: "Scientific Formula",
        scientificDesc: "Discover the marine-derived active compounds that make our peeling powder uniquely effective",
        powerfulActives: "Powerful Actives",
        viewAllConcerns: "View All Skin Concerns",
        viewAllIngredients: "View All Ingredients",
        featuredIngredient: "Featured Ingredient",
        featuredIngredients: "Featured Ingredients",
        whySunscreen: "Why Sunscreen After Peeling?",
        protectNewSkin: "Protect new skin cells",
        preventPigment: "Prevent pigmentation",
        maintainResults: "Maintain treatment results",
        dailyEssential: "Daily essential",
        chlorophyllBrief: "UV protection & anti-aging",
        polysaccharideBrief: "Deep hydration & barrier",
        aminoAcidsBrief: "Collagen boost & repair",
        carotenoidsBrief: "Antioxidant protection",
        academyNav: "Academy",

        // Training Page
        trainingTitle: "Professional <span>Training Program</span>",
        trainingDesc: "Master the art of algae peeling with our comprehensive professional certification program",
        requestTraining: "Request Training",
        disclaimerTitle: "Professional Use Only",
        disclaimerText: "Dermocéan products are designed exclusively for trained beauty professionals. Proper training is required to ensure safe and effective treatments. Untrained use may result in adverse reactions or suboptimal results.",
        whyTrainingTitle: "Why <span>Get Certified?</span>",
        certBenefit1: "Official Certification",
        certBenefit1Desc: "Receive an official Dermocéan practitioner certificate",
        certBenefit2: "Comprehensive Knowledge",
        certBenefit2Desc: "Learn the science behind algae peeling and skin biology",
        certBenefit3: "Hands-on Practice",
        certBenefit3Desc: "Practical sessions with real treatments and techniques",
        certBenefit4: "Ongoing Support",
        certBenefit4Desc: "Access to expert support and continuing education",
        programTitle: "Training <span>Program Modules</span>",
        module1Title: "Product Knowledge",
        module1Item1: "Understanding algae composition",
        module1Item2: "Active ingredients and benefits",
        module1Item3: "Product line overview",
        module1Item4: "Storage and handling",
        module2Title: "Treatment Protocols",
        module2Item1: "Gentle, moderate, and intensive protocols",
        module2Item2: "Activation time (15 minutes)",
        module2Item3: "Session spacing (4 weeks minimum)",
        module2Item4: "Session planning (1-4 sessions)",
        module3Title: "Client Assessment",
        module3Item1: "Skin type analysis",
        module3Item2: "Contraindications identification",
        module3Item3: "Treatment customization",
        module3Item4: "Managing expectations",
        module4Title: "Aftercare & Safety",
        module4Item1: "Post-treatment care instructions",
        module4Item2: "Expected healing timeline",
        module4Item3: "Handling adverse reactions",
        module4Item4: "Sun protection importance",
        requestFormTitle: "Request Training",
        requestFormDesc: "Fill out the form below and we'll contact you with training options in your area",
        formName: "Full Name *",
        formEmail: "Email *",
        formPhone: "Phone Number *",
        formCountry: "Country *",
        selectCountry: "Select Country",
        formBusiness: "Business Name",
        formExperience: "Professional Experience",
        selectExperience: "Select Experience Level",
        exp1to3: "1-3 years",
        exp3to5: "3-5 years",
        exp5to10: "5-10 years",
        exp10plus: "10+ years",
        formMessage: "Additional Notes",
        submitRequest: "Submit Request",
        certTitle: "Dermocéan Certified Practitioner",
        certDesc: "Upon successful completion, you'll receive an official certificate and be listed as an authorized Dermocéan practitioner.",

        // Results Gallery
        galleryTitle: "Real Results, <span>Real Confidence</span>",
        galleryDesc: "Explore the transformative power of the Dermocéan Algae Peeling system through our verified case studies.",
        filterAll: "All Results",
        filterAcne: "Acne & Scars",
        filterPigmentation: "Pigmentation",
        filterAging: "Anti-Aging",
        filterTexture: "Pores & Texture",
        tagAcneScars: "Acne Scars",
        tagPigmentation: "Hyperpigmentation",
        tagAging: "Fine Lines",
        tagAcne: "Active Acne",
        tagTexture: "Enlarged Pores",
        resultTitle1: "Deep Scar Revision",
        resultDesc1: "Significant improvement in rolling and boxcar scars texture.",
        resultTitle2: "Melasma Reduction",
        resultDesc2: "Clear reduction in hormonal pigmentation and sun spots.",
        resultTitle3: "Skin Tightening",
        resultDesc3: "Reduced fine lines around eyes and improved skin elasticity.",
        resultTitle4: "Acne Clearance",
        resultDesc4: "Rapid drying of active inflammation and post-acne mark reduction.",
        resultTitle5: "Pore Minimizing",
        resultDesc5: "Refined skin texture and minimized pore visibility.",
        galleryCtaTitle: "Ready to Achieve These Results?",
        galleryCtaDesc: "Join thousands of professionals offering Dermocéan treatments.",
        registerNow: "Register Now",
        resultsNav: "Results Gallery",

        // Social Responsibility
        ourResponsibility: "Our Responsibility",
        responsibilityDesc: "Committed to the planet, our people, and ethical beauty.",
        sustainability: "Sustainability",
        sustainabilityDesc: "Minimizing our carbon footprint through eco-friendly packaging and responsible manufacturing.",
        ethicalSourcing: "Ethical Sourcing",
        ethicalSourcingDesc: "Harvesting marine algae sustainably to preserve ocean biodiversity for future generations.",
        communitySupport: "Community Support",
        communitySupportDesc: "Empowering estheticians with education and supporting fair trade practices globally."
    },
    ar: {
        // Navigation
        home: "الرئيسية",
        aboutUs: "من نحن",
        products: "المنتجات",
        resources: "الموارد",
        howToUse: "طريقة الاستخدام",
        articles: "المقالات",
        videos: "الفيديوهات",
        register: "تسجيل B2B",
        protocols: "البروتوكولات",

        // Hero Section
        heroTitle: "طبيعة نقية، <span>نتائج مثبتة.</span>",
        heroDesc: "تركيبات متقدمة للعناية بالبشرة مصممة بفعالية لمراكز التجميل المهنية. اكتشفي قوة الطحالب البحرية.",
        discoverProducts: "اكتشفي المنتجات",

        // Products
        ourCollection: "مجموعتنا",
        professionalGrade: "منتجات احترافية للعناية بالبشرة",

        // Protocols
        treatmentProtocols: "بروتوكولات العلاج",
        chooseProtocol: "اختاري البروتوكول",
        protocolSubtitle: "اختاري بناءً على نوع البشرة والنتيجة المطلوبة",
        gentleProtocol: "لطيف",
        gentleDesc: "للبشرة الحساسة. 2 غرام بودر تقشير، 4 دقائق تدليك.",
        moderateProtocol: "معتدل",
        moderateDesc: "للبشرة العادية. 2 غرام بودر تقشير، 6 دقائق تدليك.",
        intensiveProtocol: "مكثف",
        intensiveDesc: "للبشرة المقاومة. 2 غرام بودر تقشير، 8 دقائق تدليك.",
        learnMore: "اعرفي المزيد",
        downloadCatalog: "تحميل الكتالوج",
        viewGuide: "عرض الدليل",
        closeGuide: "إغلاق الدليل",
        protocolsDesc: "إرشادات مهنية للحصول على أفضل النتائج",
        fullGuide: "دليل البروتوكول الكامل",

        // Footer
        aboutDermocean: "عن ديرموسيان",
        aboutText: "المزود الرائد لمنتجات العناية بالبشرة لمراكز التجميل. نجمع بين أفضل مكونات الطبيعة والابتكار العلمي.",
        quickLinks: "روابط سريعة",
        contactUs: "اتصلي بنا",
        contactDesc: "تواصلي مع فريق الدعم المحترف لدينا",
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
        aboutHeroDesc: "تجمع ديرموسيان بين قوة الطحالب البحرية وعلم الجلدية المتقدم لتقديم حلول العناية بالبشرة الاحترافية.",
        ourStory: "قصتنا",
        storyP1: "ولدت ديرموسيان من رؤية لإحداث ثورة في العناية بالبشرة المهنية من خلال تسخير الإمكانات غير المستغلة للبيولوجيا البحرية. اكتشف مؤسسونا، وهم فريق من أطباء الجلدية وعلماء الأحياء البحرية، أن أنواعاً معينة من الطحالب تحتوي على مركبات نشطة بيولوجياً قوية يمكنها تحويل البشرة على المستوى الخلوي.",
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
        certificationsDesc: "جميع منتجات ديرموسيان مطورة وفقاً للمعايير الدولية لطب الجلد ومختبرة للسلامة والفعالية.",
        dermatologistTested: "مختبرة من قبل أطباء الجلدية",
        hypoallergenic: "تركيبات مضادة للحساسية",
        crueltyFree: "خالية من القسوة",
        ecoFriendly: "تغليف صديق للبيئة",
        becomePartner: "كوني شريكة لديرموسيان",
        partnerDesc: "انضمي إلى شبكتنا من مراكز التجميل المهنية وقدمي لعميلاتك أفضل تقنيات العناية بالبشرة.",
        registerNow: "سجلي الآن",

        // How to Use Page
        howToUseTitle: "دليل <span>التطبيق الاحترافي</span>",
        howToUseDesc: "اتبعي بروتوكولنا خطوة بخطوة للحصول على أفضل نتائج العلاج",
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
        sunExposureDesc: "ابتعدي عن أشعة الشمس المباشرة لمدة 7 أيام بعد العلاج.",
        noAcids: "لا أحماض نشطة",
        noAcidsDesc: "تجنبي الريتينول و AHA/BHA لمدة 5 أيام قبل وبعد.",
        stayHydrated: "حافظي على الترطيب",
        stayHydratedDesc: "اشربي الكثير من الماء ورطبي بانتظام.",
        treatmentInterval: "الفاصل بين الجلسات",
        treatmentIntervalDesc: "انتظري 2-4 أسابيع بين الجلسات حسب استجابة البشرة.",

        // Articles Page
        faqTitle: "الأسئلة الشائعة",
        articlesTitle: "رؤى خبراء البشرة",
        articlesDesc: "اكتشفي النصائح والأدلة والمعرفة المهنية",
        faq1Q: "كم مرة يمكنني استخدام علاج التقشير؟",
        faq1A: "نوصي بالانتظار 2-4 أسابيع بين الجلسات، حسب حساسية بشرتك واستجابتها للعلاج.",
        faq2Q: "هل العلاج مناسب للبشرة الحساسة؟",
        faq2A: "نعم! البروتوكول اللطيف مصمم خصيصاً للبشرة الحساسة. ابدئي بأقل شدة وزيديها تدريجياً.",
        faq3Q: "متى سأرى النتائج؟",
        faq3A: "يلاحظ العديد من العملاء تحسناً فورياً في ملمس البشرة. للمشاكل العميقة كالتصبغات، عادةً ما تحتاج 3-6 جلسات.",
        faq4Q: "هل يمكنني استخدام المنتجات في المنزل؟",
        faq4A: "منتجات ديرموسيان مصممة للاستخدام المهني في مراكز التجميل المرخصة. للعناية المنزلية، ننصح بواقي الشمس وماسك التهدئة.",

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

        scientificDesc: "اكتشفي المركبات البحرية النشطة التي تجعل بودرة التقشير فعالة بشكل فريد",
        powerfulActives: "مكونات فعالة قوية",

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

        usage_peeling: "امزجي 2 غرام مع محلول الدعم. دلكي لمدة 4-8 دقائق حسب البروتوكول.",
        usage_support: "امزجي مع بودرة التقشير لتشكيل عجينة.",
        usage_mask: "ضعي بعد علاج التقشير. اتركيه لمدة 15-20 دقيقة.",
        usage_sunscreen: "ضعي بسخاء قبل 15 دقيقة من التعرض للشمس.",

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

        loading: "جاري التحميل...",
        backToArticles: "العودة للمقالات",

        // FAQ Page
        faqNav: "الأسئلة الشائعة",
        faqPageTitle: "الأسئلة <span>الشائعة</span>",
        faqPageDesc: "إجابات على الأسئلة الشائعة حول علاجاتنا وبروتوكولاتنا ومنتجاتنا",
        faqCatAll: "جميع الأسئلة",
        faqCatTreatment: "العلاج",
        faqCatAftercare: "بعد العلاج",
        faqCatResults: "النتائج",
        faqCatSafety: "الأمان",
        faq_q1: "هل يمكنني غسل وجهي بعد العلاج؟",
        faq_a1: "لا. وفقاً للبروتوكول، يجب تجنب الماء بشكل صارم لمدة 48 إلى 72 ساعة بعد العلاج. هذا يسمح للبلورات الدقيقة البحرية بالبقاء نشطة وتحقيق أفضل النتائج.",
        faq_a1_warning: "مدة تجنب الماء تختلف حسب البروتوكول: اللطيف (يومان)، المعتدل (4 أيام)، المكثف (5 أيام).",
        faq_q2: "هل سأشعر بألم أو انزعاج؟",
        faq_a2: "يُبلغ معظم العملاء عن إحساس خفيف بالوخز أو الدفء فقط خلال الـ 24 ساعة الأولى. هذا بسبب وجود البلورات الدقيقة (جزيئات طبيعية من الطحالب) المغروسة في الطبقة القرنية. الإجراء عادةً محتمل جيداً دون الحاجة لكريمات التخدير.",
        faq_q3: "متى سأبدأ برؤية النتائج؟",
        faq_a3: "يلاحظ العديد من العملاء تحسناً فورياً في ملمس البشرة وإشراقها. للمشاكل العميقة كالتصبغات والندوب والتجاعيد، عادةً ما تحتاج 3-6 جلسات، مع تحسن ملحوظ بعد كل جلسة.",
        faq_q4: "هل يمكنني استخدام المنتجات في المنزل؟",
        faq_a4: "تقشير ديرموسيان للاستخدام المهني فقط من قبل الأطباء وأخصائيي التجميل وصالونات التجميل. للعناية المنزلية، ننصح بواقي الشمس SPF 50+ وماسك التهدئة للعناية بعد العلاج.",
        faq_q5: "ما أهمية الحماية من الشمس بعد التقشير؟",
        faq_a5: "إنها ضرورية للغاية. بعد جلسة التقشير، تدخل البشرة حالة حساسة وضعيفة للغاية. يتضرر حاجز البشرة مؤقتاً. يجب على العملاء تجنب أشعة الشمس المباشرة، وارتداء قبعة، وإعادة وضع واقي شمس UVA/UVB بدرجة 50+ كل 3 ساعات.",
        faq_q6: "كم عدد الجلسات التي أحتاجها؟",
        faq_a6: "قد يحتاج العملاء من 1 إلى 4 جلسات، بناءً على حالة البشرة وأهداف العلاج. يجب أن تكون الفترة بين الجلسات 4 أسابيع على الأقل، حسب قدرة البشرة على الشفاء.",
        faq_q7: "هل العلاج مناسب لجميع أنواع البشرة؟",
        faq_a7: "العلاج مناسب لمعظم أنواع البشرة، لكن هناك موانع مهمة. العلاج غير مناسب لـ:",
        contra1: "استخدام Isotretinoin خلال الـ 6 أشهر الماضية",
        contra2: "الحمل",
        contra3: "حساسية المأكولات البحرية",
        contra4: "الجلد المجروح أو الجروح المفتوحة",
        contra5: "ميل لتكون الندوب الضخامية أو الكيلويد",
        contra6: "التعرض المفرط للشمس أو عادات التسمير",
        faq_q8: "ماذا أفعل بشأن الجلد المتقشر؟",
        faq_a8: "لا تقومي أبداً بنزع أو سحب الجلد المتقشر. يمكنكِ قص الجلد المتدلي بمقص حواجب أو أظافر معقم. تجنبي الاحتكاك من الوسائد والمناشف واليدين. الجلد الجاف جزء من عملية التقشير ويساعد في تحقيق أفضل النتائج.",
        faq_q9: "ما الذي يجب تجنبه بعد العلاج؟",
        faq_a9_intro: "بعد العلاج، يجب تجنب:",
        avoid1: "الفرك أو الحك أو التقشير اليدوي للبشرة",
        avoid2: "ملامسة الماء لمدة 48-72 ساعة (حسب البروتوكول)",
        avoid3: "وضع أي مكياج",
        avoid4: "التعرض للشمس والحرارة والبخار",
        avoid5: "حمامات السباحة والساونا وغرف البخار لمدة 7 أيام",
        avoid6: "الترطيب الكثيف (الجلد الجاف جزء من العملية)",
        faq_q10: "كيف أستعد للعلاج؟",
        faq_a10_intro: "قبل العلاج:",
        prep1: "تجنبي التعرض المباشر للشمس لمدة 5-7 أيام قبل العلاج",
        prep2: "أوقفي استخدام الريتينول و AHA/BHA والأحماض النشطة الأخرى 5 أيام قبل",
        prep3: "لا تخضعي لإجراءات تجميلية أخرى (بوتوكس، فيلر، ليزر، ميكرونيدلينج) ضمن الفترات الموصى بها",
        prep4: "أخبري الأخصائي عن أي أدوية تتناولينها",
        faqCtaTitle: "لا تزال لديك أسئلة؟",
        faqCtaDesc: "فريقنا هنا لمساعدتك في أي استفسارات إضافية",

        // Care Guide Page
        careGuideNav: "دليل العناية",
        carePageTitle: "العناية قبل وبعد <span>العلاج</span>",
        carePageDesc: "إرشادات أساسية لتعظيم نتائج العلاج وضمان التعافي الآمن",
        prePhaseTitle: "قبل العلاج",
        prePhaseSubtitle: "5-7 أيام قبل موعدك",
        immediatePhaseTitle: "بعد العلاج مباشرة",
        immediatePhaseSubtitle: "أول 24-72 ساعة",
        daysAfterPhaseTitle: "الأيام 3-7",
        daysAfterPhaseSubtitle: "مرحلة التقشر والتعافي",
        preCare1Title: "تجنب التعرض للشمس",
        preCare1Desc: "تجنب التعرض للشمس لمدة 5-7 أيام على الأقل لتقليل خطر فرط التصبغ الالتهابي.",
        preCare2Title: "أوقف المكونات النشطة",
        preCare2Desc: "أوقف استخدام الريتينول وأحماض AHA وBHA والأحماض النشطة الأخرى 5 أيام قبل العلاج لمنع الحساسية المفرطة.",
        preCare3Title: "لا إجراءات أخرى",
        preCare3Desc: "لا تخضع للبوتوكس أو الفيلر أو الليزر أو الميكرونيدلينج أو التقشير الكيميائي ضمن الفترات الموصى بها.",
        preCare4Title: "أفصحي عن الأدوية",
        preCare4Desc: "أخبري الأخصائي عن أي أدوية تتناولينها، خاصة Isotretinoin أو مميعات الدم.",
        immediateCare1Title: "لا ملامسة للماء",
        immediateCare1Desc: "تجنبي ملامسة الماء لمدة 48-72 ساعة حسب شدة البروتوكول. هذا ضروري لتفعيل البلورات.",
        immediateCare2Title: "لا تلمسي أو تفركي",
        immediateCare2Desc: "لا تفركي أو تحكّي أو تقشري البشرة يدوياً. دعي البلورات الدقيقة تعمل بشكل طبيعي.",
        immediateCare3Title: "لا مكياج",
        immediateCare3Desc: "لا تضعي أي منتجات مكياج للمدة المحددة حسب بروتوكولك.",
        immediateCare4Title: "تجنبي الحرارة",
        immediateCare4Desc: "تجنبي التعرض للشمس والساونا وغرف البخار واليوغا الساخنة وأي أنشطة تسبب التعرق.",
        daysCare1Title: "تنظيف لطيف",
        daysCare1Desc: "بعد فترة تجنب الماء، اغسلي بلطف باستخدام غسول جل خفيف متوازن الحموضة. لا مقشرات أو فرك.",
        daysCare2Title: "لا تنزعي الجلد المتقشر",
        daysCare2Desc: "لا تنزعي أو تسحبي الجلد المتقشر أبداً. يمكنكِ قص الجلد المتدلي بمقص معقم فقط.",
        daysCare3Title: "واقي شمس كل 3 ساعات",
        daysCare3Desc: "ضعي واقي شمس SPF 50+ كل 3 ساعات. ارتدي قبعة وتجنبي أشعة الشمس المباشرة لمدة 7 أيام.",
        daysCare4Title: "لا مسابح أو ساونا",
        daysCare4Desc: "تجنبي حمامات السباحة والساونا وغرف البخار لمدة 7 أيام على الأقل بعد العلاج.",
        protocolTableTitle: "تجنب الماء حسب البروتوكول",
        protocolTableDesc: "المدة تختلف حسب شدة العلاج",
        tableProtocol: "البروتوكول",
        tableDuration: "التدليك",
        tableWater: "بدون ماء",
        tableBestFor: "الأفضل لـ",
        twoDays: "يومان",
        fourDays: "4 أيام",
        fiveDays: "5 أيام",
        tableSensitive: "البشرة الحساسة، للمرة الأولى",
        tableNormal: "البشرة العادية/الباهتة",
        tableThick: "البشرة السميكة، الدهنية، المتقدمة بالعمر",
        contraTitle: "موانع الاستعمال المهمة",
        contraDesc: "العلاج غير مناسب للعملاء الذين يعانون من الحالات التالية:",
        careCtaTitle: "مستعدة للعلاج؟",
        careCtaDesc: "تواصلي معنا لحجز موعد علاج ديرموسيان الاحترافي",

        // Skin Concerns Page
        skinConcernsNav: "مشاكل البشرة",
        skinConcernsTitle: "مشاكل البشرة <span>التي نعالجها</span>",
        skinConcernsDesc: "اكتشفي كيف يمكن لتقشير الطحالب معالجة مشاكل بشرتك بشكل طبيعي وفعال",
        catPigmentation: "التصبغات والأضرار",
        catAging: "الشيخوخة والقوام",
        catTexture: "القوام والشوائب",
        concernSunDamage: "البشرة المتضررة من الشمس",
        concernSunDamageDesc: "إصلاح أضرار الأشعة فوق البنفسجية واستعادة إشراق البشرة الطبيعي من خلال التقشير العميق وتجديد الخلايا.",
        concernHyperpigmentation: "فرط التصبغ",
        concernHyperpigmentationDesc: "تلاشي البقع الداكنة وتوحيد لون البشرة من خلال تسريع تجديد الخلايا وعوامل التفتيح.",
        concernScars: "الندوب",
        concernScarsDesc: "تقليل مظهر ندوب حب الشباب وعلامات ما بعد الالتهاب من خلال تجديد الأنسجة العميقة.",
        concernPIH: "علامات ما بعد الالتهاب",
        concernPIHDesc: "معالجة تغير اللون المتبقي بعد حب الشباب أو إصابات الجلد من خلال التقشير المستهدف.",
        concernWrinkles: "الخطوط الدقيقة والتجاعيد",
        concernWrinklesDesc: "تحفيز إنتاج الكولاجين وتقليل مظهر علامات الشيخوخة المبكرة بشكل طبيعي.",
        concernElasticity: "فقدان المرونة",
        concernElasticityDesc: "تعزيز ثبات ومرونة البشرة من خلال تجديد الخلايا العميق وتحفيز الكولاجين.",
        concernSagging: "ترهل البشرة",
        concernSaggingDesc: "شد ورفع البشرة من خلال علاجات مكثفة تعزز تجديد البروتينات الهيكلية.",
        concernDull: "البشرة المتعبة والباهتة",
        concernDullDesc: "إحياء الإشراق والنضارة من خلال إزالة الخلايا الميتة وتعزيز الدورة الدموية.",
        concernStretch: "علامات التمدد",
        concernStretchDesc: "تحسين مظهر علامات التمدد من خلال التقشير العميق وتحفيز الكولاجين.",
        concernPores: "المسام الواسعة",
        concernPoresDesc: "تنظيف عميق وتنقية المسام مع تحسين ملمس البشرة العام ونعومتها.",
        concernKeratosis: "التقرن الشعري",
        concernKeratosisDesc: "تنعيم الملمس الخشن والمتعرج الناتج عن تراكم الكيراتين من خلال التقشير الفيزيائي العميق.",
        concernAcne: "البشرة المعرضة لحب الشباب",
        concernAcneDesc: "تنظيف البشرة المزدحمة وتقليل البثور بخصائص مطهرة وتنظيف المسام.",
        concernImpure: "البشرة الدهنية والشوائب",
        concernImpureDesc: "موازنة إفراز الزيوت وإزالة الشوائب للحصول على بشرة أكثر نقاءً وصحة.",
        concernsCtaTitle: "مستعدة لتحويل بشرتك؟",
        concernsCtaDesc: "جدي أخصائية ديرموسيان معتمدة بالقرب منك وابدئي رحلتك نحو بشرة أكثر صحة",
        findProfessional: "جدي أخصائية",

        // Ingredients Page
        ingredientsNav: "المكونات",
        ingredientsTitle: "علم <span>الجمال الطبيعي</span>",
        ingredientsDesc: "اكتشفي المكونات البحرية والنباتية القوية التي تجعل علاجات ديرموسيان فعالة",
        catMarineAlgae: "قوة الطحالب البحرية",
        catMarineAlgaeDesc: "جوهر بودرة التقشير - بلورات بحرية طبيعية 100%",
        catBotanical: "المستخلصات النباتية",
        catBotanicalDesc: "مستخلصات نباتية مهدئة وعلاجية في بودرة التقشير",
        catSupportSolution: "مكونات محلول الدعم",
        catSupportSolutionDesc: "مركبات نشطة لتفعيل وتعزيز علاج التقشير",
        catCalmingMask: "مكونات ماسك التهدئة",
        catCalmingMaskDesc: "مكونات مهدئة ومجددة للعناية بعد العلاج",
        catSunscreen: "مكونات واقي الشمس",
        catSunscreenDesc: "حماية وتفتيح للبشرة بعد العلاج",
        ingChlorophyll: "الكلوروفيل",
        ingChlorophyllDesc: "الصبغة الخضراء في الطحالب التي توفر حماية قوية من الأشعة فوق البنفسجية وفوائد مقاومة الشيخوخة.",
        ingPolysaccharide: "السكريات المتعددة",
        ingPolysaccharideDesc: "مركبات ترطيب طبيعية تحبس الرطوبة وتخلق حاجزاً واقياً على سطح الجلد.",
        ingAminoAcids: "الأحماض الأمينية",
        ingAminoAcidsDesc: "لبنات بناء أساسية تحفز إنتاج الكولاجين وتصلح أنسجة الجلد التالفة.",
        ingCarotenoids: "الكاروتينويدات",
        ingCarotenoidsDesc: "مضادات أكسدة قوية تحمي البشرة من الإجهاد البيئي.",
        ingCalendula: "مستخلص الكالندولا",
        ingCalendulaDesc: "معروف بخصائصه العلاجية القوية ومضادات الالتهاب. يهدئ البشرة المتهيجة ويسرع التعافي.",
        ingChamomile: "مستخلص البابونج",
        ingChamomileDesc: "مستخلص لطيف وفعال يقلل الاحمرار ويهدئ الالتهاب ويلطف البشرة الحساسة.",
        ingMelissa: "مستخلص المليسة",
        ingMelissaDesc: "يعزز إنتاج الكولاجين ويساعد على تقليل الخطوط الدقيقة والتجاعيد.",
        ingDaisy: "مستخلص زهرة الأقحوان",
        ingDaisyDesc: "يقلل البقع الداكنة ويوحد لون البشرة مع توفير حماية مطهرة.",
        ingGlycerin: "الجلسرين",
        ingGlycerinDesc: "مرطب عميق يوفر ترطيباً مكثفاً ويحضر البشرة لامتصاص العلاج.",
        ingCucumber: "مستخلص الخيار",
        ingCucumberDesc: "غني بالفيتامينات (C, B1, B2, B5, B6) والمعادن. يرطب وينعش ويقلل الانتفاخ.",
        ingAloe: "الصبار",
        ingAloeDesc: "المكون المهدئ الأمثل. يهدئ الالتهاب ويرطب ويعزز شفاء وتجديد البشرة.",
        ingHyaluronate: "هيالورونات الصوديوم",
        ingHyaluronateDesc: "شكل من حمض الهيالورونيك يرطب بعمق ويعزز المرونة وينفخ الخطوط الدقيقة.",
        ingArbutin: "الأربوتين",
        ingArbutinDesc: "مفتح طبيعي للبشرة يثبط إنتاج الميلانين ويقلل البقع الداكنة بأمان.",
        ingVitaminE: "فيتامين E",
        ingVitaminEDesc: "مضاد أكسدة قوي يحمي من الجذور الحرة ويغذي البشرة ويدعم عملية الشفاء.",
        ingCassia: "مستخلص كاسيا",
        ingCassiaDesc: "مستخلص نباتي استوائي يهدئ البشرة ويدافع ضد الأضرار البيئية.",
        benefitUV: "حماية من UV",
        benefitAntiAging: "مقاوم للشيخوخة",
        benefitRenewal: "تجديد الخلايا",
        benefitHydration: "ترطيب عميق",
        benefitBarrier: "حاجز البشرة",
        benefitCollagen: "تعزيز الكولاجين",
        benefitRepair: "إصلاح البشرة",
        benefitAntioxidant: "مضاد أكسدة",
        benefitProtection: "حماية",
        benefitHealing: "علاجي",
        benefitSoothing: "مهدئ",
        benefitAntiInflam: "مضاد التهاب",
        benefitCalming: "ملطف",
        benefitRedness: "يقلل الاحمرار",
        benefitWrinkles: "مضاد تجاعيد",
        benefitBrightening: "تفتيح",
        benefitEvenTone: "توحيد اللون",
        benefitAntiseptic: "مطهر",
        benefitSoftening: "تنعيم",
        benefitVitamins: "غني بالفيتامينات",
        benefitRefreshing: "منعش",
        benefitDePuff: "مضاد انتفاخ",
        benefitRegeneration: "تجديد",
        benefitPlumping: "نفخ",
        benefitElasticity: "مرونة",
        benefitSpots: "يخفف البقع",
        benefitNourishing: "مغذي",
        benefitDefense: "دفاع",
        philosophyTitle: "فلسفتنا الطبيعية",
        phil100Natural: "نباتي 100%",
        phil100NaturalDesc: "جميع المكونات من الطحالب والأعشاب والزهور",
        philMicrobiome: "آمن للميكروبيوم",
        philMicrobiomeDesc: "يحافظ على حاجز البشرة والفلورا الطبيعية",
        philNoChemicals: "بدون مواد كيميائية قاسية",
        philNoChemicalsDesc: "بدون أحماض صناعية أو إضافات ضارة",
        philFastHealing: "تعافٍ سريع",
        philFastHealingDesc: "وقت الشفاء مخفض إلى 5 أيام فقط",

        // Product Pages New Content
        concernsTreated: "مشاكل البشرة التي نعالجها",
        scientificFormula: "التركيبة العلمية",
        viewAllConcerns: "عرض جميع مشاكل البشرة",
        viewAllIngredients: "عرض جميع المكونات",
        featuredIngredient: "المكون المميز",
        featuredIngredients: "المكونات المميزة",
        whySunscreen: "لماذا واقي الشمس بعد التقشير؟",
        protectNewSkin: "حماية خلايا البشرة الجديدة",
        preventPigment: "منع التصبغات",
        maintainResults: "الحفاظ على نتائج العلاج",
        dailyEssential: "ضرورة يومية",
        chlorophyllBrief: "حماية UV ومكافحة الشيخوخة",
        polysaccharideBrief: "ترطيب عميق وحاجز حماية",
        aminoAcidsBrief: "تحفيز الكولاجين والإصلاح",
        carotenoidsBrief: "حماية مضادة للأكسدة",
        academyNav: "الأكاديمية",

        // Training Page
        trainingTitle: "برنامج التدريب <span>الاحترافي</span>",
        trainingDesc: "أتقني فن التقشير بالطحالب مع برنامج الشهادة الاحترافي الشامل لدينا",
        requestTraining: "طلب تدريب",
        disclaimerTitle: "للاستخدام الاحترافي فقط",
        disclaimerText: "صُممت منتجات ديرموسيان حصرياً لخبراء التجميل المدربين. التدريب المناسب مطلوب لضمان علاجات آمنة وفعالة. الاستخدام غير المدرب قد يؤدي إلى نتائج عكسية.",
        whyTrainingTitle: "لماذا <span>تحصلين على شهادة؟</span>",
        certBenefit1: "شهادة رسمية",
        certBenefit1Desc: "احصلي على شهادة ممارس ديرموسيان معتمدة",
        certBenefit2: "معرفة شاملة",
        certBenefit2Desc: "تعلمي العلم وراء تقشير الطحالب وبيولوجيا البشرة",
        certBenefit3: "ممارسة عملية",
        certBenefit3Desc: "جلسات عملية مع علاجات وتقنيات حقيقية",
        certBenefit4: "دعم مستمر",
        certBenefit4Desc: "وصول لدعم الخبراء والتعليم المستمر",
        programTitle: "وحدات <span>برنامج التدريب</span>",
        module1Title: "معرفة المنتج",
        module1Item1: "فهم تركيبة الطحالب",
        module1Item2: "المكونات النشطة والفوائد",
        module1Item3: "نظرة عامة على خط المنتجات",
        module1Item4: "التخزين والتعامل",
        module2Title: "بروتوكولات العلاج",
        module2Item1: "البروتوكولات اللطيفة والمتوسطة والمكثفة",
        module2Item2: "وقت التفعيل (15 دقيقة)",
        module2Item3: "المباعدة بين الجلسات (4 أسابيع كحد أدنى)",
        module2Item4: "تخطيط الجلسات (1-4 جلسات)",
        module3Title: "تقييم العميل",
        module3Item1: "تحليل نوع البشرة",
        module3Item2: "تحديد موانع الاستعمال",
        module3Item3: "تخصيص العلاج",
        module3Item4: "إدارة التوقعات",
        module4Title: "الرعاية اللاحقة والسلامة",
        module4Item1: "تعليمات العناية بعد العلاج",
        module4Item2: "الجدول الزمني المتوقع للشفاء",
        module4Item3: "التعامل مع ردود الفعل العكسية",
        module4Item4: "أهمية الحماية من الشمس",
        requestFormTitle: "طلب تدريب",
        requestFormDesc: "املئي النموذج أدناه وسنتصل بكِ مع خيارات التدريب في منطقتك",
        formName: "الاسم الكامل *",
        formEmail: "البريد الإلكتروني *",
        formPhone: "رقم الهاتف *",
        formCountry: "الدولة *",
        selectCountry: "اختر الدولة",
        formBusiness: "اسم العمل التجاري",
        formExperience: "الخبرة المهنية",
        selectExperience: "اختر مستوى الخبرة",
        exp1to3: "1-3 سنوات",
        exp3to5: "3-5 سنوات",
        exp5to10: "5-10 سنوات",
        exp10plus: "+10 سنوات",
        formMessage: "ملاحظات إضافية",
        submitRequest: "إرسال الطلب",
        certTitle: "ممارس معتمد من ديرموسيان",
        certDesc: "عند الإكمال بنجاح، ستحصلين على شهادة رسمية وسيتم إدراجك كممارس معتمد لديرموسيان.",

        // Results Gallery
        galleryTitle: "نتائج حقيقية، <span>ثقة حقيقية</span>",
        galleryDesc: "اكتشفي قوة التحول لنظام تقشير الطحالب من ديرموسيان من خلال حالاتنا الموثقة.",
        filterAll: "جميع النتائج",
        filterAcne: "حب الشباب والندوب",
        filterPigmentation: "التصبغات",
        filterAging: "مكافحة الشيخوخة",
        filterTexture: "المسام والملمس",
        tagAcneScars: "ندوب حب الشباب",
        tagPigmentation: "فرط التصبغ",
        tagAging: "الخطوط الدقيقة",
        tagAcne: "حب الشباب النشط",
        tagTexture: "المسام الواسعة",
        resultTitle1: "علاج الندوب العميقة",
        resultDesc1: "تحسن ملحوظ في ملمس الندوب العميقة والمحفرة.",
        resultTitle2: "تقليل الكلف",
        resultDesc2: "انخفاض واضح في التصبغات الهرمونية وبقع الشمس.",
        resultTitle3: "شد البشرة",
        resultDesc3: "تقليل الخطوط الدقيقة حول العينين وتحسين مرونة الجلد.",
        resultTitle4: "تصفية حب الشباب",
        resultDesc4: "جفاف سريع للالتهابات النشطة وتقليل آثار الحبوب.",
        resultTitle5: "تصغير المسام",
        resultDesc5: "تحسين ملمس البشرة وتقليل ظهور المسام.",
        galleryCtaTitle: "جاهزة لتحقيق هذه النتائج؟",
        galleryCtaDesc: "انضمي لآلاف المحترفين الذين يقدمون علاجات ديرموسيان.",
        registerNow: "سجلي الآن",
        resultsNav: "معرض النتائج",

        // Social Responsibility
        ourResponsibility: "مسؤوليتنا",
        responsibilityDesc: "ملتزمون تجاه الكوكب، ومجتمعنا، والجمال الأخلاقي.",
        sustainability: "الاستدامة",
        sustainabilityDesc: "تقليل بصمتنا الكربونية من خلال التغليف الصديق للبيئة والتصنيع المسؤول.",
        ethicalSourcing: "المصادر الأخلاقية",
        ethicalSourcingDesc: "حصاد الطحالب البحرية بشكل مستدام للحفاظ على التنوع البيولوجي للمحيطات للأجيال القادمة.",
        communitySupport: "دعم المجتمع",
        communitySupportDesc: "تمكين خبراء التجميل بالتعليم ودعم ممارسات التجارة العادلة عالمياً."
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

        loading: "Chargement...",
        backToArticles: "Retour aux Articles",

        // FAQ Page
        faqNav: "FAQ",
        faqPageTitle: "Questions <span>Fréquentes</span>",
        faqPageDesc: "Trouvez des réponses aux questions courantes sur nos traitements, protocoles et produits",
        faqCatAll: "Toutes les Questions",
        faqCatTreatment: "Traitement",
        faqCatAftercare: "Après-soin",
        faqCatResults: "Résultats",
        faqCatSafety: "Sécurité",
        faq_q1: "Puis-je me laver le visage après le traitement?",
        faq_a1: "Non. Selon le protocole, l'eau doit être strictement évitée pendant 48 à 72 heures après le traitement. Cela permet aux microcristaux marins de rester actifs et d'obtenir des résultats optimaux.",
        faq_a1_warning: "La durée d'évitement de l'eau varie selon le protocole: Doux (2 jours), Modéré (4 jours), Intensif (5 jours).",
        faq_q2: "Vais-je ressentir de la douleur ou de l'inconfort?",
        faq_a2: "La plupart des clients ne signalent qu'une légère sensation de picotement ou de chaleur dans les 24 premières heures. Cela est dû à la présence de micro-cristaux (particules naturelles d'algues) intégrés dans la couche cornée. La procédure est généralement bien tolérée sans crèmes anesthésiantes.",
        faq_q3: "Quand vais-je commencer à voir des résultats?",
        faq_a3: "De nombreux clients voient une amélioration immédiate de la texture et de l'éclat de la peau. Pour des problèmes plus profonds comme la pigmentation, les cicatrices ou les rides, 3 à 6 séances sont généralement nécessaires, avec une amélioration visible après chaque séance.",
        faq_q4: "Puis-je utiliser les produits à la maison?",
        faq_a4: "Le Peeling Dermocean est réservé à un usage professionnel par les médecins, cosmétologues et salons de beauté uniquement. Pour les soins à domicile, nous recommandons notre Écran Solaire SPF 50+ et notre Masque Apaisant.",
        faq_q5: "Quelle est l'importance de la protection solaire après le peeling?",
        faq_a5: "C'est crucial. Après une séance de peeling, la peau entre dans un état très sensible et vulnérable. L'intégrité de la barrière cutanée est temporairement compromise. Les clients doivent éviter la lumière directe du soleil, porter un chapeau et réappliquer un écran solaire UVA/UVB SPF 50+ toutes les 3 heures.",
        faq_q6: "Combien de séances ai-je besoin?",
        faq_a6: "Les clients peuvent avoir besoin de 1 à 4 séances, selon l'état de la peau et les objectifs du traitement. Les séances doivent être espacées d'au moins 4 semaines, selon la capacité de guérison de la peau.",
        faq_q7: "Le traitement convient-il à tous les types de peau?",
        faq_a7: "Le traitement convient à la plupart des types de peau, mais il existe des contre-indications importantes. Le traitement N'EST PAS adapté pour:",
        contra1: "Utilisation d'Isotrétinoïne au cours des 6 derniers mois",
        contra2: "Grossesse",
        contra3: "Allergie aux fruits de mer/crustacés",
        contra4: "Peau blessée ou plaies ouvertes",
        contra5: "Tendance aux cicatrices chéloïdes ou hypertrophiques",
        contra6: "Exposition excessive au soleil ou habitudes de bronzage",
        faq_q8: "Que dois-je faire concernant la peau qui pèle?",
        faq_a8: "Ne jamais arracher ou tirer sur la peau qui pèle. Vous pouvez couper la peau détachée avec des ciseaux à sourcils ou à manucure désinfectés. Évitez le frottement des oreillers, serviettes ou mains. La peau sèche fait partie du processus de peeling et aide à obtenir des résultats optimaux.",
        faq_q9: "Que dois-je éviter après le traitement?",
        faq_a9_intro: "Après le traitement, vous devez éviter:",
        avoid1: "Frotter, gratter ou exfolier manuellement la peau",
        avoid2: "Contact avec l'eau pendant 48-72 heures (selon le protocole)",
        avoid3: "Appliquer du maquillage",
        avoid4: "Exposition au soleil, à la chaleur et à la vapeur",
        avoid5: "Piscines, saunas ou hammams pendant 7 jours",
        avoid6: "Hydratation excessive (la peau sèche fait partie du processus)",
        faq_q10: "Comment dois-je me préparer pour le traitement?",
        faq_a10_intro: "Avant le traitement:",
        prep1: "Évitez l'exposition directe au soleil 5-7 jours avant",
        prep2: "Arrêtez le rétinol, AHA/BHA et autres acides actifs 5 jours avant",
        prep3: "Ne subissez pas d'autres procédures cosmétiques (Botox, fillers, laser, microneedling) dans les délais recommandés",
        prep4: "Informez votre spécialiste de tous les médicaments que vous prenez",
        faqCtaTitle: "Vous avez encore des questions?",
        faqCtaDesc: "Notre équipe est là pour vous aider avec toutes vos questions supplémentaires",

        // Care Guide Page
        careGuideNav: "Guide de Soins",
        carePageTitle: "Soins Avant et Après <span>le Traitement</span>",
        carePageDesc: "Directives essentielles pour maximiser les résultats de votre traitement et assurer une récupération sûre",
        prePhaseTitle: "Avant le Traitement",
        prePhaseSubtitle: "5-7 jours avant votre rendez-vous",
        immediatePhaseTitle: "Immédiatement Après",
        immediatePhaseSubtitle: "Premières 24-72 heures",
        daysAfterPhaseTitle: "Jours 3-7",
        daysAfterPhaseSubtitle: "Phase de peeling et récupération",
        preCare1Title: "Évitez l'Exposition au Soleil",
        preCare1Desc: "Évitez l'exposition au soleil pendant au moins 5-7 jours pour minimiser le risque d'hyperpigmentation post-inflammatoire.",
        preCare2Title: "Arrêtez les Ingrédients Actifs",
        preCare2Desc: "Arrêtez le rétinol, AHA, BHA et autres acides actifs 5 jours avant le traitement pour éviter la sur-sensibilisation.",
        preCare3Title: "Pas d'Autres Procédures",
        preCare3Desc: "Ne subissez pas de Botox, fillers, laser, microneedling ou peelings chimiques dans les délais recommandés.",
        preCare4Title: "Déclarez Vos Médicaments",
        preCare4Desc: "Informez votre spécialiste de tous les médicaments que vous prenez, surtout l'isotrétinoïne ou les anticoagulants.",
        immediateCare1Title: "Pas de Contact avec l'Eau",
        immediateCare1Desc: "Évitez le contact avec l'eau pendant 48-72 heures selon l'intensité du protocole. C'est crucial pour l'activation des cristaux.",
        immediateCare2Title: "Ne Touchez Pas ou Frottez",
        immediateCare2Desc: "Ne frottez pas, ne grattez pas ou n'exfoliez pas manuellement la peau. Laissez les microcristaux agir naturellement.",
        immediateCare3Title: "Pas de Maquillage",
        immediateCare3Desc: "N'appliquez aucun produit de maquillage pendant la durée spécifiée par votre protocole.",
        immediateCare4Title: "Évitez la Chaleur",
        immediateCare4Desc: "Évitez l'exposition au soleil, saunas, hammams, yoga chaud et toute activité qui provoque la transpiration.",
        daysCare1Title: "Nettoyage Doux",
        daysCare1Desc: "Après la période sans eau, lavez doucement avec un nettoyant gel doux au pH équilibré. Pas de gommages ni d'exfoliants.",
        daysCare2Title: "Ne Décollez Pas la Peau",
        daysCare2Desc: "Ne jamais arracher ou tirer sur la peau qui pèle. Vous pouvez couper la peau détachée avec des ciseaux désinfectés uniquement.",
        daysCare3Title: "Crème Solaire Toutes les 3 Heures",
        daysCare3Desc: "Appliquez un écran solaire SPF 50+ toutes les 3 heures. Portez un chapeau et évitez la lumière directe du soleil pendant 7 jours.",
        daysCare4Title: "Pas de Piscines ni Saunas",
        daysCare4Desc: "Évitez les piscines, saunas ou hammams pendant au moins 7 jours après le traitement.",
        protocolTableTitle: "Évitement de l'Eau par Protocole",
        protocolTableDesc: "La durée varie selon l'intensité de votre traitement",
        tableProtocol: "Protocole",
        tableDuration: "Massage",
        tableWater: "Sans Eau",
        tableBestFor: "Idéal Pour",
        twoDays: "2 jours",
        fourDays: "4 jours",
        fiveDays: "5 jours",
        tableSensitive: "Peaux sensibles, débutants",
        tableNormal: "Peaux normales/ternes",
        tableThick: "Peaux épaisses, grasses, vieillissantes",
        contraTitle: "Contre-indications Importantes",
        contraDesc: "Le traitement N'EST PAS adapté aux clients présentant les conditions suivantes:",
        careCtaTitle: "Prêt pour Votre Traitement?",
        careCtaDesc: "Contactez-nous pour planifier votre traitement professionnel Dermocean",

        // Skin Concerns Page
        skinConcernsNav: "Problèmes de Peau",
        skinConcernsTitle: "Problèmes de Peau <span>Que Nous Traitons</span>",
        skinConcernsDesc: "Découvrez comment le peeling aux algues peut traiter vos problèmes de peau naturellement et efficacement",
        catPigmentation: "Pigmentation et Dommages",
        catAging: "Vieillissement et Texture",
        catTexture: "Texture et Impuretés",
        concernSunDamage: "Peau Endommagée par le Soleil",
        concernSunDamageDesc: "Réparez les dommages UV et restaurez l'éclat naturel de la peau grâce à une exfoliation profonde et au renouvellement cellulaire.",
        concernHyperpigmentation: "Hyperpigmentation",
        concernHyperpigmentationDesc: "Estompez les taches sombres et uniformisez le teint grâce à un renouvellement cellulaire accéléré.",
        concernScars: "Cicatrices",
        concernScarsDesc: "Minimisez l'apparence des cicatrices d'acné et des marques post-inflammatoires.",
        concernPIH: "Marques Post-Inflammatoires",
        concernPIHDesc: "Traitez la décoloration laissée après l'acné ou les blessures cutanées.",
        concernWrinkles: "Ridules et Rides",
        concernWrinklesDesc: "Stimulez la production de collagène et réduisez les signes précoces du vieillissement.",
        concernElasticity: "Perte d'Élasticité",
        concernElasticityDesc: "Renforcez la fermeté et la résilience de la peau grâce à la régénération cellulaire.",
        concernSagging: "Peau Affaissée",
        concernSaggingDesc: "Raffermissez et liftez la peau grâce à des traitements intensifs.",
        concernDull: "Teint Terne et Fatigué",
        concernDullDesc: "Ravivez l'éclat en éliminant les cellules mortes et en stimulant la circulation.",
        concernStretch: "Vergetures",
        concernStretchDesc: "Améliorez l'apparence des vergetures grâce à l'exfoliation profonde.",
        concernPores: "Pores Dilatés",
        concernPoresDesc: "Nettoyez en profondeur et affinez les pores.",
        concernKeratosis: "Kératose Pilaire",
        concernKeratosisDesc: "Lissez la texture rugueuse causée par l'accumulation de kératine.",
        concernAcne: "Peau Acnéique",
        concernAcneDesc: "Nettoyez la peau congestionnée et réduisez les éruptions.",
        concernImpure: "Peau Grasse et Impure",
        concernImpureDesc: "Équilibrez la production de sébum pour une peau plus saine.",
        concernsCtaTitle: "Prête à Transformer Votre Peau?",
        concernsCtaDesc: "Trouvez une professionnelle Dermocean certifiée près de chez vous",
        findProfessional: "Trouver une Professionnelle",

        // Ingredients Page (French - Abbreviated)
        ingredientsNav: "Ingrédients",
        ingredientsTitle: "La Science de la <span>Beauté Naturelle</span>",
        ingredientsDesc: "Découvrez les ingrédients marins et botaniques qui rendent les traitements Dermocean efficaces",
        catMarineAlgae: "Pouvoir des Algues Marines",
        catMarineAlgaeDesc: "Le cœur de notre poudre exfoliante - microcristaux marins 100% naturels",
        catBotanical: "Extraits Botaniques",
        catBotanicalDesc: "Extraits végétaux apaisants et curatifs",
        catSupportSolution: "Actifs Solution Support",
        catSupportSolutionDesc: "Composés bioactifs qui activent le traitement",
        catCalmingMask: "Actifs Masque Apaisant",
        catCalmingMaskDesc: "Ingrédients apaisants pour les soins post-traitement",
        catSunscreen: "Actifs Écran Solaire",
        catSunscreenDesc: "Protection et éclaircissement post-traitement",
        ingChlorophyll: "Chlorophylle",
        ingChlorophyllDesc: "Pigment vert offrant protection UV et anti-âge.",
        ingPolysaccharide: "Polysaccharides",
        ingPolysaccharideDesc: "Hydratants naturels créant une barrière protectrice.",
        ingAminoAcids: "Acides Aminés",
        ingAminoAcidsDesc: "Stimulent le collagène et réparent les tissus.",
        ingCarotenoids: "Caroténoïdes",
        ingCarotenoidsDesc: "Antioxydants protégeant du stress environnemental.",
        ingCalendula: "Extrait de Calendula",
        ingCalendulaDesc: "Propriétés curatives et anti-inflammatoires.",
        ingChamomile: "Extrait de Camomille",
        ingChamomileDesc: "Réduit les rougeurs et calme l'inflammation.",
        ingMelissa: "Extrait de Mélisse",
        ingMelissaDesc: "Booste le collagène et réduit les rides.",
        ingDaisy: "Extrait de Pâquerette",
        ingDaisyDesc: "Réduit les taches et unifie le teint.",
        ingGlycerin: "Glycérine",
        ingGlycerinDesc: "Humectant qui hydrate en profondeur.",
        ingCucumber: "Extrait de Concombre",
        ingCucumberDesc: "Riche en vitamines, hydrate et rafraîchit.",
        ingAloe: "Aloe Vera",
        ingAloeDesc: "Apaise l'inflammation et favorise la guérison.",
        ingHyaluronate: "Hyaluronate de Sodium",
        ingHyaluronateDesc: "Hydrate et repulpe les ridules.",
        ingArbutin: "Arbutine",
        ingArbutinDesc: "Éclaircissant naturel réduisant les taches.",
        ingVitaminE: "Tocophérol (Vitamine E)",
        ingVitaminEDesc: "Antioxydant nourrissant et protecteur.",
        ingCassia: "Extrait de Cassia Alata",
        ingCassiaDesc: "Apaise et protège des dommages environnementaux.",
        philosophyTitle: "Notre Philosophie Naturelle",
        phil100Natural: "100% Botanique",
        phil100NaturalDesc: "Ingrédients d'algues, herbes et fleurs",
        philMicrobiome: "Microbiome Sûr",
        philMicrobiomeDesc: "Préserve la barrière cutanée",
        philNoChemicals: "Sans Produits Chimiques",
        philNoChemicalsDesc: "Sans acides synthétiques",
        philFastHealing: "Récupération Rapide",
        philFastHealingDesc: "Guérison réduite à 5 jours",

        // Results Gallery
        galleryTitle: "Vrais Résultats, <span>Vraie Confiance</span>",
        galleryDesc: "Explorez le pouvoir transformateur du système de peeling aux algues Dermocéan à travers nos études de cas vérifiées.",
        filterAll: "Tous les Résultats",
        filterAcne: "Acné et Cicatrices",
        filterPigmentation: "Pigmentation",
        filterAging: "Anti-Âge",
        filterTexture: "Pores et Texture",
        tagAcneScars: "Cicatrices d'Acné",
        tagPigmentation: "Hyperpigmentation",
        tagAging: "Ridules",
        tagAcne: "Acné Active",
        tagTexture: "Pores Dilatés",
        resultTitle1: "Révision des Cicatrices Profondes",
        resultDesc1: "Amélioration significative de la texture des cicatrices ondulées et pic à glace.",
        resultTitle2: "Réduction du Melasma",
        resultDesc2: "Réduction nette de la pigmentation hormonale et des taches solaires.",
        resultTitle3: "Raffermissement de la Peau",
        resultDesc3: "Réduction des ridules autour des yeux et amélioration de l'élasticité de la peau.",
        resultTitle4: "Disparition de l'Acné",
        resultDesc4: "Séchage rapide de l'inflammation active et réduction des marques post-acné.",
        resultTitle5: "Minimisation des Pores",
        resultDesc5: "Texture de peau affinée et visibilité des pores minimisée.",
        galleryCtaTitle: "Prêt à Obtenir Ces Résultats ?",
        galleryCtaDesc: "Rejoignez des milliers de professionnels proposant des traitements Dermocéan.",
        resultsNav: "Galerie de Résultats",

        // Social Responsibility
        ourResponsibility: "Notre Responsabilité",
        responsibilityDesc: "Engagés envers la planète, notre équipe et la beauté éthique.",
        sustainability: "Durabilité",
        sustainabilityDesc: "Réduire notre empreinte carbone grâce à des emballages écologiques et une fabrication responsable.",
        ethicalSourcing: "Approvisionnement Éthique",
        ethicalSourcingDesc: "Récolte durable des algues marines pour préserver la biodiversité océanique.",
        communitySupport: "Soutien Communautaire",
        communitySupportDesc: "Autonomiser les esthéticiennes par l'éducation et soutenir les pratiques de commerce équitable."
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

        loading: "Yükleniyor...",
        backToArticles: "Makalelere Dön",

        // FAQ Page
        faqNav: "SSS",
        faqPageTitle: "Sıkça Sorulan <span>Sorular</span>",
        faqPageDesc: "Tedavilerimiz, protokollerimiz ve ürünlerimiz hakkında sık sorulan sorulara yanıtlar bulun",
        faqCatAll: "Tüm Sorular",
        faqCatTreatment: "Tedavi",
        faqCatAftercare: "Bakım Sonrası",
        faqCatResults: "Sonuçlar",
        faqCatSafety: "Güvenlik",
        faq_q1: "Tedaviden sonra yüzümü yıkayabilir miyim?",
        faq_a1: "Hayır. Protokole göre, tedaviden sonra 48 ila 72 saat boyunca suyla temastan kesinlikle kaçınılmalıdır. Bu, deniz mikrokristallerinin aktif kalmasını ve optimal sonuçlar elde edilmesini sağlar.",
        faq_a1_warning: "Su temasından kaçınma süresi protokole göre değişir: Hafif (2 gün), Orta (4 gün), Yoğun (5 gün).",
        faq_q2: "Ağrı veya rahatsızlık hissedecek miyim?",
        faq_a2: "Çoğu müşteri ilk 24 saat içinde sadece hafif bir karıncalanma veya ısınma hissi bildirmektedir. Bu, stratum korneumda gömülü mikro kristallerin (doğal yosun bazlı parçacıkların) varlığından kaynaklanır. Prosedür genellikle uyuşturucu kremlere gerek kalmadan iyi tolere edilir.",
        faq_q3: "Ne zaman sonuç görmeye başlayacağım?",
        faq_a3: "Birçok müşteri cilt dokusunda ve parlaklığında anında iyileşme görür. Pigmentasyon, yara izleri veya kırışıklıklar gibi daha derin sorunlar için genellikle 3-6 seans gerekir, her seanstan sonra gözle görülür iyileşme olur.",
        faq_q4: "Ürünleri evde kullanabilir miyim?",
        faq_a4: "Dermocean Peeling sadece doktorlar, kozmetolojistler ve güzellik salonları tarafından profesyonel kullanım içindir. Evde bakım için SPF 50+ Güneş Kremimizi ve Yatıştırıcı Maskemizi öneriyoruz.",
        faq_q5: "Peelingden sonra güneş koruması ne kadar önemli?",
        faq_a5: "Çok önemli. Peeling seansından sonra cilt çok hassas ve savunmasız bir duruma girer. Cilt bariyerinin bütünlüğü geçici olarak tehlikeye girer. Müşteriler doğrudan güneş ışığından kaçınmalı, şapka takmalı ve 3 saatte bir UVA/UVB SPF 50+ güneş kremi yeniden uygulamalıdır.",
        faq_q6: "Kaç seansa ihtiyacım var?",
        faq_a6: "Müşteriler cilt durumuna ve tedavi hedeflerine bağlı olarak 1 ila 4 seansa ihtiyaç duyabilir. Seanslar, cildin iyileşme kapasitesine bağlı olarak en az 4 hafta arayla yapılmalıdır.",
        faq_q7: "Tedavi tüm cilt tipleri için uygun mu?",
        faq_a7: "Tedavi çoğu cilt tipi için uygundur, ancak önemli kontrendikasyonlar vardır. Tedavi şunlar için uygun DEĞİLDİR:",
        contra1: "Son 6 ayda Isotretinoin kullanımı",
        contra2: "Hamilelik",
        contra3: "Deniz ürünleri/kabuklu deniz ürünleri alerjisi",
        contra4: "Yaralı cilt veya açık yaralar",
        contra5: "Keloid veya hipertrofik yara izi eğilimi",
        contra6: "Aşırı güneşe maruz kalma veya bronzlaşma alışkanlıkları",
        faq_q8: "Soyulan cilt hakkında ne yapmalıyım?",
        faq_a8: "Soyulan cildi asla koparın veya çekmeyin. Gevşek cildi sterilize edilmiş kaş veya manikür makasıyla kesebilirsiniz. Yastıklardan, havlulardan veya ellerden sürtünmeden kaçının. Kuru cilt peeling sürecinin bir parçasıdır ve optimal sonuçlar elde edilmesine yardımcı olur.",
        faq_q9: "Tedaviden sonra nelerden kaçınmalıyım?",
        faq_a9_intro: "Tedaviden sonra şunlardan kaçınmalısınız:",
        avoid1: "Cildi ovalama, kaşıma veya manuel eksfoliasyon",
        avoid2: "48-72 saat su teması (protokole göre)",
        avoid3: "Herhangi bir makyaj uygulama",
        avoid4: "Güneşe, sıcağa ve buhara maruz kalma",
        avoid5: "7 gün boyunca yüzme havuzları, saunalar veya buhar odaları",
        avoid6: "Aşırı nemlendirme (kuru cilt sürecin bir parçasıdır)",
        faq_q10: "Tedaviye nasıl hazırlanmalıyım?",
        faq_a10_intro: "Tedaviden önce:",
        prep1: "5-7 gün öncesinden doğrudan güneşe maruz kalmaktan kaçının",
        prep2: "5 gün önce retinol, AHA/BHA ve diğer aktif asitleri bırakın",
        prep3: "Önerilen süreler içinde başka kozmetik prosedürler (Botox, dolgu, lazer, microneedling) yaptırmayın",
        prep4: "Uzmanınızı aldığınız tüm ilaçlar hakkında bilgilendirin",
        faqCtaTitle: "Hala sorularınız mı var?",
        faqCtaDesc: "Ekibimiz ek sorularınızda size yardımcı olmak için burada",

        // Care Guide Page
        careGuideNav: "Bakım Rehberi",
        carePageTitle: "Tedavi Öncesi ve Sonrası <span>Bakım</span>",
        carePageDesc: "Tedavi sonuçlarınızı maksimize etmek ve güvenli iyileşme sağlamak için temel yönergeler",
        prePhaseTitle: "Tedavi Öncesi",
        prePhaseSubtitle: "Randevunuzdan 5-7 gün önce",
        immediatePhaseTitle: "Hemen Sonra",
        immediatePhaseSubtitle: "İlk 24-72 saat",
        daysAfterPhaseTitle: "3-7. Günler",
        daysAfterPhaseSubtitle: "Soyulma ve iyileşme aşaması",
        preCare1Title: "Güneşten Kaçının",
        preCare1Desc: "Post-enflamatuar hiperpigmentasyon riskini en aza indirmek için en az 5-7 gün önce güneşe maruz kalmaktan kaçının.",
        preCare2Title: "Aktif İçerikleri Bırakın",
        preCare2Desc: "Aşırı hassasiyeti önlemek için tedaviden 5 gün önce retinol, AHA, BHA ve diğer aktif asitleri bırakın.",
        preCare3Title: "Başka Prosedür Yok",
        preCare3Desc: "Önerilen süreler içinde Botox, dolgu, lazer tedavisi, microneedling veya kimyasal peeling yaptırmayın.",
        preCare4Title: "İlaçlarınızı Bildirin",
        preCare4Desc: "Aldığınız tüm ilaçlar, özellikle isotretinoin veya kan sulandırıcılar hakkında uzmanınıza bilgi verin.",
        immediateCare1Title: "Su Teması Yok",
        immediateCare1Desc: "Protokol yoğunluğuna göre 48-72 saat suyla temastan kaçının. Bu kristal aktivasyonu için çok önemlidir.",
        immediateCare2Title: "Dokunmayın veya Ovalamayın",
        immediateCare2Desc: "Cildi ovalamayın, kaşımayın veya manuel olarak eksfoliye etmeyin. Mikrokristallerin doğal olarak çalışmasına izin verin.",
        immediateCare3Title: "Makyaj Yok",
        immediateCare3Desc: "Protokolünüz tarafından belirtilen süre boyunca herhangi bir makyaj ürünü uygulamayın.",
        immediateCare4Title: "Sıcaktan Kaçının",
        immediateCare4Desc: "Güneşe maruz kalma, sauna, buhar odası, sıcak yoga ve terlemeye neden olan aktivitelerden kaçının.",
        daysCare1Title: "Nazik Temizlik",
        daysCare1Desc: "Susuz dönemden sonra, pH dengeli, hafif jel temizleyici ile nazikçe yıkayın. Peeling veya fırçalama yok.",
        daysCare2Title: "Soyulan Cildi Koparmayın",
        daysCare2Desc: "Soyulan cildi asla koparıp çekmeyin. Gevşek cildi sadece sterilize edilmiş makasla kesebilirsiniz.",
        daysCare3Title: "Her 3 Saatte Güneş Kremi",
        daysCare3Desc: "Her 3 saatte bir SPF 50+ güneş kremi uygulayın. Şapka takın ve 7 gün boyunca doğrudan güneş ışığından kaçının.",
        daysCare4Title: "Havuz veya Sauna Yok",
        daysCare4Desc: "Tedaviden sonra en az 7 gün boyunca yüzme havuzları, saunalar veya buhar odalarından kaçının.",
        protocolTableTitle: "Protokole Göre Su Kaçınması",
        protocolTableDesc: "Süre tedavi yoğunluğunuza göre değişir",
        tableProtocol: "Protokol",
        tableDuration: "Masaj",
        tableWater: "Su Yok",
        tableBestFor: "İdeal İçin",
        twoDays: "2 gün",
        fourDays: "4 gün",
        fiveDays: "5 gün",
        tableSensitive: "Hassas cilt, ilk kez deneyenler",
        tableNormal: "Normal/mat cilt",
        tableThick: "Kalın, yağlı, yaşlanan cilt",
        contraTitle: "Önemli Kontrendikasyonlar",
        contraDesc: "Tedavi aşağıdaki durumları olan müşteriler için uygun DEĞİLDİR:",
        careCtaTitle: "Tedavinize Hazır mısınız?",
        careCtaDesc: "Profesyonel Dermocean tedavinizi planlamak için bizimle iletişime geçin",

        // Skin Concerns Page
        skinConcernsNav: "Cilt Sorunları",
        skinConcernsTitle: "Tedavi Ettiğimiz <span>Cilt Sorunları</span>",
        skinConcernsDesc: "Yosun soyma işleminin cilt sorunlarınızı nasıl doğal ve etkili bir şekilde ele aldığını keşfedin",
        catPigmentation: "Pigmentasyon ve Hasar",
        catAging: "Yaşlanma ve Doku",
        catTexture: "Doku ve Kirlilikler",
        concernSunDamage: "Güneş Hasarlı Cilt",
        concernSunDamageDesc: "Derin eksfoliasyon ve hücre yenilenmesi ile UV hasarını onarın ve cildin doğal parlaklığını geri kazandırın.",
        concernHyperpigmentation: "Hiperpigmentasyon",
        concernHyperpigmentationDesc: "Hızlandırılmış hücre yenilenmesi ile koyu lekeleri silin ve cilt tonunu eşitleyin.",
        concernScars: "Yara İzleri",
        concernScarsDesc: "Derin doku yenilenmesi ile akne izleri ve inflamasyon sonrası izlerin görünümünü azaltın.",
        concernPIH: "İnflamasyon Sonrası İzler",
        concernPIHDesc: "Akne veya cilt yaralanmalarından sonra kalan renk değişikliğini tedavi edin.",
        concernWrinkles: "İnce Çizgiler ve Kırışıklıklar",
        concernWrinklesDesc: "Kolajen üretimini uyarın ve erken yaşlanma belirtilerini azaltın.",
        concernElasticity: "Esneklik Kaybı",
        concernElasticityDesc: "Derin hücre rejenerasyonu ile cilt sıkılığını ve direncini artırın.",
        concernSagging: "Sarkık Cilt",
        concernSaggingDesc: "Yoğun tedavilerle cildi sıkılaştırın ve kaldırın.",
        concernDull: "Yorgun ve Sönük Cilt",
        concernDullDesc: "Ölü hücreleri kaldırarak ve kan dolaşımını artırarak parlaklığı canlandırın.",
        concernStretch: "Çatlaklar",
        concernStretchDesc: "Derin eksfoliasyon ile çatlakların görünümünü iyileştirin.",
        concernPores: "Geniş Gözenekler",
        concernPoresDesc: "Gözenekleri derinlemesine temizleyin ve iyileştirin.",
        concernKeratosis: "Keratosis Pilaris",
        concernKeratosisDesc: "Keratin birikmesinden kaynaklanan pürüzlü dokuyu düzeltin.",
        concernAcne: "Akneye Eğilimli Cilt",
        concernAcneDesc: "Antiseptik özelliklerle tıkalı cildi temizleyin ve sivilceleri azaltın.",
        concernImpure: "Yağlı ve Kirli Cilt",
        concernImpureDesc: "Daha sağlıklı bir cilt için yağ üretimini dengeleyin.",
        concernsCtaTitle: "Cildinizi Dönüştürmeye Hazır mısınız?",
        concernsCtaDesc: "Yakınınızdaki sertifikalı bir Dermocean uzmanı bulun",
        findProfessional: "Uzman Bul",

        // Results Gallery
        galleryTitle: "Gerçek Sonuçlar, <span>Gerçek Güven</span>",
        galleryDesc: "Doğrulanmış vaka çalışmalarımız aracılığıyla Dermocéan Yosun Peeling sisteminin dönüştürücü gücünü keşfedin.",
        filterAll: "Tüm Sonuçlar",
        filterAcne: "Akne ve İzler",
        filterPigmentation: "Pigmentasyon",
        filterAging: "Yaşlanma Karşıtı",
        filterTexture: "Gözenekler ve Doku",
        tagAcneScars: "Akne İzleri",
        tagPigmentation: "Hiperpigmentasyon",
        tagAging: "İnce Çizgiler",
        tagAcne: "Aktif Akne",
        tagTexture: "Geniş Gözenekler",
        resultTitle1: "Derin Yara İzi Düzeltme",
        resultDesc1: "Rolling ve boxcar yara izi dokusunda önemli iyileşme.",
        resultTitle2: "Melazma Azaltma",
        resultDesc2: "Hormonal pigmentasyon ve güneş lekelerinde belirgin azalma.",
        resultTitle3: "Cilt Sıkılaştırma",
        resultDesc3: "Göz çevresindeki ince çizgilerde azalma ve cilt elastikiyetinde iyileşme.",
        resultTitle4: "Akne Temizleme",
        resultDesc4: "Aktif inflamasyonun hızlı kuruması ve akne sonrası izlerde azalma.",
        resultTitle5: "Gözenek Küçültme",
        resultDesc5: "İyileştirilmiş cilt dokusu ve minimize edilmiş gözenek görünümü.",
        galleryCtaTitle: "Bu Sonuçlara Ulaşmaya Hazır mısınız?",
        galleryCtaDesc: "Dermocéan tedavileri sunan binlerce profesyonele katılın.",
        resultsNav: "Sonuçlar Galerisi",

        // Social Responsibility
        ourResponsibility: "Sorumluluğumuz",
        responsibilityDesc: "Gezegene, ekibimize ve etik güzelliğe bağlıyız.",
        sustainability: "Sürdürülebilirlik",
        sustainabilityDesc: "Çevre dostu ambalaj ve sorumlu üretim ile karbon ayak izimizi azaltıyoruz.",
        ethicalSourcing: "Etik Tedarik",
        ethicalSourcingDesc: "Gelecek nesiller için okyanus biyolojik çeşitliliğini korumak adına deniz yosunlarını sürdürülebilir şekilde topluyoruz.",
        communitySupport: "Topluluk Desteği",
        communitySupportDesc: "Eğitimle estetisyenleri güçlendiriyor ve dürme ticaret uygulamalarını küresel olarak destekliyoruz."
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

    // Dispatch language changed event
    document.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { lang: lang }
    }));

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

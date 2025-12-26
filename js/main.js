/**
 * Dermocean Main Logic
 * Handling Navigation, Forms, Language, and General Interactions
 */

// Translations
const translations = {
    en: {
        home: "Home",
        products: "Products",
        protocols: "Protocols",
        videos: "Videos",
        register: "B2B Register",
        heroTitle: "Pure Nature, <span>Proven Results.</span>",
        heroDesc: "Advanced skincare formulations designed effectively for professional beauty centers. Experience the power of marine algae.",
        discoverProducts: "Discover Products",
        ourCollection: "Our Collection",
        professionalGrade: "Professional Grade Skincare",
        treatmentProtocols: "Treatment Protocols",
        protocolsDesc: "Professional guidelines for optimal results",
        gentleProtocol: "Gentle Protocol",
        gentleDesc: "For sensitive skin. 2g peeling powder, 4 minutes massage.",
        moderateProtocol: "Moderate Protocol",
        moderateDesc: "For normal skin. 2g peeling powder, 6 minutes massage.",
        intensiveProtocol: "Intensive Protocol",
        intensiveDesc: "For resistant skin. 2g peeling powder, 8 minutes massage.",
        downloadCatalog: "Download Full Protocol Guide",
        viewPDF: "View PDF",
        downloadPDF: "Download",
        aboutDermocean: "About Dermocean",
        aboutText: "Leading B2B skincare provider for beauty centers. Combining nature's finest ingredients with scientific innovation.",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        cashOnDelivery: "Cash on Delivery",
        bankTransfer: "Bank Transfer",
        b2bRegistration: "B2B Center Registration",
        joinNetwork: "Join our network of professional beauty centers",
        centerName: "Beauty Center Name",
        ownerName: "Owner Full Name",
        licenseNumber: "License Number",
        phoneNumber: "Phone Number",
        email: "Email Address",
        submitApplication: "Submit Application",
        verificationNote: "We strictly verify all applicants. Accounts are activated manually after license verification (24-48 hours).",
        applicationReceived: "Application Received",
        thankYouMessage: "Thank you for registering. Your application is now under review. We will contact you via phone or email to finalize the verification process.",
        returnHome: "Return Home",
        educationalVideos: "Educational Videos",
        protocolsSessions: "Protocols & Treatment Sessions",
        registerCenter: "Register Center"
    },
    ar: {
        home: "الرئيسية",
        products: "المنتجات",
        protocols: "البروتوكولات",
        videos: "الفيديوهات",
        register: "تسجيل B2B",
        heroTitle: "طبيعة نقية، <span>نتائج مثبتة.</span>",
        heroDesc: "تركيبات متقدمة للعناية بالبشرة مصممة بفعالية لمراكز التجميل المهنية. اكتشف قوة الطحالب البحرية.",
        discoverProducts: "اكتشف المنتجات",
        ourCollection: "مجموعتنا",
        professionalGrade: "منتجات احترافية للعناية بالبشرة",
        treatmentProtocols: "بروتوكولات العلاج",
        protocolsDesc: "إرشادات مهنية للحصول على أفضل النتائج",
        gentleProtocol: "البروتوكول اللطيف",
        gentleDesc: "للبشرة الحساسة. 2 جرام بودر تقشير، 4 دقائق تدليك.",
        moderateProtocol: "البروتوكول المعتدل",
        moderateDesc: "للبشرة العادية. 2 جرام بودر تقشير، 6 دقائق تدليك.",
        intensiveProtocol: "البروتوكول المكثف",
        intensiveDesc: "للبشرة المقاومة. 2 جرام بودر تقشير، 8 دقائق تدليك.",
        downloadCatalog: "تحميل دليل البروتوكول الكامل",
        viewPDF: "عرض PDF",
        downloadPDF: "تحميل",
        aboutDermocean: "عن ديرموشيان",
        aboutText: "المزود الرائد لمنتجات العناية بالبشرة لمراكز التجميل. نجمع بين أفضل مكونات الطبيعة والابتكار العلمي.",
        quickLinks: "روابط سريعة",
        contactUs: "اتصل بنا",
        cashOnDelivery: "الدفع عند الاستلام",
        bankTransfer: "تحويل بنكي",
        b2bRegistration: "تسجيل مركز B2B",
        joinNetwork: "انضم إلى شبكتنا من مراكز التجميل المهنية",
        centerName: "اسم مركز التجميل",
        ownerName: "اسم المالك الكامل",
        licenseNumber: "رقم الترخيص",
        phoneNumber: "رقم الهاتف",
        email: "البريد الإلكتروني",
        submitApplication: "إرسال الطلب",
        verificationNote: "نتحقق بدقة من جميع المتقدمين. يتم تفعيل الحسابات يدوياً بعد التحقق من الترخيص (24-48 ساعة).",
        applicationReceived: "تم استلام الطلب",
        thankYouMessage: "شكراً لتسجيلك. طلبك قيد المراجعة الآن. سنتواصل معك عبر الهاتف أو البريد الإلكتروني لإتمام عملية التحقق.",
        returnHome: "العودة للرئيسية",
        educationalVideos: "فيديوهات تعليمية",
        protocolsSessions: "البروتوكولات وجلسات العلاج",
        registerCenter: "تسجيل المركز"
    },
    fr: {
        home: "Accueil",
        products: "Produits",
        protocols: "Protocoles",
        videos: "Vidéos",
        register: "Inscription B2B",
        heroTitle: "Nature Pure, <span>Résultats Prouvés.</span>",
        heroDesc: "Formulations avancées de soins de la peau conçues efficacement pour les centres de beauté professionnels.",
        discoverProducts: "Découvrir les Produits",
        ourCollection: "Notre Collection",
        professionalGrade: "Soins de la Peau Professionnels",
        treatmentProtocols: "Protocoles de Traitement",
        protocolsDesc: "Directives professionnelles pour des résultats optimaux",
        gentleProtocol: "Protocole Doux",
        gentleDesc: "Pour peau sensible. 2g de poudre peeling, 4 minutes de massage.",
        moderateProtocol: "Protocole Modéré",
        moderateDesc: "Pour peau normale. 2g de poudre peeling, 6 minutes de massage.",
        intensiveProtocol: "Protocole Intensif",
        intensiveDesc: "Pour peau résistante. 2g de poudre peeling, 8 minutes de massage.",
        downloadCatalog: "Télécharger le Guide Complet",
        viewPDF: "Voir PDF",
        downloadPDF: "Télécharger",
        aboutDermocean: "À Propos de Dermocean",
        aboutText: "Leader B2B des soins de la peau pour centres de beauté.",
        quickLinks: "Liens Rapides",
        contactUs: "Contactez-nous",
        cashOnDelivery: "Paiement à la Livraison",
        bankTransfer: "Virement Bancaire",
        b2bRegistration: "Inscription Centre B2B",
        joinNetwork: "Rejoignez notre réseau de centres de beauté professionnels",
        centerName: "Nom du Centre",
        ownerName: "Nom du Propriétaire",
        licenseNumber: "Numéro de Licence",
        phoneNumber: "Téléphone",
        email: "Email",
        submitApplication: "Soumettre",
        verificationNote: "Nous vérifions tous les candidats. Les comptes sont activés manuellement après vérification (24-48 heures).",
        applicationReceived: "Demande Reçue",
        thankYouMessage: "Merci pour votre inscription. Votre demande est en cours d'examen.",
        returnHome: "Retour à l'Accueil",
        educationalVideos: "Vidéos Éducatives",
        protocolsSessions: "Protocoles & Sessions",
        registerCenter: "Inscrire un Centre"
    },
    tr: {
        home: "Ana Sayfa",
        products: "Ürünler",
        protocols: "Protokoller",
        videos: "Videolar",
        register: "B2B Kayıt",
        heroTitle: "Saf Doğa, <span>Kanıtlanmış Sonuçlar.</span>",
        heroDesc: "Profesyonel güzellik merkezleri için etkili cilt bakım formülasyonları.",
        discoverProducts: "Ürünleri Keşfet",
        ourCollection: "Koleksiyonumuz",
        professionalGrade: "Profesyonel Cilt Bakımı",
        treatmentProtocols: "Tedavi Protokolleri",
        protocolsDesc: "Optimum sonuçlar için profesyonel kılavuzlar",
        gentleProtocol: "Nazik Protokol",
        gentleDesc: "Hassas ciltler için. 2g peeling tozu, 4 dakika masaj.",
        moderateProtocol: "Orta Protokol",
        moderateDesc: "Normal ciltler için. 2g peeling tozu, 6 dakika masaj.",
        intensiveProtocol: "Yoğun Protokol",
        intensiveDesc: "Dirençli ciltler için. 2g peeling tozu, 8 dakika masaj.",
        downloadCatalog: "Tam Protokol Kılavuzunu İndir",
        viewPDF: "PDF Görüntüle",
        downloadPDF: "İndir",
        aboutDermocean: "Dermocean Hakkında",
        aboutText: "Güzellik merkezleri için önde gelen B2B cilt bakım tedarikçisi.",
        quickLinks: "Hızlı Bağlantılar",
        contactUs: "Bize Ulaşın",
        cashOnDelivery: "Kapıda Ödeme",
        bankTransfer: "Banka Havalesi",
        b2bRegistration: "B2B Merkez Kaydı",
        joinNetwork: "Profesyonel güzellik merkezleri ağımıza katılın",
        centerName: "Merkez Adı",
        ownerName: "Sahip Adı",
        licenseNumber: "Lisans Numarası",
        phoneNumber: "Telefon",
        email: "E-posta",
        submitApplication: "Gönder",
        verificationNote: "Tüm başvuruları titizlikle doğruluyoruz. Hesaplar lisans doğrulamasından sonra manuel olarak etkinleştirilir (24-48 saat).",
        applicationReceived: "Başvuru Alındı",
        thankYouMessage: "Kaydınız için teşekkürler. Başvurunuz inceleniyor.",
        returnHome: "Ana Sayfaya Dön",
        educationalVideos: "Eğitim Videoları",
        protocolsSessions: "Protokoller & Seanslar",
        registerCenter: "Merkez Kaydet"
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation (Sidebar) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileSidebar = document.querySelector('.mobile-menu-sidebar');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const closeMenuBtn = document.querySelector('.close-menu');

    function openMobileMenu() {
        mobileSidebar.classList.add('active');
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileSidebar.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', openMobileMenu);
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeMobileMenu);
    }

    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeMobileMenu);
    }

    // Close sidebar on link click (mobile)
    document.querySelectorAll('.mobile-menu-items a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // --- B2B Registration Form ---
    const regForm = document.querySelector('.registration-form');
    const modal = document.querySelector('.modal');

    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (modal) {
                modal.classList.add('active');
            }
            regForm.reset();
        });
    }

    // Close modal on click outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // --- Initialize Comparison Slider ---
    if (document.querySelector('.comparison-container') && typeof ComparisonSlider !== 'undefined') {
        new ComparisonSlider('.comparison-container');
    }

    // --- Load saved language ---
    const savedLang = localStorage.getItem('dermocean_lang') || 'en';
    applyLanguage(savedLang);

});

/**
 * Change Language
 */
function changeLanguage(lang) {
    localStorage.setItem('dermocean_lang', lang);
    applyLanguage(lang);

    // Update active state in selectors
    document.querySelectorAll('.lang-selector a, .mobile-lang-selector a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('data-lang') === lang) {
            a.classList.add('active');
        }
    });

    return false; // Prevent default link behavior
}

function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Set RTL for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }

    // Apply translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            // Check if it contains HTML (like spans)
            if (t[key].includes('<')) {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    // Update active state
    document.querySelectorAll('.lang-selector a, .mobile-lang-selector a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('data-lang') === lang) {
            a.classList.add('active');
        }
    });
}

/**
 * Adaptive Video Player (Placeholder Logic)
 */
class AdaptivePlayer {
    constructor(videoElement, sources) {
        this.video = videoElement;
        this.sources = sources;
        this.init();
    }

    init() {
        console.log("Adaptive Player: Selected 720p based on detected bandwidth");
    }
}

/**
 * Protocol Modal Functions
 */
const protocolData = {
    gentle: {
        icon: 'fa-leaf',
        title: 'Gentle Protocol',
        titleAr: 'البروتوكول اللطيف',
        level: 'Level 1',
        duration: '4 minutes',
        amount: '2g',
        suitable: 'Sensitive & Delicate Skin',
        steps: [
            { title: 'Cleanse', desc: 'Gently cleanse the face with a mild cleanser' },
            { title: 'Prepare', desc: 'Mix 2g of Algae Peeling Powder with Support Solution' },
            { title: 'Apply', desc: 'Apply mixture evenly on the face, avoiding eye area' },
            { title: 'Massage', desc: 'Massage gently in circular motions for 4 minutes' },
            { title: 'Rinse', desc: 'Rinse thoroughly with lukewarm water' },
            { title: 'Calm', desc: 'Apply Calming Mask for 15 minutes' },
            { title: 'Protect', desc: 'Finish with Sunscreen SPF 50+' }
        ]
    },
    moderate: {
        icon: 'fa-spa',
        title: 'Moderate Protocol',
        titleAr: 'البروتوكول المعتدل',
        level: 'Level 2',
        duration: '6 minutes',
        amount: '2g',
        suitable: 'Normal & Combination Skin',
        steps: [
            { title: 'Cleanse', desc: 'Deep cleanse the face thoroughly' },
            { title: 'Prepare', desc: 'Mix 2g of Algae Peeling Powder with Support Solution' },
            { title: 'Apply', desc: 'Apply mixture evenly across the entire face' },
            { title: 'Massage', desc: 'Massage with medium pressure for 6 minutes' },
            { title: 'Rinse', desc: 'Rinse thoroughly with lukewarm water' },
            { title: 'Calm', desc: 'Apply Calming Mask for 15 minutes' },
            { title: 'Protect', desc: 'Apply Sunscreen SPF 50+ generously' }
        ]
    },
    intensive: {
        icon: 'fa-fire',
        title: 'Intensive Protocol',
        titleAr: 'البروتوكول المكثف',
        level: 'Level 3',
        duration: '8 minutes',
        amount: '2g',
        suitable: 'Resistant & Oily Skin',
        steps: [
            { title: 'Cleanse', desc: 'Double cleanse to remove all impurities' },
            { title: 'Prepare', desc: 'Mix 2g of Algae Peeling Powder with Support Solution' },
            { title: 'Apply', desc: 'Apply thick layer on treatment areas' },
            { title: 'Massage', desc: 'Massage firmly in circular motions for 8 minutes' },
            { title: 'Focus', desc: 'Pay extra attention to pigmented or scarred areas' },
            { title: 'Rinse', desc: 'Rinse thoroughly with lukewarm water' },
            { title: 'Calm', desc: 'Apply Calming Mask for 20 minutes' },
            { title: 'Protect', desc: 'Apply Sunscreen SPF 50+ - mandatory!' }
        ]
    }
};

function openProtocolModal(type) {
    const modal = document.getElementById('protocol-modal');
    const body = document.getElementById('protocol-modal-body');
    const data = protocolData[type];

    if (!modal || !body || !data) return;

    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    const title = isRTL && data.titleAr ? data.titleAr : data.title;

    let stepsHtml = data.steps.map((step, i) => `
        <div class="protocol-step">
            <div class="step-number">${i + 1}</div>
            <div class="step-content">
                <h4>${step.title}</h4>
                <p>${step.desc}</p>
            </div>
        </div>
    `).join('');

    body.innerHTML = `
        <div class="protocol-modal-header" style="text-align: center; padding: 2rem;">
            <div class="protocol-icon">
                <i class="fas ${data.icon}"></i>
            </div>
            <h2>${title}</h2>
            <span class="protocol-level">${data.level}</span>
        </div>
        
        <div style="display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap; padding: 0 2rem;">
            <div style="text-align: center;">
                <strong style="color: #8F7080;">${data.duration}</strong>
                <p style="font-size: 0.85rem; color: #666;">Duration</p>
            </div>
            <div style="text-align: center;">
                <strong style="color: #8F7080;">${data.amount}</strong>
                <p style="font-size: 0.85rem; color: #666;">Powder Amount</p>
            </div>
            <div style="text-align: center;">
                <strong style="color: #8F7080;">${data.suitable}</strong>
                <p style="font-size: 0.85rem; color: #666;">Best For</p>
            </div>
        </div>
        
        <div style="padding: 0 2rem 2rem;">
            <h3 style="margin-bottom: 1.5rem; text-align: center;">Step-by-Step Guide</h3>
            <div class="protocol-details">
                ${stepsHtml}
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProtocolModal() {
    const modal = document.getElementById('protocol-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close protocol modal on click outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('protocol-modal');
    if (e.target === modal) {
        closeProtocolModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProtocolModal();
    }
});

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
    const data = sliderCases[caseId];
    if (!data) return;

    const beforeImg = document.getElementById('before-img');
    const afterImg = document.getElementById('after-img');

    if (beforeImg) beforeImg.src = data.before;
    if (afterImg) afterImg.src = data.after;

    // Update active tab
    document.querySelectorAll('.case-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.case === caseId);
    });

    // Re-initialize slider position if ComparisonSlider exists
    if (typeof ComparisonSlider !== 'undefined') {
        const container = document.querySelector('.comparison-container');
        if (container) {
            new ComparisonSlider('.comparison-container');
        }
    }
}


/**
 * Dermocean Main Logic
 * Handling Navigation, Forms, Language, and General Interactions
 */

// Translations
// Translations
const translations = {
    en: {
        home: "Home",
        aboutUs: "About Us",
        products: "Products",
        howToUse: "How to Use",
        articles: "Articles",
        videos: "Videos",
        register: "B2B Register",
        heroTitle: "Pure Nature, <span>Proven Results.</span>",
        heroDesc: "Advanced skincare formulations designed effectively for professional beauty centers. Experience the power of marine algae.",
        discoverProducts: "Discover Products",
        ourCollection: "Our Collection",
        professionalGrade: "Professional Grade Skincare",
        chooseProtocol: "Choose Your Protocol",
        protocolSubtitle: "Select based on skin type and desired intensity",
        gentleProtocol: "Gentle",
        moderateProtocol: "Moderate",
        intensiveProtocol: "Intensive",
        downloadCatalog: "Download Catalog",
        viewGuide: "View Guide",
        closeGuide: "Close Guide",
        protocolsDesc: "Professional guidelines for optimal results",
        aboutDermocean: "About Dermocean",
        aboutText: "Leading B2B skincare provider for beauty centers. Combining nature's finest ingredients with scientific innovation.",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        contactDesc: "Get in touch with our professional support team",
        fullName: "Full Name",
        email: "Email Address",
        phoneNumber: "Phone Number",
        message: "Message",
        sendMessage: "Send Message",
        cashOnDelivery: "Cash on Delivery",
        bankTransfer: "Bank Transfer",
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
        educationalVideos: "Educational Videos",
        registerCenter: "Register Center",
        stepByStep: "Step-by-Step Guide",
        precautions: "Precautions",
        faqTitle: "Frequently Asked Questions",
        articlesTitle: "Expert Skincare Insights",
        articlesDesc: "Discover tips, guides, and professional knowledge"
    },
    ar: {
        home: "الرئيسية",
        aboutUs: "من نحن",
        products: "المنتجات",
        howToUse: "طريقة الاستخدام",
        articles: "المقالات",
        videos: "الفيديوهات",
        register: "تسجيل B2B",
        heroTitle: "طبيعة نقية، <span>نتائج مثبتة.</span>",
        heroDesc: "تركيبات متقدمة للعناية بالبشرة مصممة بفعالية لمراكز التجميل المهنية. اكتشف قوة الطحالب البحرية.",
        discoverProducts: "اكتشف المنتجات",
        ourCollection: "مجموعتنا",
        professionalGrade: "منتجات احترافية للعناية بالبشرة",
        chooseProtocol: "اختر البروتوكول",
        protocolSubtitle: "اختر بناءً على نوع البشرة والنتيجة المطلوبة",
        gentleProtocol: "لطيف",
        moderateProtocol: "معتدل",
        intensiveProtocol: "مكثف",
        downloadCatalog: "تحميل الكتالوج",
        viewGuide: "عرض الدليل",
        closeGuide: "إغلاق الدليل",
        protocolsDesc: "إرشادات مهنية للحصول على أفضل النتائج",
        aboutDermocean: "عن ديرموشيان",
        aboutText: "المزود الرائد لمنتجات العناية بالبشرة لمراكز التجميل. نجمع بين أفضل مكونات الطبيعة والابتكار العلمي.",
        quickLinks: "روابط سريعة",
        contactUs: "اتصل بنا",
        contactDesc: "تواصل مع فريق الدعم المحترف لدينا",
        fullName: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phoneNumber: "رقم الهاتف",
        message: "الرسالة",
        sendMessage: "إرسال الرسالة",
        cashOnDelivery: "الدفع عند الاستلام",
        bankTransfer: "تحويل بنكي",
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
        educationalVideos: "فيديوهات تعليمية",
        registerCenter: "تسجيل المركز",
        stepByStep: "دليل خطوة بخطوة",
        precautions: "الاحتياطات",
        faqTitle: "الأسئلة الشائعة",
        articlesTitle: "رؤى خبراء البشرة",
        articlesDesc: "اكتشف النصائح والأدلة والمعرفة المهنية"
    },
    fr: {
        home: "Accueil",
        aboutUs: "À propos",
        products: "Produits",
        howToUse: "Utilisation",
        articles: "Articles",
        videos: "Vidéos",
        register: "Inscription B2B",
        heroTitle: "Nature Pure, <span>Résultats Prouvés.</span>",
        heroDesc: "Formulations de soins avancées conçues pour les centres de beauté professionnels.",
        discoverProducts: "Découvrir",
        ourCollection: "Notre Collection",
        professionalGrade: "Soins de Qualité Professionnelle",
        chooseProtocol: "Choisissez Votre Protocole",
        protocolSubtitle: "Sélectionnez selon le type de peau",
        gentleProtocol: "Doux",
        moderateProtocol: "Modéré",
        intensiveProtocol: "Intensif",
        downloadCatalog: "Télécharger",
        viewGuide: "Voir le Guide",
        closeGuide: "Fermer le Guide",
        protocolsDesc: "Directives professionnelles pour des résultats optimaux",
        aboutDermocean: "À propos de Dermocean",
        aboutText: "Fournisseur leader de soins pour les centres de beauté.",
        quickLinks: "Liens Rapides",
        contactUs: "Contactez-nous",
        contactDesc: "Entrez en contact avec notre équipe",
        fullName: "Nom Complet",
        email: "Email",
        phoneNumber: "Téléphone",
        message: "Message",
        sendMessage: "Envoyer",
        cashOnDelivery: "Paiement à la livraison",
        bankTransfer: "Virement Bancaire",
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
        educationalVideos: "Vidéos Éducatives",
        registerCenter: "S'inscrire",
        stepByStep: "Guide étape par étape",
        precautions: "Précautions",
        faqTitle: "FAQ",
        articlesTitle: "Conseils d'Experts",
        articlesDesc: "Découvrez nos conseils professionnels"
    },
    tr: {
        home: "Ana Sayfa",
        aboutUs: "Hakkımızda",
        products: "Ürünler",
        howToUse: "Nasıl Kullanılır",
        articles: "Makaleler",
        videos: "Videolar",
        register: "B2B Kayıt",
        heroTitle: "Saf Doğa, <span>Kanıtlanmış Sonuçlar.</span>",
        heroDesc: "Profesyonel güzellik merkezleri için tasarlanmış gelişmiş cilt bakım formülleri.",
        discoverProducts: "Ürünleri Keşfet",
        ourCollection: "Koleksiyonumuz",
        professionalGrade: "Profesyonel Cilt Bakımı",
        chooseProtocol: "Protokol Seçin",
        protocolSubtitle: "Cilt tipine göre seçiniz",
        gentleProtocol: "Hafif",
        moderateProtocol: "Orta",
        intensiveProtocol: "Yoğun",
        downloadCatalog: "Kataloğu İndir",
        viewGuide: "Rehberi Gör",
        closeGuide: "Rehberi Kapat",
        protocolsDesc: "En iyi sonuçlar için profesyonel talimatlar",
        aboutDermocean: "Dermocean Hakkında",
        aboutText: "Güzellik merkezleri için lider cilt bakım sağlayıcısı.",
        quickLinks: "Hızlı Linkler",
        contactUs: "İletişim",
        contactDesc: "Profesyonel ekibimizle iletişime geçin",
        fullName: "Ad Soyad",
        email: "E-posta",
        phoneNumber: "Telefon",
        message: "Mesaj",
        sendMessage: "Gönder",
        cashOnDelivery: "Kapıda Ödeme",
        bankTransfer: "Havale/EFT",
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
        educationalVideos: "Eğitim Videoları",
        registerCenter: "Kayıt Ol",
        stepByStep: "Adım Adım Rehber",
        precautions: "Önlemler",
        faqTitle: "Sıkça Sorulan Sorular",
        articlesTitle: "Uzman Görüşleri",
        articlesDesc: "İpuçları ve profesyonel bilgileri keşfedin"
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

// Toggle PDF Viewer
function togglePdfViewer() {
    const container = document.getElementById('pdf-viewer-container');
    const btn = document.getElementById('pdf-toggle-btn');
    const isActive = container.classList.contains('active');

    // Toggle class
    container.classList.toggle('active');

    // Update Button Text & Icon
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

    if (!isActive) {
        // Now Open
        btn.innerHTML = `<i class="fas fa-times"></i> <span>${translateDynamic('closeGuide')}</span>`;
        btn.classList.add('btn-outline');
        btn.classList.remove('btn-primary');
    } else {
        // Now Closed
        btn.innerHTML = `<i class="fas fa-book-open"></i> <span>${translateDynamic('viewGuide')}</span>`;
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-outline');
    }
}

function translateDynamic(key) {
    const lang = localStorage.getItem('dermocean_lang') || 'en';
    return translations[lang][key] || translations['en'][key];
}

/**
 * 5-Case Slider Logic (Existing)
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


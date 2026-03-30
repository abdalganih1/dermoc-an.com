/**
 * Dermocean Product Loader v3.0
 * Renders products in 3 distinct sections: Peeling Protocol, Skincare, Mesotherapy
 * Supports 4 languages: EN, AR, FR, TR
 */
class ProductLoader {
    constructor(gridSelector, jsonPath) {
        this.container = document.querySelector(gridSelector);
        this.jsonPath = jsonPath;
        this.lang = localStorage.getItem('dermocean_lang') || 'en';
        this.isRTL = this.lang === 'ar';
    }

    // Section configuration
    getSections() {
        const t = {
            en: {
                peeling: { title: 'Peeling Protocol', subtitle: 'Our signature herbal peeling system for deep skin renewal', icon: 'fas fa-mortar-pestle' },
                skincare: { title: 'Skincare Products', subtitle: 'Professional-grade serums, creams & treatments for every skin need', icon: 'fas fa-spa' },
                meso: { title: 'Mesotherapy', subtitle: 'Advanced professional cocktails for targeted skin & hair therapy', icon: 'fas fa-syringe' }
            },
            ar: {
                peeling: { title: 'بروتوكول التقشير', subtitle: 'نظام التقشير العشبي المميز لتجديد البشرة العميق', icon: 'fas fa-mortar-pestle' },
                skincare: { title: 'منتجات العناية بالبشرة', subtitle: 'سيرومات وكريمات وعلاجات احترافية لكل احتياجات البشرة', icon: 'fas fa-spa' },
                meso: { title: 'الميزوثيرابي', subtitle: 'كوكتيلات احترافية متقدمة لعلاج البشرة والشعر المستهدف', icon: 'fas fa-syringe' }
            },
            fr: {
                peeling: { title: 'Protocole Peeling', subtitle: 'Notre système de peeling aux herbes pour un renouvellement cutané profond', icon: 'fas fa-mortar-pestle' },
                skincare: { title: 'Produits de Soin', subtitle: 'Sérums, crèmes et traitements de qualité professionnelle', icon: 'fas fa-spa' },
                meso: { title: 'Mésothérapie', subtitle: 'Cocktails professionnels avancés pour la thérapie ciblée', icon: 'fas fa-syringe' }
            },
            tr: {
                peeling: { title: 'Peeling Protokolü', subtitle: 'Derin cilt yenilemesi için bitkisel peeling sistemimiz', icon: 'fas fa-mortar-pestle' },
                skincare: { title: 'Cilt Bakım Ürünleri', subtitle: 'Her cilt ihtiyacı için profesyonel serumlar, kremler ve tedaviler', icon: 'fas fa-spa' },
                meso: { title: 'Mezoterapi', subtitle: 'Hedefli cilt ve saç tedavisi için gelişmiş profesyonel kokteylleri', icon: 'fas fa-syringe' }
            }
        };
        return t[this.lang] || t.en;
    }

    async init() {
        if (!this.container) return;
        try {
            const response = await fetch(this.jsonPath);
            this.products = await response.json();
            this.renderSections();
        } catch (error) {
            console.error('Error loading products:', error);
            this.container.innerHTML = '<p class="text-center">Failed to load products.</p>';
        }
    }

    renderSections() {
        const sections = this.getSections();
        const sectionOrder = ['peeling', 'skincare', 'meso'];
        const sectionColors = {
            peeling: 'section-peeling',
            skincare: 'section-skincare',
            meso: 'section-meso'
        };

        let html = '';

        sectionOrder.forEach((sectionKey, idx) => {
            const sectionInfo = sections[sectionKey];
            const sectionProducts = this.products.filter(p => p.section === sectionKey);
            if (sectionProducts.length === 0) return;

            const isCollapsed = this.getCollapseState(sectionKey);

            html += `
                <div class="product-section-block ${sectionColors[sectionKey]} ${isCollapsed ? 'collapsed' : ''}" data-section="${sectionKey}">
                    <div class="section-header-fancy" role="button" tabindex="0" aria-expanded="${!isCollapsed}" onclick="productLoader.toggleSection('${sectionKey}')">
                        <div class="section-icon-wrap">
                            <i class="${sectionInfo.icon}"></i>
                        </div>
                        <div class="section-text">
                            <h2>${sectionInfo.title}</h2>
                            <p>${sectionInfo.subtitle}</p>
                        </div>
                        <span class="section-count">${sectionProducts.length}</span>
                        <button class="section-toggle" aria-label="Toggle section">
                            <i class="fas fa-chevron-up"></i>
                        </button>
                    </div>
                    <div class="section-grid-wrapper">
                        <div class="products-grid section-grid">
                            ${sectionProducts.map(p => this.createCard(p)).join('')}
                        </div>
                    </div>
                    ${idx < sectionOrder.length - 1 ? '<div class="section-divider"><span></span></div>' : ''}
                </div>
            `;
        });

        this.container.innerHTML = html;

        // Animate cards with intersection observer
        requestAnimationFrame(() => {
            this.container.querySelectorAll('.product-card').forEach((card, i) => {
                card.style.animationDelay = `${(i % 6) * 0.1}s`;
                card.classList.add('card-animate-in');
            });
        });

        // Add keyboard support for section headers
        this.container.querySelectorAll('.section-header-fancy').forEach(header => {
            header.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    header.click();
                }
            });
        });
    }

    toggleSection(sectionKey) {
        const block = this.container.querySelector(`[data-section="${sectionKey}"]`);
        if (!block) return;
        const isCollapsed = block.classList.toggle('collapsed');
        const header = block.querySelector('.section-header-fancy');
        if (header) header.setAttribute('aria-expanded', !isCollapsed);
        this.saveCollapseState(sectionKey, isCollapsed);
    }

    getCollapseState(sectionKey) {
        try {
            const states = JSON.parse(localStorage.getItem('dermocean_sections') || '{}');
            return !!states[sectionKey];
        } catch { return false; }
    }

    saveCollapseState(sectionKey, collapsed) {
        try {
            const states = JSON.parse(localStorage.getItem('dermocean_sections') || '{}');
            states[sectionKey] = collapsed;
            localStorage.setItem('dermocean_sections', JSON.stringify(states));
        } catch {}
    }

    getLocalizedText(product, field) {
        const suffixes = { ar: '_ar', fr: '_fr', tr: '_tr' };
        const suffix = suffixes[this.lang];
        if (suffix && product[field + suffix]) return product[field + suffix];
        return product[field];
    }

    getBtnText() {
        const btnTexts = { en: 'View Details', ar: 'التفاصيل', fr: 'Voir Détails', tr: 'Detaylar' };
        return btnTexts[this.lang] || btnTexts.en;
    }

    getComingSoonText() {
        const texts = { en: 'Coming Soon', ar: 'قريباً', fr: 'Bientôt', tr: 'Yakında' };
        return texts[this.lang] || texts.en;
    }

    getProductLink(product) {
        return `product.html?id=${product.id}`;
    }

    getCategoryIcon(category) {
        const icons = {
            Peeling: 'fas fa-mortar-pestle', Activator: 'fas fa-vial',
            Mask: 'fas fa-mask', Protection: 'fas fa-shield-alt',
            Moisturizer: 'fas fa-tint', 'Anti-Aging': 'fas fa-hourglass-half',
            Serum: 'fas fa-eye-dropper', Cleanser: 'fas fa-pump-soap',
            Toner: 'fas fa-spray-can', Meso: 'fas fa-syringe'
        };
        return icons[category] || 'fas fa-box';
    }

    createCard(product) {
        const name = this.getLocalizedText(product, 'name');
        const desc = this.getLocalizedText(product, 'description');
        const btnText = this.getBtnText();
        const link = this.getProductLink(product);
        const shortDesc = desc && desc.length > 120 ? desc.substring(0, 120) + '...' : (desc || '');
        const catIcon = this.getCategoryIcon(product.category);
        const isComingSoon = product.comingSoon;
        const isPro = product.professional;

        const badges = [];
        if (isComingSoon) badges.push(`<span class="product-badge coming-soon">${this.getComingSoonText()}</span>`);
        if (isPro) badges.push(`<span class="product-badge pro-badge">PRO</span>`);

        return `
            <div class="product-card ${isComingSoon ? 'coming-soon-card' : ''}" data-category="${product.category}">
                ${badges.length ? `<div class="product-badges">${badges.join('')}</div>` : ''}
                <div class="product-image-wrap">
                    <img src="${product.images.thumbnail_low}" alt="${name}" loading="lazy">
                    <div class="product-category-tag">
                        <i class="${catIcon}"></i> ${product.category}
                    </div>
                </div>
                <div class="product-info">
                    <h3>${name}</h3>
                    <p>${shortDesc}</p>
                    <div class="product-meta">
                        <span class="product-size"><i class="fas fa-box"></i> ${product.size}</span>
                    </div>
                    ${isComingSoon ? '' : `<a href="${link}" class="product-btn"><span>${btnText}</span> <i class="fas fa-arrow-right"></i></a>`}
                </div>
            </div>
        `;
    }

    updateLanguage(lang) {
        this.lang = lang;
        this.isRTL = lang === 'ar';
        if (this.products) {
            this.renderSections();
        } else {
            this.init();
        }
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    const loader = new ProductLoader('.products-section-wrapper', 'data/products.json');
    loader.init();
    window.productLoader = loader;

    document.addEventListener('languageChanged', (e) => {
        loader.updateLanguage(e.detail.lang);
    });
});

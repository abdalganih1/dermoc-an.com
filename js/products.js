/**
 * Dermocean Product Loader
 * Fetches products from JSON and renders cards dynamically
 * Supports 4 languages: EN, AR, FR, TR
 */
class ProductLoader {
    constructor(gridSelector, jsonPath) {
        this.grid = document.querySelector(gridSelector);
        this.jsonPath = jsonPath;
        this.lang = localStorage.getItem('dermocean_lang') || 'en';
        this.isRTL = this.lang === 'ar';
    }

    async init() {
        if (!this.grid) return;

        try {
            const response = await fetch(this.jsonPath);
            const products = await response.json();
            this.render(products);
        } catch (error) {
            console.error('Error loading products:', error);
            this.grid.innerHTML = '<p class="text-center">Failed to load products.</p>';
        }
    }

    render(products) {
        this.grid.innerHTML = products.map(product => this.createCard(product)).join('');
    }

    getLocalizedText(product, field) {
        const fieldAr = field + '_ar';
        const fieldFr = field + '_fr';
        const fieldTr = field + '_tr';

        if (this.lang === 'ar' && product[fieldAr]) return product[fieldAr];
        if (this.lang === 'fr' && product[fieldFr]) return product[fieldFr];
        if (this.lang === 'tr' && product[fieldTr]) return product[fieldTr];
        return product[field];
    }

    getBtnText() {
        const btnTexts = {
            en: 'Details',
            ar: 'التفاصيل',
            fr: 'Détails',
            tr: 'Detaylar'
        };
        return btnTexts[this.lang] || btnTexts.en;
    }

    createCard(product) {
        const name = this.getLocalizedText(product, 'name');
        const desc = this.getLocalizedText(product, 'description');
        const btnText = this.getBtnText();

        return `
            <div class="product-card" data-category="${product.category}">
                <div class="product-image-wrap">
                    <img src="${product.images.thumbnail_low}" alt="${name}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <button class="product-btn">${btnText}</button>
                </div>
            </div>
        `;
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    const loader = new ProductLoader('.products-grid', 'data/products.json');
    loader.init();
});

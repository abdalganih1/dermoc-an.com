/**
 * Dermocean Product Loader
 * Fetches products from JSON and renders cards dynamically
 */
class ProductLoader {
    constructor(gridSelector, jsonPath) {
        this.grid = document.querySelector(gridSelector);
        this.jsonPath = jsonPath;
        this.lang = document.documentElement.getAttribute('lang') || 'en';
        this.isRTL = document.documentElement.getAttribute('dir') === 'rtl';
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

    createCard(product) {
        const name = this.isRTL && product.name_ar ? product.name_ar : product.name;
        const desc = this.isRTL && product.description_ar ? product.description_ar : product.description;
        const btnText = this.isRTL ? 'التفاصيل' : 'Details';

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

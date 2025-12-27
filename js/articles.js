/**
 * Articles Page Logic
 * Loads articles from JSON and renders them dynamically
 */

async function loadArticles() {
    const lang = localStorage.getItem('dermocean_lang') || 'en';

    // Get localized field based on language
    function getField(article, field) {
        if (lang === 'ar' && article[field + '_ar']) return article[field + '_ar'];
        if (lang === 'fr' && article[field + '_fr']) return article[field + '_fr'];
        if (lang === 'tr' && article[field + '_tr']) return article[field + '_tr'];
        return article[field];
    }

    // Localized "Read More" text
    const readMoreText = {
        'en': 'Read More',
        'ar': 'اقرأ المزيد',
        'fr': 'Lire Plus',
        'tr': 'Devamını Oku'
    };

    try {
        const res = await fetch('data/articles.json');
        const articles = await res.json();

        const grid = document.getElementById('articles-grid');
        if (!grid) return;

        grid.innerHTML = articles.map(article => `
            <article class="article-card">
                <div class="article-image">
                    <img src="${article.image}" alt="${getField(article, 'title')}">
                    <span class="article-category">${article.category}</span>
                </div>
                <div class="article-content">
                    <span class="article-date">
                        <i class="far fa-calendar-alt"></i> ${formatDate(article.date, lang)}
                    </span>
                    <h3>${getField(article, 'title')}</h3>
                    <p>${getField(article, 'excerpt')}</p>
                    <a href="article.html?slug=${article.slug}" class="article-link">
                        ${readMoreText[lang] || 'Read More'} <i class="fas fa-arrow-${lang === 'ar' ? 'left' : 'right'}"></i>
                    </a>
                </div>
            </article>
        `).join('');

    } catch (error) {
        console.error('Error loading articles:', error);
        const grid = document.getElementById('articles-grid');
        if (grid) {
            grid.innerHTML = '<p class="error-message">Unable to load articles. Please try again later.</p>';
        }
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// FAQ Toggle
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');

    // Close all FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    // Open clicked if it was closed
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Initialize on page load
// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadArticles();

    // Reload on language change
    document.addEventListener('languageChanged', () => {
        loadArticles();
    });
});

/**
 * Articles Page Logic
 * Loads articles from JSON and renders them dynamically
 */

async function loadArticles() {
    const lang = localStorage.getItem('dermocean_lang') || 'en';
    const isAr = lang === 'ar';

    try {
        const res = await fetch('data/articles.json');
        const articles = await res.json();

        const grid = document.getElementById('articles-grid');
        if (!grid) return;

        grid.innerHTML = articles.map(article => `
            <article class="article-card">
                <div class="article-image">
                    <img src="${article.image}" alt="${isAr ? article.title_ar : article.title}">
                    <span class="article-category">${article.category}</span>
                </div>
                <div class="article-content">
                    <span class="article-date">
                        <i class="far fa-calendar-alt"></i> ${formatDate(article.date)}
                    </span>
                    <h3>${isAr ? article.title_ar : article.title}</h3>
                    <p>${isAr ? article.excerpt_ar : article.excerpt}</p>
                    <a href="#" class="article-link">
                        ${isAr ? 'اقرأ المزيد' : 'Read More'} <i class="fas fa-arrow-right"></i>
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
document.addEventListener('DOMContentLoaded', loadArticles);

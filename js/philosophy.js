/**
 * Dermocéan - Natural Philosophy Page JavaScript
 * Scroll animations, carousel, and particle effects
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initParticles();
    initScrollAnimations();
    initCarousel();
    initTimeline();
});

/**
 * Particles.js Configuration for Hero
 */
function initParticles() {
    if (typeof particlesJS === 'undefined' || !document.getElementById('particles-js')) {
        return;
    }

    particlesJS('particles-js', {
        particles: {
            number: {
                value: 60,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#ffffff', '#c4a35a', '#8f7080']
            },
            shape: {
                type: ['circle', 'triangle'],
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 4,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

/**
 * Intersection Observer for Scroll Animations
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Trigger specific animations
                if (entry.target.classList.contains('timeline-container')) {
                    triggerTimelineAnimation();
                }
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.section-content, .philosophy-card, .timeline-container').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Ingredient Carousel
 */
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dotsContainer = document.querySelector('.carousel-dots');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    let autoPlayInterval;

    // Dynamic RTL check - checks on each action instead of once at load
    function isRTL() {
        return document.dir === 'rtl' || document.documentElement.dir === 'rtl';
    }

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.carousel-dot');

    function updateCarousel() {
        const direction = isRTL() ? 1 : -1;
        track.style.transform = `translateX(${direction * currentIndex * 100}%)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        if (currentIndex < 0) currentIndex = slides.length - 1;
        if (currentIndex >= slides.length) currentIndex = 0;
        updateCarousel();
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    // Event listeners - buttons always work the same way
    // CSS handles visual icon flip for RTL
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }

    // Auto-play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Pause on hover
    track.addEventListener('mouseenter', stopAutoPlay);
    track.addEventListener('mouseleave', startAutoPlay);

    // Touch/Swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoPlay();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            // Swipe left (diff > 0) = next, Swipe right (diff < 0) = prev
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    // Keyboard navigation - arrows move logically through slides
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Start auto-play
    startAutoPlay();
}

/**
 * Timeline Animation
 */
function initTimeline() {
    // Timeline points click handler
    const timelinePoints = document.querySelectorAll('.timeline-point');

    timelinePoints.forEach((point, index) => {
        point.addEventListener('click', () => {
            // Update active states
            timelinePoints.forEach((p, i) => {
                p.classList.toggle('active', i <= index);
            });

            // Update progress bar
            const progress = document.querySelector('.timeline-progress');
            if (progress) {
                const percentage = (index / (timelinePoints.length - 1)) * 100;
                progress.style.width = `${percentage}%`;
            }
        });
    });
}

function triggerTimelineAnimation() {
    const progress = document.querySelector('.timeline-progress');
    const points = document.querySelectorAll('.timeline-point');

    if (progress) {
        progress.classList.add('animate');
    }

    // Animate points sequentially
    points.forEach((point, index) => {
        setTimeout(() => {
            point.classList.add('active');
        }, 400 * (index + 1));
    });
}

/**
 * Counter Animation (for stats if needed)
 */
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }

    updateCounter();
}

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/**
 * Dermocean Before/After Comparison Slider
 * Handles touch and mouse events to resize the overlay image
 * RTL Support included
 */
class ComparisonSlider {
    constructor(elementOrSelector) {
        if (typeof elementOrSelector === 'string') {
            this.container = document.querySelector(elementOrSelector);
        } else {
            this.container = elementOrSelector;
        }

        if (!this.container) return;

        this.overlay = this.container.querySelector('.img-comp-overlay');
        this.handle = this.container.querySelector('.comparison-slider-handle');
        this.overlayImg = this.overlay.querySelector('img');
        this.backgroundImg = this.container.querySelector('.comparison-image img');

        this.clicked = false;
        this.w = 0;
        this.h = 0;
        this.isRTL = false;

        this.init();
    }

    init() {
        // Get dimensions
        this.updateDimensions();

        // Check RTL
        this.updateRTLState();

        // Set initial width to 50%
        this.slide(this.w / 2);

        // Add event listeners
        this.handle.addEventListener("mousedown", (e) => this.slideReady(e));
        this.handle.addEventListener("touchstart", (e) => this.slideReady(e), { passive: false });

        window.addEventListener("mouseup", () => this.slideFinish());
        window.addEventListener("touchend", () => this.slideFinish());

        window.addEventListener("mousemove", (e) => this.slideMove(e));
        window.addEventListener("touchmove", (e) => this.slideMove(e), { passive: false });

        // Window resize
        window.addEventListener("resize", () => {
            this.updateDimensions();
            this.slide(this.w / 2);
        });

        // Watch for language changes (RTL toggle)
        const observer = new MutationObserver(() => {
            this.updateRTLState();
            this.updateDimensions();
            // Reset to center position when direction changes
            setTimeout(() => this.slide(this.w / 2), 100);
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['dir']
        });
    }

    updateRTLState() {
        this.isRTL = document.documentElement.getAttribute('dir') === 'rtl';
        // Reset overlay styles when switching direction
        this.overlay.style.width = '';
        this.overlay.style.left = '';
        this.overlay.style.right = '';
        this.overlay.style.clipPath = '';
        this.handle.style.left = '';
        this.handle.style.right = '';
    }

    updateDimensions() {
        this.w = this.container.offsetWidth;
        this.h = this.container.offsetHeight;

        // Ensure overlay image matches container width
        if (this.overlayImg) {
            this.overlayImg.style.width = this.w + "px";
            this.overlayImg.style.height = this.h + "px";
            this.overlayImg.style.objectFit = "cover";
            this.overlayImg.style.maxWidth = "none";
        }

        // Ensure background image styling
        if (this.backgroundImg) {
            this.backgroundImg.style.width = "100%";
            this.backgroundImg.style.height = "100%";
            this.backgroundImg.style.objectFit = "cover";
        }
    }

    slideReady(e) {
        e.preventDefault();
        this.clicked = true;
    }

    slideFinish() {
        this.clicked = false;
    }

    slideMove(e) {
        if (!this.clicked) return;

        let pos = this.getCursorPos(e);

        // Clamp position
        if (pos < 0) pos = 0;
        if (pos > this.w) pos = this.w;

        this.slide(pos);
    }

    getCursorPos(e) {
        const rect = this.container.getBoundingClientRect();
        let x = 0;

        if (e.touches && e.touches.length > 0) {
            x = e.touches[0].clientX - rect.left;
        } else if (e.changedTouches && e.changedTouches.length > 0) {
            x = e.changedTouches[0].clientX - rect.left;
        } else {
            x = e.clientX - rect.left;
        }

        // For RTL, we need to calculate from the right side
        if (this.isRTL) {
            x = this.w - x;
        }

        return x;
    }

    slide(x) {
        if (this.isRTL) {
            // RTL: overlay starts from right
            this.overlay.style.width = x + "px"; // Use width based on calculated position from right
            this.overlay.style.right = "0";
            this.overlay.style.left = "auto";
            this.overlay.style.clipPath = "none"; // Remove clip-path as it hides the border
            this.handle.style.left = "auto";
            this.handle.style.right = (x - 20) + "px"; // 20 = half of handle width
        } else {
            // LTR: overlay starts from left (default)
            this.overlay.style.width = x + "px";
            this.overlay.style.left = "0";
            this.overlay.style.right = "auto";
            this.overlay.style.clipPath = "none";
            this.handle.style.right = "auto";
            this.handle.style.left = (x - 20) + "px";
        }
    }
}

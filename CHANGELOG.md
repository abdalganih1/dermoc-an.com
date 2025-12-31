# Dermocéan Website - Changelog

## [2025-12-31] - Natural Philosophy Page

### Added
- **Natural Philosophy Page** (`natural-philosophy.html`)
  - Hero section with Particles.js animated background
  - 4 Philosophy Cards (100% Botanical, Microbiome Safe, No Harsh Chemicals, Fast Recovery)
  - 5-Day Recovery Timeline with animated progress bar
  - Ingredient Carousel with touch/swipe/keyboard support
  - CTA section linking to registration

- **New CSS** (`css/philosophy.css`)
  - Keyframe animations (gradientShift, floatUp, pulse, shimmer, fadeInUp, etc.)
  - Glassmorphism effects
  - RTL support for Arabic
  - Responsive design for mobile

- **New JavaScript** (`js/philosophy.js`)
  - Particles.js integration
  - Intersection Observer for scroll animations
  - Interactive carousel with auto-play
  - Dynamic RTL detection

- **Generated Images** (`images/ingredients/`)
  - `marine-algae.png` - Marine algae close-up
  - `calendula.png` - Calendula flowers
  - `aloe-vera.png` - Aloe vera plant
  - `chamomile.png` - Chamomile flowers

### Modified
- **`components/header.html`**
  - Added "Natural Philosophy" link to Resources dropdown (desktop + mobile)

- **`js/main.js`**
  - Added translations for Natural Philosophy page in all 4 languages (EN, AR, FR, TR)
  - New translation keys: philHeroTitle, philHeroDesc, philCoreTitle, etc.

### Fixed
- RTL carousel button direction for Arabic language
- Carousel now uses dynamic `isRTL()` function instead of static check

---

## Previous Updates

### Footer & Contact
- Fixed phone number link (LTR, clickable)
- Fixed Instagram profile link
- Fixed email compose link

### Articles
- Updated all articles to use feminine language forms in Arabic

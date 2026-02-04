# DERMOCÉAN - Professional Skincare Ecosystem

**DERMOCÉAN** is an avant-garde, professional-grade skincare platform designed specifically for beauty centers and aesthetic professionals. It combines high-performance marine algae formulations with a cutting-edge, interactive digital experience.

## ✨ Key Features

- 🌍 **Multi-Language Support**: Fully localized in English, Arabic, French, and Turkish with dynamic RTL/LTR switching.
- 🧩 **Component Architecture**: Modular design using dynamic loading for headers, footers, and interactive elements.
- 🌓 **Interactive Before/After**: Real-time comparison slider showcasing clinical results for pigmentation, acne, and texture.
- 🧪 **Treatment Protocols**: Detailed professional application guides for Gentle, Moderate, and Intensive treatments.
- 🍃 **Natural Philosophy**: Interactive educational pages with Particles.js animations and glassmorphic UI.
- 📱 **Mobile-First Design**: Optimized for aesthetic professionals on the go, with ultra-smooth micro-interactions.

## 🛠 Technology Stack

- **Frontend**: HTML5, CSS3 (Modern Flex/Grid), Vanilla JavaScript (ES6+).
- **Libraries**: 
  - `Particles.js` (Visual effects)
  - `Font Awesome` (Iconography)
  - `Google Fonts` (Typography)
- **Architecture**: Asynchronous component loading system for high performance.

## 📁 Project Structure

```text
dermocéan.com/
├── Assets/             # Design assets and logos
├── components/         # Shared HTML snippets (header, footer)
├── css/                # Modular stylesheets (style, philosophy, product)
├── data/               # Product and article data
├── fonts/              # Local font assets
├── images/             # Optimized clinical and product imagery
├── js/                 # Core logic, component loader, and translations
├── media/              # Video and high-res media
└── index.html          # Main entry point
```

## 🚀 How to Run Locally

Because the project uses asynchronous fetching for its component architecture, it **must** be served through a web server to avoid CORS issues.

### Option 1: NPM (Modern Way) 🚀
Run the following command to install the server and start:
```bash
npm install && npm run dev
```
Then visit `http://localhost:3000` (or the port shown in terminal).

### Option 2: VS Code
1. Install the **Live Server** extension.
2. Click **"Go Live"** in the bottom status bar.

### Option 3: Python HTTP Server
```bash
python -m http.server 8000
```

## 🌐 Deployment

### آلية النشر التلقائي (Auto-Deploy via Git)

يعتمد المشروع على **cPanel Git Deployment** للنشر التلقائي:

1. **Git Push** → يتم دفع التغييرات إلى GitHub
2. **cPanel Webhook** → يستلم الإشعار ويسحب التحديثات تلقائياً
3. **`.cpanel.yml`** → ينفذ أوامر النشر

### خطوات النشر اليدوي

```bash
# 1. إضافة التغييرات
git add .

# 2. عمل Commit
git commit -m "Update: وصف التحديث"

# 3. دفع التغييرات للسيرفر
git push origin main
```

### ملف `.cpanel.yml` (Deployment Script)

```yaml
deployment:
  tasks:
    - export DEPLOYPATH=/home/jt30e3li9al4/public_html/xn--dermocan-g1a.com/
    - /bin/cp -R * $DEPLOYPATH
    - /bin/chmod -R 755 $DEPLOYPATH
    - /bin/find $DEPLOYPATH -type f -exec chmod 644 {} \;
```

### ملاحظات مهمة
- ✅ تأكد من بقاء `.htaccess` و `.cpanel.yml` في المجلد الرئيسي
- ✅ المسار النهائي: `https://dermocéan.com/`
- ✅ النشر يحدث تلقائياً بعد كل `git push`

---
*Created by Antigravity AI for Dermocean.*

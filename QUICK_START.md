# Quick Start Guide - Testimonials Slider Extension

## 🎯 What Was Created

A complete Theme App Extension for Shopify product pages featuring:
- Testimonials slider with avatar, name, star rating, and review
- Gooey morphing active indicator
- 185 lines of vanilla JavaScript (no libraries)
- Full a11y and reduced motion support

## 📍 App Location

```
/Users/ismaeljarias/Desktop/training/shopify/testimonials-app/testimonial-app/
```

## 📦 Files Created (746 total lines)

```
extensions/testimonials-slider/
├── blocks/testimonials.liquid          (210 lines) - Main block template
├── assets/testimonials.css             (320 lines) - Styles + gooey effect
├── assets/testimonials.js              (185 lines) - Slider logic
├── locales/en.default.json             (25 lines)  - Translations
└── shopify.extension.toml              (6 lines)   - Config
```

## 🚀 Commands to Run

### 1. Navigate to App

```bash
cd /Users/ismaeljarias/Desktop/training/shopify/testimonials-app/testimonial-app
```

### 2. Start Development Server

```bash
npm run dev
```

**OR**

```bash
npx shopify app dev
```

**What happens:**
- Connects to your Shopify Partner account (login required)
- Creates/updates app in Partner Dashboard
- Installs app on your development store
- Starts local dev server
- Provides preview URL

### 3. Preview in Theme Editor

1. Open the preview URL from the terminal
2. Go to **Online Store > Themes > Customize**
3. Navigate to any **Product page**
4. Click **Add block** (left sidebar)
5. Find **"Testimonials Slider"** under **Apps**
6. Add to page and configure settings

### 4. Deploy to Production

```bash
npm run deploy
npx shopify app release
```

## ⚙️ Configuration Options

### In Theme Editor (via Settings Panel)
- **5 Testimonials** (each with):
  - Avatar image (optional)
  - Customer name
  - Star rating (1-5 scale)
  - Review text

### In Code (if customization needed)

**Colors** (`assets/testimonials.css` lines 4-10):
```css
--primary-color: #2563eb;    /* Active indicator */
--star-color: #fbbf24;       /* Stars */
```

**Autoplay Delay** (`assets/testimonials.js` line 14):
```javascript
this.autoplayDelay = 5000;   // milliseconds
```

**Avatar Size** (`assets/testimonials.css` line 3):
```css
--avatar-size: 80px;
```

## ✅ Features Checklist

### Functionality
- [x] Horizontal scroll-snap slider
- [x] Prev/next navigation buttons
- [x] Indicator dots with gooey effect
- [x] 5-second autoplay (pauses on hover/focus)
- [x] Mobile responsive layout

### Accessibility
- [x] Keyboard navigation (Tab, Arrow keys)
- [x] ARIA labels and roles
- [x] Screen reader support
- [x] Focus indicators

### Reduced Motion
- [x] Respects `prefers-reduced-motion`
- [x] Disables animations
- [x] Removes gooey filter
- [x] Instant scroll behavior

### No Dependencies
- [x] Zero external libraries
- [x] Vanilla JavaScript
- [x] Native browser APIs only

## 🧪 Testing Checklist

### Desktop
- [ ] Click prev/next buttons
- [ ] Click indicator dots
- [ ] Verify gooey morph effect
- [ ] Test keyboard arrows
- [ ] Hover to pause autoplay

### Mobile
- [ ] Swipe to navigate
- [ ] Verify stacked layout
- [ ] Check nav buttons hidden
- [ ] Test touch interactions

### Accessibility
- [ ] Tab through all controls
- [ ] Test with screen reader
- [ ] Enable reduced motion
- [ ] Test high contrast mode

## 🎨 How Gooey Effect Works

**SVG Filter in Liquid** (`blocks/testimonials.liquid` lines 137-144):
```html
<svg class="gooey-filter">
  <defs>
    <filter id="gooey">
      <feGaussianBlur stdDeviation="5" />
      <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" />
      <feComposite operator="atop"/>
    </filter>
  </defs>
</svg>
```

**Applied to Indicators** (`assets/testimonials.css` line 183):
```css
.indicators-wrapper {
  filter: url(#gooey);
}
```

**Disabled for Reduced Motion** (`assets/testimonials.css` line 263):
```css
@media (prefers-reduced-motion: reduce) {
  .indicators-wrapper {
    filter: none;
  }
}
```

## 🔍 File Locations Reference

| Feature | File | Lines |
|---------|------|-------|
| Block template & schema | `blocks/testimonials.liquid` | 1-210 |
| Gooey SVG filter | `blocks/testimonials.liquid` | 137-144 |
| Slider HTML structure | `blocks/testimonials.liquid` | 8-131 |
| All styles | `assets/testimonials.css` | 1-320 |
| Gooey indicator CSS | `assets/testimonials.css` | 167-189 |
| Reduced motion styles | `assets/testimonials.css` | 245-267 |
| Slider class | `assets/testimonials.js` | 6-163 |
| Autoplay logic | `assets/testimonials.js` | 152-163 |
| Keyboard navigation | `assets/testimonials.js` | 72-81 |
| Extension config | `shopify.extension.toml` | 1-6 |

## 📖 Documentation

Full documentation: `TESTIMONIALS_EXTENSION_README.md`

## 🎯 Next Steps

1. Run `npm run dev` in the app directory
2. Login to Shopify Partner account when prompted
3. Select your development store
4. Open the preview URL
5. Add block to product page
6. Configure testimonials
7. Test all features
8. Deploy with `npm run deploy`

## 💡 Tips

- **Demo content**: Extension includes 3 default testimonials if none configured
- **Avatar fallback**: Shows customer's first initial if no image uploaded
- **Autoplay**: Automatically pauses when tab is hidden
- **Scroll snap**: Works natively without JavaScript
- **Hot reload**: Changes to files reflect immediately in dev mode

## ⚠️ Important Notes

- Extension must be run via `npm run dev` to appear in theme editor
- Requires Shopify Partner account
- Requires development store
- Changes in dev mode update in real-time
- Deploy creates permanent version

## 🐛 Common Issues

**Extension not showing:**
- Verify dev server is running
- Check terminal for errors
- Refresh theme editor

**Gooey effect not working:**
- Check browser supports SVG filters
- Verify reduced motion is not enabled
- Inspect element in DevTools

**Autoplay not working:**
- Check reduced motion preference
- Verify testimonials are visible
- Check browser console

---

**Ready to start?**

```bash
cd /Users/ismaeljarias/Desktop/training/shopify/testimonials-app/testimonial-app
npm run dev
```

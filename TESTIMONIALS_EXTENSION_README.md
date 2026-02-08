# Testimonials Slider - Theme App Extension

A self-contained Shopify Theme App Extension that adds a testimonials slider block to product pages with:
- Avatar + Name + Star Rating + Review
- Gooey active indicator effect
- Minimal JavaScript (no external libraries)
- Full accessibility support
- Reduced motion compliance

## 📁 File Structure

```
testimonial-app/
├── extensions/
│   └── testimonials-slider/
│       ├── blocks/
│       │   └── testimonials.liquid          # Main block template
│       ├── assets/
│       │   ├── testimonials.css            # Styles with gooey effect
│       │   └── testimonials.js             # Minimal slider logic (185 lines)
│       ├── locales/
│       │   └── en.default.json             # Translations
│       └── shopify.extension.toml          # Extension configuration
├── shopify.app.toml                         # App configuration
└── package.json
```

## 🚀 Installation & Preview

### Step 1: Navigate to App Directory

```bash
cd /Users/ismaeljarias/Desktop/training/shopify/testimonials-app/testimonial-app
```

### Step 2: Install Dependencies (if needed)

```bash
npm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

Or directly:

```bash
npx shopify app dev
```

This will:
1. Start a development server
2. Connect to your Shopify Partner account
3. Install the app on your development store
4. Provide a preview URL

### Step 4: Add Block to Product Page

1. **Open the preview URL** provided by the dev server
2. Go to **Online Store > Themes > Customize**
3. Navigate to any **Product page**
4. In the left sidebar, click **Add block**
5. Under **Apps**, find **"Testimonials Slider"**
6. Click to add it to your product page
7. Configure up to 5 testimonials with:
   - Avatar image (optional, shows initial if not provided)
   - Customer name
   - Star rating (1-5)
   - Review text

### Step 5: Test Features

#### Functionality
- [ ] Slider scrolls smoothly with scroll-snap
- [ ] Prev/next buttons navigate testimonials
- [ ] Indicator dots navigate to specific testimonials
- [ ] Active indicator has gooey morph effect
- [ ] Autoplay advances every 5 seconds
- [ ] Autoplay pauses on hover/focus

#### Accessibility
- [ ] Keyboard navigation (Tab, Arrow keys)
- [ ] Screen reader announces testimonials
- [ ] All buttons have aria-labels
- [ ] Focus indicators visible

#### Reduced Motion
- [ ] Enable "Reduce motion" in OS settings
- [ ] Verify smooth animations disabled
- [ ] Verify gooey effect removed
- [ ] Verify scroll behavior is instant

#### Responsive
- [ ] Desktop: horizontal layout with avatar on left
- [ ] Mobile: stacked layout with centered content
- [ ] Mobile: prev/next buttons hidden
- [ ] Dots centered and accessible

## 🎨 Features

### Gooey Indicator Effect
The active indicator uses an SVG filter to create a morphing blob effect:
- Only applied to the indicator wrapper (not entire page)
- Automatically disabled with `prefers-reduced-motion`
- Pure CSS + SVG (no JavaScript for the effect)

### Minimal JavaScript
- **185 lines** of vanilla JS
- **No external libraries** or dependencies
- Class-based architecture
- ES6+ features

### Full Accessibility
- Semantic HTML with proper ARIA roles
- Keyboard navigation support
- Screen reader friendly
- Focus management
- High contrast mode support

### Reduced Motion
Respects `prefers-reduced-motion`:
- Disables smooth scrolling
- Removes gooey filter
- Disables autoplay
- Simplifies transitions

## 🛠️ Customization

### Modify Colors

Edit `extensions/testimonials-slider/assets/testimonials.css:4-10`:

```css
.testimonials-slider {
  --primary-color: #2563eb;    /* Active indicator */
  --star-color: #fbbf24;       /* Star rating */
  --bg-card: #ffffff;          /* Card background */
  --text-primary: #1f2937;     /* Names */
  --text-secondary: #6b7280;   /* Reviews */
  --border-color: #e5e7eb;     /* Borders */
}
```

### Modify Autoplay Delay

Edit `extensions/testimonials-slider/assets/testimonials.js:14`:

```javascript
this.autoplayDelay = 5000; // milliseconds
```

### Change Avatar Size

Edit `extensions/testimonials-slider/assets/testimonials.css:3`:

```css
--avatar-size: 80px;
```

## 📦 Deployment

### Deploy Extension

```bash
npm run deploy
```

Or:

```bash
npx shopify app deploy
```

### Create App Version

```bash
npx shopify app release
```

### Install on Production Store

1. Go to your Shopify Partner Dashboard
2. Navigate to your app
3. Click "Select stores"
4. Install on merchant stores

## 🧪 Technical Details

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid & Flexbox
- Scroll Snap API
- IntersectionObserver API
- CSS Custom Properties

### Performance
- Lazy loading images
- Passive scroll listeners
- Minimal reflows/repaints
- No layout thrashing
- Efficient event delegation

### Dependencies
- **Zero runtime dependencies**
- Uses Shopify's built-in Liquid templating
- Native browser APIs only

## 📄 Files Created

| File | Lines | Purpose |
|------|-------|---------|
| `blocks/testimonials.liquid` | 210 | Main block template with schema |
| `assets/testimonials.css` | 320 | All styles including gooey effect |
| `assets/testimonials.js` | 185 | Slider functionality |
| `locales/en.default.json` | 25 | English translations |
| `shopify.extension.toml` | 6 | Extension configuration |

**Total: 746 lines of code**

## 🎯 Constraints Met

- ✅ Self-contained extension (all assets included)
- ✅ Minimal JS (185 lines, no libraries)
- ✅ No external dependencies
- ✅ Full accessibility support
- ✅ Reduced motion compliance
- ✅ Product page compatible
- ✅ Gooey active indicator
- ✅ Avatar/name/stars/review layout

## 🐛 Troubleshooting

### Extension not appearing in theme editor
1. Ensure dev server is running: `npm run dev`
2. Check browser console for errors
3. Verify extension is in `extensions/` directory
4. Restart dev server

### Gooey effect not showing
1. Check browser DevTools for SVG filter support
2. Verify `filter: url(#gooey)` in CSS
3. Check if reduced motion is enabled (disables effect)

### Autoplay not working
1. Verify `prefersReducedMotion` is false
2. Check browser console for errors
3. Ensure testimonials are visible in viewport

## 📞 Support

For issues or questions:
1. Check Shopify CLI documentation: https://shopify.dev/docs/apps/tools/cli
2. Review theme extension docs: https://shopify.dev/docs/apps/online-store/theme-app-extensions
3. Check browser console for errors

## 📝 License

This extension is provided as-is for use in Shopify apps.

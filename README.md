# Testimonials Slider - Shopify Theme App Extension

A customizable testimonials slider for Shopify product pages featuring a smooth "gooey" morphing indicator effect. Display up to 3 customer testimonials with avatars, star ratings, and reviews in an accessible, responsive slider.

## Features

- **Up to 3 Testimonials** - Add customer reviews with conditional display (only shows testimonials with names filled)
- **Automatic Slider** - 1 testimonial = static display, 2+ testimonials = automatic slider with navigation
- **Gooey Indicator Effect** - SVG filter creates morphing active dot animation
- **Fully Customizable Colors** - Control arrow and indicator dot colors through theme settings
- **Responsive Design** - Horizontal layout on desktop, stacked on mobile
- **Accessibility** - Full ARIA labels, keyboard navigation, screen reader support
- **Reduced Motion Support** - Respects user preferences for reduced motion
- **Auto-play** - 5-second rotation (pauses on hover/focus)
- **Vanilla JavaScript** - ~150 lines, no external dependencies

## Extension Structure

```
extensions/testimonials-slider/
├── blocks/
│   └── testimonials.liquid       # Main block template
├── assets/
│   ├── testimonials.css         # Styles with gooey effect
│   └── testimonials.js          # Slider functionality
├── locales/
│   └── en.default.json          # Translations
└── shopify.extension.toml       # Extension configuration
```

## Settings

### Color Customization (5 settings)
- **Arrow Color** - Navigation arrow background color (default: `#1f2937`)
- **Arrow Hover Color** - Arrow hover state color (default: `#2563eb`)
- **Dot Color (Inactive)** - Unselected indicator dots (default: `#cbd5e1`)
- **Dot Color (Active)** - Selected indicator dot (default: `#2563eb`)
- **Dot Hover Color** - Dot hover state (default: `#6b7280`)

### Testimonial Settings (12 settings - 3 testimonials × 4 fields)
Each testimonial has:
- **Avatar** - Optional image (shows first letter of name as fallback)
- **Name** - Required to display testimonial
- **Rating** - 1-5 stars (dropdown selector)
- **Review** - Testimonial text (textarea)

## Technical Details

- **Type**: Theme App Extension (not theme section)
- **Target**: `section`
- **Templates**: `["product"]` (appears on product pages only)
- **Settings Count**: 17 total (5 colors + 12 testimonial fields)
- **API Version**: `2024-10`
- **Unique Filter ID**: `#gooey-{{ block.id }}` prevents conflicts when multiple blocks exist

## CSS Variables

Customize appearance by overriding these CSS variables:

```css
--primary-color: #2563eb    /* Blue for active states */
--star-color: #fbbf24       /* Gold for stars */
--bg-card: transparent      /* Card background */
--text-primary: #1f2937     /* Dark text */
--text-secondary: #6b7280   /* Gray text */
--border-color: #e5e7eb     /* Light gray borders */
--avatar-size: 80px         /* Avatar circle size */
--arrow-color: #1f2937      /* Arrow background (customizable) */
--arrow-hover-color: #2563eb /* Arrow hover (customizable) */
--dot-color: #cbd5e1        /* Inactive dots (customizable) */
--dot-active-color: #2563eb /* Active dot (customizable) */
--dot-hover-color: #6b7280  /* Dot hover (customizable) */
```

## How It Works

1. User adds "Testimonials" block to product page in theme editor
2. Fills in Name, Rating, Review for up to 3 testimonials (Avatar optional)
3. Liquid template counts filled testimonials (checks if name != blank)
4. Renders only testimonials with names filled
5. If 2+ testimonials: adds navigation controls, JavaScript initializes slider
6. If 1 testimonial: shows static card, no navigation

## Responsive Behavior

- **Desktop**: Horizontal card layout, visible navigation arrows
- **Mobile**: Stacked card layout, hidden navigation arrows (swipe enabled)
- **Breakpoint**: 640px

## Accessibility Features

- ARIA labels for all interactive elements
- Keyboard navigation support (arrow keys, tab)
- Screen reader announcements for testimonial count
- Focus indicators on buttons and dots
- High contrast mode support
- Reduced motion support (disables animations/autoplay)

## Installation & Development

### Requirements

1. [Node.js](https://nodejs.org/en/download/) installed
2. [Shopify Partner Account](https://partners.shopify.com/signup)
3. Development store or [Shopify Plus sandbox](https://help.shopify.com/en/partners/dashboard/managing-stores/plus-sandbox-store)

### Local Development

Run the development server using your preferred package manager:

**Using npm:**
```shell
npm run dev
```

**Using yarn:**
```shell
yarn dev
```

**Using pnpm:**
```shell
pnpm run dev
```

This will:
1. Start the Shopify CLI dev server
2. Configure your host theme
3. Generate a preview URL (e.g., `http://127.0.0.1:9293`)
4. Watch for file changes and auto-rebuild

### Testing

1. Open the generated preview URL
2. Navigate to **Theme Editor** → **Product Page**
3. Click "Add block" and select "Testimonials"
4. Configure testimonials and customize colors
5. Preview changes in real-time

## Deployment

The extension is automatically deployed when you push to your connected Shopify app. No manual deployment steps required.

## Customization Tips

### Adjusting Layout
- Edit `testimonials.css` lines 14-16 to change max-width and spacing
- Modify `.testimonial-card` padding (line 50) for tighter/looser cards
- Change `.testimonial-nav` size (lines 137-138) for larger/smaller arrows

### Changing Animation Speed
- Edit `testimonials.js` auto-play interval (search for `setInterval`)
- Modify `.indicator-dot` transition duration in CSS (line 199)

### Gooey Effect Intensity
- Adjust `stdDeviation` value in liquid template (line 81) - higher = more blur
- Modify `feColorMatrix` values (line 82) - last number controls spread

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 not supported (uses CSS Grid, CSS variables, modern JS)
- Graceful degradation for older browsers

## Performance

- Lazy loading images
- Deferred JavaScript loading
- CSS file: ~8KB minified
- JS file: ~4KB minified
- No external dependencies

## Troubleshooting

**Arrows/dots not showing:**
- Check that you have 2+ testimonials with names filled
- Verify color settings aren't matching background

**Slider not working:**
- Check browser console for JavaScript errors
- Ensure `testimonials.js` is loading (check Network tab)

**Layout broken on mobile:**
- Clear browser cache
- Check for CSS conflicts with theme styles

## Design Decisions

- **Limited to 3 testimonials** - Keeps within Shopify's 17-setting limit for theme extensions
- **Settings-based approach** - Simpler than dynamic blocks, better performance
- **Optional avatars** - First letter fallback reduces setup friction
- **Single container block** - Easier to manage than separate testimonial blocks
- **Gooey effect on indicators only** - Better performance than full-page filters

## Resources

- [Shopify Theme App Extensions](https://shopify.dev/docs/apps/build/online-store/theme-app-extensions)
- [Liquid Template Language](https://shopify.dev/docs/api/liquid)
- [App Extension Settings Schema](https://shopify.dev/docs/api/app-extensions/theme-app-extensions/settings-schema)
- [Shopify CLI](https://shopify.dev/docs/apps/tools/cli)

## License

This project is available for use under standard Shopify app development terms.

---

**Built with:** Shopify Theme App Extensions, Liquid, Vanilla JavaScript, CSS3
**Version:** 1.0.0
**Last Updated:** February 2026

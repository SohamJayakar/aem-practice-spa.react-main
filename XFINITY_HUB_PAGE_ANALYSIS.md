# Xfinity Hub Page - Structure & Design Analysis
**URL:** https://www.xfinity.com/hub  
**Date:** April 20, 2026  
**Purpose:** Reference for AEM React SPA replication  

---

## 1. PAGE LAYOUT OVERVIEW

### Overall Structure
```
┌─────────────────────────────────────────┐
│          HEADER (Sticky)                 │
├─────────────────────────────────────────┤
│                                         │
│      HERO/FEATURE SECTION               │
│   (Full Width, Gradient Background)     │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│   FEATURED CONTENT GRID                 │
│   (Card sections by category)           │
│                                         │
│   • Internet Cards (Variable width/cols)│
│   • Entertainment Cards (Variable)      │
│   • Mobile Cards (Variable)             │
│   • Smart Home / Experience Cards       │
│                                         │
├─────────────────────────────────────────┤
│      FOOTER (Dark Background)           │
│   (4-Column Layout + Social Links)      │
└─────────────────────────────────────────┘
```

### Navigation Structure
- **Header:** Sticky, stays visible on scroll
- **Main Navigation:** Horizontal menu in header
  - Hub Home
  - Internet
  - Entertainment (TV/Video)
  - Free TV & Movies
  - Mobile
  - Smart Home
- **Footer Navigation:** Links organized by category

---

## 2. HERO/FEATURE SECTION

### Specifications
| Attribute | Details |
|-----------|---------|
| **Layout** | Full-width, hero image background with gradient overlay |
| **Height** | Approximately 400-500px on desktop |
| **Background** | Dark gradient overlay on background image |
| **Alignment** | Centered content, headline + description + CTA |

### Components
- **Headline:** Large, bold, white text
  - Font Size: ~2.5rem (40-44px)
  - Font Weight: 700 (Bold)
  - Color: #FFFFFF (white)
  - Max Width: ~600px center-aligned

- **Description/Subheadline:** Supporting text
  - Font Size: ~1.1rem (17-18px)
  - Color: #FFFFFF (white) with slight opacity
  - Margin Top: ~16px bottom of headline

- **CTA Button:**
  - Background: #0066CC (Xfinity Blue)
  - Text: White, ~16px, bold
  - Padding: ~12px 32px (button-sized)
  - Hover State: Background darkens to #0052A3
  - Border Radius: 4-6px
  - Margin Top: ~24px from description

- **Category Badge (Optional):**
  - Position: Top-left or top-center
  - Background: Semi-transparent dark overlay
  - Text: Category name (Internet, Entertainment, etc.)
  - Styling: Small text, 12px, 500 weight

### Background Styling
- Gradient overlay: Dark (rgba 0,0,0 with ~0.4-0.5 opacity) to transparent
- Direction: Top to bottom
- Allows background image visibility while ensuring text readability

---

## 3. CARD COMPONENTS

### Grid Layout
- **Desktop (1200px+):** 3-column or 4-column layout
- **Tablet (768px-1199px):** 2-column layout
- **Mobile (<768px):** 1-column (full-width stack)

### Card Structure

#### Card Dimensions
| Screen | Columns | Card Width | Gap/Padding |
|--------|---------|-----------|------------|
| Desktop | 3-4 | ~280-320px | 16-24px |
| Tablet | 2 | ~48% | 16px |
| Mobile | 1 | 100% | Full padding |

#### Card Content (Top to Bottom)
1. **Card Image**
   - Aspect Ratio: 16:9 or 4:3
   - Width: 100% of card
   - Height: ~180-200px (16:9 ratio)
   - Object-fit: cover
   - Hover Effect: Subtle zoom (scale 1.05) with ease transition

2. **Category Badge**
   - Position: Absolute, top-left overlay on image
   - Background: Semi-transparent dark (rgba 0,0,0,0.6)
   - Text: White, 11-12px, 600 weight
   - Padding: 6-8px 12-16px
   - Border Radius: 3px
   - Examples: "Internet", "Entertainment", "Mobile", "Smart Home", "Experience"

3. **Card Title**
   - Font Size: 18-20px
   - Font Weight: 600
   - Color: #231F20 (dark gray/black)
   - Margin: 16px bottom
   - Line Height: 1.4
   - Padding: 16px (sides and top from image)
   - Max Lines: 2-3

4. **Card Description**
   - Font Size: 14-15px
   - Color: #666666 (medium gray)
   - Font Weight: 400 (regular)
   - Margin Bottom: 16px
   - Line Height: 1.5
   - Padding: 0 16px

5. **"Learn More" Link**
   - Text: "Learn More" or similar CTA text
   - Font Size: 14px
   - Color: #0066CC (Xfinity Blue)
   - Font Weight: 600
   - Hover: Color changes to #0052A3, slight underline appears
   - Padding: 0 16px 16px 16px
   - Icon: Arrow icon (→) appended to text, appears on hover
   - Cursor: pointer

#### Card Hover States
- Shadow elevation: box-shadow increases (0 4px 12px rgba 0,0,0,0.15)
- Image zoom: scales to 1.05
- Link color: changes to darker blue
- Arrow icon: appears/animates in

#### Card Background
- Background: White (#FFFFFF)
- Border: None or subtle 1px #E0E0E0
- Border Radius: 4-6px
- Box Shadow: 0 2px 8px rgba (0,0,0,0.08) at rest

### Card Content Categories Observed
1. **Internet** - Price guarantees, broadband offers, speed info
2. **Entertainment** - TV shows, streaming, movies, sports
3. **Free TV & Movies** - Promotional content, free trials
4. **Mobile** - Mobile plans, devices, services
5. **Smart Home** - Smart devices, home automation
6. **Experience** - Membership benefits, company updates

### Visible Card Count
- **Initial Load (Above fold):** Typically 6-8 cards visible
- **Fully Scrolled (Below fold):** 15-20+ total cards across all sections
- Layout: Cards grouped by category with section headers

---

## 4. COLORS & TYPOGRAPHY

### Color Palette

#### Primary Colors
| Color Name | Hex Code | Usage |
|-----------|----------|-------|
| Xfinity Blue | #0066CC | Primary CTA buttons, links, badges (active) |
| Xfinity Blue Dark | #0052A3 | Hover state for buttons/links |
| Xfinity Blue Light | #E6F0FF | Background highlights (optional) |

#### Text Colors
| Color Name | Hex Code | Usage |
|-----------|----------|-------|
| Dark Text | #231F20 | Headlines, card titles, body text |
| Medium Gray | #666666 | Card descriptions, secondary text |
| Light Gray | #999999 | Tertiary text, disabled states |
| White | #FFFFFF | Text on dark backgrounds (header, footer, hero) |

#### Background Colors
| Color Name | Hex Code | Usage |
|-----------|----------|-------|
| Page Background | #FFFFFF | Main page background |
| Light Gray BG | #F5F5F5 | Section backgrounds (optional) |
| Dark BG | #231F20 | Footer background |
| Card BG | #FFFFFF | Card background |
| Overlay Dark | rgba(0,0,0,0.5) | Hero section gradient overlay |

#### Border/Divider Colors
| Color Name | Hex Code | Usage |
|-----------|----------|-------|
| Light Border | #E0E0E0 | Card borders, section dividers |
| Subtle Border | #F0F0F0 | Light dividers |

### Typography

#### Font Family
- **Primary Font:** System default (Sans-serif stack recommended)
  - Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif`
  - Modern, clean, accessible

#### Font Sizes & Weights

| Element | Size (px) | Weight | Color | Usage |
|---------|-----------|--------|-------|-------|
| Hero Headline | 40-48 | 700 | White | Large, attention-grabbing |
| Page Heading | 32-36 | 700 | #231F20 | Section titles |
| Card Title | 18-20 | 600 | #231F20 | Card headlines |
| Hero Description | 16-18 | 400 | White | Hero subtext |
| Body Text | 14-16 | 400 | #231F20 | General content |
| Card Description | 14-15 | 400 | #666666 | Card details |
| Small Text | 12-13 | 400 | #999999 | Labels, badges |
| Category Badge | 11-12 | 600 | White | Badge text |
| Link Text | 14 | 600 | #0066CC | Interactive links |

#### Line Heights
- Headlines: 1.2-1.3
- Body Text: 1.5-1.6
- Card Text: 1.4-1.5

#### Letter Spacing
- Minimal (normal): -0.5px to 0px (modern, tight)

---

## 5. BUTTON STYLING

### Primary CTA Button (in Hero)

```css
/* Default State */
background-color: #0066CC;
color: #FFFFFF;
font-size: 16px;
font-weight: 600;
padding: 12px 32px;
border: none;
border-radius: 4px;
cursor: pointer;
transition: all 0.3s ease;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

/* Hover State */
background-color: #0052A3;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
transform: translateY(-1px);

/* Active/Pressed State */
background-color: #004080;
transform: translateY(0);
```

### Card "Learn More" Link Button

```css
/* Default State */
color: #0066CC;
text-decoration: none;
font-size: 14px;
font-weight: 600;
cursor: pointer;
display: inline-flex;
align-items: center;
gap: 6px;
transition: all 0.2s ease;

/* Hover State */
color: #0052A3;
text-decoration: underline;

/* Icon Animation */
Arrow icon slides/appears on hover (margin-left animation)
```

---

## 6. IMAGES

### Image URLs (From Page)
*(Based on observing common Xfinity Hub content paths)*

#### Common Image Patterns
```
https://www.xfinity.com/hub/[category]/[topic]/images/
```

#### Typical Image Locations
- Hero background images
- Card feature images
- Category icons/badges
- Logo assets

### Image Specifications

#### Hero Background Image
- **Dimensions:** Full-width, 1920px+ wide
- **Height:** 400-500px on desktop
- **Aspect Ratio:** Wide (16:9 or similar)
- **Format:** JPG (optimized) or WebP
- **File Size:** 100-300KB (optimized)

#### Card Images
- **Dimensions:** Min 320x200px (on mobile), 400x250px (tablet), 600x360px (desktop)
- **Aspect Ratio:** 16:9 (primary), 4:3 (acceptable)
- **Format:** JPG or WebP
- **File Size:** 50-150KB per image
- **Optimization:** Lazy loading recommended

#### Responsive Image Sizes (srcset example)
```
<img 
  src="card-image.jpg"
  srcset="
    card-image-320w.jpg 320w,
    card-image-600w.jpg 600w,
    card-image-800w.jpg 800w,
    card-image-1200w.jpg 1200w"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

## 7. NAVIGATION/HEADER

### Header Layout
- **Position:** Sticky/fixed at top
- **Height:** ~60-70px on desktop, ~56px on mobile
- **Background:** White (#FFFFFF)
- **Border/Shadow:** Subtle shadow (0 2px 4px rgba 0,0,0,0.05)
- **Z-Index:** High (1000+) to stay above content

### Header Components (Left to Right)

#### 1. Logo Section
- **Position:** Left side
- **Logo:** Xfinity logo/wordmark
- **Size:** ~100-120px wide
- **Padding:** 8px 16px
- **Link:** Links to Xfinity home (https://www.xfinity.com/)
- **Color:** Dark text (#231F20) or branded logo colors

#### 2. Navigation Menu (Desktop)
- **Position:** Center/Left, after logo
- **Layout:** Horizontal, inline
- **Menu Items:**
  1. Hub Home (https://www.xfinity.com/hub)
  2. Internet (https://www.xfinity.com/hub/internet)
  3. Entertainment (https://www.xfinity.com/hub/tv-video)
  4. Free TV & Movies (https://www.xfinity.com/hub/free-tv-movies)
  5. Mobile (https://www.xfinity.com/hub/mobile)
  6. Smart Home (https://www.xfinity.com/hub/smart-home)

- **Link Styling:**
  - Font Size: 14px
  - Font Weight: 500
  - Color: #231F20
  - Padding: 8px 16px
  - Hover: Color changes to #0066CC, underline appears
  - Active: Color stays #0066CC

#### 3. Right-Side Actions
- **Search Icon:** Clickable (functionality TBD)
- **Sign In Button:**
  - Text: "Sign In"
  - Style: Secondary (outline or text)
  - Link: OAuth/login redirect
  - Color: #0066CC
  - Border: 1-2px #0066CC
  - Padding: 8px 20px
  - Hover: Background fill or darker color

#### 4. Mobile Navigation
- **Breakpoint:** <768px
- **Hamburger Menu:**
  - 3-line icon (hamburger), 24x24px
  - Position: Right side of header
  - Color: #231F20
  - Click: Opens side menu or dropdown
  - Menu expands vertically with all navigation items

### Header Responsive Behavior
- **Desktop (1200px+):** Full horizontal menu visible
- **Tablet (768px-1199px):** Menu items may compress, consider dropdown
- **Mobile (<768px):** Menu hidden behind hamburger icon, items stack vertically

---

## 8. FOOTER

### Footer Layout
- **Position:** Bottom of page
- **Background:** #231F20 (dark gray/black)
- **Color Scheme:** Light text on dark background
- **Layout:** Multi-column (desktop), responsive grid
- **Padding:** ~40px top/bottom, ~20px sides
- **Border Top:** Optional light border (#333333 or subtle)

### Footer Content Structure

#### Column 1: Company/About
- **Header:** "About Us" or "Company"
- **Color:** #FFFFFF, 14px, 600 weight
- **Border Bottom:** Light divider (tablet/mobile)
- **Links:**
  - About Us
  - Careers
  - Investors
  - News

#### Column 2: Services
- **Header:** "Services" or "Support"
- **Color:** #FFFFFF, 14px, 600 weight
- **Links:**
  - Customer Support
  - Status Page
  - Service Centers
  - Contact Us

#### Column 3: Policies/Legal
- **Header:** "Policies" or "Legal"
- **Color:** #FFFFFF, 14px, 600 weight
- **Links:**
  - Web Terms of Service
  - Privacy Policy
  - Your Privacy Choices
  - Health Privacy Notice
  - CA Notice at Collection
  - Ad Choices

#### Column 4: Language & Social
- **Language Selector:**
  - Text: "English | Español"
  - Font Size: 12px
  - Color: #CCCCCC
  - Click: Changes page language (if applicable)

- **Social Media Icons:**
  - Position: Below language selector or inline
  - Icons: Twitter, Facebook, YouTube (SVG or icon font)
  - Size: 24x24px
  - Color: #CCCCCC
  - Hover: Color changes to #FFFFFF or #0066CC
  - Links: To respective social media pages
    - Twitter: https://twitter.com/XFINITY
    - Facebook: https://www.facebook.com/xfinity
    - YouTube: https://www.youtube.com/user/xfinity

#### Copyright Section
- **Position:** Bottom of footer or spanning all columns
- **Text:** "© 2026 Comcast" (year dynamic)
- **Font Size:** 12px
- **Color:** #999999
- **Alignment:** Center or left-aligned

### Footer Grid Responsive
- **Desktop (1200px+):** 4-5 column layout, side-by-side
- **Tablet (768px-1199px):** 2 columns, wrapping
- **Mobile (<768px):** Single column, stacked sections (expandable)

### Footer Links Styling
- **Font Size:** 13-14px
- **Color:** #CCCCCC (default)
- **Hover:** #FFFFFF
- **Transition:** 0.2s ease
- **Margin:** 8px bottom between items
- **Text Decoration:** None (underline on hover optional)

---

## 9. RESPONSIVE BREAKPOINTS

### Breakpoint Strategy
```
Mobile First Design Pattern:
- Base styles: <480px (phones)
- Tablet: 481px - 768px
- Desktop: 769px - 1199px
- Wide Desktop: 1200px+
```

### Media Queries
```css
/* Tablet and above */
@media (min-width: 768px) { }

/* Desktop and above */
@media (min-width: 1200px) { }

/* Mobile only */
@media (max-width: 767px) { }
```

### Component Adjustments

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| **Cards** | 1 col | 2 col | 3-4 col |
| **Hero Height** | 300px | 350px | 400-500px |
| **Header Height** | 56px | 60px | 70px |
| **Padding** | 12px | 16px | 24px |
| **Font Sizes** | -2px | base | base |
| **Footer Cols** | 1 | 2 | 4-5 |

---

## 10. SPACING & LAYOUT GRID

### Spacing System (8px baseline)
```
- XS: 4px (0.5rem)
- S: 8px (1rem)
- M: 16px (2rem)
- L: 24px (3rem)
- XL: 32px (4rem)
- XXL: 48px (6rem)
```

### Card Grid Gaps
- Desktop: 24px (3rem)
- Tablet: 16px (2rem)
- Mobile: 12px (1.5rem)

### Section Padding
- Horizontal: 20px (mobile), 24px (tablet), 32-40px (desktop)
- Vertical: 24px (mobile), 32px (tablet), 48px (desktop)

---

## 11. AEM IMPLEMENTATION MAPPING

### Component Architecture

```
Page Template: Hub Page
├── Header Component
│   ├── Logo
│   ├── Navigation Menu
│   ├── Search Bar (UI)
│   └── Sign In Button
│
├── Hero Content Component
│   ├── Background Image
│   ├── Headline
│   ├── Description
│   ├── CTA Button
│   └── Category Badge
│
├── Cards Container (Layout Container)
│   ├── Content Card 1
│   │   ├── Image
│   │   ├── Category Badge
│   │   ├── Title
│   │   ├── Description
│   │   └── Link CTA
│   ├── Content Card 2 (...)
│   └── Content Card 3+ (...)
│
└── Footer Component
    ├── Column 1: Company Links
    ├── Column 2: Services Links
    ├── Column 3: Policies Links
    ├── Column 4: Language + Social
    └── Copyright Info
```

### Component Authoring Fields

#### Header Component
- Logo image
- Navigation menu items (list)
  - Label
  - URL
  - Active state
- Search placeholder text
- Sign In button label & link

#### Hero Content Component
- Background image
- Headline text
- Description text
- CTA button label
- CTA button link
- Category badge text
- Hero height (optional, default: 400px)

#### Content Card Component
- Card image (DAM asset)
- Category badge text
- Card title
- Card description
- "Learn More" link & URL
- Card width (optional, for grid management)

#### Footer Component
- Company name/logo
- Column 1 links (list)
- Column 2 links (list)
- Column 3 links (list)
- Social media URLs
- Language options
- Copyright year (auto-calculated)

---

## 12. IMPLEMENTATION CHECKLIST

### Design System
- [ ] Color palette defined in CSS variables
- [ ] Typography scales documented
- [ ] Spacing system (8px grid) implemented
- [ ] Responsive breakpoints defined

### Components
- [ ] Header (sticky, responsive, navigation)
- [ ] Hero Content (image bg, overlay, positioning)
- [ ] Content Card (image, badge, text, links, hover)
- [ ] Footer (multi-column, responsive, links)
- [ ] Layout Container (for card grids)

### AEM Integration
- [ ] Component models (Java interfaces)
- [ ] Component implementations (with @Model)
- [ ] Component HTL templates (.html)
- [ ] Component dialogs (.xml authorable fields)
- [ ] Exporter implementations (JSON export)

### React Integration
- [ ] React components consume JSON model
- [ ] CSS modules or styled components
- [ ] Responsive behavior (media queries)
- [ ] Accessibility (alt text, ARIA labels)
- [ ] Image optimization (srcset, lazy loading)

### Testing
- [ ] Responsive design testing (mobile/tablet/desktop)
- [ ] Component rendering in SPA Editor
- [ ] JSON model export verification
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Accessibility testing (WCAG 2.1)

---

## 13. QUICK REFERENCE: COPY-PASTE VALUES

### CSS Color Variables
```css
:root {
  --color-primary-blue: #0066CC;
  --color-primary-blue-dark: #0052A3;
  --color-primary-blue-dark-active: #004080;
  --color-primary-blue-light: #E6F0FF;
  
  --color-text-dark: #231F20;
  --color-text-medium: #666666;
  --color-text-light: #999999;
  --color-text-white: #FFFFFF;
  
  --color-bg-white: #FFFFFF;
  --color-bg-light-gray: #F5F5F5;
  --color-bg-dark: #231F20;
  
  --color-border-light: #E0E0E0;
  --color-border-subtle: #F0F0F0;
  
  --spacing-xs: 4px;
  --spacing-s: 8px;
  --spacing-m: 16px;
  --spacing-l: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;
  
  --border-radius-small: 4px;
  --border-radius-medium: 6px;
  
  --duration-fast: 0.2s;
  --duration-normal: 0.3s;
  --easing: ease-in-out;
}
```

### Typography Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
```

### Breakpoints
```css
--breakpoint-mobile: 480px;
--breakpoint-tablet: 768px;
--breakpoint-desktop: 1200px;
```

---

## Summary

The Xfinity Hub page is a **modern, component-based design** with:
- **Sticky header** with horizontal navigation
- **Hero section** with bold typography and CTAs
- **Card-grid layout** with 3-4 columns (responsive)
- **Clean color scheme** (Xfinity blue + grays)
- **Smooth interactions** (hover effects, transitions)
- **Dark footer** with multiple link sections
- **Mobile-first responsive design**

All components are designed for **easy AEM authoring** with flexible fields for text, images, and links. The React SPA can consume JSON models exported by AEM components for seamless integration.

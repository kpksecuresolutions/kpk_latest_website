# KPK SECURE SOLUTIONS SERVICE - Static Website

## Overview
A professional, modern corporate website for KPK SECURE SOLUTIONS SERVICE, a premier security and facility management company based in Bengaluru, Karnataka.

## Features
- ✅ Modern corporate design with clean lines
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ Service cards with hover effects
- ✅ Client testimonials section
- ✅ Transparent navigation that becomes solid on scroll
- ✅ Contact form with validation
- ✅ Google Maps integration
- ✅ SEO-friendly semantic HTML5

## Pages
1. **Home** (`index.html`) - Hero section, services overview, testimonials
2. **About Us** (`about.html`) - Company story, mission, vision, leadership team
3. **Services** (`services.html`) - Detailed service descriptions
4. **Contact Us** (`contact.html`) - Contact form, information, and map

## Technologies Used
- HTML5
- CSS3 (Custom styling, no frameworks)
- JavaScript (Vanilla JS)
- Font Awesome 6.4.0 (Icons)
- Google Fonts (Work Sans & Inter)

## Installation & Usage

### Option 1: Open Directly
1. Download all files to a folder
2. Open `index.html` in your web browser

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (npx)
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Customization Guide

### 1. Update Google Form
In `script.js`, line 83:
```javascript
const googleFormURL = 'YOUR_GOOGLE_FORM_URL_HERE';
```
Replace with your actual Google Form URL.

### 2. Change Brand Colors
In `styles.css`, modify the CSS variables:
```css
:root {
    --primary-red: #E61E2A;      /* Primary brand color */
    --secondary-navy: #343B55;    /* Secondary color */
}
```

### 3. Update Logo
Replace the logo URL in all HTML files:
```html
<img src="YOUR_LOGO_URL_HERE" alt="KPK Secure Solutions Logo">
```

### 4. Modify Content
- Edit HTML files directly to change text, headings, and descriptions
- All content is semantic and clearly commented

## File Structure
```
kpk-website/
├── index.html          # Home page
├── about.html          # About Us page
├── services.html       # Services page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact Information
**KPK SECURE SOLUTIONS SERVICE**
- Phone: +91-9110864861 / +91-8310511326
- Email: sales@kpksecuresolutions.com
- Location: Marathalli, Bengaluru, Karnataka

**Leadership:**
- Director: PK Nayak
- Co-Founder & CEO: Kalyani

## Services Offered
1. Security Services
2. Housekeeping Services
3. Pest Control
4. Reception Services

## License
All rights reserved © 2024 KPK SECURE SOLUTIONS SERVICE

## Support
For any technical issues or questions about the website, please contact the development team.

---

**Note:** Remember to replace placeholder Google Form URL with your actual form link before deploying to production.
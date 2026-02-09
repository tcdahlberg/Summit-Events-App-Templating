# St. Thomas SEA 2025 Aura Template - Created ✅

**Date**: February 4, 2026  
**Status**: ✅ Successfully Deployed  
**Component Name**: StThomasSEA2025Template

## Summary

Successfully converted the StThomasSEA2025.page Visualforce template to an Aura component for Digital Experience Cloud sites.

## Files Created

### Aura Component Bundle
```
force-app/main/default/aura/StThomasSEA2025Template/
├── StThomasSEA2025Template.cmp (main component markup)
├── StThomasSEA2025TemplateController.js (menu/search toggle logic)
├── StThomasSEA2025TemplateHelper.js (helper methods)
├── StThomasSEA2025Template.css (component-specific styles)
└── StThomasSEA2025Template.cmp-meta.xml (metadata)
```

### New SVG File Created
```
force-app/main/default/staticresources/StThomasGeneral2025/images/svg/
└── ust-logo-purple.svg (Purple version of UST logo for header)
```

### Existing SVG Files Reused
- ust-logo.svg (White version for footer)
- search-icon.svg
- facebook-icon.svg
- instagram-icon.svg  
- linkedin-icon.svg
- tiktok-icon.svg
- x-icon.svg
- youtube-icon.svg

## Component Features

### ✅ Header
- **Purple St. Thomas Logo** - Links to stthomas.edu
- **Mobile Menu Toggle** - Hamburger menu for mobile
- **Main Navigation** with dropdowns:
  - About (Quick Facts, Campuses, Mission, Leadership, Accreditation)
  - Academics (Programs, Schools & Colleges, Registrar, Libraries, Study Abroad)
  - Admission & Aid (Undergraduate & Graduate sections)
  - Life at St. Thomas (Housing, Activities, Athletics, Health, Diversity)
  - News & Events
  - Give
- **Secondary Nav**: Quick Links, myOnestop
- **Search Overlay** with popular searches (registrar, financial aid, canvas, programs)

### ✅ Footer
- **Two-Column Layout** (desktop)
  - Left: Contact info, address, phone, social icons (desktop only)
  - Right: Footer navigation links
- **Contact Information**:
  - University of St. Thomas
  - 2115 Summit Avenue
  - St. Paul, Minnesota 55105 USA
  - 651-962-5000
- **Navigation Links**:
  - Directories
  - Maps
  - Quicklinks
  - Contact Us
  - Careers
  - Media
- **Utility Links**:
  - Report a Website Problem
  - EO Statement
  - Accessibility
  - Privacy Policy
  - Emergency
- **Social Media Icons** (6 total)
- **Copyright** - Dynamic year
- **Back to Top Button**

### ✅ Attributes
- `pageTitle` - Default: "University of St. Thomas"
- `contentWidth` - Default: "Full"
- `backgroundColor` - Default: "#ffffff"
- `menuOpen` - Boolean for menu state
- `searchOpen` - Boolean for search state
- `searchQuery` - String for search input
- `currentYear` - Auto-populated year

### ✅ External Resources
**CSS**:
- GTM Consent CSS
- Adobe Typekit fonts
- minimal.css (PurgeCSS optimized)
- slds-brand.css

**JavaScript**:
- Capricorn manifest.js
- Capricorn vendor.js
- Capricorn app.js
- GTM Consent main.js

## Key Differences from Alumni Template

| Feature | Alumni Template | SEA 2025 Template |
|---------|----------------|-------------------|
| Header Logo | White (HeaderLanding) | Purple (Header) |
| Navigation Style | HeaderLanding classes | Header classes |
| Audience Links | Early Career, Parents | Quick Links, myOnestop |
| Footer Style | FooterLanding (3-col) | Footer (2-col) |
| Footer Contact | 3 action buttons | Address + Phone |
| Popular Searches | Alumni-focused | General student-focused |

## External Links Strategy

All links use `target="_parent"` for internal St. Thomas navigation (Experience Cloud compatibility).  
Social media links use `target="_blank"` for external sites.

## CSS Classes

### Header
- `.Header` - Main header container
- `.Header__logo` - Logo link
- `.Header__menu-toggle` - Mobile menu button
- `.Header__nav` - Main navigation list
- `.Header__subnav-toggle` - Dropdown toggles
- `.Header__subnav` - Dropdown menus
- `.Header__search-toggle` - Search button
- `.Header__search` - Search overlay

### Footer
- `.Footer` - Main footer container
- `.Footer__contact` - Contact section (left column)
- `.Footer__main` - Main navigation section (right column)
- `.Footer__nav` - Footer navigation
- `.Footer__links` - Utility links
- `.Footer__social` - Social media icons
- `.Footer__icon` - Individual social icon
- `.Footer__back-to-top` - Back to top button

### Responsive Classes
- `.large-only` - Show only on desktop
- `.small-only` - Show only on mobile

## Deployment Results

### Static Resources
```
Command: cci task run deploy --path force-app/main/default/staticresources/StThomasGeneral2025 --org dev
Status: [Success]: Succeeded
Payload size: 81,288 bytes
```

### Aura Component
```
Command: cci task run deploy --path force-app/main/default/aura/StThomasSEA2025Template --org dev
Status: [Success]: Succeeded
```

## Usage in Experience Cloud

### 1. Make Available in Community
Query to verify theme layout is registered:
```sql
SELECT Id, Name FROM AuraDefinitionBundle 
WHERE DeveloperName = 'StThomasSEA2025Template'
```

### 2. Assign to Theme
1. In Experience Builder → Settings → Theme
2. Select "Get Started" or "Build Your Own"  
3. Pick "StThomasSEA2025Template" from Theme Layout dropdown

### 3. Permissions
Ensure the component has proper access:
- Guest User profile (if public site)
- Authenticated User profile
- Community User permissions

## Testing Checklist

Test the following in your Experience Cloud site:

**Header**:
- [ ] Purple logo displays and links to stthomas.edu
- [ ] Mobile menu toggle works
- [ ] All navigation dropdowns open/close
- [ ] Search overlay opens/closes
- [ ] Popular search links work
- [ ] Quick Links and myOnestop links work

**Footer**:
- [ ] Contact information displays correctly
- [ ] Phone number is clickable (tel: link)
- [ ] All footer navigation links work
- [ ] Utility links work
- [ ] Social media icons display
- [ ] Social links open in new tabs
- [ ] Copyright shows current year
- [ ] Back to top button works

**Responsive**:
- [ ] Desktop: Two-column footer layout
- [ ] Desktop: Social icons in left column
- [ ] Mobile: Single-column footer
- [ ] Mobile: Social icons at bottom
- [ ] Mobile: Hamburger menu works

## Customization Guide

### Change Header Logo
Replace: `StThomasGeneral2025/images/svg/ust-logo-purple.svg`

### Change Footer Logo
Replace: `StThomasGeneral2025/images/svg/ust-logo.svg`

### Update Navigation
Edit the `<ul class="Header__nav">` section in StThomasSEA2025Template.cmp

### Update Footer Links
Edit the `<nav class="Footer__nav">` section in StThomasSEA2025Template.cmp

### Change Popular Searches
Edit the `.Header__popular` section with new search terms

### Update Social Media Links
Edit the `.Footer__social` sections (both large-only and small-only)

## Known Issues

None at this time - Component deployed successfully with no errors.

## Version History

- **v1.0** (Feb 4, 2026) - Initial creation from Visualforce template
  - Full header/footer navigation
  - Mobile responsive
  - All SVG icons converted to static resources
  - Deployed successfully to dev org

---

✅ **Template Ready**: The StThomasSEA2025Template is now available for use in Digital Experience Cloud sites!

# St. Thomas Alumni Aura Components for Experience Cloud

This repository contains Aura components converted from the Visualforce page template for use in Salesforce Experience Cloud (Digital Experience) sites.

## Components Overview

### Main Template Component
- **StThomasAlumniTemplate** - The main layout template that implements `forceCommunity:layout` interface

### Supporting Components
- **StThomasAlumniHeader** - Header with navigation and search
- **StThomasAlumniNavigation** - Main navigation menu with dropdowns
- **StThomasAlumniSearch** - Search functionality with popular searches
- **StThomasAlumniFooter** - Footer with links and social media
- **StThomasLogo** - SVG logo component
- **StThomasSocialLinks** - Social media icon links

## Installation

### 1. Deploy Components to Your Org

Use CumulusCI to deploy the Aura components:

```powershell
# Deploy all Aura components
cci task run deploy --path force-app/main/default/aura --org dev
```

Or use Salesforce CLI:

```powershell
# Deploy to your target org
sf project deploy start --source-dir force-app/main/default/aura --target-org YourOrgAlias
```

### 2. Ensure Static Resources are Available

The template requires the `StThomasGeneral2025` static resource with the following structure:
```
StThomasGeneral2025/
├── css/
│   ├── 2025_stthomas_alumni_template.css
│   └── slds-alumni-brand.css
└── images/
    └── loading-shield.gif
```

### 3. Configure in Experience Cloud

1. Go to **Setup** → **Digital Experiences** → **All Sites**
2. Select your site and click **Builder**
3. Go to **Settings** → **Theme** → **Configure**
4. Under **Theme Layout**, select **StThomasAlumniTemplate**
5. Save and publish your changes

## Component Structure

### StThomasAlumniTemplate
The main layout component that wraps all content. It includes:
- Skip navigation for accessibility
- Header component
- Main content area (where page content is injected via `{!v.body}`)
- Footer component
- Loading overlay

### Customization

#### Update Links
To customize the navigation and footer links, edit:
- `StThomasAlumniNavigation.cmp` - Main navigation menu items
- `StThomasAlumniFooter.cmp` - Footer links

#### Branding
- Logo: Edit `StThomasLogo.cmp` to update the SVG logo
- Social Media: Edit `StThomasSocialLinks.cmp` to update social media links
- Colors/Fonts: Controlled by the static resource CSS files

#### Search
The search form submits to `search.stthomas.edu`. To change the search endpoint, edit the form action in `StThomasAlumniSearch.cmp`.

## Features

### Accessibility
- Skip navigation link for keyboard users
- Proper ARIA attributes on interactive elements
- Screen reader text for icons and controls

### Responsive Design
- Mobile-friendly hamburger menu
- Responsive header and footer layouts
- Touch-friendly navigation

### SEO
- Semantic HTML structure
- Proper heading hierarchy
- Schema.org structured data (can be added to template)

## Key Differences from Visualforce

1. **No Server-Side Rendering**: Aura components are client-side rendered
2. **Static Resources**: CSS/JS files must be in static resources
3. **Navigation**: Uses Aura event handling instead of JavaScript
4. **Community-Specific**: Implements `forceCommunity:layout` interface

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## External Dependencies

The template loads external resources:
- Adobe Fonts (Typekit): `use.typekit.net/hcg6hzb.css`
- St. Thomas CDN scripts for consent management and analytics

**Note**: Ensure your CSP (Content Security Policy) in Experience Cloud allows these external domains.

## Maintenance

### Adding New Menu Items

1. Edit `StThomasAlumniNavigation.cmp`
2. Add new `<li>` elements following the existing pattern
3. Deploy changes to your org

### Updating Footer

1. Edit `StThomasAlumniFooter.cmp`
2. Modify the footer navigation blocks
3. Deploy changes to your org

## Troubleshooting

### Components Not Showing
- Verify components are deployed successfully
- Check that the template is selected in Theme settings
- Clear browser cache and reload

### Styling Issues
- Ensure `StThomasGeneral2025` static resource is deployed
- Check that CSS files exist in the static resource
- Verify CSS file paths in the component

### Navigation Not Working
- Check browser console for JavaScript errors
- Verify all child components are deployed
- Ensure component visibility settings allow guest users (if applicable)

## Support

For issues or questions, contact the St. Thomas web team or consult the [Salesforce Experience Cloud documentation](https://help.salesforce.com/s/articleView?id=sf.community_overview.htm).

## Version History

- **1.0** (2026-02-03): Initial conversion from Visualforce to Aura components

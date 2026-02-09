# SVG Icon Fix for Aura Components

## Issues Fixed

### Issue 1: Invalid SVG Path Elements
Aura components don't support inline SVG `<path>` elements directly. Attempting to deploy components with inline SVGs causes this error:
```
ERROR at line 1, column 1 - Invalid component 'path'
```

### Issue 2: CSS Selector Scoping
Aura component CSS files **must** scope all selectors with `.THIS` or `.cComponentName`. Unscoped selectors cause:
```
CSS selector must begin with '.cComponentName' or '.THIS'
```

## Solutions Applied

### Components Fixed (SVG Issue)
1. **StThomasLogo.cmp** - Replaced inline SVG with external image reference
2. **StThomasSocialLinks.cmp** - Replaced SVG icons with text placeholders
3. **StThomasAlumniSearch.cmp** - Replaced search icon SVG with emoji
4. **StThomasAlumniFooter.cmp** - Replaced arrow SVG with unicode arrow
5. **StThomasAlumniTemplate.cmp** - Changed `<main>` to `<div role="main">`

### Alternative Solutions for Production

#### Option 1: Use Lightning Icons (Recommended)
Replace custom icons with Salesforce Lightning Design System icons:

```xml
<!-- Example for social media icons -->
<lightning:icon iconName="utility:socialshare" size="small" alternativeText="Social" />
```

Available social icons:
- `utility:facebook`
- `utility:twitter`
- `utility:linkedin`
- `utility:youtube`

#### Option 2: Static Resource with Icon Font
1. Create an icon font (using tools like Icomoon or Fontello)
2. Upload as static resource
3. Reference in component CSS

```xml
<ltng:require styles="{!$Resource.StThomasIcons + '/icons.css'}" />
<span class="icon-facebook"></span>
```

#### Option 3: Store SVGs as Static Resource Images
1. Save each SVG as individual file in static resource
2. Reference using `<img>` tags

```xml
<img src="{!$Resource.StThomasGeneral2025 + '/icons/facebook.svg'}" alt="Facebook" />
```

#### Option 4: Use Base64 Encoded Data URIs
Convert SVGs to base64 and use in CSS background-image:

```css
.icon-facebook {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0i...');
    width: 28px;
    height: 28px;
}
```

### Current Workaround

The components now use:
- **Logo**: External image URL (https://www.stthomas.edu/globalassets/images/commons/ust-logo.svg)
- **Social Icons**: Text placeholders styled with CSS
- **Search Icon**: Unicode emoji 🔍
- **Arrow Icon**: Unicode character ↑

### Styling Added

New CSS files created with proper `.THIS` scoping:
- `StThomasSocialLinks.css` - Styles for text-based social icons
- `StThomasAlumniSearch.css` - Search icon styling
- `StThomasAlumniFooter.css` - Back to top arrow styling
- `StThomasLogo.css` - Logo image sizing

**Important**: All CSS selectors MUST begin with `.THIS` to scope styles to the component:

```css
/* ❌ WRONG - Will cause deployment error */
.my-class {
    color: red;
}

/* ✅ CORRECT - Properly scoped */
.THIS .my-class {
    color: red;
}
```

### Next Steps for Production

1. **Create Static Resource with SVG Files**
   ```
   StThomasIcons/
   ├── facebook.svg
   ├── instagram.svg
   ├── linkedin.svg
   ├── tiktok.svg
   ├── twitter.svg
   ├── youtube.svg
   ├── search.svg
   └── arrow-up.svg
   ```

2. **Update Components to Reference Static Resources**
   ```xml
   <img src="{!$Resource.StThomasIcons + '/facebook.svg'}" 
        alt="Facebook" 
        class="social-icon" />
   ```

3. **Or Use Lightning Icons** (Easiest)
   ```xml
   <lightning:icon iconName="utility:socialshare" 
                   size="small" 
                   alternativeText="Facebook" />
   ```

### Known Limitations

- Unicode icons may not match exact brand guidelines
- External logo URL requires internet connectivity
- Text placeholders are temporary solution

### Testing Checklist

After deployment, verify:
- [ ] Logo appears in header
- [ ] Social media links are visible in footer
- [ ] Search icon displays in search button
- [ ] Back to top arrow shows correctly
- [ ] All icons are appropriately sized
- [ ] Icons work on mobile devices

### Files Modified

**Component Files:**
- `StThomasLogo/StThomasLogo.cmp`
- `StThomasSocialLinks/StThomasSocialLinks.cmp`
- `StThomasAlumniSearch/StThomasAlumniSearch.cmp`
- `StThomasAlumniFooter/StThomasAlumniFooter.cmp`
- `StThomasAlumniTemplate/StThomasAlumniTemplate.cmp`

**CSS Files (New):**
- `StThomasSocialLinks/StThomasSocialLinks.css`
- `StThomasAlumniSearch/StThomasAlumniSearch.css`
- `StThomasAlumniFooter/StThomasAlumniFooter.css`
- `StThomasLogo/StThomasLogo.css`

### Deployment Command

```powershell
# Deploy all Aura components
cci task run deploy --path force-app/main/default/aura --org dev
```

---

**Updated**: February 3, 2026
**Status**: Ready for deployment with temporary icon solution

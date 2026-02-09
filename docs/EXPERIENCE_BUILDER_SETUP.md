# Making StThomasAlumniTemplate Available in Experience Builder

## ✅ CRITICAL UPDATE - Template Now Properly Configured!

**What was missing:** The template needed additional files and interfaces to appear in Experience Builder:

1. ✅ **`.design` file** - Required for Experience Builder visibility
2. ✅ **`.svg` file** - Icon that appears in template selector
3. ✅ **`flexipage:availableForAllPageTypes` interface** - Makes it available in page layouts

**Status:** All required files have been deployed. The template should now appear in Experience Builder!

## ✅ Deployment Confirmed

Your Aura components are successfully deployed:
- **StThomasAlumniTemplate** - Main layout template
- StThomasAlumniHeader
- StThomasAlumniNavigation  
- StThomasAlumniSearch
- StThomasAlumniFooter
- StThomasLogo
- StThomasSocialLinks

**Site Found**: Summit_Events1 (Active)

## How to Use the Template in Experience Builder

### Step 1: Access Experience Builder

1. **Login to Salesforce**
2. Go to **Setup** (gear icon top right)
3. In Quick Find, search for **"All Sites"**
4. Click **Digital Experiences** → **All Sites**
5. Find **Summit_Events1** in the list
6. Click **Builder** button

### Step 2: Access Theme Settings

Once in Experience Builder:

1. Click the **⚙️ Settings** icon (top right corner)
2. Select **Theme** from the left sidebar
3. Look for the **Theme Layout** section

### Step 3: Select the Template

#### Option A: If Template Appears in Dropdown

1. Under **Theme Layout**, click the dropdown
2. Look for **StThomasAlumniTemplate** or **St Thomas Alumni Template**
3. Select it
4. Click **Save**
5. Click **Publish** (top right)

#### Option B: If Template Doesn't Appear

The template implements `forceCommunity:layout` interface correctly. If it doesn't appear, try:

1. **Refresh Experience Builder**
   - Press **Ctrl+F5** (Windows) or **Cmd+Shift+R** (Mac)
   - Or close and reopen Experience Builder

2. **Check Site Type Compatibility**
   - The site is type: `ChatterNetworkPicasso` (Aura-based)
   - This is compatible with Aura templates ✅

3. **Verify Component Visibility**
   ```powershell
   # Run this to confirm access is global
   sf data query --query "SELECT DeveloperName, NamespacePrefix FROM AuraDefinitionBundle WHERE DeveloperName = 'StThomasAlumniTemplate'" --target-org Summit-Events-App-Templating__dev
   ```

### Step 4: Apply Template to Pages

After selecting the template:

1. **For All Pages** (recommended)
   - The template becomes the default layout
   - Header and footer appear on all pages automatically

2. **For Specific Pages** (advanced)
   - Go to **Pages** in Experience Builder
   - Select a page
   - In properties panel, choose the template

### Step 5: Publish and Test

1. Click **Publish** (top right in Experience Builder)
2. Click **Preview** to see the site with new template
3. Test on desktop and mobile views

## Alternative: Using Experience Builder UI

If the template dropdown doesn't show your template:

### Method 1: Via Theme Settings (JSON)

1. In Experience Builder → Settings → Theme
2. Look for **Advanced** or **Edit JSON** option
3. Find the layout configuration
4. Add/modify to reference: `c:StThomasAlumniTemplate`

### Method 2: Via Page Variant

1. In Experience Builder → Pages
2. Select a page
3. Click **Edit Page**
4. In properties panel, look for **Layout** or **Template**
5. Select **StThomasAlumniTemplate**

### Method 3: Via Setup (Manual Configuration)

1. **Setup** → **Digital Experiences** → **All Sites**
2. Click dropdown next to Summit_Events1 → **Workspaces** → **Administration**
3. Go to **Preferences** or **Theme**
4. Configure template from there

## Troubleshooting

### Template Not Showing in Dropdown

**Most Common Cause: Missing Required Files**

For an Aura component to appear as a theme layout, it MUST have:

1. **Component file** (`.cmp`) with:
   - `implements="forceCommunity:layout,flexipage:availableForAllPageTypes"`
   - `access="global"`
   
2. **Design file** (`.design`) - Defines configurable attributes
   ```xml
   <design:component label="Template Name">
       <design:attribute name="contentWidth" ... />
   </design:component>
   ```

3. **SVG icon** (`.svg`) - Preview image in template selector
   - Must be 120x120px
   - Cannot be empty

4. **Metadata file** (`.cmp-meta.xml`) - API version and description

✅ **All these files have been added and deployed!**

**Other Possible Causes:**
1. Browser cache - Clear cache or hard refresh (Ctrl+F5)
2. Experience Builder cache - Close and reopen Builder
3. Template not compatible with site type - Check site is Aura-based ✅

**Solutions:**
```powershell
# Re-deploy just the template
cci task run deploy --path force-app/main/default/aura/StThomasAlumniTemplate --org dev

# Verify deployment
sf data query --query "SELECT Id, DeveloperName FROM AuraDefinitionBundle WHERE DeveloperName = 'StThomasAlumniTemplate'" --target-org Summit-Events-App-Templating__dev
```

### Template Deploys but Doesn't Work

**Check:**
1. ✅ `implements="forceCommunity:layout"` - You have this
2. ✅ `access="global"` - You have this
3. ✅ `{!v.body}` attribute - You have this
4. ⚠️ Child components (Header, Footer, etc.) are also deployed - Verified ✅

### Static Resources Not Loading

If CSS/images don't load:

1. Verify **StThomasGeneral2025** static resource exists:
   ```powershell
   sf data query --query "SELECT Id, Name FROM StaticResource WHERE Name = 'StThomasGeneral2025'" --target-org Summit-Events-App-Templating__dev
   ```

2. If not found, deploy the static resource:
   ```powershell
   cci task run deploy --path force-app/main/default/staticresources/StThomasGeneral2025 --org dev
   ```

3. Check CSP (Content Security Policy) allows external resources:
   - Setup → Security → CSP Trusted Sites
   - Add: `https://use.typekit.net` (for Adobe Fonts)

## Expected Behavior After Implementation

Once the template is active, you should see:

✅ **Header**
- St. Thomas logo
- Navigation menu
- Search functionality
- "Update Contact Info" and "Make a Gift" links

✅ **Main Content Area**
- Page content from Experience Builder pages
- Customizable per page

✅ **Footer**
- Footer navigation links
- Social media icons
- Copyright notice
- Back to top link

## Testing Checklist

After applying template:

- [ ] Header appears on all pages
- [ ] Navigation menu works (opens/closes on mobile)
- [ ] Search overlay functions
- [ ] Logo displays correctly
- [ ] Footer appears on all pages
- [ ] Social media links are clickable
- [ ] Back to top link works
- [ ] Layout is responsive (test on mobile)
- [ ] CSS styles are applied
- [ ] No console errors in browser

## Additional Notes

### Your Site Details
- **Site Name**: Summit_Events1
- **Status**: Active
- **Type**: ChatterNetworkPicasso (Aura-based) ✅
- **Compatible with**: Aura components ✅

### Template Features
- Implements: `forceCommunity:layout` ✅
- Access: `global` ✅
- Content region: `{!v.body}` ✅
- Optional attributes: `contentWidth`, `backgroundColor`

### Next Steps After Template is Active

1. **Customize Navigation**
   - Edit `StThomasAlumniNavigation.cmp`
   - Update menu items and links
   - Redeploy

2. **Customize Branding**
   - Edit CSS in `StThomasGeneral2025` static resource
   - Update colors, fonts, etc.

3. **Add More Regions** (optional)
   - Add sidebar region
   - Add hero region
   - Add announcement bar region

## Support

If you still can't see the template after following these steps:

1. Check Salesforce Setup → Aura Components → StThomasAlumniTemplate
2. Verify no errors in component definition
3. Check browser console for JavaScript errors
4. Contact Salesforce support if template should appear but doesn't

---

**Last Updated**: February 3, 2026  
**Components Deployed**: 7/7 ✅  
**Template ID**: 0AbRt0000040PKRKA2

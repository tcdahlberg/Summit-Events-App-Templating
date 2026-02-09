# Deployment Guide: St. Thomas Alumni Experience Cloud Template

## Prerequisites

- Salesforce org with Experience Cloud enabled
- `StThomasGeneral2025` static resource with required CSS files
- Appropriate permissions to deploy components and configure sites

## Step-by-Step Deployment

### Step 1: Verify Static Resources

Before deploying the Aura components, ensure the static resource is in place:

```powershell
# Check if static resource exists
cci task run deploy --path force-app/main/default/staticresources/StThomasGeneral2025.resource-meta.xml --org dev
```

The static resource should contain:
- `/css/2025_stthomas_alumni_template.css`
- `/css/slds-alumni-brand.css`
- `/images/loading-shield.gif`

### Step 2: Deploy Aura Components

Deploy all Aura components to your org:

```powershell
# Using CumulusCI (recommended for this project)
cci task run deploy --path force-app/main/default/aura --org dev

# OR using Salesforce CLI
sf project deploy start --source-dir force-app/main/default/aura --target-org YourProjectName__dev
```

Expected components to deploy:
- StThomasAlumniTemplate (main layout)
- StThomasAlumniHeader
- StThomasAlumniNavigation
- StThomasAlumniSearch
- StThomasAlumniFooter
- StThomasLogo
- StThomasSocialLinks

### Step 3: Verify Deployment

Check deployment status:

```powershell
# Query for Aura components
sf data query --query "SELECT DeveloperName, NamespacePrefix FROM AuraDefinitionBundle WHERE DeveloperName LIKE 'StThomas%'" --target-org YourProjectName__dev --result-format human
```

You should see all 7 components listed.

### Step 4: Configure Experience Cloud Site

#### Option A: Using Experience Builder UI

1. Navigate to **Setup** → **Digital Experiences** → **All Sites**
2. Click **Builder** next to your site
3. Click the **Settings** gear icon (top right)
4. Select **Theme**
5. Click **Configure** under Theme Layout
6. In the dropdown, select **StThomasAlumniTemplate**
7. Click **Publish** to make changes live

#### Option B: Using Developer Console (Advanced)

1. Open Developer Console
2. Go to **File** → **Open Resource**
3. Search for your site's configuration
4. Update the theme layout reference to use `StThomasAlumniTemplate`

### Step 5: Configure Content Security Policy

If using external resources (Adobe Fonts, CDN scripts), add them to your CSP:

1. Go to **Setup** → **Security** → **CSP Trusted Sites**
2. Click **New Trusted Site**
3. Add the following:
   - `https://use.typekit.net` (Adobe Fonts)
   - `https://s3.amazonaws.com` (St. Thomas CDN)
   - `https://alumni.stthomas.edu` (Alumni site)
   - `https://search.stthomas.edu` (Search)
   - `https://give.stthomas.edu` (Giving)

### Step 6: Test the Site

1. Preview the site in Experience Builder
2. Test on multiple devices/browsers:
   - Desktop (Chrome, Firefox, Safari, Edge)
   - Mobile (iOS Safari, Chrome Mobile)
   - Tablet
3. Verify functionality:
   - [ ] Navigation menu opens/closes
   - [ ] Search form displays and submits
   - [ ] Footer links are accessible
   - [ ] Social media icons are visible
   - [ ] Skip navigation link works
   - [ ] "Back to Top" link functions
   - [ ] Responsive breakpoints work correctly

### Step 7: Set Guest User Permissions (Public Sites Only)

If your site allows guest users:

1. Go to **Setup** → **Digital Experiences** → **All Sites**
2. Click **Workspaces** → **Administration**
3. Go to **Members** → **Guest User**
4. Click **Guest User Profile**
5. Ensure the profile has access to:
   - Aura Components (if needed)
   - Static Resources
   - Any Apex classes used by components

## Customization After Deployment

### Update Navigation Links

Edit navigation items in the org:

```powershell
# Pull latest version to make changes
sf project retrieve start --source-dir force-app/main/default/aura/StThomasAlumniNavigation --target-org YourProjectName__dev

# Edit StThomasAlumniNavigation.cmp locally
# Then deploy changes
cci task run deploy --path force-app/main/default/aura/StThomasAlumniNavigation --org dev
```

### Update Branding

To change colors, fonts, or styling:

1. Edit the CSS files in the `StThomasGeneral2025` static resource
2. Re-deploy the static resource
3. Clear browser cache to see changes

## Rolling Back

If you need to revert to the previous template:

1. Go to **Experience Builder** → **Settings** → **Theme**
2. Select your previous theme layout
3. Click **Publish**

To remove the components entirely:

```powershell
# Using Salesforce CLI
sf project delete source --source-dir force-app/main/default/aura --target-org YourProjectName__dev --no-prompt
```

## Troubleshooting Common Issues

### Issue: Components Don't Appear in Theme Selector

**Solution**: 
- Verify the main component implements `forceCommunity:layout`
- Check that the component is set to `access="global"`
- Refresh the Experience Builder

### Issue: External CSS Not Loading

**Solution**:
- Verify static resource is deployed
- Check CSP Trusted Sites for external resources
- Use browser DevTools Network tab to see failed requests
- Ensure resource paths in `ltng:require` are correct

### Issue: Navigation Doesn't Work

**Solution**:
- Check browser console for JavaScript errors
- Verify all child components are deployed
- Ensure controller JavaScript files are included

### Issue: Styling Looks Wrong

**Solution**:
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check that both CSS files are in the static resource
- Verify CSS file names match exactly in the component
- Use browser DevTools to inspect loaded styles

## Performance Optimization

After deployment, consider:

1. **Enable Caching**: Configure proper cache headers for static resources
2. **Minimize Components**: Only include components actually used on the page
3. **Optimize Images**: Compress images in static resources
4. **CDN**: Use Salesforce CDN for static resources when possible

## Monitoring

After deployment, monitor:

- Experience Builder analytics for page load times
- Browser console for JavaScript errors
- Guest user error logs (if applicable)
- User feedback on navigation and usability

## Support Contacts

- **Salesforce Admin**: [Your Org Admin]
- **Developer**: [Your Dev Team]
- **St. Thomas Web Team**: [Contact Info]

## Additional Resources

- [Salesforce Aura Components Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/)
- [Experience Cloud Basics](https://help.salesforce.com/s/articleView?id=sf.community_overview.htm)
- [CSP Configuration](https://help.salesforce.com/s/articleView?id=sf.csp_trusted_sites.htm)

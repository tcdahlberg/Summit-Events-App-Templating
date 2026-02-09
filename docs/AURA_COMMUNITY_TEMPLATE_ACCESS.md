# IMPORTANT: Accessing Templates in Aura Community Builder

## The Issue: Different UI for Aura Sites

Your site **Summit_Events1** is type **ChatterNetworkPicasso** - this is an **Aura-based Community** (older generation).

**Aura Communities ≠ Lightning Experience Sites**

The template selection process is DIFFERENT:

## How to Apply Template in Aura Community Builder

### Method 1: Through Community Builder (NOT Experience Builder)

1. **Go to Setup → Digital Experiences → All Sites**

2. **Click "Workspaces" dropdown** next to Summit_Events1

3. **Select "Builder"** (this opens Community Builder, not Experience Builder)

4. **In Community Builder:**
   - Click **Settings** (gear icon)
   - Look for **Theme** section
   - Under **Theme Layout Component**, select your template
   
### Method 2: Through Community Administration

1. **Setup → Digital Experiences → All Sites**

2. **Click dropdown** next to Summit_Events1 → **Workspaces** → **Administration**

3. **Go to Preferences** or **Theme** section

4. Look for **Layout Template** or **Theme Layout Component**

5. Select **c:StThomasAlumniTemplate** from dropdown

### Method 3: Manually Set in Community Configuration

If the template doesn't appear in dropdowns, you may need to:

1. **Check if site uses Visualforce templates instead**
   - Aura Community Builder sites sometimes use VF templates
   - Our Aura component might not be compatible

2. **Verify the site is using Aura components**
   - Some older communities only support Visualforce

## Alternative Approach: Use as Page Template (Not Theme)

Instead of making it a theme-level template, you can use it per-page:

1. **In Community Builder**

2. **Select a page** (e.g., Home)

3. **Page Properties panel** (right side)

4. Look for **Page Template** or **Layout Template**

5. Select **StThomasAlumniTemplate**

This applies the template to individual pages rather than the entire site.

## Check Site Compatibility

Run this to verify your site supports Aura components:

\`\`\`powershell
# Check what the site currently uses
sf data query --query "SELECT Id, Name, Status, SiteType FROM Site WHERE Name = 'Summit_Events1'" --target-org Summit-Events-App-Templating__dev --result-format json
\`\`\`

**SiteType: ChatterNetworkPicasso** means:
- It's an Aura-based Community
- It might use Visualforce templates primarily
- Aura components can be added as **page components**, not always as **theme layouts**

## The Real Question

**Does your site currently use:**
- ❓ Visualforce templates (older approach)
- ❓ Aura components (newer approach)
- ❓ A mix of both

### To Check:

1. Open a page in the current site
2. Right-click → View Page Source
3. Look for:
   - `<apex:page>` tags = Visualforce
   - `<aura:component>` tags = Aura
   - `/s/` in URL = Lightning/Aura community
   - `/apex/` in URL = Visualforce community

## Next Steps

**Option A: If Site Uses Aura Components**
- The template should work
- May need to be applied per-page instead of site-wide
- Check in **Page Properties** not **Theme Settings**

**Option B: If Site Uses Visualforce**
- You already have VF templates (like `StThomasAlumniSEA2025.page`)
- Use the Visualforce template instead
- Apply in: **Workspaces → Administration → Preferences → Site Template**

**Option C: Convert to Lightning Experience Site**
- Create a new **Lightning** site (not Aura)
- Lightning sites use different template system
- Would need to convert to LWC components

## What to Try Now

1. **Open Community Builder** (not Experience Builder)
   - Setup → Digital Experiences → All Sites
   - Workspaces → Builder

2. **Check current template being used:**
   - What does the site currently use?
   - Is it Visualforce or Aura?

3. **Look for component in different locations:**
   - Settings → Theme → Theme Layout Component
   - Settings → Advanced → Layout Template
   - Page Properties → Template

4. **Verify in page source:**
   - Visit the live site
   - View source
   - Check if it's using Visualforce or Aura

Let me know what you find and we can proceed from there!

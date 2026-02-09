# CRITICAL: Your Site Uses Visualforce Templates, NOT Aura Templates

## The Real Situation

After examining your org, I discovered:

**Your site "Summit_Events1" uses VISUALFORCE PAGE TEMPLATES**, not Aura component templates.

## Evidence

You already have many Visualforce page templates deployed:
- `SEAGordonFullTemplate2025.page`
- `StThomasSEA2025.page`  
- `StThomasAlumniSEA2025.page`
- `OpusStThomas2023.page`
- And many more...

These are **Visualforce pages** (`.page` files), not Aura components (`.cmp` files).

## Why the Aura Template Doesn't Appear

**Aura Community Builder sites can use ONE of two approaches:**

1. **Visualforce Templates** (what your site uses) ✅
   - Templates are Visualforce pages
   - Located in `force-app/main/default/pages/`
   - Applied via: Setup → Digital Experiences → All Sites → Workspaces → Administration → Site Template

2. **Aura Components for Page Components** (NOT for templates)
   - Aura components can be added AS COMPONENTS within pages
   - NOT as the main site template

**You CANNOT mix Visualforce templates with Aura template layouts.**

## What You Should Do Instead

### Option 1: Convert the Aura Component to Visualforce (RECOMMENDED)

Since your site uses Visualforce templates, you should create a **Visualforce page template** based on the StThomasAlumni design, not an Aura component.

**You already have the perfect reference:**
- `StThomasAlumniSEA2025.page` - This is EXACTLY what you need!

**To create a new Visualforce template:**

1. Copy the existing Visualforce template structure
2. Modify the HTML/CSS as needed
3. Deploy as a new Visualforce page
4. Apply in: Setup → Digital Experiences → All Sites → Workspaces → Administration → Preferences → **Site Template**

### Option 2: Use Aura Components INSIDE Pages (Not as Template)

You CAN use the Aura components we created, but **as page components**, not as the theme:

1. **Keep the template as Visualforce** (like you currently have)
2. **Add Aura components to specific pages:**
   - In Community Builder
   - Drag components onto individual pages
   - Components appear within the Visualforce template

## The Aura Components We Created

The Aura components we built (`StThomasAlumniTemplate`, `StThomasAlumniHeader`, etc.) are still useful! You can:

### Use Case 1: Add to Pages
- Drag `StThomasAlumniHeader` onto a page
- Drag `StThomasAlumniFooter` onto a page
- Use individual components within the Visualforce template

### Use Case 2: Convert to Visualforce
- Use the Aura component code as a reference
- Rebuild as Visualforce pages
- Follow the pattern of your existing templates

### Use Case 3: Future Migration
- If you ever create a **Lightning/LWC Community**
- The Aura components would work (after converting to LWC)
- Keep them for future use

## How to Apply a Visualforce Template (What Works Now)

1. **Go to Setup**
2. **Digital Experiences → All Sites**
3. **Click dropdown next to Summit_Events1**
4. **Select: Workspaces → Administration**
5. **Go to: Preferences**
6. **Under "Site Template"**: Select one of your Visualforce templates:
   - `StThomasAlumniSEA2025`
   - `SEAGordonFullTemplate2025`
   - `StThomasSEA2025`
   - etc.
7. **Click Save**

## Summary

### What Happened
- ❌ Created Aura components for theme layout
- ❌ Tried to apply as site template
- ❌ Won't work because site uses Visualforce templates

### What Works
- ✅ Your site uses Visualforce page templates
- ✅ You already have working examples (`StThomasAlumniSEA2025.page`)
- ✅ Apply Visualforce templates via Administration → Preferences → Site Template

### Next Steps
1. **Use your existing Visualforce templates** (like `StThomasAlumniSEA2025.page`)
2. **If you need a new design:**
   - Create a NEW Visualforce page (not Aura component)
   - Follow the pattern of your existing `.page` files
   - Deploy and apply via Site Template setting

## Files to Reference

**Your existing working templates:**
```
force-app/main/default/pages/
├── StThomasAlumniSEA2025.page ← USE THIS AS REFERENCE
├── StThomasSEA2025.page
├── SEAGordonFullTemplate2025.page
└── [etc...]
```

**The Aura components we created (can be used as page components):**
```
force-app/main/default/aura/
├── StThomasAlumniTemplate/ ← Won't work as site template
├── StThomasAlumniHeader/   ← CAN use as page component
├── StThomasAlumniFooter/   ← CAN use as page component
└── [etc...]
```

## Apologies

I should have checked whether your site uses Visualforce or pure Aura earlier. The Aura components we created won't work as a site-wide theme template for Visualforce-based Community Builder sites.

The good news: **You already have the solution!** Your existing Visualforce templates (like `StThomasAlumniSEA2025.page`) are the correct approach for your site type.

---

**Need help creating a NEW Visualforce template?** I can help you modify one of your existing templates or create a new one based on the design we discussed.

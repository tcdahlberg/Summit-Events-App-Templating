# Aura Component CSS Scoping Rules - Quick Reference

## The Rule

**All CSS selectors in Aura component stylesheets MUST begin with `.THIS` or `.cComponentName`**

## Why?

Aura components use CSS scoping to prevent style conflicts between components. The `.THIS` keyword is replaced at runtime with a unique class name for the component instance.

## Examples

### ✅ CORRECT

```css
/* Using .THIS - Recommended */
.THIS .my-button {
    background: blue;
}

.THIS .header {
    font-size: 20px;
}

/* Child element selector */
.THIS .container .item {
    padding: 10px;
}

/* Pseudo-classes */
.THIS .button:hover {
    background: red;
}

/* Multiple classes */
.THIS .active.selected {
    border: 2px solid green;
}
```

### ❌ WRONG - Will Cause Deployment Errors

```css
/* Missing .THIS */
.my-button {
    background: blue;
}

/* External class without .THIS */
.slds-button {
    color: red;
}

/* Element selector without .THIS */
div {
    margin: 10px;
}
```

## Common Patterns

### Styling Child Components

```css
/* When your component contains another component */
.THIS c-child-component {
    display: block;
}
```

### Using SLDS Classes

```css
/* Override SLDS styles within your component */
.THIS .slds-button {
    background: custom-color;
}
```

### Media Queries

```css
@media (max-width: 768px) {
    .THIS .responsive-element {
        display: none;
    }
}
```

## Error Messages You Might See

```
CSS selector must begin with '.cComponentName' or '.THIS' (line X, col Y)
```

**Solution**: Add `.THIS` before your selector.

## Quick Fix Checklist

When you get CSS scoping errors:

1. ✅ Add `.THIS` at the beginning of every selector
2. ✅ Check for selectors in media queries
3. ✅ Check for pseudo-class selectors (`:hover`, `:focus`, etc.)
4. ✅ Verify all multi-class selectors start with `.THIS`
5. ✅ Don't forget selectors inside `@media` blocks

## Real-World Example

### Before (❌ Errors)
```css
.social-icon {
    width: 28px;
    height: 28px;
}

.search-icon {
    font-size: 20px;
}

.container .item {
    padding: 10px;
}
```

### After (✅ Fixed)
```css
.THIS .social-icon {
    width: 28px;
    height: 28px;
}

.THIS .search-icon {
    font-size: 20px;
}

.THIS .container .item {
    padding: 10px;
}
```

## Additional Resources

- [Aura Components Developer Guide - CSS](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/css_scoped.htm)
- [SLDS Component CSS Scoping](https://www.lightningdesignsystem.com/guidelines/markup-and-style/)

---

**Remember**: If you're getting CSS deployment errors, 99% of the time it's because you forgot `.THIS`!

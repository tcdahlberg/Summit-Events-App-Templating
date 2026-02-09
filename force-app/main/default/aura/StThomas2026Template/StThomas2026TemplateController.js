({
    doInit: function(component, event, helper) {
        // Set current year
        var currentYear = new Date().getFullYear().toString();
        component.set("v.currentYear", currentYear);

        // Load external scripts
        helper.loadExternalScripts();
    },

    scriptsLoaded: function(component, event, helper) {
        // Called after static resources are loaded
        console.log('St. Thomas 2026 Template initialized');
    },

    toggleSearch: function(component, event, helper) {
        var searchOpen = component.get("v.searchOpen");
        component.set("v.searchOpen", !searchOpen);

        // Toggle body class for search state
        var body = document.querySelector('body');
        if (body) {
            if (!searchOpen) {
                body.setAttribute('data-search-active', '');
            } else {
                body.removeAttribute('data-search-active');
            }
        }
    },

    toggleMenu: function(component, event, helper) {
        var menuOpen = component.get("v.menuOpen");
        component.set("v.menuOpen", !menuOpen);

        // Close search if open when opening menu
        if (!menuOpen) {
            component.set("v.searchOpen", false);
        }

        // Toggle body scroll lock
        var body = document.querySelector('body');
        if (body) {
            if (!menuOpen) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        }
    }
})

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
        console.log('St. Thomas SEA 2025 Template initialized');

        // Wait for Capricorn scripts to fully load, then let them handle dropdowns
        setTimeout(function() {
            console.log('Capricorn scripts should now be loaded');
        }, 2000);
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
    }
})

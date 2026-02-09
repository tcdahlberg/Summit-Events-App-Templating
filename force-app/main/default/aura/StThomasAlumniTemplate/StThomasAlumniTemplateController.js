({
    doInit: function(component, event, helper) {
        // Set current year dynamically
        var currentYear = new Date().getFullYear();
        component.set("v.currentYear", currentYear.toString());
    },

    toggleMenu: function(component, event, helper) {
        var menuOpen = component.get("v.menuOpen");
        component.set("v.menuOpen", !menuOpen);

        // Close search if open
        if (!menuOpen) {
            component.set("v.searchOpen", false);
        }
    },

    toggleSearch: function(component, event, helper) {
        var searchOpen = component.get("v.searchOpen");
        component.set("v.searchOpen", !searchOpen);

        // Close menu if open
        if (!searchOpen) {
            component.set("v.menuOpen", false);
        }
    }
})

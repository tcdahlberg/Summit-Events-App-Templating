({
    loadExternalScripts: function() {
        // Load external JavaScript files dynamically
        var scripts = [
            'https://capricorn-static-files.aws.stthomas.edu/js/manifest.js',
            'https://capricorn-static-files.aws.stthomas.edu/js/vendor.js',
            'https://capricorn-static-files.aws.stthomas.edu/js/app.js'
        ];

        scripts.forEach(function(src) {
            // Check if script already exists
            if (!document.querySelector('script[src="' + src + '"]')) {
                var script = document.createElement('script');
                script.src = src;
                script.type = 'text/javascript';
                script.async = true;
                document.body.appendChild(script);
            }
        });

        console.log('External scripts loading:', scripts.join(', '));
    }
})

(function (require) {
    'use strict';

    require.config({
        packages : [
            {
                name : 'underscore',
                location : 'vendor/lodash-amd/underscore'
            },
            {
                name : 'masseuse',
                location : 'vendor/masseuse/app'
            }
        ]
        // <%= paths %>
    });

    require([
        'backbone',
        'jquery',
        'routers/primary'
    ], function (Backbone, $, PrimaryRouter) {
        new PrimaryRouter();
        startBackboneHistory(Backbone, $);
    });

    function startBackboneHistory(Backbone, $) {

        setupPushState();
        Backbone.history.start({
            hashChange: true,
            pushState: true,
            root : '/dashboard/'
        });


        function setupPushState () {
            // Sets up Backbone navigation call on absolute urls referencing the app
            $(document).on('click', 'a[href^="{%= baseUrl.replace(/\/$/,"" %}"]', navigateAbsolute);

            // Sets up Backbone navigation call on relative urls
            $(document).on('click', 'a[href^=""]', navigateRelative);
        }

        function navigateAbsolute() {
            //.replace(/^\/dashboard\//, '')
             var $a,
                url;

            if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
                $a = $(event.currentTarget);

                if (!$a.attr('target') && !$a.hasClass('noPushState')) {
                    event.preventDefault();
                    url = $a.attr('href').replace(/^\//, '');
                    Backbone.history.navigate(url.replace(/^(\/)?dashboard\//, ''), { trigger: true });
                    return false;
                }
            }
        }

        function navigateRelative() {

        }
    }
}(require));

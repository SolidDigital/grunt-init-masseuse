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
        '{%= name %}/view'
    ], function ({%= name.charAt(0).toUpperCase() + name.replace(/[-.]/g,'').slice(1) %}View) {
        new {%= name.charAt(0).toUpperCase() + name.replace(/[-.]/g,'').slice(1) %}View().start();
    });
}(require));

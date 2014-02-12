(function () {
    'use strict';

    require.config({
        paths : {
            jquery : 'app/vendor/jquery/jquery',
            rivets : 'app/vendor/rivets/dist/rivets',
            backbone : 'app/vendor/backbone-amd/backbone',
            text : 'vendor/requirejs-text/text'
        },
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
    });

    require([
        '{%= name %}View/view'
    ], function ({%= name %}View) {
        {%= name %}View.start();
    });
}());

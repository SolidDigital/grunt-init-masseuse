(function () {
    'use strict';

    require.config({
        paths : {
            jquery : 'vendor/jquery/jquery',
            rivets : 'vendor/rivets/dist/rivets',
            backbone : 'vendor/backbone-amd/backbone',
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
        new {%= name %}View().start();
    });
}());

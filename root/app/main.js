(function () {
    'use strict';

    require.config({
        paths : {
            jquery : 'vendor/jquery/dist/jquery',
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
    ], function ({%= name.charAt(0).toUpperCase() + name.replace(/[-.]/g,'').slice(1) %}View) {
        new {%= name.charAt(0).toUpperCase() + name.replace(/[-.]/g,'').slice(1) %}View().start();
    });
}());

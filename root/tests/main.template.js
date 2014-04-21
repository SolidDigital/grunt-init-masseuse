/*globals mochaPhantomJS:false*/
(function (require) {
    'use strict';

// Require.js allows us to configure shortcut alias
    require.config({
        shim : {
            mocha : {
                exports : 'mocha'
            },
            sinon : {
                exports : 'sinon'
            },
            sinonSpy : {
                deps : ['sinonCall'],
                exports : 'sinonSpy'
            }
        },
        packages : [
            {
                name : 'underscore',
                location : '../vendor/lodash-amd/underscore'
            },
            {
                name : 'masseuse',
                location : '../vendor/masseuse/app'
            }
        ]
        // <%= paths %>
    });

    require([
        'mocha',
        // .. needed to deal w paths aliases
        '../tests/{%= name %}View/viewTests'
    ], function (mocha) {
        if (typeof mochaPhantomJS !== 'undefined') {
            mochaPhantomJS.run();
        } else {
            mocha.run();
        }
    });
}(require));

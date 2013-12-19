(function() {
    'use strict';

    require.config({
        shim : {
            underscore : {
                exports : '_'
            },
            mocha : {
                exports : 'mocha'
            },
            sinon : {
                exports : 'sinon'
            }
        },
        paths : {
            // Libraries
            underscore : '../app/vendor/lodash/dist/lodash.underscore',
            jquery : '../app/vendor/jquery/jquery',
            backbone : '../app/vendor/backbone-amd/backbone',
            text : '../app/vendor/requirejs-text/text',
            rivets : '../app/vendor/rivets/dist/rivets',
            mocha : '../app/vendor/mocha/mocha',
            chai : '../app/vendor/chai/chai',
            squire : '../app/vendor/squire/src/Squire',
            sinon : '../app/vendor/sinon/lib/sinon',
            sinonSpy : '../app/vendor/sinon/lib/sinon/spy',
            sinonChai : '../app/vendor/sinon-chai/lib/sinon-chai',
            sinonCall : '../app/vendor/sinon/lib/sinon/call',
        }
    });

    require([
        'mocha'
    ], function (mocha) {
        mocha.run();
    });
}());
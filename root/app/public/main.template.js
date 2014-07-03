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
        'routers/primary'
    ], function (Backbone, PrimaryRouter) {
        new PrimaryRouter();
        Backbone.history.start();
    });
}(require));

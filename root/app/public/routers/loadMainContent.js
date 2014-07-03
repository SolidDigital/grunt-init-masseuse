define([
        'jquery',
        '{%= name %}/view'
    ],
    function ($,
              {%= name %}) {

        'use strict';

        var currentView,
            viewTypes = {
                {%= name %} : {%= name %}
            };

        return loadMainContent;

        function loadMainContent (ViewType, options) {

            var $deferred = new $.Deferred(),
                newView;

            if (!options) {
                options = {};
            }

            newView = new viewTypes[ViewType](options);

            if (currentView) {
                currentView.remove();
            }

            newView.start()
                .done(function () {
                    currentView = newView;
                    $deferred.resolve(newView);
                })
                .fail(function () {
                    $deferred.reject();
                });

            return $deferred.promise();
        }
    });

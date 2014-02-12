define(['text!app/{%= name %}View/template.html'], function (template) {
    'use strict';

    return {
        appendTo : 'body',
        template : template,
        modelData : {
            title : 'Hello world!'
        }
    };
});
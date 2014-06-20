define(['text!{%= name %}/template.html'], function (template) {
    'use strict';

    return {
        appendTo : 'body',
        template : template,
        rivetsConfig : {
            instaUpdate : true
        },
        modelData : {
            title : 'Hello world!'
        }
    };
});
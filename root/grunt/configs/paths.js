/*globals module:true*/
module.exports = function(grunt) {
    'use strict';
    grunt.config.set('paths', {
        app : {
            options : {
                pathsJson : 'app/paths.json',
                mainTemplate : 'app/public/main.template.js',
                main : 'app/main.js',
                prefixComma : true
            }
        },
        tests : {
            options : {
                pathsJson : ['app/paths.json', 'tests/paths.json'],
                pathsPrefix : '../public',
                mainTemplate : 'tests/main.template.js',
                main : 'tests/main.js',
                prefixComma : true
            }
        }
    });
};

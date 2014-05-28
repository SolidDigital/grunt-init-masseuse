/*globals module:true */
module.exports = function(grunt) {
    'use strict';
    grunt.config('watch', {
        site : {
            options : {
                // Start a live reload server on the default port: 35729
                livereload : true
            },
            files : [
                'app/**/*.js',
                'app/**/*.html',
                '!app/vendor/**'
            ],
            tasks : [
                'jshint',
                'copy:app'
            ]
        },
        tests : {
            options : {
                // Start a live reload server on the default port: 35729
                livereload : true
            },
            files : [
                'build/tests/**/*.js'
            ],
            tasks : [
                'jshint',
                'copy:tests'
            ]
        },
        siteJson : {
            options : {
                // Start a live reload server on the default port: 35729
                livereload : true
            },
            files : [
                'app/paths.json'
            ],
            tasks : [
                'paths:app',
                'copy:app'
            ]
        },
        testsJson : {
            options : {
                // Start a live reload server on the default port: 35729
                livereload : true
            },
            files : [
                'tests/paths.json'
            ],
            tasks : [
                'paths:tests',
                'copy:tests'
            ]
        }
    });
};
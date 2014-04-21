/*globals module:true */
module.exports = function(grunt) {
    'use strict';
    grunt.config('jshint', {
        files : [
            'app/**/*.js',
            '!app/main.js',
            'tests/**/*.js',
            '!tests/main.js',
            '!app/vendor/**/*.js'
        ],
        options : {
            jshintrc : '.jshintrc'
        }
    });
};
/*jshint node:true */
module.exports = function(grunt) {
    'use strict';
    grunt.config('jshint', {
        files : [
            'app/**/*.js',
            '!app/public/main.js',
            'tests/**/*.js',
            '!tests/main.js',
            '!app/public/vendor/**/*.js'
        ],
        options : {
            jshintrc : '.jshintrc'
        }
    });
};
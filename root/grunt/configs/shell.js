/*jshint node:true */
module.exports = function(grunt) {
    'use strict';

    grunt.config('shell', {
        testPhantom : {
            options : {
                stdout : true,
                stderr : true,
                failOnError : true
            },
            command : 'mocha-phantomjs build/tests/index.html'
        },
        deployHeroku : {
            options : {
                stdout : true,
                stderr : true,
                failOnError : true
            },
            command : 'git push heroku staging:master'
        }
    });
};

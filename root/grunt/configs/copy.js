/*globals module:true */
module.exports = function (grunt) {
    'use strict';
    grunt.config('copy', {
        app : {
            files : [
                {
                    expand : true,
                    cwd : 'app/',
                    src : [
                        '**',
                        '!paths.json',
                        '!main.template.json'
                    ],
                    dest : 'build/'
                }
            ]
        },
        tests : {
            files : [
                {
                    expand : true,
                    cwd : 'tests/',
                    src : [
                        '**',
                        '!paths.json',
                        '!main.template.json'
                    ],
                    dest : 'build/tests/'
                }
            ]
        }
    });
};
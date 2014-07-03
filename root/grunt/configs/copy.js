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
                        '!public/main.template.json'
                    ],
                    dest : 'build/'
                }
            ]
        },
        pkg : {
            files : [
                {
                    expand : true,
                    cwd : './',
                    src : [
                        'package.json'
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
                        '!public/main.template.json'
                    ],
                    dest : 'build/tests/'
                }
            ]
        }
    });
};
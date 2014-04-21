/*globals module:true*/
module.exports = function (grunt) {
    'use strict';
    grunt.registerTask('deploy', [
        'paths:app',
        'buildGhPages:ghPages'
    ]);
};
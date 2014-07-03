/*globals module:true*/
module.exports = function (grunt) {
    'use strict';
    grunt.registerTask('deploy', [
        'paths:app',
        'copy:app',
        'copy:pkg',
        'buildGhPages:staging',
        'shell:deployHeroku'
    ]);
};
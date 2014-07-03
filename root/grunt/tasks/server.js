/*jshint node:true */
module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('server', [
        'jshint',
        'paths:app',
        'copy:app',
        'connect:site',
        'watch'
    ]);
};

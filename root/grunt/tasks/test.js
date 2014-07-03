/*jshint node:true */
module.exports = function(grunt) {
    'use strict';
    grunt.registerTask('test', [
        'jshint',
        'paths:tests',
        'copy:app',
        'copy:tests',
        'connect:tests',
        'watch'
    ]);

    grunt.registerTask('test-cli', 'Run the tests', [
        'clean:build',
        'jshint',
        'paths:tests',
        'copy:app',
        'copy:tests',
        'shell:testPhantom'
    ]);
};

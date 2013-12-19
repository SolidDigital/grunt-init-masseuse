/*globals module:true*/
module.exports = function(grunt) {

    'use strict';

    return {
        application : { // Get and compile application.scss
            options : {
                style : 'compressed',
                require : 'sass-globbing',
                sourcemap : true
            },
            files : grunt.file.expandMapping(['themes/**/main.scss'], 'css', {
                cwd: 'app/',
                rename: function (dest, matched) {
                    return 'build/' + matched.replace(/\.scss$/, '.css');
                }
            })
        }
    }
};
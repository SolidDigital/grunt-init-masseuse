/*globals exports:false*/
/*
 * grunt-init-masseuse
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 Peter Ajtai, SOLID Interactive
 * Licensed under the MIT license.
 */
(function() {
    'use strict';

// Basic template description.
    exports.description = 'Create a new app, including Mocha unit tests.';

// Template-specific notes to be displayed before question prompts.
    exports.notes = 'Make sure to review the generate files after initializing.';

// Template-specific notes to be displayed after question prompts.
    exports.after = 'You should now install project dependencies with _npm ' +
        'install_. Then install browser dpendencies with _bower install_. \n\n' +
        'After that, use _grunt server_ to open the app in your browser. \n\n' +
        'For ' +
        'more information about installing and configuring Grunt, please see ' +
        'the Getting Started guide:' +
        '\n\n' +
        'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
    exports.warnOn = '*';

// The actual init template.
    exports.template = function(grunt, init, done) {

        init.process({type: 'node'}, [
            // Prompt for these values.
            init.prompt('name'),
            init.prompt('description'),
            init.prompt('version'),
            init.prompt('repository'),
            init.prompt('homepage'),
            init.prompt('bugs'),
            init.prompt('licenses'),
            init.prompt('author_name', 'SOLID Interactive'),
            init.prompt('author_email', 'postmaster@thinksolid.com'),
            init.prompt('author_url', 'http://thinksolid.com'),
            init.prompt('node_version', '>= 0.8.19'),
            init.prompt('main'),
            init.prompt('npm_test', 'grunt test')
        ], function(err, props) {
            props.keywords = [];
            props.devDependencies = {
                'grunt': '0.4.2',
                'grunt-build-gh-pages': '0.1.7',
                'grunt-contrib-clean': '0.5.0',
                'grunt-contrib-connect': '0.6.0',
                'grunt-contrib-jshint': '0.8.0',
                'grunt-contrib-livereload': '0.1.2',
                'grunt-contrib-requirejs': '0.4.1',
                'grunt-contrib-watch': '0.5.3',
                'grunt-shell': '0.6.4',
                'matchdep': '0.3.0',
                'mocha-phantomjs': '3.3.1'
            };

            // Files to copy (and process).
            var files = init.filesToCopy(props);

            // Add properly-named license files.
            init.addLicenseFiles(files, props.licenses);

            // Actually copy (and process) files.
            init.copyAndProcess(files, props);

            // Generate package.json file.
            init.writePackageJSON('package.json', props);

            // All done!
            done();
        });

    };
}());

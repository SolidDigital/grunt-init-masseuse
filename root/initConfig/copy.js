/*globals module:true*/
module.exports = {
    build : {
        files : [
            {expand : true, cwd : 'app/', src : [
                '**',
                '!**/*.scss',
                '**/*.html',
                '!vendor/**'
            ], dest : 'build'}
        ]
    },
    vendor : {
        files : [
            {expand : true, cwd : 'app/', src : [
                // created dynamically
            ], dest : 'build'}
        ]
    },
    deploy : {
        files : [
            {expand : true, cwd : 'app/', src : [
                '**',
                '!**/*.scss',
                '!**/*.js',
                '!vendor/**/*'
            ], dest : 'build'}
        ]
    }
};
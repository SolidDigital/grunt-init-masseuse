/*jshint node:true */
'use strict';

var express = require('express'),
    expressApp = express(),
    publicDir = __dirname + '/public',
    PORT = process.env.PORT || 3000;

expressApp.use(express.static(publicDir));
expressApp.get('{%= baseUrl.replace(/\/$/,"") %}*?', function(request, response) {
    response.sendfile('{%= publicIndexDir %}index.html', {'root' : __dirname + '/../'});
});
expressApp.listen(PORT);

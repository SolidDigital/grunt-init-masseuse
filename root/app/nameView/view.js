define(['masseuse', 'app/{%= name %}View/options'], function(masseuse, options) {
    'use strict';

    return masseuse.RivetsView.extend({
        defaultOptions :  options
    });
});
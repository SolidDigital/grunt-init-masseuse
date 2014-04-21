define([
        'chai',
        'mocha',
        'sinon',
        'sinonChai',
        '{%= name %}View/view',
        'sinonSpy'
    ],
    function (chai, mocha, sinon, sinonChai, {%= name.charAt(0).toUpperCase() + name.replace(/[-.]/g,'').slice(1) %}View) {

        'use strict';

        var should = chai.should();

        chai.use(sinonChai);
        mocha.setup('bdd');

        describe('{%= name %}View', function() {
            it('should exist', function() {
                should.exist(new {%= name.charAt(0).toUpperCase() + name.replace(/[-.]/g,'').slice(1) %}View());
            });
        });
    });
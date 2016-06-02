describe('Protractor Demo App', function() {

    var chai = require('chai');
    chai.use(require('chai-as-promised'));

    var expect = chai.expect;

    it('should have a title', function() {

        var homePage = browser.params.environment;

        browser.get(homePage);

        if (homePage === "https://weather.com/") {
            expect(browser.getTitle()).toEqual('National and Local Weather Forecast, Hurricane, Radar and Report');
        } else if (homePage === "https://angularjs.org/") {
            expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
        }
    });

});
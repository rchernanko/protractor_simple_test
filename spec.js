describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('https://weather.com');

        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});
describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://www.sit2.marksandspencer.com/');

        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});
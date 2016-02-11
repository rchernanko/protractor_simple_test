describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://www.cloud2.pd.origin.devops.mnscorp.net/');

        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});
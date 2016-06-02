exports.config = {
    framework: 'mocha',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //sauceUser: 'devsauce',web
    //sauceKey: '466e9ed5-4656-45d3-868d-264ac1bc25d0',
    specs: ['spec.js'],
    mochaOpts: {
        reporter: 'mochawesome-screenshots'
    },
    params: {
        environment: 'https://weather.com/'
        //breakpoint: '1200 x 1222',
        //browser: 'chrome',
    }
}
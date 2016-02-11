exports.config = {
    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    sauceUser: 'cims_sauce',
    sauceKey: '529debcb-67fe-453f-9626-860fb7523b97',
    specs: ['spec.js'],
    //mochaOpts: {
    //    reporter: 'list'
    //},
    params: {
        environment: 'https://weather.com/',
        //breakpoint: '1200 x 1222',
        //browser: 'chrome',
    },
    mochaOpts: {
        timeout: 10000
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
}
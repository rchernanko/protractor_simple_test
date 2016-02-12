exports.config = {
    framework: 'jasmine',
    sauceUser: 'cims_sauce',
    sauceKey: '529debcb-67fe-453f-9626-860fb7523b97',
    specs: ['spec.js'],
    capabilities: {
        'browserName': 'chrome',
        'tunnel-identifier': 'bdd_01',
    }
}
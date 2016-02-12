exports.config = {
    framework: 'jasmine',

    //in our bdd jenkins, we are using the sauce connect plugin - therefore we don't need to specify the sauce user and sauce key in here
    //so commenting out. Have done similar thing with tunnel identifier.

    //sauceUser: 'cims_sauce',
    //sauceKey: '529debcb-67fe-453f-9626-860fb7523b97',
    specs: ['spec.js'],
    capabilities: {
        'browserName': 'chrome',
        //'tunnel-identifier': 'bdd07',
    }
}
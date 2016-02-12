exports.config = {
    framework: 'mocha',
    specs: ['spec.js'],
    sauceUser: 'cims_sauce',
    sauceKey: '529debcb-67fe-453f-9626-860fb7523b97',
    capabilities: {
        'browserName': 'chrome',
    },
    baseUrl: 'http://pd.qa2.devops.mnscorp.net/diego-dalla-palma-lipstick/p/p22197588?image=HT_07_T23_2321L_UJ_SP14_EC_0&color=36Brick&resPDP=true',
    mochaOpts: {
        reporter: "spec",
    }
}
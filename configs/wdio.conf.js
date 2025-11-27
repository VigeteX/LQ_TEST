
exports.config = {
    runner: 'local',

    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    protocol: 'https',
    hostname: 'hub.browserstack.com',
    port: 443,
    path: '/wd/hub',

    specs: [
        '../test/specs/**/*.js'
    ],
    exclude: [
    ],

    maxInstances: 1,
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "12.0",
        "appium:deviceName": "Google Pixel 6",
        "appium:automationName": "UiAutomator2",
        "appium:app": "bs://68e5f65b6504b4ded77005d5cc7c12a59a090919",
        "appium:noReset": true,
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": "com.wdiodemoapp.SplashActivity",
    }],
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['appium','browserstack'],

    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}

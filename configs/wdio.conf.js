
exports.config = {
    runner: 'local',
    user: 'viget_p5C1Ef',       // BrowserStack username
    key: 'JcttkD6YqvbwYc9xpCxP', // BrowserStack access key
    userName: "viget_p5C1Ef",
    accessKey: "JcttkD6YqvbwYc9xpCxP",
    protocol: 'https',
    hostname: 'hub.browserstack.com',
    port: 443,
    path: '/wd/hub',

    //port: 4723,
    specs: [
        '../test/specs/**/*.js'
    ],
    exclude: [
    ],

    maxInstances: 1,
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "16",
        //"appium:deviceName": "emulator-5554",
        "appium:deviceName": "Google Pixel 6",
        "appium:automationName": "UiAutomator2",
        // "appium:app": "E:/LQ/LQ tc/8/browserstack_test-main/Android-NativeDemoApp-0.4.0.apk",
        "appium:app": "bs://<APP_UPLOADED_ID>",
        "appium:noReset": true,
        //"appium:fullReset": true,
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": "com.wdiodemoapp.MainActivity",
        "bstack:options": {
            // userName: process.env.BROWSERSTACK_USERNAME,
            // accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
            
            projectName: "MyProject",               
            buildName: "Build 1",                   
            sessionName: "Login Test"    
        }
    }],
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    //services: ['appium'],
    services: ['browserstack'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}

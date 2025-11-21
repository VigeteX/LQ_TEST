
exports.config = {
    runner: 'local',
    // port: 4723,
    specs: [
        '../test/specs/**/*.js'
    ],
    exclude: [
    ],

    maxInstances: 1,
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "16",
        // "appium:avd": "Pixel_6_Pro_SSD",  
        "appium:deviceName": "Google Pixel 6", 
        "appium:automationName": "UiAutomator2",
        // "appium:app": "E:/LQ/LQ tc/8/browserstack_test-main/Android-NativeDemoApp-0.4.0.apk",
        "appium:app": "bs://<APP_UPLOADED_ID>",
        "appium:noReset": false,
        "appium:fullReset": true,
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": "com.wdiodemoapp.MainActivity",
        "bstack:options": {
            userName: process.env.BROWSERSTACK_USERNAME,
            accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
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
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}

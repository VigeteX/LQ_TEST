
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
        "appium:avd": "Pixel_6_Pro_SSD",  
        "appium:deviceName": "Google Pixel 6 Pro", 
        "appium:automationName": "UiAutomator2",
        // "appium:app": "E:/LQ/LQ tc/8/browserstack_test-main/Android-NativeDemoApp-0.4.0.apk",
        "appium:app": "bs://<APP_UPLOADED_ID>",
        "appium:noReset": true,
        // "appium:noReset": false,
        // "appium:fullReset": true,
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": "com.wdiodemoapp.MainActivity",
        "bstack:options": {
            userName: process.env.BROWSERSTACK_USER,
            accessKey: process.env.BROWSERSTACK_KEY,
            projectName: "MyProject",               
            buildName: "Build 1",                  
            sessionName: "Login Test" 
        }
    }],

    // capabilities: [{
    //     "appium:protocol": "https",
    //     "appium:hostname": "hub.browserstack.com",
    //     "appium:path": "/wd/hub",
    //     "appium:maxInstances": 1,
    //     "appium:app": "bs://68e5f65b6504b4ded77005d5cc7c12a59a090919",
    //     "appium:os_version": "9.0",
    //     "appium:deviceName": "Google Pixel 3",
    //     "platformName": "Android",
    //     "appium:autoAcceptAlerts": "true",
    //     "appium:browserstack.appium_version": "1.22.0",
    //     "bstack:options": {
    //         userName: process.env.BROWSERSTACK_USER,
    //         accessKey: process.env.BROWSERSTACK_KEY
    //     }

    // }],

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

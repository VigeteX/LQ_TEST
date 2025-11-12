import * as dotenv from 'dotenv';
dotenv.config();

export const config: WebdriverIO.Config = {
    baseUrl: process.env.BASE_URL,
    runner: 'local',
    tsConfigPath: '../tsconfig.json',
    specs: [
        '../test/specs/**/*.ts'
    ],
    services: ['devtools'],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu','--window-size=1920,1080', '--log-level=3','--silent']
        }
    }],
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }],
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    

}
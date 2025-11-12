import { config as baseConfig } from './wdio.conf.js';

export const config = {
    ...baseConfig,
    capabilities: [{
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['-headless', '--disable-gpu','--width=1920', '--height=1080']
        }
    }],
};
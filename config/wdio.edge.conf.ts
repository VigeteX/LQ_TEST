import { config as baseConfig } from './wdio.conf.js';

export const config = {
    ...baseConfig,
    capabilities: [{
        browserName: 'MicrosoftEdge',
        'ms:edgeOptions': {
            binary: process.env.EDGE_BIN,
            args: ['--headless=new','--window-size=1920,1080']
        }
    }],
};
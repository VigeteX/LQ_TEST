/// <reference types="cypress" />
const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createBundel = require("@bahmutov/cypress-esbuild-preprocessor");
const esbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

module.exports = defineConfig({
    e2e: {
        video: true,
        screenshotOnRunFailure: true,
        pageLoadTimeout: 180000,
        defaultCommandTimeout: 10000,
        specPattern: "cypress/e2e/features/**/*.feature",
        baseUrl: process.env.CYPRESS_BASE_URL,
        defaultBrowser: 'edge',
        includeShadowDom: true,
        viewportWidth: 1280,
        viewportHeight: 800,
        async setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
            await addCucumberPreprocessorPlugin(on, config);
            const preprocessor = esbuildPlugin.default || esbuildPlugin;
            on("file:preprocessor", createBundel(
                {
                    plugins: [preprocessor(config)],
                }
            ));
            return config
        },
        
    },
});

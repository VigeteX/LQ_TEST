/// <reference types="cypress" />
const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createBundel = require("@bahmutov/cypress-esbuild-preprocessor");
const esbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
    e2e: {
        specPattern: "cypress/e2e/features/**/*.feature",
        baseUrl: "https://telnyx.com/",
        defaultBrowser: 'chrome',
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

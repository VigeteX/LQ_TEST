import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://telnyx.com',
    defaultBrowser: 'chrome',
    supportFile: 'cypress/support/e2e.ts',
    video: false,
    viewportWidth: 1280,
    viewportHeight: 800,
    watchForFileChanges: false,

    setupNodeEvents(on, config) {
      on('task', {
        log(message: string) {
          console.log(message)
          return null
        },
        table(data: unknown) {
          console.table(data)
          return null
        }
      })
      return config
    },
  },
  reporter: 'spec',
})

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "bhhn1p",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

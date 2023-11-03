const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    "defaultCommandTimeout": 25000,
    setupNodeEvents(on, config){

    require("cypress-mochawesome-reporter/plugin")(on);
    screenshotOnRunFailure=true;
  // projectId: "2zedvd",
    //specPattern: 'cypress/e2e/*.js',
    //specPattern: 'cypress/integration/example/BDD/*.js',
  // specPattern : 'cypress/integration/example/BDD/*.feature',
   //"chromeWebSecurity": false ,
   

    }
  },
});

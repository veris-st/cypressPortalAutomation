Feature: Portal Automation

    regression testing

    Scenario: Login to Portal
    Given Open the browser and enter the url of the application
    When I enter valid credential of Portal and click on login button
    Then User should be redirected to the activities page

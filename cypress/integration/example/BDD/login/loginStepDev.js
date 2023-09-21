import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../../../pageObjects/loginPage'


const loginPage= new LoginPage()

Given("Open the browser and enter the url of the application",()=> {


    cy.visit("https://st.veris.in");

});

When("I enter valid credential of Portal and click on login button",()=> {

    loginPage.getEmailTextField;
    loginPage.getPasswordTextField;
    loginPage.clickOnCheckInBtn;


});
Then('User should be redirected to the activities page', () => {
loginPage.getTitleOfVMSLandingPage;

});




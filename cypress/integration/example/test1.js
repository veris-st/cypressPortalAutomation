
/// <reference types = "cypress" />

import LoginPage from "../../pageObjects/loginPage";
describe('My First Test suite ', function()
{
    it('My first test case', function() {
      const loginPage= new LoginPage();

        cy.visit('https://st.veris.in/login/NewLogin');

       // cy.get('.login-languageDropdown-1Fh2E').click().select('.languageDropdownItems > :nth-child(1)')

       //cy.wait('3000');
       // cy.get('.languageDropdownItems').should('have.length',6);


     loginPage.getEmailTextField().type("shailendra.tiranga@veris.in");
     loginPage.getPasswordTextField().type("Digicred4Passw0rd@12345");
     loginPage.clickOnCheckInButton().click;


        //cy.get('input[type="text"]').type("shailendra.tiranga@veris.in");
       //cy.get("input[type='password']").type("Digicred4Passw0rd@12345");
       //cy.get('button[type="submit"]').click;


      
    

    })

  })
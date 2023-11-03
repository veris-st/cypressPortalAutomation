
const { faker } = require('@faker-js/faker');
import LoginPage from "./pageObject/loginPages.js"
import LogOutPage from './pageObject/logoutBtnClick.js'


const loginPage= new LoginPage()

describe('Dashboard: Portal Automation', () => {

    let userdata;
    
    before( () =>{ 
    cy.fixture('loginPageFixture.json').then((data)=>{
    userdata=data;
    
    })
    })

    it('Login  To Portal Test', () => {
        cy.visit("https://st.veris.in");
        //cy.viewport(550, 750) // Set viewport to 550px x 750px
        loginPage.getEmailTextField(userdata.adminEmailId);
        loginPage.getPasswordTextField(userdata.adminPassword);
        loginPage.clickOnCheckInBtn();
        cy.wait(5000);
        loginPage.verifyLandingPage().should('have.text','Visitors');

    }
    )
})
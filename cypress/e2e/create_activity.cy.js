import CreateActivityPage from "./pageObject/createActivityPage.js"
import LoginPage from "./pageObject/loginPages.js"


const { faker } = require('@faker-js/faker');


const guestFirstNamess = faker.person.firstName();
const guestLastNamess=faker.person.lastName();
const guestEmailId = faker.internet.email();
const designationvalue = faker.person.jobDescriptor();
const departmentValue=faker.internet.userName();


const loginPage= new LoginPage()

const createactivitypageobj = new CreateActivityPage()


describe('Create Activity from Portal', () => {

    
        before('Login to Portal', () => {
    
          cy.fixture('loginPageFixture.json').then((data)=>{
    
            cy.visit("https://st.veris.in");
            //cy.viewport(550, 750) // Set viewport to 550px x 750px
            loginPage.getEmailTextField(data.adminEmailId);
            loginPage.getPasswordTextField(data.adminPassword);
            loginPage.clickOnCheckInBtn();
            cy.wait(5000);
            loginPage.verifyLandingPage();
    
        
          })
        })

it('Create Activity Page', () => {
    cy.fixture('loginPageFixture.json').then((data)=>{


    //  Write Code of create Activity Page
    
    createactivitypageobj.getCreateActivityPage();
    
    createactivitypageobj.getConfirmCheckinButtonValidation();
    
    //cy.wait(5000);
    
    //createactivitypageobj.getvenueDropDown();
    //createactivitypageobj.getWorkflowDropDown();
    //createactivitypageobj.getDefaultVenueCheckBox();
    
    
    createactivitypageobj.getVisitorContactPrimary(guestEmailId);
    
    //cy.wait(5000);
    cy.get('body').click(10, 20);
    //cy.wait(5000);
    //createactivitypageobj.getWorkflowDropDown();
    //cy.wait(5000);
    
    createactivitypageobj.getVisitorFirstNameActivityPage(guestFirstNamess);
    createactivitypageobj.getVisitorLastNameActivity(guestLastNamess);
    createactivitypageobj.getConfirmCheckinButtonValidation();
    createactivitypageobj.getConfirmCheckinButton().scrollIntoView();
    createactivitypageobj.getConfirmCheckinButton().click({force: true});
    
    cy.contains('Activity created successfully').should('be.visible');
    createactivitypageobj.getBtnClickOnBadgePrintCancel();
    
      })
})

          })




        


    
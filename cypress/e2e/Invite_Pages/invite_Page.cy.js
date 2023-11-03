import LoginPage from "../pageObject/loginPages.js"
import CreateSingleInvite from "../pageObject/createInvitePage.js"

const { faker } = require('@faker-js/faker');

const guestFirstNamess = faker.person.firstName();
const guestLastNamess=faker.person.lastName();
const guestEmailId = faker.internet.email();
const designationvalue = faker.person.jobDescriptor();
const departmentValue=faker.internet.userName();
const venueName=faker.person.firstName();
const VenueAddressLine1 = "Badshahpur Sohna Rd Hwy, Sector 48, Gurugram, Haryana 122018, India";
const venueAddress="JMD";

const enterCity="Gurugram";
const enterState="Haryana";
const enterCountry="India";
const enterPin="122018";
const venueNameSearch="Cypress";
const searchTerminalName="Cypress";
const newTerminalName ="Cypress Terminal for Automation";
const terminalDec="Cypress Terminal's Description";
const ReceptionEmailId="sktiranga2005@gmail.com";
const clickOnWelcomeMsg="Welcome to the woorld of cypress automation";
const clickOnExitMsg = "Thanks For visiting";
const visitorReportTemplateDesc="Cypress Automation Test";
const visitorReportTemplateName="Cypress Automation Description Text";





const loginPage= new LoginPage()
const createSingleInviteObj =new CreateSingleInvite()











//Write code for Create Invite Page 
describe('Create Invite from Portal', () => {

    
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
it('Create Invite page', () => {
    cy.fixture('loginPageFixture.json').then((data)=>{


    cy.wait(5000);
    createSingleInviteObj.getbtnCreateInvitePage();
    createSingleInviteObj.getHeaderOfCreateInvitePage();
    createSingleInviteObj.enterAgendaFormField(data.agendaOfMeeting);
    createSingleInviteObj.enterGuestFirstNameFormFieldForInvite(guestLastNamess);
    createSingleInviteObj.enterGuestLastNameFormFieldForInvite(guestLastNamess);
    createSingleInviteObj.enterContactNumberFormFieldForInvite(guestEmailId);
    createSingleInviteObj.getclickOnSendInviteButton();
    cy.contains('Invite created successfully').should('be.visible');
    
    
      })
    })
})
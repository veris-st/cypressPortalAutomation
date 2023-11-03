import LoginPage from "./pageObject/loginPages.js"
import AddVenue from "./pageObject/addVenue.js";

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
const venueAdditionObj=new AddVenue()


//Write code for Create Invite Page 
describe(' Venue Page', () => {

    
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

    //Writre code for Venue Addition




it('Venue  Page', () => {

    venueAdditionObj.getsettingIcon();
    cy.url().should('eq', 'https://st.veris.in/settings/org-details');
    venueAdditionObj.getclickOnVisitorDropDown();
    //cy.wait(5000);
    
    
    
    venueAdditionObj.getclickOnVenuebtn();
    //cy.wait(5000);
    cy.url().should('eq','https://st.veris.in/settings/venues');
    
    venueAdditionObj.getclickOnAddVenuebtn();
    venueAdditionObj.getenterVenueName(venueName);
    venueAdditionObj.getenterVenueDesc(venueName);
    venueAdditionObj.getenterVenueAddress1(VenueAddressLine1);
    venueAdditionObj.getenterCity(enterCity);
    venueAdditionObj.getenterState(enterState);
    venueAdditionObj.getenterCountry(enterCountry);
    venueAdditionObj.getenterPin(enterPin);
    //venueAdditionObj.getclickOnsavebtn();
    venueAdditionObj.getclickOnCancelBtn();
    //cy.wait(3000);
    venueAdditionObj.getclickOnSearchTextBox(venueNameSearch);
    
    cy.get('.ant-table-tbody tr').each(($e1, index, $list) => {
     
      if($e1.text()==="Cypress Automation Test (VMS)")
      {
      cy.wrap($e1).click()
      }
      
      
     })
    
    
    })
    
    
})
    
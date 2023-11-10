import LoginPage from "../pageObject/loginPages.js"
import AddVenue from "../pageObject/addVenue.js";
import VenueSettingEdit from "../pageObject/venue_Setting_Edit.js";
import ManageVenueSetting from "../pageObject/venue_Setting_manageSetting.js";
import VenueSettingNotificationCustom from "../pageObject/venueSetting_notification.js";
import VenueSettingGDPR from "../pageObject/venue_Setting_GDPR.js";
import ExtraVenueSetting from "../pageObject/venue_Setting_Extra.js";






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
const venueSettingEditObj = new VenueSettingEdit()
const ManageVenueSettingObj=new ManageVenueSetting()
const venueSettingNotificationCustomObj = new VenueSettingNotificationCustom()
const venueSettingGDPRObj =new VenueSettingGDPR()
const extraVenueSettingObj =new ExtraVenueSetting()






//Write code for Create Invite Page 
describe(' Venue Page : Venue Setting - GDPR', () => {

    
    before('Login to Portal', () => {

      cy.fixture('loginPageFixture.json').then((data)=>{

        cy.visit("https://st.veris.in");
        //cy.viewport(550, 750) // Set viewport to 550px x 750px
        loginPage.getEmailTextField(data.adminEmailId);
        loginPage.getPasswordTextField(data.adminPassword);
        loginPage.clickOnCheckInBtn();
        //cy.wait(5000);
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

    //Write the code for venue List

   
    venueAdditionObj.getclickOnSearchTextBox(venueNameSearch);
    
    cy.get('.ant-table-tbody tr').each(($e1, index, $list) => {
     
      if($e1.text()==="Cypress Automation Test (VMS)")
      {
      cy.wrap($e1).click()
      }
      
      
     })
     cy.contains("Cypress Automation Test (VMS)").should("exist");
     cy.contains("Cypress Automation Test (VMS)").should("exist");
    
    
    
    


  //Write the code for venue Setting GDPR 

  ManageVenueSettingObj.getmanageSettingOption().click();
  extraVenueSettingObj.getextraVenueSettingOption().click();
  extraVenueSettingObj.getallowAnnoynomous().eq(0).should('exist');
  extraVenueSettingObj.getallowWalkInVisitor().eq(0).should('exist');
  extraVenueSettingObj.getshowContactUs().eq(0).should('exist');
  extraVenueSettingObj.getexcelDataSharing().eq(0).should('exist');
  extraVenueSettingObj.getstrictCheckInOut().eq(0).should('exist');
  extraVenueSettingObj.getenableInviteOnlyWorkflow().eq(0).should('exist');
  extraVenueSettingObj.getdisableRequestInvite().eq(0).should('exist');
  extraVenueSettingObj.getsavebtnExtraField().click();

  cy.get('.ct-toast').should('include.text', 'venue setting updated');


    })
})

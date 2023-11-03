import LoginPage from "./pageObject/loginPages.js"
import AddVenue from "./pageObject/addVenue.js";
import AddTerminal from "./pageObject/addTerminal.js";
import TerminalSettingBranding from "./pageObject/terminal_Setting_Branding.js";



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
const terminalAdditionObj=new AddTerminal()
const terminalSettingBrandingObj=new TerminalSettingBranding()




describe('Terminal Page', () => {

    let userdata;
    
    before( () =>{ 
    cy.fixture('loginPageFixture.json').then((data)=>{
    userdata=data;
    
    })
    })
    
        beforeEach('Login Test', () => {
    
          //cy.fixture('loginPageFixture.json').then((data)=>{
    
    
            cy.visit("https://st.veris.in");
            //cy.viewport(550, 750) // Set viewport to 550px x 750px
            loginPage.getEmailTextField(userdata.adminEmailId);
            loginPage.getPasswordTextField(userdata.adminPassword);
            loginPage.clickOnCheckInBtn();
            cy.wait(5000);
            loginPage.verifyLandingPage();
    
        }
        )

 //Write Coode to get setting page
it('Terminal  Page', () => {

    venueAdditionObj.getsettingIcon();
    cy.url().should('eq', 'https://st.veris.in/settings/org-details');
    venueAdditionObj.getclickOnVisitorDropDown();



    //Write Coode For Terminal




    terminalAdditionObj.getclickOnAddTerminal();
    cy.url().should('eq', 'https://st.veris.in/settings/terminal');
    
    terminalAdditionObj.getclickOnAllLocationSearchBox(venueNameSearch);
    cy.get('.ant-select-tree-node-content-wrapper.ant-select-tree-node-content-wrapper-normal').each(($e1, index, $list) => {
    
      if($e1.text()==="Cypress Automation Test")
      {
      cy.wrap($e1).should('be.visible').click();
      expect(true, 'Searched venue name  clicked successfully').to.be.true;
      }
     })
    cy.wait(5000);
    terminalAdditionObj.getsearchByTerminalName(searchTerminalName);
    
    cy.get('.ant-table-cell div').each(($e1, index, $list) => {
     
      if($e1.text()==="Cypress")
      {
     
      expect(true, 'Searched terminal name found in the droup down').to.be.true;
      }
     })
     cy.wait(5000);
    
    
    terminalAdditionObj.getclickOnTerminalSettingEditIcon();


    //write code for Terminal Setting Branding

terminalSettingBrandingObj.getprimaryColor().should('have.value', '#0FF000');
terminalSettingBrandingObj.getprimaryTextColor().should('have.value','#000000');
terminalSettingBrandingObj.getsecondaryColor().should('have.value','#FFFFFF');
terminalSettingBrandingObj.getforceCheckOut().eq(0).should('exist');
terminalSettingBrandingObj.getbadgePrintingAfterSummaryScreen().eq(0).should('exist');
terminalSettingBrandingObj.getwelcomeMsg().should('have.value','Welcome to Cypress Automation ');
terminalSettingBrandingObj.getexitMsg().should('have.value','Thanks for visiting');
terminalSettingBrandingObj.getsavebtnAtBrandingPage();
cy.get('.ct-toast').should('include.text', 'Terminal updated')
    
    
    })
})
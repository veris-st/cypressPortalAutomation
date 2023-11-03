import LoginPage from "./pageObject/loginPages.js"
import AddVenue from "./pageObject/addVenue.js";
import AddTerminal from "./pageObject/addTerminal.js";


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
    
    terminalAdditionObj.getsearchByTerminalName(searchTerminalName);
    
    cy.get('.ant-table-cell div').each(($e1, index, $list) => {
     
      if($e1.text()==="Cypress")
      {
     
      expect(true, 'Searched terminal name found in the droup down').to.be.true;
      }
     })
    
    
    terminalAdditionObj.getclicOnAddTerminalbtn();
    
    cy.get('.ant-drawer-content-wrapper').should('be.visible'); // Replace '.drawer-class' with the actual class of your drawer
    
    terminalAdditionObj.getclickOnTerminalName(newTerminalName);
    terminalAdditionObj.getclickOnTerminaDescField(terminalDec);
    terminalAdditionObj.getclickOnReceptionEmailId(ReceptionEmailId);
    terminalAdditionObj.getclickOnWelcomeMsg(clickOnWelcomeMsg);
    terminalAdditionObj.getclickOnExitMsg(clickOnExitMsg);
    terminalAdditionObj.getclickOnSavebtnofTerminal().scrollIntoView().click();
    cy.get('.ct-toast').should('include.text', 'Error: Request failed with status code 400 ');
    terminalAdditionObj.getclickOnCancelbtn();
    terminalAdditionObj.getclickOnTerminalEdit();
    terminalAdditionObj.getterminaleNameonEdit().should('have.value', 'Cypress');
    terminalAdditionObj.getterminalDescOnEdit().should('have.value','Cypress of Terminal');
    terminalAdditionObj.getterminalReceptionEmailOnEdit().should('have.value','sktiranga2005@gmail.com');
    terminalAdditionObj.getclickOnCancelbtnatEditTerminal();
    terminalAdditionObj.getclickOnViewTerminalCredIcon();
    terminalAdditionObj.getviewTerminalAuthorizationId().contains('Authorization Id: CYPRE4129501').should('be.visible');
    terminalAdditionObj.getviewTerminalAuthorizationcode().contains('Authorization Code: 22711938').should('be.visible');
    terminalAdditionObj.getclickOnCancelBtnofTerminalCred();
    //terminalAdditionObj.getclickOnTerminalSettingEditIcon();
    
    
    })
})
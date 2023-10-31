//import LoginPage from 'cypress/e2e/pageObject/loginPages.js'

//import LoginPage from "../pageObjects/loginPage"

const { faker } = require('@faker-js/faker');
import LoginPage from "./pageObject/loginPages.js"
import LogOutPage from './pageObject/logoutBtnClick.js'
//import LogOutPage from '../e2e/pageObject/createActivityPage.js'
import CreateActivityPage from "./pageObject/createActivityPage.js"
import CreateSingleInvite from "./pageObject/createInvitePage.js" 
import AddSingleMember from "./pageObject/addSingleMember.js" 
import AddVenue from "./pageObject/addVenue.js";  
import AddTerminal from "./pageObject/addTerminal.js";
import AddVisitorReportTemplate from "./pageObject/addVisitorReportTemplate.js";
import TerminalSettingBranding from "./pageObject/terminal_Setting_Branding.js";
import Terminal_Setting_Authorization from "./pageObject/terminal_Setting_Authentication.js";
import TerminalBadgePrinting from "./pageObject/terminal_Setting_Badge_Printing.js";





//Created Data from the faker library for forther use

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









//Object creation of class file
const loginPage= new LoginPage()
const logout=new LogOutPage()
const createactivitypageobj = new CreateActivityPage()
const createSingleInviteObj =new CreateSingleInvite()
const addSingleMemberObj = new AddSingleMember()
const venueAdditionObj=new AddVenue()
const terminalAdditionObj=new AddTerminal()
const terminalSettingBrandingObj=new TerminalSettingBranding()
const terminalSettiingAuthorizationObj=new Terminal_Setting_Authorization()
const reportTemplateObj=new AddVisitorReportTemplate();
const terminalBadgePrintingObj=new TerminalBadgePrinting();






describe('Login to portal with Page object module', () => {


    it('Login Test', () => {

      cy.fixture('loginPageFixture.json').then((data)=>{


        cy.visit("https://st.veris.in");
        //cy.viewport(550, 750) // Set viewport to 550px x 750px
        loginPage.getEmailTextField(data.adminEmailId);
        loginPage.getPasswordTextField(data.adminPassword);
        loginPage.clickOnCheckInBtn();
        //cy.wait(5000);
        //loginPage.verifyLandingPage();

/*


        
//  Write Code of create Activity Page

createactivitypageobj.getCreateActivityPage();

createactivitypageobj.getConfirmCheckinButtonValidation();

cy.wait(5000);

//createactivitypageobj.getvenueDropDown();
//createactivitypageobj.getWorkflowDropDown();
//createactivitypageobj.getDefaultVenueCheckBox();



createactivitypageobj.getVisitorContactPrimary(guestEmailId);

cy.wait(5000);
cy.get('body').click(10, 20);
cy.wait(5000);
//createactivitypageobj.getWorkflowDropDown();
cy.wait(5000);

createactivitypageobj.getVisitorFirstNameActivityPage(guestFirstNamess);
createactivitypageobj.getVisitorLastNameActivity(guestLastNamess);
createactivitypageobj.getConfirmCheckinButtonValidation();
createactivitypageobj.getConfirmCheckinButton().scrollIntoView();
createactivitypageobj.getConfirmCheckinButton().click({force: true});

cy.contains('Activity created successfully').should('be.visible');
createactivitypageobj.getBtnClickOnBadgePrintCancel();



//Write code for Create Invite Page 
cy.wait(5000);
createSingleInviteObj.getbtnCreateInvitePage();
createSingleInviteObj.getHeaderOfCreateInvitePage();
createSingleInviteObj.enterAgendaFormField(data.agendaOfMeeting);
createSingleInviteObj.enterGuestFirstNameFormFieldForInvite(guestLastNamess);
createSingleInviteObj.enterGuestLastNameFormFieldForInvite(guestLastNamess);
createSingleInviteObj.enterContactNumberFormFieldForInvite(guestEmailId);
createSingleInviteObj.getclickOnSendInviteButton();
cy.contains('Invite created successfully').should('be.visible');




*/


//Write a code for add single member in the member-book

//addSingleMemberObj.clickOnMoreAppsButtom().invoke('show', { force: true }).wait(1000).contains('Member Directory', { timeout: 10000 }).click();

//cy.url().should('eq', 'https://st.veris.in/member-directory/member-directory-list');
//addSingleMemberObj.clickOnMemberDirectoryFromDropDown().should('be.visible');

//addSingleMemberObj.clickOnAddMember();

//cy.url().should('eq', 'https://st.veris.in/member-book');




//addSingleMemberObj.getClickonMemberBookBtn();
//cy.wait(5000);


/*
addSingleMemberObj.getbtnClickOnSingleMember();
cy.wait(5000);

addSingleMemberObj.gettxtMemberFirstName(guestFirstNamess);
addSingleMemberObj.gettxtMemberLastName(guestLastNamess);
addSingleMemberObj.gettxtemailOfMember(guestEmailId);
addSingleMemberObj.getDromDownGender();
addSingleMemberObj.gettxtdesignation(designationvalue);
addSingleMemberObj.gettxtDepartment(departmentValue);
addSingleMemberObj.gettxtgroupDropDown();

*/


//Writre code for Venue Addition



venueAdditionObj.getsettingIcon();
cy.url().should('eq', 'https://st.veris.in/settings/org-details');
venueAdditionObj.getclickOnVisitorDropDown();
//cy.wait(5000);

/*


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
venueAdditionObj.getclickOnsavebtn();
venueAdditionObj.getclickOnCancelBtn();
//cy.wait(3000);
venueAdditionObj.getclickOnSearchTextBox(venueNameSearch);

cy.get('.ant-table-tbody tr').each(($e1, index, $list) => {
 
  if($e1.text()==="Cypress Automation Test (VMS)")
  {
  cy.wrap($e1).click()
  }
  
  
 })



*/


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
terminalAdditionObj.getclickOnTerminalSettingEditIcon();


//write code for Terminal Setting Branding

/*
terminalSettingBrandingObj.getprimaryColor().should('have.value', '#0FF000');
terminalSettingBrandingObj.getprimaryTextColor().should('have.value','#000000');
terminalSettingBrandingObj.getsecondaryColor().should('have.value','#FFFFFF');
terminalSettingBrandingObj.getforceCheckOut().eq(0).should('exist');
terminalSettingBrandingObj.getbadgePrintingAfterSummaryScreen().eq(0).should('exist');
terminalSettingBrandingObj.getwelcomeMsg().should('have.value','Welcome to Cypress Automation ');
terminalSettingBrandingObj.getexitMsg().should('have.value','Thanks for visiting');
terminalSettingBrandingObj.getsavebtnAtBrandingPage();
cy.get('.ct-toast').should('include.text', 'Terminal updated')

*/
//write code for Terminal Setting Authorization

/*
terminalSettiingAuthorizationObj.getclickOnAuthorizationOption();
terminalSettiingAuthorizationObj.getauthorizationLandingPage();
terminalSettiingAuthorizationObj.getverifyMobilePhone().eq(0).should('exist');
terminalSettiingAuthorizationObj.getverifyQRCode().eq(1).should('exist');
terminalSettiingAuthorizationObj.getVerifyEmail().eq(2).should('exist');
terminalSettiingAuthorizationObj.getverifyTrueCaller().should('exist');
terminalSettiingAuthorizationObj.getverifyFROption().should('exist');
terminalSettiingAuthorizationObj.getverifyAarogyaSetu().should('exist');
terminalSettiingAuthorizationObj.getverifyInvited().should('exist');
terminalSettiingAuthorizationObj.getverifyWalkInNoInvite().should('exist');
terminalSettiingAuthorizationObj.getsavebtnAtAuthPage();
cy.get('.ct-toast').should('include.text', 'Terminal updated');

*/

//write code for Terminal Setting Badge Print
terminalBadgePrintingObj.getclickOnBadgePrintingHeader();
terminalBadgePrintingObj.getbadgePrintingLandingPage().contains('Badge Printing').should('be.visible');
terminalBadgePrintingObj.getbadgeOrientation();
cy.get('.ant-select-selection-search input').each(($e1, index, $list) => {

  if($e1.text()==="Vertical")
  {
  cy.wrap($e1).should('be.visible').click();
  expect(true, 'Vertical Badge Orientation clicked successfully').to.be.true;
  }
 })


 terminalBadgePrintingObj.getprintModel();
 cy.get('.ant-select-selector span').each(($e1, index, $list) => {

  if($e1.text()==="Epson Bluetooth")
  {
  cy.wrap($e1).should('be.visible').click();
  expect(true, 'Epson Bluetooth clicked successfully').to.be.true;
  }
 })

terminalBadgePrintingObj.getipAddress().type('192.168.5.5');

cy.get('.ct-toast').should('include.text', 'Terminal updated');


 //.ant-select-selector span


//.rc-virtual-list-holder-inner div


//








//Write code for Add Visitor Report Templates 



//reportTemplateObj.getclickonReportTemplates();
//cy.url().should('eq','https://st.veris.in/settings/report-templates');
//reportTemplateObj.getclickOnAddTemplatebtn();
//reportTemplateObj.getenterReportTemplateName();
//reportTemplateObj.getenterReportTemplateDesc();
          //This is used for testing of CI/CD









//Code For Logout


/*
cy.wait(5000);

    logout.clickOnUserProfileDropDown();
    logout.btnClickOnLogoutButton();
    cy.wait(5000);
    cy.url().should('eq', 'https://st.veris.in/login/NewLogin');
      */
      })
    })
    
 

  //it('Logout Test', () => {


//This is used for CICD testing use only testing use only. jgjghjgjjg
  })

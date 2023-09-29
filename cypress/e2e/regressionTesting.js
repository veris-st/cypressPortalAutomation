//import LoginPage from 'cypress/e2e/pageObject/loginPages.js'

//import LoginPage from "../pageObjects/loginPage"

const { faker } = require('@faker-js/faker');
import LoginPage from "./pageObject/loginPages.js"
import LogOutPage from './pageObject/logoutBtnClick.js'
//import LogOutPage from '../e2e/pageObject/createActivityPage.js'
import CreateActivityPage from "./pageObject/createActivityPage.js"
import CreateSingleInvite from "./pageObject/createInvitePage.js" 
import AddSingleMember from "./pageObject/addSingleMember.js" 


//Created Data from the faker library for forther use

const guestFirstNamess = faker.person.firstName();
const guestLastNamess=faker.person.lastName();
const guestEmailId = faker.internet.email();
const designationvalue = faker.person.jobDescriptor();
const departmentValue=faker.internet.userName();







const loginPage= new LoginPage()
const logout=new LogOutPage()
const createactivitypageobj = new CreateActivityPage()
const createSingleInviteObj =new CreateSingleInvite()
const addSingleMemberObj = new AddSingleMember()



describe('Login to portal with Page object module', () => {


    it('Login Test', () => {

      cy.fixture('loginPageFixture.json').then((data)=>{


        cy.visit("https://st.veris.in");
        loginPage.getEmailTextField(data.adminEmailId);
        loginPage.getPasswordTextField(data.adminPassword);
        loginPage.clickOnCheckInBtn();
        loginPage.verifyLandingPage();


        
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

/*
//Write a code for add single member in the member-book
addSingleMemberObj.clickOnAddMember();
cy.wait(5000);
addSingleMemberObj.getClickonMemberBookBtn();
cy.wait(5000);
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


//Code For Logout
cy.wait(5000);

    logout.clickOnUserProfileDropDown();
    logout.btnClickOnLogoutButton();
    cy.wait(5000);
    cy.url().should('eq', 'https://st.veris.in/login/NewLogin');
      
      })
    })
    
 

  //it('Logout Test', () => {



  })

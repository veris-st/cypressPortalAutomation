import LogOutPage from '../e2e/pageObject/logoutBtnClick.js'

const logout = new LogOutPage();

describe('Logout from Portal', () => {


    it('Logout from portal Test', () => {

        //cy.visit("https://st.veris.in");

        logout.clickOnUserProfileDropDown();
        logout.btnClickOnLogoutButton();



    })
})

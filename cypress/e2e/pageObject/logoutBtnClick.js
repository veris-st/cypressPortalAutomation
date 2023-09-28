class LogOutPage
{
    btnUserProfileDropDown='.navigation-UserName-3rd70';
    btnClickOnLogout='ul > :nth-child(5)';

    clickOnUserProfileDropDown()
    {
        return cy.get(this.btnUserProfileDropDown).click();
    }

    btnClickOnLogoutButton()
    {
        return cy.get(this.btnClickOnLogout).click();
    }

}

export default LogOutPage;
  


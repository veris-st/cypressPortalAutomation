
class LoginPage
{

txtAdminEmailId='input[type="text"]';
txtAdminPassword="input[type='password']";
btnLogin='span';
lblLandingPage='.navigation-AppName-1_BPN.navigation-Active-3e2I2';


getEmailTextField(userEmail)
{
    return cy.get(this.txtAdminEmailId).type(userEmail);
}

getPasswordTextField(password)
{
    return cy.get(this.txtAdminPassword).type(password);
}


clickOnCheckInBtn()
{
    return cy.get(this.btnLogin).click();

}


verifyLandingPage()
{
    return cy.get(this.lblLandingPage);
}

}
export default LoginPage;

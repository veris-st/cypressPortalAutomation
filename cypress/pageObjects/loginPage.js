
class LoginPage
{

txtAdminEmailId='input[type="text"]';
txtAdminPassword="input[type='password']";
btnLogin='span';
lblLandingPage='.navigation-AppName-1_BPN.navigation-Active-3e2I2';
btnSwithcToLoginWithOTP='.login-signin-switch';
btnByContinueWithAgree='.ant-form-item-control-input-content > p';
btnsignUp='.ant-form-item-control-input-content > p';



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
    return cy.get(this.lblLandingPage).should('have.text','Visitors');
}

}

btnSwithcToLoginWithOTP()
{
 
    return cy.get(this.btnSwithcToLoginWithOTP).click();

}

export default LoginPage;

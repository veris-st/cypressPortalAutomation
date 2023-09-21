
class LoginPage
{

getEmailTextField()
{
    return cy.get('input[type="text"]').type("shailendra.tiranga@veris.in");
}

getPasswordTextField()
{
    return cy.get("input[type='password']").type("Digicred4Passw0rd@12345");
}


clickOnCheckInBtn()
{
    return cy.get('span').click();

}


getTitleOfVMSLandingPage()
{
    return cy.title().should('eq','Veris | Powering Future Workplaces');
}

}
export default LoginPage;

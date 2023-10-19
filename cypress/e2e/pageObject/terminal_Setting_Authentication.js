class Terminal_Setting_Authorization
{

    clickOnAuthorizationOption='.settings-Container-6a640f9fef2b2c2b2bc832b3c72a61a3 > [style="display: flex; align-items: center;"] > :nth-child(2)';
    authorizationLandingPage='.ant-col-12 > :nth-child(2) > p';
    verifyMobilePhone='button.ant-switch[aria-checked="true"]';
    verifyQRCode='button.ant-switch[aria-checked="true"]';
    VerifyEmail='button.ant-switch[aria-checked="true"]';
    verifyTrueCaller='button.ant-switch[aria-checked="false"]:nth-child(1)';
    verifyFROption=':nth-child(5) > [style="margin-right: 24px;"] > .ant-card > .ant-card-head > .ant-card-head-wrapper > .ant-card-extra > .ant-switch';
    verifyAarogyaSetu=':nth-child(5) > :nth-child(2) > .ant-card > .ant-card-head > .ant-card-head-wrapper > .ant-card-extra > .ant-switch';
    verifyInvited=':nth-child(3) > .ant-card > .ant-card-head > .ant-card-head-wrapper > .ant-card-extra > .ant-switch';
    verifyWalkInNoInvite=':nth-child(4) > .ant-card > .ant-card-head > .ant-card-head-wrapper > .ant-card-extra > .ant-switch';
    savebtnAtAuthPage='.ant-col-6 > .ant-btn';
    



 getclickOnAuthorizationOption()
{

    return cy.get(this.clickOnAuthorizationOption).click();
}

getauthorizationLandingPage()
{
return cy.get(this.authorizationLandingPage);
}
    
getverifyMobilePhone()
{
    return cy.get(this.verifyMobilePhone);

}
    
getverifyQRCode()
{
    return cy.get(this.verifyQRCode);

}

getVerifyEmail()
{
    return cy.get(this.VerifyEmail);

}

getverifyTrueCaller()
{
    return cy.get(this.verifyTrueCaller);
}

getverifyFROption()
{
    return cy.get(this.verifyFROption);

}

getverifyAarogyaSetu()
{
    return cy.get(this.verifyAarogyaSetu);

}
getverifyInvited()
{
    return cy.get(this.verifyInvited);

}
getverifyWalkInNoInvite()
{
    return cy.get(this.verifyWalkInNoInvite);

}

getsavebtnAtAuthPage()
{
    return cy.get(this.savebtnAtAuthPage).click();

}








}

export default Terminal_Setting_Authorization;


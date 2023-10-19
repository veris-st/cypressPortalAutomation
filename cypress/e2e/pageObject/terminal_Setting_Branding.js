class TerminalSettingBranding{
 
    
primaryColor='input[value="#0FF000"]';
primaryTextColor='input[value="#000000"]';
secondaryColor='input[value="#FFFFFF"]';
forceCheckOut='button[aria-checked="true"]';
badgePrintingAfterSummaryScreen='button[aria-checked="true"]';
welcomeMsg=':nth-child(8) > .ant-col-4 > .ant-input-textarea > .ant-input';
exitMsg=':nth-child(9) > .ant-col-4 > .ant-input-textarea > .ant-input';
savebtnAtBrandingPage='.ant-col-6 > .ant-btn';
getprimaryColor()
{
    return cy.get(this.primaryColor);
}
getprimaryTextColor()
{
    return cy.get(this.primaryTextColor);

}
getsecondaryColor()
{
    return cy.get(this.secondaryColor);

}
getforceCheckOut()
{
    return cy.get(this.forceCheckOut);
}
getbadgePrintingAfterSummaryScreen()
{
    return cy.get(this.badgePrintingAfterSummaryScreen);

}
getwelcomeMsg()
{
    return cy.get(this.welcomeMsg);

}
getexitMsg()
{
    return cy.get(this.exitMsg);

}

getsavebtnAtBrandingPage()
{
    return cy.get(this.savebtnAtBrandingPage).click();

}








}


export default TerminalSettingBranding;

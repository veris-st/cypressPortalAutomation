class TerminalBadgePrinting
{

    clickOnBadgePrintingHeader='.settings-Container-6a640f9fef2b2c2b2bc832b3c72a61a3 > [style="display: flex; align-items: center;"] > :nth-child(3)';
    badgePrintingLandingPage='.ant-col-12 > :nth-child(1) > .settings-label-6d3a51d4d56eff3bddc825d01ded317e';
    badgeOrientation='[style="padding-top: 24px; padding-bottom: 32px;"] > .ant-col-4 > .ant-select > .ant-select-selector > .ant-select-selection-item';
    printModel=':nth-child(4) > .ant-col-4 > .ant-select > .ant-select-selector > .ant-select-selection-item';
    ipAddress='.ant-input';
    saveBtnAtBadgePrintingPage='.ant-col-6 > .ant-btn';



getclickOnBadgePrintingHeader()
{
    return cy.get(this.clickOnBadgePrintingHeader).click();

}

getbadgePrintingLandingPage()
{
    return cy.get(this.badgePrintingLandingPage).click();

}

getbadgeOrientation()
{
    return cy.get(this.badgeOrientation);


}
getprintModel()
{
    return cy.get(this.printModel).click();

}
getipAddress()
{
    return cy.get(this.ipAddress);

}
getsaveBtnAtBadgePrintingPage()
{
    return cy.get(this.saveBtnAtBadgePrintingPage);

}






}

export default TerminalBadgePrinting;

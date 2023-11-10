class ManageVenueSetting{


manageSettingOption=':nth-child(2) > :nth-child(3) > [style="display: flex; align-items: center;"] > a > .anticon > svg';

selectSettingPageTitle='General Settings';
verifyOTPGeneralSetting=':nth-child(3) > :nth-child(2) > .ant-switch';
skipOTPTimer=':nth-child(4) > .ant-col-4 > .ant-input';
guardInput=':nth-child(5) > .ant-col-4 > .ant-input';
dataRetentionPolicy=':nth-child(6) > .ant-col-4 > .ant-input';
syncTerminalActivityLog=':nth-child(6) > .ant-col-4 > .ant-input';
saveBtnOfGeneralSetting="button[class='ant-btn ant-btn-primary']";



getmanageSettingOption()
{
   return cy.get(this.manageSettingOption);

}

getselectSettingPageTitle()
{
    return  cy.get(this.selectSettingPageTitle);
    
}

getverifyOTPGeneralSetting()
{
    return  cy.get(this.verifyOTPGeneralSetting);

}

getskipOTPTimer()
{

    return  cy.get(this.skipOTPTimer);

}

getguardInput()
{
    return   cy.get(this.guardInput);

}
getdataRetentionPolicy()
{
    return  cy.get(this.dataRetentionPolicy);

}

getsyncTerminalActivityLog()
{
    return  cy.get(this.syncTerminalActivityLog);

}

getsaveBtnOfGeneralSetting()
{
    return cy.get(this.saveBtnOfGeneralSetting).click();

}















}

export default ManageVenueSetting;

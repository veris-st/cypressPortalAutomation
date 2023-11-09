class TerminalSetiingDashboardLayout
{
    clickOnDashboardLayoutOption='[style="display: flex; align-items: center;"] > :nth-child(4)';
    dashboardLandingPage='.ant-row-space-between > .ant-col-12 > :nth-child(1)';
    removeCheckOutbtn=':nth-child(3) > .ant-col-12 > .settings-label-6d3a51d4d56eff3bddc825d01ded317e';
    removeCheckOutbtnStaus=':nth-child(3) > .ant-col-4 > .ant-switch';
    removeCheckInbtn=':nth-child(4) > .ant-col-12 > .settings-label-6d3a51d4d56eff3bddc825d01ded317e';
    removeCheckInbtnStatus=':nth-child(4) > .ant-col-4 > .ant-switch';
    removeRequestMeeting=':nth-child(5) > .ant-col-12 > .settings-label-6d3a51d4d56eff3bddc825d01ded317e';
    removeRequestMeetingStatus=':nth-child(5) > .ant-col-4 > .ant-switch';
    saveBtnofTerminalDashboardLayout='.ant-col-6 > .ant-btn';


getclickOnDashboardLayoutOption()
{
    return cy.get(this.clickOnDashboardLayoutOption);

}

getdashboardLandingPage()
{
    cy.get (this.dashboardLandingPage);

}

getremoveCheckOutbtn()
{
    return cy.get(this.removeCheckOutbtn);

}


getremoveCheckOutbtnStaus()
{
    return cy.get(this.removeCheckOutbtnStaus);

}

getremoveCheckInbtn()
{
    return cy.get(this.removeCheckInbtn);

}
getremoveCheckInbtnStatus()
{
    return cy.get(this.removeCheckInbtnStatus);

}    
getremoveRequestMeeting()
{
    return cy.get(this.removeRequestMeeting);

}

getremoveRequestMeetingStatus()
{
    return cy.get(this.removeRequestMeetingStatus);

}

getsaveBtnofTerminalDashboardLayout()
{
    return cy.get(this.saveBtnofTerminalDashboardLayout);

    
}











}

export default TerminalSetiingDashboardLayout;

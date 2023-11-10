class VenueSettingNotificationCustom
{

notificationOption='.card-container > [style="display: flex; align-items: center;"] > :nth-child(2)';
invite_Create_Notification='[style="padding-bottom: 32px; padding-top: 24px;"] > .ant-col-4 > .ant-input-textarea > .ant-input';
invite_Cancel_Notification=':nth-child(4) > .ant-col-4 > .ant-input-textarea > .ant-input';
checkin_Notification=':nth-child(5) > .ant-col-4 > .ant-input-textarea > .ant-input';
alarmTextNotofication=':nth-child(6) > .ant-col-4 > .ant-input-textarea > .ant-input';
savebtmAtVenueNotification='.ant-col-6 > .ant-btn';

getnotificationOption()
{
    return cy.get(this.notificationOption);

}

getinvite_Create_Notification()
{
    return cy.get(this.invite_Create_Notification);

}

getinvite_Cancel_Notification()
{
    return cy.get(this.invite_Cancel_Notification);

}

getcheckin_Notification()
{

    return cy.get(this.checkin_Notification);

}

getalarmTextNotofication()
{
    return cy.get(this.alarmTextNotofication);

}


getsavebtmAtVenueNotification()
{
    return cy.get(this.savebtmAtVenueNotification);
    
}









}

export default VenueSettingNotificationCustom;

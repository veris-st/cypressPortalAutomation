class ExtraVenueSetting{

    extraVenueSettingOption='[style="display: flex; align-items: center;"] > :nth-child(6)';
    allowAnnoynomous=':nth-child(3) > .ant-col-4 > .ant-switch';
    allowWalkInVisitor=':nth-child(4) > .ant-col-4 > .ant-switch';
    showContactUs=':nth-child(5) > .ant-col-4 > .ant-switch';
    excelDataSharing=':nth-child(6) > .ant-col-4 > .ant-switch';
    strictCheckInOut=':nth-child(7) > .ant-col-4 > .ant-switch';
    enableInviteOnlyWorkflow=':nth-child(8) > .ant-col-4 > .ant-switch';
    disableRequestInvite=':nth-child(9) > .ant-col-4 > .ant-switch';
    savebtnExtraField='.ant-col-6 > .ant-btn';
    

    getextraVenueSettingOption()
    {
        return cy.get(this.extraVenueSettingOption);

    }
    getallowAnnoynomous()
    {
        return cy.get(this.allowAnnoynomous);
    }

    getallowWalkInVisitor()
    {
        return cy.get(this.allowWalkInVisitor);
    }
getshowContactUs()
{
    return cy.get(this.showContactUs);

}

getexcelDataSharing()
{
    return cy.get(this.excelDataSharing);

}
getstrictCheckInOut()
{
    return cy.get(this.strictCheckInOut);

}

getenableInviteOnlyWorkflow()
{
    return cy.get(this.enableInviteOnlyWorkflow);

}
getdisableRequestInvite()
{
    return cy.get(this.disableRequestInvite);

}

getsavebtnExtraField()

{
    return cy.get(this.savebtnExtraField);
    
}

}

export default ExtraVenueSetting;

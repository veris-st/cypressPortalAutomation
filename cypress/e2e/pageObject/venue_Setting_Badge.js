class VenueSettingBadge{

clickOnBadgeVenueSetting='.card-container > [style="display: flex; align-items: center;"] > :nth-child(3)';
badgeTemplateTextField='.ant-input';
enableEbadgeVenueSetting='.ant-switch';
savebtnAtVenueSetttingBadge='.ant-col-6 > .ant-btn';


getclickOnBadgeVenueSetting()
{
    return cy.get(this.clickOnBadgeVenueSetting);

}

getbadgeTemplateTextField()
{
    return cy.get(this.badgeTemplateTextField);

}


getenableEbadgeVenueSetting()
{
    return cy.get(this.enableEbadgeVenueSetting);

}

getsavebtnAtVenueSetttingBadge()
{
    return cy.get(this.savebtnAtVenueSetttingBadge);

}








}

export default VenueSettingBadge;

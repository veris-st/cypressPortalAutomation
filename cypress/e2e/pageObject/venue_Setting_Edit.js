class VenueSettingEdit{


    venueEditIcon=':nth-child(2) > :nth-child(3) > [style="display: flex; align-items: center;"] > .anticon-edit > svg > path';
    editVenuePageTitle='.ant-drawer-title';
    venueNameEdit='.addNew > :nth-child(1) > .ant-input';
    venueDescEdit='.addNew > :nth-child(2) > .ant-input';
    addressLine1OnVenueEdit='[placeholder="Sector 48"]';
    stateVenueEdit='[placeholder="Sector 48"]';
    countryVenueEdit='.ant-row > :nth-child(1) > .ant-input';
    PincodeVenueEdit='.ant-row > :nth-child(2) > .ant-input';
    cancelbtnEditVenue='.ant-drawer-footer > div > .ant-btn-default > span'
    savebtnEditVenue='.ant-btn-primary';








    getvenueEditIcon()
    {
        return cy.get(this.venueEditIcon);

    }

    geteditVenuePageTitle()
    {
        return cy.get(this.editVenuePageTitle);
    }
    getvenueNameEdit()
    {
        return cy.get(this.venueNameEdit);

    }

    getvenueDescEdit()
    {
        return cy.get(this.venueDescEdit);

    }



getaddressLine1OnVenueEdit()
{
    return cy.get(this.addressLine1OnVenueEdit);

}
 getstateVenueEdit()
 {
    return cy.get(this.stateVenueEdit);

 }

getcountryVenueEdit()
{
    return cy.get(this.countryVenueEdit);

}

getPincodeVenueEdit()
{
    return cy.get(this.PincodeVenueEdit);

}
getcancelbtnEditVenue()
{
    return cy.get(this.cancelbtnEditVenue);

}
 getsavebtnEditVenue()
 {
    return cy.get(this.savebtnEditVenue);
    
 }








}

export default VenueSettingEdit;
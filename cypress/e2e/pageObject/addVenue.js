class AddVenue{

    settingIcon='.navigation-IconLinkContainer-3UiWz'; 
    clickOnVisitorDropDown =':nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content';
    clickOnVenuebtn= "a[href='/settings/venues']";
    clickOnAddVenuebtn='.ant-col-3 > .ant-btn'; 
    enterVenueName="input[placeholder='name']";
    enterVenueDesc="input[placeholder='Description']";
    enterVenueAddressSuggestion='.css-1hwfws3'; 
    enterVenueAddressLine1="input[placeholder='Enter Venue address']";
    enterCity="input[placeholder='City']";
    enterState="input[placeholder='State/Province']";
    enterCountry="input[placeholder='Country']";
    enterPin="input[placeholder='Postal Code']";
    clickOnsavebtn="button[class='ant-btn ant-btn-primary']";
    clickOnCancelBtn="div[class='ant-drawer-footer'] button:nth-child(1)";
    clickOnSearchTextBox=".ant-input";


   
  

    getsettingIcon()
    {
        return cy.get(this.settingIcon).click();
    }
    getclickOnVisitorDropDown()
    {
        return cy.get(this.clickOnVisitorDropDown).click();
    
    }

    getclickOnVenuebtn()
    {
        return cy.get(this.clickOnVenuebtn).click();
    
    }


    getclickOnAddVenuebtn()
    {
        return cy.get(this.clickOnAddVenuebtn).click();
    }

    getenterVenueName(venueName)
    {
        return cy.get(this.enterVenueName).type(venueName);
    
    }
getenterVenueDesc(venueDesc)
{
    return cy.get(this.enterVenueDesc).type(venueDesc);
}

getenterVenueAddressSuggestion(venueAddresss)  
{
    return cy.get(this.enterVenueAddressSuggestion).type(venueAddresss);
}

getenterVenueAddress1(venueAddressLine1)
{
    return cy.get(this.enterVenueAddressLine1).type(venueAddressLine1);
}

getenterCity(enterCity)
{
    return cy.get(this.enterCity).type(enterCity);

}

getenterState(enterState)
{
    return cy.get(this.enterState).type(enterState);
}

getenterCountry(enterCountry)
{
    return cy.get(this.enterCountry).type(enterCountry);

}

getenterPin(enterPin)
{
    return cy.get(this.enterPin).type(enterPin);
}

getclickOnsavebtn()
{
    return cy.get(this.clickOnsavebtn).click();
}
 getclickOnCancelBtn()
 {
    return cy.get(this.clickOnCancelBtn).click();

 }

 getclickOnSearchTextBox(venueNameSearch)
 {
    return cy.get(this.clickOnSearchTextBox).type(venueNameSearch);
 }


}
export default AddVenue;

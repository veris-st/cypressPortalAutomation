class CreateActivityPage
{

    btnCreateActivityPage='[style="display: flex; align-items: center; justify-content: space-between;"] > [style="display: flex; align-items: center;"] > :nth-child(3)';
    visitorContactPrimary='#contact';
    venueDropDown=':nth-child(2) > .vms-v4-Column-n5xTQ > .vms-v4-padding-JCphJ > .vrs-select';
    workflowDropDown = ':nth-child(2) > .vms-v4-Column-n5xTQ > .vms-v4-padding-JCphJ > .vrs-select';
    defaultVenueCheckBox='.defaultVenueCheckbox > .vrs-checkbox-container > .vrs-checkbox-subcontainer > .vrs-checkbox';
    visitorFirstName='#first_name_8278';
    visitorLasttName='#last_name_8279';
    visitorEmailId='#email_8188';
    visitorPhoneNumber='.form-control.invalid-number';
    meetingWith='#meeting_with_8189 > .css-1ed0mbi-control > .css-10rby8i > .css-3mpn9k-placeholder';
    userPhoto='#clickPicture';
    multiLineText='#other_8190';
    checkBox='#other_8191';
    singleSelectFromDropDown='#other_8192 > .css-1ed0mbi-control > .css-10rby8i';
    multiSelectFromDropDown='#other_8193 > .css-1ed0mbi-control > .css-1wy0on6';
    coverUnderMSACheck='.btn-NDA-View > .vrs-checkbox-container > .vrs-checkbox-subcontainer > .vrs-checkbox';
    radioButton='#other_8195 > .css-1ed0mbi-control > .css-1wy0on6 > .vrs-select-caretIconContainer';
    date=':nth-child(13) > .rdt > .form-control';
    dateAndTime=':nth-child(14) > .rdt > .form-control';
    numberTextField='#unique_id_8198';
    timeFormField=':nth-child(16) > .rdt > .form-control';
    govrnId=':nth-child(17) > :nth-child(1) > #clickPicture';
    rateStar='.ant-rate';
    confirmCheckinButton='.vrs-btn-subcontainer > .vrs-label';
    badgePrint='.vrs-btn-subcontainer > :nth-child(1) > div';

    
    getCreateActivityPage()
    {
        return cy.get(this.btnCreateActivityPage).click();
    }

    getvenueDropDown(){

        return cy.get(this.venueDropDown).select('Cypress Automation');
    }


    getWorkflowDropDown(){
        return cy.get(this.workflowDropDown).select('Visitor');
    }
     
    getDefaultVenueCheckBox(){

        return cy.get(this.defaultVenueCheckBox).check();
    }


    getVisitorContactPrimary(guestemailId)
    {
    
    return cy.get(this.visitorContactPrimary).should('be.visible').type(guestemailId);
    }

    getVisitorFirstNameActivityPage(visitorFirstName)
    {
        return cy.get(this.visitorFirstName).type(visitorFirstName);
    }
    getVisitorLastNameActivity(visitorLastName)
    {
        return cy.get(this.visitorLasttName).type(visitorLastName);

    }
    getVisitorEmailId()
    {
        return cy.get(this.visitorEmailId).type();

    }
    getVisitorPhoneNumber()
    {
        return cy.get(this.visitorPhoneNumber).type();

    }
    getMeetingWith()
    {
        return cy.get(this.meetingWith).type();

}

getUserPhoto()
{
    return cy.get(this.userPhoto).type();

}

getMultiLineText()
{
    return cy.get(this.multiLineText).type();

} 
getcheckbox()
{
    return cy.get(this.checkBox).type();

}

getSingleSelectFromDropDown()
{
    return cy.get(this.singleSelectFromDropDown).type();

}

getmultiSelectFromDropDown()
{
    return cy.get(this.multiSelectFromDropDown).type();

}

getmultiSelectFromDropDown()
{
    return cy.get(this.multiSelectFromDropDown).type();

}

getcoverUnderMSACheck()
{
    return cy.get(this.coverUnderMSACheck).type();

}



getradioButton()
{
    return cy.get(this.radioButton).type();

}

getDate()
{
    return cy.get(this.date).type();

}
getDateAndTime()
{
    return cy.get(this.dateAndTime).type();

}

gettimeFormField()
{
    return cy.get(this.timeFormField).type();

}

getgovrnId()
{
    return cy.get(this.govrnId).type();

}
getrateStar()
{
    return cy.get(this.rateStar).type();

}

getConfirmCheckinButtonValidation()
{
    return cy.get(this.confirmCheckinButton).should('be.visible');

}


getConfirmCheckinButton()
{
    return cy.get(this.confirmCheckinButton).click();

}

getBtnClickOnBadgePrintCancel()
    {
        return cy.get(this.badgePrint).click();
    }













}

export default CreateActivityPage;

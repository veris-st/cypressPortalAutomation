
class CreateSingleInvite
{


btnCreateInvite=':nth-child(3) > a';
btnCreateSingleInvite='.vms-v4-Active-KS1rB';
getAgendaTextField='#agenda';
guestFirstNameforInvite='#firstName > .css-1ed0mbi-control > .css-10rby8i > .css-3mpn9k-placeholder';

guestLastNameforInvite='#lastName';
guestContactNumber='#contact';
visitorCategory='#visitorCategory > .css-1ed0mbi-control > .css-10rby8i > .css-3mpn9k-placeholder';
selectVisitorCategory='#react-select-10-option-0';
enterMultiLine='#other_8331';
clickOnSendInviteButton = '.vms-v4-Footer-PgXTX > :nth-child(1) > .vrs-btn-subcontainer > .vrs-label';

getbtnCreateInvitePage()
{
    return cy.get(this.btnCreateInvite).click();

}

getHeaderOfCreateInvitePage()
{
    return cy.get(this.btnCreateSingleInvite).click();

}
enterAgendaFormField(agenda)
{
    return cy.get(this.getAgendaTextField).type(agenda);

}

enterGuestFirstNameFormFieldForInvite(GuestFirstName)
{
    return cy.get(this.guestFirstNameforInvite).click().type(GuestFirstName);

}
enterGuestLastNameFormFieldForInvite(GuestLastName)
{
    return cy.get(this.guestLastNameforInvite).type(GuestLastName);

}

enterContactNumberFormFieldForInvite(GuestContactNumber)
{
    return cy.get(this.guestContactNumber).type(GuestContactNumber);

}

clickOnVisitorCategoryDropDown()
{
    return cy.get(this.visitorCategory).click();

}

selectVisitorCategoryfromWorkflowDropDown()
{
    return cy.get(this.selectVisitorCategory).click();

}
enterMultilineText(comingFrom)
{
    return cy.get(this.enterMultiLine).type(comingFrom)

}

getclickOnSendInviteButton()
{
    return cy.get(this.clickOnSendInviteButton).click();

}

}
export default CreateSingleInvite;

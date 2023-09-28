
class AddSingleMember
{


selectAddMember=':nth-child(2) > .navigation-AppName-1_BPN';
clickOnSingleMemberbtn='.ant-btn-compact-first-item > div';
enterMemberFirstName=':nth-child(1) > :nth-child(2) > .input';
enterMemberLastName=':nth-child(1) > :nth-child(3) > .input';
emailOfMember=':nth-child(4) > .input';
phoneNumberOfMember='.form-control';
genderdropdown =':nth-child(1) > :nth-child(6) > .ant-select > .ant-select-selector';
designation=':nth-child(2) > :nth-child(2) > .input';
department=':nth-child(2) > :nth-child(3) > .input';
groupDropDown=':nth-child(4) > .ant-select > .ant-select-selector';
createMemberbtn='.ant-btn-primary > span';



clickOnAddMember()
{
    return cy.get(this.selectAddMember).click();
}


getbtnClickOnSingleMember()
{
    return cy.get(this.clickOnSingleMemberbtn).click();
}

gettxtMemberFirstName(memberFirstName)
{
    return cy.get(this.enterMemberFirstName).type(memberFirstName);
}

gettxtMemberLastName(memberLastName)
{
    return cy.get(this.enterMemberLastName).type(memberLastName);
}

gettxtemailOfMember(memberEmailId)
{
    return cy.get(this.emailOfMember).type(memberEmailId);
}

gettxPhoneNumberOfMember(memberPhoneNumber)
{
    return cy.get(this.phoneNumberOfMember).type(memberPhoneNumber);
}

getDromDownGender()
{
    return cy.get(this.genderdropdown).select('Female');
}

gettxtdesignation(memberDesignation)
{
    return cy.get(this.designation).type(memberDesignation);
}

gettxtDepartment(memberDepartment)
{
    return cy.get(this.department).type(memberDepartment);
}

gettxtgroupDropDown()
{
    return cy.get(this.groupDropDown).select('T3');
}
getbtncreateMember()
{
    return cy.get(this.createMemberbtn).click();
}


}




export default AddSingleMember;

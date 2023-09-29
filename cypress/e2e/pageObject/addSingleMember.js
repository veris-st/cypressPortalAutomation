
class AddSingleMember
{


selectAddMember=':nth-child(2) > .navigation-AppName-1_BPN';
clickOnMemberBookBtn='[style="width: 100%; display: flex; align-items: center; border-bottom: 1px solid rgb(211, 221, 220); background-color: rgb(255, 255, 255); padding: 0px 17px;"] > :nth-child(2) > a';
clickOnSingleMemberbtn='.ant-btn.ant-btn-default.ant-btn-compact-item.ant-btn-compact-first-item';
enterMemberFirstName='input[placeholder="Enter first name"]';
enterMemberLastName='input[placeholder="Enter first name"]';
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


getClickonMemberBookBtn()
{
    return cy.get(this.clickOnMemberBookBtn).click();
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

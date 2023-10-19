class AddTerminal
{

clickOnAddTerminal="a[href='/settings/terminal']";
clickOnAllLocationSearchBox='#rc_select_0';
searchByTerminalName="input[placeholder='Search by name']";
clicOnAddTerminalbtn="button[class='ant-btn ant-btn-default'] span";
clickOnTerminalName="input[placeholder='name']";
clickOnTerminaDescField='input[placeholder="Description"]';
clickOnReceptionEmailId='input[placeholder="Reception Email Id"]';
clickOnWelcomeMsg='input[placeholder="eg: Welcome to Veris HQ"]';
clickOnExitMsg='input[placeholder="eg: Thanks for Visiting"]';
selectBadgeOrientation='.ant-select-item.ant-select-item-option.ant-select-item-option-active.ant-select-item-option-selected';
clickOnSavebtnofTerminal='.ant-btn-primary > span';
clickOnCancelbtn='.ant-drawer-footer > div > .ant-btn-default > span';
clickOnTerminalEdit=':nth-child(1) > :nth-child(4) > div > .anticon-edit';
terminaleNameonEdit='input[placeholder="name"]';
terminalDescOnEdit='input[placeholder="Description"]';
terminalReceptionEmailOnEdit='input[placeholder="Reception Email Id"]';
clickOnCancelbtnatEditTerminal='.ant-drawer-footer > div > .ant-btn-default';
clickOnViewTerminalCredIcon='.anticon-link';
viewTerminalAuthorizationId='.ant-modal-body > :nth-child(1)';
viewTerminalAuthorizationcode='.ant-modal-body > :nth-child(2)';
clickOnCancelBtnofTerminalCred='.ant-modal-footer > .ant-btn-default';
clickOnTerminalSettingEditIcon='a > .anticon';

























getclickOnAddTerminal()
{

    return cy.get(this.clickOnAddTerminal).click();

}

getclickOnAllLocationSearchBox(SearchVenue)
{
    return cy.get(this.clickOnAllLocationSearchBox).type(SearchVenue);
}


getsearchByTerminalName(searchTerminalName)
{

    return cy.get(this.searchByTerminalName).type(searchTerminalName);

}

getclicOnAddTerminalbtn()
{

    return cy.get(this.clicOnAddTerminalbtn).click();
    
}

getclickOnTerminalName(newTerminalName)
{
    return cy.get(this.clickOnTerminalName).type(newTerminalName);

}

getclickOnTerminaDescField(terminalDec)
{
    return cy.get(this.clickOnTerminaDescField).type(terminalDec);

}

getclickOnReceptionEmailId(ReceptionEmailId)
{
    return cy.get(this.clickOnReceptionEmailId).type(ReceptionEmailId);
}


getclickOnWelcomeMsg(terminalWelcomeMsg)
{
    return cy.get(this.clickOnWelcomeMsg).type(terminalWelcomeMsg);

}

getclickOnExitMsg(terminalExitMsg)
{
    return cy.get(this.clickOnExitMsg).type(terminalExitMsg);

}

getclickOnSavebtnofTerminal()
{

    return cy.get(this.clickOnSavebtnofTerminal);

}

getclickOnTerminalEdit()
{
    return cy.get(this.clickOnTerminalEdit).click();

}

getclickOnCancelbtn()
{

    return cy.get(this.clickOnCancelbtn).click();

}

getterminaleNameonEdit()
{
    return cy.get(this.terminaleNameonEdit);

}

getterminalDescOnEdit()
{
    return cy.get(this.terminalDescOnEdit);

}
getterminalReceptionEmailOnEdit()
{
    return cy.get(this.terminalReceptionEmailOnEdit);
}

getclickOnCancelbtnatEditTerminal()
{
    return cy.get(this.clickOnCancelbtnatEditTerminal).click();

}


getclickOnViewTerminalCredIcon()

{
    return cy.get(this.clickOnViewTerminalCredIcon).click();
}

getviewTerminalAuthorizationId()
{
    return cy.get(this.viewTerminalAuthorizationId);

}


getviewTerminalAuthorizationcode()
{
    return cy.get(this.viewTerminalAuthorizationcode);

}

getclickOnCancelBtnofTerminalCred()
{
    return cy.get(this.clickOnCancelBtnofTerminalCred).click();

}
getclickOnTerminalSettingEditIcon()
{

    return cy.get(this.clickOnTerminalSettingEditIcon).click();
    
}

}






export default AddTerminal;

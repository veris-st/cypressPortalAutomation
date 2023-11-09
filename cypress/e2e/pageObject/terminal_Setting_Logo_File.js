class TerminalLogoAndFiles{

clickonTerminalLogoAndFilesOption='[style="display: flex; align-items: center;"] > :nth-child(6)';
LogoAndFilesLandingPage='.ant-col-12 > :nth-child(1) > .settings-label-6d3a51d4d56eff3bddc825d01ded317e';
terminalLogoText=':nth-child(3) > :nth-child(1) > .settings-label-6d3a51d4d56eff3bddc825d01ded317e';
whiteLebelPoweredByVeris=':nth-child(4) > :nth-child(1) > .settings-label-6d3a51d4d56eff3bddc825d01ded317e';
saveButtonOfTerminalLogoAndFiles='.ant-col-6 > .ant-btn';

getclickonTerminalLogoAndFilesOption()
{
    return cy.get(this.clickonTerminalLogoAndFilesOption);
}

getLogoAndFilesLandingPage()
{
    return cy.get(this.LogoAndFilesLandingPage);

}
getterminalLogoText()
{
    return cy.get(this.terminalLogoText);

}
getwhiteLebelPoweredByVeris()
{

    return cy.get(this.whiteLebelPoweredByVeris);

}

getsaveButtonOfTerminalLogoAndFiles()
{
    return cy.get (this.saveButtonOfTerminalLogoAndFiles);
    
}







}

export default TerminalLogoAndFiles;

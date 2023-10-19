class AddVisitorReportTemplate
{

clickonReportTemplates="a[href='/settings/report-templates']";
clickOnAddTemplatebtn="button[type='button'] span";
enterReportTemplateName=":nth-child(1) > input";
//"input[placeholder='Enter Name']";
enterReportTemplateDesc="textarea";
//"textarea[placeholder='Enter Description']";












getclickonReportTemplates()
{
    return cy.get(this.clickonReportTemplates).click();

}
getclickOnAddTemplatebtn()
{
    return cy.get(this.clickOnAddTemplatebtn).click();

}

getenterReportTemplateName(visitorReportTemplateName)
{
    return cy.get(this.enterReportTemplateName).type(visitorReportTemplateName);
}

getenterReportTemplateDesc(visitorReportTemplateDesc)
{
    return cy.get(this.enterReportTemplateDesc).type(visitorReportTemplateDesc);

}










}

export default AddVisitorReportTemplate;

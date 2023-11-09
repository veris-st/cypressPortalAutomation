class TerminalSettingTouchless
{


        clickOnTouchlessOption='[style="display: flex; align-items: center;"] > :nth-child(5)';
        touchlessLandingPage='.ant-col-12 > :nth-child(1) > .settings-label-6d3a51d4d56eff3bddc825d01ded317e';
        virtualLobby='.ant-col-12 > .settings-label-6d3a51d4d56eff3bddc825d01ded317e';
        virtualLobbyValue="button[role='switch']";

        refreshValue=':nth-child(4) > .ant-col-12 > .settings-label-6d3a51d4d56eff3bddc825d01ded317e';
        touchlessURL=':nth-child(5) > .ant-col-12 > .settings-label-6d3a51d4d56eff3bddc825d01ded317e';
        saveButtonOfTouchlessTerminalSetting='.ant-col-6 > .ant-btn';


        getclickOnTouchlessOption()
        {
                return cy.get(this.clickOnTouchlessOption);

        }

        gettouchlessLandingPage()
        {
                return cy.get(this.touchlessLandingPage);

        }
        getvirtualLobby()
        {
                return cy.get(this.virtualLobby);

        }
        getrefreshValue()
        {
                return cy.get(this.refreshValue);

        }

        gettouchlessURL()
        {
                return cy.get(this.touchlessURL);

        }
        getsaveButtonOfTouchlessTerminalSetting()
        {
                return cy.get(this.saveButtonOfTouchlessTerminalSetting);
                
        }


        getvirtualLobbyValue()
        {
                return cy.get(this.virtualLobbyValue);
        }
        


}
export default TerminalSettingTouchless;
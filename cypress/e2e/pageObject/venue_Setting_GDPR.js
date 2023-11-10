class VenueSettingGDPR
{
   gDPROptionVenueSetting='[style="display: flex; align-items: center;"] > :nth-child(5)';
    acceptTitleVenueSetting=':nth-child(4) > .ant-col-4 > .ant-input';
    rejectTitleVenueSetting=':nth-child(4) > .ant-col-4 > .ant-input'
    savebtnGDPRVenueSetting='.ant-col-6 > .ant-btn';
    errorMsgOfGDPRPage='e.response is undefined';

getgDPROptionVenueSetting()
{
    return cy.get(this.gDPROptionVenueSetting);

}
getacceptTitleVenueSetting()
{
    return cy.get(this.acceptTitleVenueSetting);
}
getrejectTitleVenueSetting()
{
    return cy.get(this.rejectTitleVenueSetting);

}


getsavebtnGDPRVenueSetting()
{
    return cy.get(this.savebtnGDPRVenueSetting);
}


geterrorMsgOfGDPRPage()
{
    return cy.get(this.errorMsgOfGDPRPage);
}


}

export default VenueSettingGDPR;

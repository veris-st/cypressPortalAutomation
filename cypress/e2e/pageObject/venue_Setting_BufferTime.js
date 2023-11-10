class VenueSettingBufferTime{

    bufferTimeVenueSetting='[style="display: flex; align-items: center;"] > :nth-child(4)';
    overStayBufferTimeVenueSetting=':nth-child(3) > .ant-col-4 > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input';
    inviteValidTillBufferTime=':nth-child(4) > .ant-col-4 > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input';
    checkInBuffertime=':nth-child(5) > .ant-col-4 > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input';
    defaultWalkInAuthTime=':nth-child(6) > .ant-col-4 > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input';
    savebtnVenueSettingBufferTime='.ant-col-6 > .ant-btn';

    getbufferTimeVenueSetting()
    {
        return cy.get(this.bufferTimeVenueSetting);

    }
getoverStayBufferTimeVenueSetting()
{
    return cy.get(this.overStayBufferTimeVenueSetting);

}
getinviteValidTillBufferTime()

{
    return cy.get(this.inviteValidTillBufferTime);

}

getcheckInBuffertime()
{
    return cy.get(this.checkInBuffertime);

}

getdefaultWalkInAuthTime()
{
    return cy.get(this.defaultWalkInAuthTime);

}

getsavebtnVenueSettingBufferTime()
{
    return cy.get(this.savebtnVenueSettingBufferTime);

}


}

export default VenueSettingBufferTime;

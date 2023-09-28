
class SignUpPage
{


    btnsignUp='.ant-form-item-control-input-content > p';
    txtForgotEmailId='.ant-input';
    btnFortgotEmailOTPRequest='#signup-via-otp-design > .ant-btn';




    getSignUpButton()
    {
        return cy.get(this.btnsignUp).click();
    }

    getFortgotEmailIdTextField(forgotEmail)

    {
        return cy.get(this.getFortgotEmailIdTextField).type(forgotEmail);
    }

    getSendForgotOTPbtn()

    {
        return cy.get(this.btnFortgotEmailOTPRequest).click();

    }

    grapConfirmationMessageOfOTPRequest()
    {

        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('Done'); 
         })
    }



    




}


export default SignUpPage;


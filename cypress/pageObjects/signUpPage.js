
class SignUpPage
{

    btnsignUp='.login-signin-switch';
    //btnsignUp='.ant-form-item-control-input-content > p';
    txtForgotEmailId='.ant-input';
    btnFortgotEmailOTPRequest='#login-via-otp-design > .ant-btn'; 




    getSignUpButton()
    {
        return cy.get(this.btnsignUp).click();
    }

    getFortgotEmailIdTextField(forgotEmail)

    {
        return cy.get(this.txtForgotEmailId).type(forgotEmail);
    }

    getSendForgotOTPbtn()

    {
        return cy.get(this.btnFortgotEmailOTPRequest).click();

    }

    grapConfirmationMessageOfOTPRequest()
    {

        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('Error in sending OTP! Please check your contact details.'); 
         })
    }



    




}


export default SignUpPage;


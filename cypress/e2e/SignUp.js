import SignUpPage from "../e2e/pageObject/signUpPage.js"


const signUpPage= new SignUpPage();



describe('Verify Sign_up functionality', () => {

    

    it('SignUp Test', () => {

    cy.fixture('loginPageFixture.json').then((data)=>{


    cy.visit("https://st.veris.in");
    signUpPage.getSignUpButton();
    signUpPage.getFortgotEmailIdTextField(data.forgotEmail);
    signUpPage.getSendForgotOTPbtn();
    //signUpPage.grapConfirmationMessageOfOTPRequest();
    
    })
})
})





       
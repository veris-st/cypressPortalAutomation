describe ("Sign In",()=>{


//Test


before("Get org pull ", ()=> {

    cy.request({

        method:'POST',
        url:'https://st.veris.in/auth/signin',
        headers: {"Content-Type" : "application/json"},
        body: {
            auth_flow: "CUSTOM_AUTH",
            client_id: "5pelopbj0tg7mn94j73rdor1d6",
            contact: "shailendra.tiranga@veris.in",
            user_pool: "us-east-1_1h4ZFpTq1"
        }


    }).then((Response) => {
        expect(response.status).to.equal(200);

    })





})










}
)

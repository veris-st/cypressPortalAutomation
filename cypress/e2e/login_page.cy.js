describe ("Login API Automation",()=>{

    let userPool =null;
    let clientId=null;
    let challengeName='CUSTOM_CHALLENGE';
    let session=null;
    let requestId=null;
    let pool_id='22';
    let answer='Digicred4Passw0rd@12345';
    let domain='https://st.veris.in';
    let username ='shailendra.tiranga@veris.in';
    let login_flow="veris_auth"
 


    before("Get Call", () =>{
    



        cy.request({
    
                method : 'GET',
                url:'https://st.veris.in/auth/getorgpoolconfig',
                qs: {domain: 'https://st.veris.in'}

                })
                
                .then( (response) =>{

                    userPool=response.body[0].meta.pool.id;
                    clientId=response.body[0].meta.client[1].client_id;
                    expect(response.status).to.eq(200);


                    // Valiad the Key that are present in the response of the getorgpoolconfig API
        expect(response.body[0]).to.have.property('id');
        expect(response.body[0]).to.have.nested.property('meta.pool.id');
        expect(response.body[0]).to.have.nested.property('meta.pool.name');
        expect(response.body[0]).to.have.nested.property('organisation_id');
        expect(response.body[0]).to.have.property('org_logo');
        expect(response.body[0]).to.have.property('name');
        expect(response.body[0]).to.have.property('base_url');
       expect(response.body[0]).to.have.property('domain');
       expect(response.body[0]).to.have.property('cookies_urls');


                });

    });


    before("Sign In ", () =>{
    

        cy.request({
    
                method : 'POST',
                url:'https://st.veris.in/auth/signin',
                headers: {"Content-Type" : "application/json"},
                body: {
                    auth_flow:'CUSTOM_AUTH',
                    client_id: clientId,
                    contact: username,
                    user_pool: userPool
                }
                
            }).then( (response) =>{

                expect(response.status).to.equal(200);

                // Valiad the Key that are present in the response of the sign-in API

                expect(response.body).to.have.property('ChallengeName');
        expect(response.body).to.have.property('Session');
        expect(response.body).to.have.property('ResponseMetadata');

                 // Extract values from the response
      challengeName = response.body.ChallengeName;
      session = response.body.Session;
      requestId = response.body.ResponseMetadata.RequestId;

     

                });

    });


    it("Response to Challenge API ", () =>{
    

        cy.request({
    
                method : 'POST',
                url:'https://st.veris.in/auth/respondtochallenge',
                headers: {"Content-Type" : "application/json"},
                body: {
                    answer: answer,
                    challenge: challengeName,
                    client_id: clientId,
                    session: session,
                    username: username,
                    login_flow: login_flow,
                    domain: domain,
                    pool_id: pool_id,
                    user_pool: userPool
                }  
                
            }).then( (response) =>{

                expect(response.status).to.equal(200);
                //accessToken = response.body.AuthenticationResult.AccessToken;

     

                });

    });
    
    })
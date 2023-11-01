describe ("HTTP Request",()=>{



    it("Get Call", () =>{
    
    cy.request(
        
        
        
        
        
        'GET','https://st.veris.in/auth/getorgpoolconfig?domain=https://st.veris.in')


        
    .its('status')
    .should('equal',200)
    
    })
    
    
    
    
    
    
    
    
    
    })
 describe('Get users', () => {

    let token = '6f0b2066033289e8e41e0566163987310bbccd5b32a721c0a86cab20cbdfde66'
    let active = 'active'

    it('with status inactive', () => {

        
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users/',
            headers : {
                'authorization' : "Bearer " + token
            },
            body : {
                'status' : 'inactive'   
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            cy.log(res.requestBody)
            expect(res.body[0].status).to.eq("inactive")
            expect(res.body[0].status).to.include("inactive")
            expect(res.body[0].status).not.equal("active")
            
        })
    
    })

})

// beforeEach( () => {

//     cy
//       .log('starting test')
  
//   })


// describe('Get users again', () => {

//     it('with status inactive', () => {

//         let res
//         cy
//           .request('https://gorest.co.in/public/v2/users/', { 'status' : 'inactive' })
//           .then( ({ body }) => {
//             res = body
//           })
      
//         console.log(res)
      
//       })
// })
describe('Get todos', () => {

    let token = '6f0b2066033289e8e41e0566163987310bbccd5b32a721c0a86cab20cbdfde66'

    it('make sure it shows only 20 items', () => {
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v2/todos',
            headers : {
                'authorization' : "Bearer " + token
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body)
            .have.length(20)
        })
    
    })

})

// describe('Get todos again', () => {

//     let token = '6f0b2066033289e8e41e0566163987310bbccd5b32a721c0a86cab20cbdfde66'

//     it('make sure it shows only 20 items', () => {
//         cy.request('https://gorest.co.in/public/v2/todos')
//         .its('body')
//         .should('have.length', 20)

//         })

//     })



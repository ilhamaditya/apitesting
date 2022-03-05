context('web automation testing', () => {

    beforeEach(() => {
        cy.visit('https://flip.id/')
      })

    it("Find out where Flip generates revenue, make sure it mentioned Flip Plus, Big Flip and Digital Product", () => {

      cy.get('.tdZuI:nth-child(4)').click()
      cy.url().should('include', '/landing')
      cy.get('.sc-kQsIoO.kMBwnt > p.sc-jrIrqw.hfiYef').should('contain','Flip+, Flip for Business, serta penjualan produk digital (pulsa, paket data, token listrik).')
      cy.get('.sc-gPzReC.iULGZD').click({force: true}) 

      cy.get('.tdZuI:nth-child(4)').click()

  

    })

});
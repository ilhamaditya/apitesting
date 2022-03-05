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

    it("Click on the login button, then switch the language (Bahasa Indonesia to English, or vice versa)", () => {

      cy.get('.sc-kPVwWT.jhfOdj.c-button.sc-likbZx.dtPYVh:nth-child(3)').click()
      cy.get('.sc-cMhqgX.fxDoLM.c-dropdown__input').click({multiple: true,force: true})
      cy.get('.c-dropdown__item:nth-child(2)').click({multiple: true,force: true})
      cy.get('h2.sc-dHmInP.fokBuS').should('contain', 'Hello there!')

      cy.get('.sc-cMhqgX.fxDoLM.c-dropdown__input').click({multiple: true,force: true})
      cy.get('.c-dropdown__item:nth-child(1)').click({multiple: true,force: true})
      cy.get('h2.sc-dHmInP.fokBuS').should('contain', 'Hai!')
    })

    it("Click on the help section located on the bottom right corner, search for “e-Wallet”,then find out the supported e-Wallets and make sure OVO, DANA, Gopay, and Shopeepay are shown", () => {

      cy.get('iframe')
        .then(($iframe) => {
          const $body = $iframe.contents().find('body')
      cy.wrap($body)
        .find('.chat-content').click()
      })

      cy.get('iframe')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body')
      cy.wrap($body)
      .find('.icon-ic_search').click()
      })

      cy.get('iframe')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body')
      cy.wrap($body)
      .find('.search-wrap').type('e-Wallet')
      })

      cy.get('iframe')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body')
      cy.wrap($body)
      .find('.article:nth-child(2)').click()
      })

      cy.get('iframe')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body')
      cy.wrap($body)
      .find('.modal-body').should('contain', 'e-wallet (OVO, DANA, Gopay, Shopeepay)')
      })
      
      
  
    })

});
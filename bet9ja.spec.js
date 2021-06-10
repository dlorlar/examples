describe('Login Attempt', () => {
    it('Login', () => {
        cy.visit('https://mobile.bet9ja.com/mobile/dailybundle/soccer/1-1000/S_1X2')
        cy.contains('Login').click()
        cy.get('input[placeholder="Username"]').type('dlorlar88')
        cy.get('input[autocomplete="current-password"]').type('understand88')
        cy.get('.btn').contains('Login').click()
        cy.url().should('eq','https://mobile.bet9ja.com/mobile/dailybundle/soccer/1-1000/S_1X2')
        //cy.get('.modal-head').contains('x').should('be.visible').click()
        cy.get('#header_togglemenu').contains('My Account').should('be.visible').click()
        cy.get('#myaccountmenu_mybetsbutton').contains('My Bets').should('be.visible').click()
        cy.get('#mybetselement_heading_B924TCQAQTSCWP-176876').contains('Multiple').should('be.visible').click()
    })
    
})
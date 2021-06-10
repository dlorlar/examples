describe('App Login', () => {
    it('Login Attempt', () => {
        cy.visit('http://finstatclientportal.azurewebsites.net/Account/Login#')
        cy.get('#company').type('HMB')
        cy.get('input[id="username"]').type('fintrakbusiness')
        cy.get('input[id="passwordview"]').type('@password')
        cy.contains('Login').click()
        cy.url().should('eq','http://finstatclientportal.azurewebsites.net/')
        cy.get('#secondary-stat-item1').click()
        cy.url().should('eq','http://finstatclientportal.azurewebsites.net/Home/Index#/core-userprofile-list/')
        
    })
})
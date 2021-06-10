describe('Login Test', () => {
    it('Test', () => {
        cy.visit('https://fintraksubscription.azurewebsites.net/')
        cy.get('.btn').contains('Login').click()
    })
})
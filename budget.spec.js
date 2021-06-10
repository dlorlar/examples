describe('App Login', () => {
    it('Login Attempt', () => {
        cy.visit('https://fintrakbudget.azurewebsites.net/login.aspx')
        cy.get('input[placeholder="Enter ID"]').type('App_773814')
        cy.get('input[placeholder="Enter Username"]').type('admin')
        cy.get('input[placeholder="Enter Password"]').type('password10$')
        cy.contains('Login1_LoginButton').click()

    })
})
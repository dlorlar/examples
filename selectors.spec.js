describe('selectors demo', function (){
    it('cypress selectors', function () {

        cy.visit('https://www.saucedemo.com/index.html')

        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('[value^="LOG"]').click()

        cy.get('.inventory_item_name:eq(0)').click()

    })
})

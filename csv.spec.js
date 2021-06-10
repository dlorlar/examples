describe('Upload file', () => {
    it('Attempt Upload', () => {
        cy.visit('https://csvdemomockappp.bundlewallet.com/')
        const fixtureFile = 'test.csv';
        cy.get('#statement-file').attachFile(fixtureFile);
        cy.get('.btn').click()
    })
})
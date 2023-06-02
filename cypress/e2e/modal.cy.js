describe('Test modal', () => {

    beforeEach(() => {
        cy.setCookie('accessToken', 'Bearer mock');
        cy.seedAndVisit();
    });

    it('should open and close ingredient details modal', () => {
        cy.get('[data-test="product"]').first().click()
        cy.get('[data-test="modal"]').contains('Детали ингредиента').should('be.visible')
        cy.get('[data-test="close"]').click();
        cy.contains('Детали ингредиента').should('not.exist');
        cy.visit('/');
    });
     
    it('should open and close ingredient details modal on overlay click', () => {
        cy.get('[data-test="product"]').first().click()
        cy.get('[data-test="modal"]').contains('Детали ингредиента').should('be.visible')
        cy.get('[data-test="modal_overlay"]').click(300, 300, {force: true});
        cy.contains('Детали ингредиента').should('not.exist');
        cy.visit('/');
    });
})
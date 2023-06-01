describe('Test burger constructor', () => {

    beforeEach(() => {
        cy.setCookie('accessToken', 'Bearer mock');
        cy.seedAndVisit();
    });

    it('should drag bun', () => {
        cy.get('[data-test="product"]').contains('Краторная булка N-200i').trigger('dragstart');
        cy.get('[data-test="burger_constructor_area"]').contains("Добавить булки").trigger('drop');
        cy.get('[data-test="bun"]').first().contains('Краторная булка N-200i').should('exist');
        cy.get('[data-test="bun"]').last().contains('Краторная булка N-200i').should('exist');
    });

    it('should drag fillings', () => {
        cy.get('[data-test="product"]').contains('Биокотлета из марсианской Магнолии').trigger('dragstart');
        cy.get('[data-test="fillings"]').contains("Добавить начинку").trigger('drop');
        cy.get('[data-test="filling"]').first().contains('Биокотлета из марсианской Магнолии').should('exist');

        cy.get('[data-test="product"]').contains('Соус Spicy-X').trigger('dragstart');
        cy.get('[data-test="fillings"]').contains("Биокотлета из марсианской Магнолии").trigger('drop');
        cy.get('[data-test="filling"]').contains('Соус Spicy-X').should('exist');  
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
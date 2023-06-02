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
})
import '@testing-library/cypress/add-commands';
/// <reference types="Cypress" />

context('Assertions', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	describe('Test radio selection', () => {
		it('should show correct number of card in radio selection', () => {
			cy.findByLabelText('5')
				.click()
				.findAllByTestId('players-list-item')
				.should('have.length', 5);
		});
	});
});

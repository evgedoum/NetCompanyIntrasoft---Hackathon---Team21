/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://rahulshettyacademy.com/seleniumPractise')
      cy.wait(500);
      cy.click_increment('Brocolli - 1 Kg', 1);
      cy.click_add_to_cart('Brocolli - 1 Kg');
      cy.click_increment('Cucumber - 1 Kg', 2);
      cy.click_add_to_cart('Cucumber - 1 Kg');
      cy.click_cart_and_check_if_opens();
    })

    it('TC5: Complete an order without promo code', () => {
        cy.get('.cart-preview').children('.action-block').click();
        cy.contains('Place Order');
        cy.get('.totAmt').should('have.text', '384');

      });
})
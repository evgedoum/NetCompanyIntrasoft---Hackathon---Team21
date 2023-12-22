/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {

      cy.visit('https://rahulshettyacademy.com/seleniumPractise')
      cy.wait(500);
      cy.click_increment('Brocolli - 1 Kg', 1);
      cy.click_add_to_cart('Brocolli - 1 Kg');
      cy.click_increment('Cucumber - 1 Kg', 2);
      cy.click_add_to_cart('Cucumber - 1 Kg');
      cy.click_cart_and_check_if_opens();
      cy.get('.cart-preview').children('.action-block').click();
    })

    it('TC17: Apply valid promo code', () => {
        cy.get('.promoCode').click().type('rahulshettyacademy');
        cy.get('.promoBtn').click();
        cy.wait(5000);
        cy.get('.promoInfo').should('have.text', 'Code applied ..!');
      });

      it('TC18: Apply wrong promo code', () => {
        cy.get('.promoCode').click().type('wrongPromoCode');
        cy.get('.promoBtn').click();
        cy.wait(5000);
        cy.get('.promoInfo').should('have.text', 'Invalid code ..!');
      });

      it('TC19: Apply empty promo code', () => {
        cy.get('.promoBtn').click();
        cy.get('.promoInfo').should('have.text', 'Empty code ..!');
      });
})

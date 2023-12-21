/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://rahulshettyacademy.com/seleniumPractise')
    })

    it('Add one product to cart', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.get('.product-name').contains('Brocolli - 1 Kg').siblings('.product-action').click({scrollBehavior: 'center'});
        
        let price;
        cy.get('.product-name').contains('Brocolli - 1 Kg').siblings('.product-price').then((text) => {
            price = text.text();
        })
        cy.log(price);
        cy.get('.cart-info table tbody tr:nth-child(1) td:nth-child(3)',{scrollBehavior: 'top'}).should('have.text', '1');
        
        cy.get('.cart-info table tbody tr:nth-child(2) td:nth-child(3)',{scrollBehavior: 'top'}).then(function(cart_price){
            cart_price = cart_price.text();
            expect(price).to.equal(cart_price);
        })
      })
  })
  
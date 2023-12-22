/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://rahulshettyacademy.com/seleniumPractise')
    //   cy.wait(500);
    })

    it('Add one product to cart', () => {

        cy.get('.product-name').contains('Brocolli - 1 Kg').siblings('.product-action').click({scrollBehavior: 'center'});
        cy.get(".added").should("contain", "ADDED").parent().siblings('.product-name').contains('Brocolli - 1 Kg');
        
        let brocolli_price;
        cy.get('.product-name').contains('Brocolli - 1 Kg').siblings('.product-price').then((text) => {
            brocolli_price = Number(text.text());
        });
        
        cy.get('.cart-info table tbody tr:nth-child(1) td:nth-child(3)',{scrollBehavior: 'top'}).should('have.text', '1');
        cy.get('.cart-info table tbody tr:nth-child(2) td:nth-child(3)',{scrollBehavior: 'top'}).then(function(cart_price){
            cart_price = Number(cart_price.text());
            expect(brocolli_price).to.equal(cart_price);
        });
        
        //click cart
        cy.get('.cart-icon').click();
        // check if cart preview is open
        cy.get('.cart-preview');

        
        cy.get('.cart-preview .cart-items').contains('Brocolli - 1 Kg').siblings('.product-price').then(function(text){
            const cart_brocolli_price = Number(text.text());
            expect(cart_brocolli_price).to.equal(brocolli_price)
        });
        cy.get('.cart-preview .cart-items').contains('Brocolli - 1 Kg').parent().parent().children('.product-total').children('.quantity').contains('1 No.');
        cy.get('.cart-preview .cart-items').contains('Brocolli - 1 Kg').parent().parent().children('.product-total').children('.amount').then(function(text){
            const brocolli_total_price = Number(text.text());
            expect(brocolli_total_price).to.equal(brocolli_price)
        });
      });  
  })
  
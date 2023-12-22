/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://rahulshettyacademy.com/seleniumPractise')
      cy.wait(500);
    })

    it('TC1: Add one product to cart', () => {
        cy.click_add_to_cart('Brocolli - 1 Kg');
        cy.check_add_to_cart_button_change('Brocolli - 1 Kg');
        
        // let brocolli_price = cy.getPrice('Brocolli - 1 Kg');
        // cy.log(brocolli_price);
        let brocolli_price

        cy.get('.product-name').contains('Brocolli - 1 Kg').siblings('.product-price').then((text) => {
            brocolli_price = Number(text.text());
        });
        
        // cy.check_cart_info(1, brocolli_price);
        cy.get('.cart-info table tbody tr:nth-child(1) td:nth-child(3)',{scrollBehavior: 'top'}).should('have.text', '1');
        cy.get('.cart-info table tbody tr:nth-child(2) td:nth-child(3)',{scrollBehavior: 'top'}).then(function(cart_price){
            cart_price = Number(cart_price.text());
            expect(brocolli_price).to.equal(cart_price);
        });
        
        cy.click_cart_and_check_if_opens();

        
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

      
      it('TC2: Add multiple items to cart', () => {

        cy.click_increment('Cucumber - 1 Kg', 1);
        cy.click_add_to_cart('Cucumber - 1 Kg');

        cy.click_increment('Beetroot - 1 Kg', 2);
        cy.click_add_to_cart('Beetroot - 1 Kg');
        cy.wait(200);

        let cucumber_price;
        cy.get('.product-name').contains('Cucumber - 1 Kg').siblings('.product-price').then((text) => {
            cucumber_price = Number(text.text());
        });
        
        let beetroot_price;
        cy.get('.product-name').contains('Beetroot - 1 Kg').siblings('.product-price').then((text) => {
            beetroot_price = Number(text.text());
        });

        cy.get('.cart-info table tbody tr:nth-child(1) td:nth-child(3)',{scrollBehavior: 'top'}).should('have.text', '2');
        cy.get('.cart-info table tbody tr:nth-child(2) td:nth-child(3)',{scrollBehavior: 'top'}).then(function(cart_price){
            cart_price = Number(cart_price.text());
            const expected_price = cucumber_price * 2 + beetroot_price *3
            expect(expected_price).to.equal(cart_price);
        });

        cy.click_cart_and_check_if_opens();
        
        //check cucumber in cart preview
        cy.get('.cart-preview .cart-items').contains('Cucumber - 1 Kg').siblings('.product-price').then(function(text){
            const cart_cucumber_price = Number(text.text());
            expect(cart_cucumber_price).to.equal(cucumber_price)
        });
        cy.get('.cart-preview .cart-items').contains('Cucumber - 1 Kg').parent().parent().children('.product-total').children('.quantity').contains('2 Nos.');
        cy.get('.cart-preview .cart-items').contains('Cucumber - 1 Kg').parent().parent().children('.product-total').children('.amount').then(function(text){
            const cucumber_total_price = Number(text.text());
            expect(cucumber_total_price).to.equal(cucumber_price * 2)
        });

        //check beetroot in cart preview
        cy.get('.cart-preview .cart-items').contains('Beetroot - 1 Kg').siblings('.product-price').then(function(text){
            const cart_beetroot_price = Number(text.text());
            expect(cart_beetroot_price).to.equal(beetroot_price)
        });
        cy.get('.cart-preview .cart-items').contains('Beetroot - 1 Kg').parent().parent().children('.product-total').children('.quantity').contains('3 Nos.');
        cy.get('.cart-preview .cart-items').contains('Beetroot - 1 Kg').parent().parent().children('.product-total').children('.amount').then(function(text){
            const beetroot_total_price = Number(text.text());
            expect(beetroot_total_price).to.equal(beetroot_price * 3)
        });

      });
  })
  
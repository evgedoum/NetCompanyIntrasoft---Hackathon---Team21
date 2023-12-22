// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('click_add_to_cart', (product_name) => { 
    cy.get('.product-name').contains(product_name).siblings('.product-action').click({scrollBehavior: 'center'});
});

Cypress.Commands.add('click_increment', (product_name, times) => {
    for(let i = 0; i < times; i++){
        cy.get('.product-name').contains(product_name).siblings('.stepper-input').children('.increment').click({scrollBehavior: 'center'});
    }
});

Cypress.Commands.add('check_add_to_cart_button_change', (product_name) => {
    cy.get(".added").should("contain", "ADDED").parent().siblings('.product-name').contains(product_name);
});

// Cypress.Commands.add('getPrice', (product_name) => {
//     return cy.get('.product-name').contains(product_name).siblings('.product-price').then((text) => {
//       const price = Number(text.text());
//       cy.wrap(price).as('price'); // Save the price using cy.wrap
//     });
//   });

// Cypress.Commands.add('check_cart_info', (item_num, price) => {
//     cy.get('.cart-info table tbody tr:nth-child(1) td:nth-child(3)',{scrollBehavior: 'top'}).should('have.text', item_num);
//     cy.get('.cart-info table tbody tr:nth-child(2) td:nth-child(3)',{scrollBehavior: 'top'}).then(function(cart_price){
//         cart_price = Number(cart_price.text());
//         expect(price).to.equal(cart_price);
//     });
// });

Cypress.Commands.add('click_cart_and_check_if_opens', () => {
    //click cart
    cy.get('.cart-icon').click();
    // check if cart preview is open
    cy.get('.cart-preview');
});
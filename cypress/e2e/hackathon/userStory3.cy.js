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

    it('TC10: Search for existing item incomplete name', () => {
        cy.get('.search-keyword').type('ber');
        cy.contains('Cucumber');
        cy.contains('Raspberry');
        cy.contains('Strawberry');
      });

      it('TC11: Search for existing item', () => {
        cy.get('.search-keyword').type('Brinjal');
        cy.contains('Brinjal - 1 Kg');
      });
      
      it('TC12: Search for unexisted item', () => {
        cy.get('.search-keyword').type('Pineapple');
        cy.contains('Sorry, no products matched your search!');
      });
})
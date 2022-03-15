/// <reference types="cypress" />

it("Acessando URL", () => {
    cy.visit('/')
})

// Cypress.on('uncaught:exception', (err, runnable) => {
//     return false;
//   });
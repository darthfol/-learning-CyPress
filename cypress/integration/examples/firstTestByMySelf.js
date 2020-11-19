/// <reference types="cypress" />

describe('First test', () => {

    
    
    it('PageTitleValidation - Positive', () => {
        
        cy.visit('https://frontend.nopcommerce.com/');
        cy.title().should('eq', 'nopCommerce demo store');
    })
    it('PageTitleValidation - Negative', () => {
        cy.visit('https://frontend.nopcommerce.com/');
        cy.title().should('eq', 'nopCommerce store');
    })

})
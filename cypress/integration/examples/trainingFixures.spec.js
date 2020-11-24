/// <reference types="cypress" />

describe("Learning fixures", () => {

    //#region 
    //Setup
    let jsonData;
    before(() => {
        cy.fixture('example.json').then((data) => {
            jsonData = data;
        });
    })

    beforeEach(() => {
        cy.visit('https://admin-demo.nopcommerce.com');
        cy.get('#Email').clear();
        cy.get('#Password').clear();
    });
    //#endregion

    it("Login - P", () => {

        cy.get('#Email').type(jsonData.email);
        cy.get('#Password').type(jsonData.password);
        cy.get('input[type="submit"]').click();
        cy.title().should('eq', 'Dashboard / nopCommerce administration')
        cy.go(-1);
    });

    it("Login - F", () => {

        cy.get('#Password').type(jsonData.passwordWrong);
        cy.get('#Email').type(jsonData.emailWrong);
        cy.get('input[type="submit"]').click();
        cy.get('#Email-error').should('contains.text', 'Wrong email');
    })

})
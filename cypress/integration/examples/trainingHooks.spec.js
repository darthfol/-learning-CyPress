/// <reference types="cypress" />

describe("(Learning) Hooks", () => {

    //#region 
    //Setup
    before('Before whole scenario', () => {
        cy.log('Run this code before whole scenario');
    })

    after('CleanUp after whole scenario', () => {
        cy.log('Run this after whole sceario');
    })

    beforeEach('Prepare test case', () => {
        cy.log('Prepare for taste case');
    })

    afterEach('Do this code after test case', () => {
        cy.log('Magic, Magic, Make this case to be passed');
    })

    //#endregion

    it('Case 1', () => {
        cy.log('*****************Case 1 Log***********')
    });

    it('Case 2', () => {
        cy.log('*****************Case 2 Log***********')
    });

    it('Case 3', () => {
        cy.log('*****************Case 3 Log***********')
    });

})
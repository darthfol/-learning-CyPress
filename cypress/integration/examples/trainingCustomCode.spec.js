/// <reference types='cypress'/>

describe('Learning using custom code', () => {

    it('Login', () => {
        //pass
        cy.login('admin@yourstore.com', 'admin');
        cy.title().should('eq', 'Dashboard / nopCommerce administration');

        //fail - mail
        cy.login('TotalyWrondMailAddress', 'admin');
        cy.title().should('eq', 'Your store. Login');

        //fail - password
        cy.login('admin@yourstore.com', 'ThisISWrongPassword');
        cy.title().should('eq', 'Your store. Login');



    })

    it('Add user', () => {
        // login
        cy.login('admin@yourstore.com', 'admin');
        cy.title().should('eq', 'Dashboard / nopCommerce administration');
        // add user
        cy.log('Add user');
    })

    it('Edit user', () => {
        // login
        cy.login('admin@yourstore.com', 'admin');
        cy.title().should('eq', 'Dashboard / nopCommerce administration');
        // edit user
        cy.log('Edit user');
    })


});
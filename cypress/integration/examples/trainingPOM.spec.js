/// <reference types='cypress' />

import LoginPage from '../pageObjects/loginPage';


describe("Login test", () => {

    let loginPage = new LoginPage('#Email', '#Password', 'input[type=submit]');
    let data;
    before(() => {
        data = cy.fixture('example.json');
    })
    it("Login test", () => {
        //Positive
        //cy.log(data['email']);

        loginPage.Open();
        loginPage.FillEmail('admin@yourstore.com');
        loginPage.FillPassword('admin');
        loginPage.LogIn();
        cy.title().should('eq', 'Dashboard / nopCommerce administration');


    })

})
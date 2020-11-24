/// <reference types='cypress' />

class LoginPage {
    constructor(emailPath, passowrdPath, submitPath) {
        this.emailPath = emailPath;
        this.passowrdPath = passowrdPath;
        this.submitPath = submitPath;
    }
    Open() {
        cy.visit("https://admin-demo.nopcommerce.com/login");
    }

    FillEmail(emailLogin) {
        cy.get(this.emailPath)
            .clear()
            .type(emailLogin);

    }

    FillPassword(passwordLogin) {
        cy.get(this.passowrdPath)
            .clear()
            .type(passwordLogin);
    }

    LogIn() {
        cy.get(this.submitPath)
            .click();
    }

}

export default LoginPage;
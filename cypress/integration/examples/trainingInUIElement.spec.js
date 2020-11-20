/// <reference types="Cypress" />

describe("Ui trening", () => {
    //#region Testint register form http://demo.automationtesting.in/Register.html
    //#endregion
    it("Open correct page", () => {

        cy.visit("http://demo.automationtesting.in/Register.html");

        cy.url().should("contain", "Register");

    });

    //#region Fill First,last Name
    /*
        1) Fill First name
        2) Fill second name
    */
    //#endregion
    it("Fill name", () => {
        cy.get(":nth-child(1) > :nth-child(2) > .form-control").type("Piotr");

        cy.get("input[placeholder ='Last Name']").type("Foltyn");

    });
    //#region Fill correct email adres 
    /*
        1) fill mail
        2) fill phone number
    */
    //#endregion
    it("Fill contact data", () => {
        cy.get("input[value=Male]")
            .should("be.visible").should("not.be.checked")
            .click();
        cy.get("input[value=FeMale]")
            .should("be.visible").should("not.be.checked");

    });

    //#region select hobbie
    /*
        1. Select two of them (1,3) and check
        2. Select 2 and check
        3. Uncheck 1,3
    */
    //#endregion
    it("Select hobbie", () => {


        cy.get("#checkbox1")
            .should("have.value", "Cricket").should("not.be.checked")
            .check()
            .should("be.checked");
        cy.get("#checkbox3")
            .should("have.value", "Hockey").should("not.be.checked")
            .check()
            .should("be.checked");

        cy.get("#checkbox2")
            .should("have.value", "Movies").should("not.be.checked")
            .check()
            .should("be.checked");


        cy.get("#checkbox3").uncheck();
        cy.get("#checkbox1").uncheck();
    });

    //#region select skill

    /*
        1. select html
        2. select enginering
        3. select Android end press {esc}

    */
    //#endregion
    it("Select skill", () => {
        cy.get("#Skills")
            .select("HTML").should("have.value", "HTML")
            .select("Engineering").should("have.value", "Engineering")
            .select("Android").should("have.value", "Android").type('{esc}');


    })

    //#region 
    /*
        1. Show language list
        2. Select 3 languages: Polish, Arabic, Thai and close
        3. Check if 3 languages are selected
        4. show list
        5. select 1 language: Japanese and close
        6. check if list contain 4 language
        7. remove Arabic language
        8. check if it constain 3 languages 
    */
    //#endregion
    it('Select multiLanguages', () => {
        cy.get("#msdd").click();

        cy.get('ul.ui-menu').contains("Polish").click();
        cy.get('ul.ui-menu').contains("Arabic").click();
        cy.get('ul.ui-menu').contains("Thai").click();
        cy.get('#basicBootstrapForm > :nth-child(7)').click("topRight");

        cy.get('#msdd')
            .should('contain', 'Polish').and('contain', 'Arabic').and('contain', 'Thai');

        cy.get('#msdd').click();
        cy.get('ul.ui-menu').contains("Japanese").click();
        cy.get('#basicBootstrapForm > :nth-child(7)').click("topRight");

        cy.get('#msdd')
            .should('contain', 'Polish').and('contain', 'Arabic').and('contain', 'Thai').and('contain', 'Japanese');

        cy.get(':nth-child(2) > .ui-icon').click();

        cy.get('#msdd')
            .should('contain', 'Polish').and('contain', 'Japanese').and('contain', 'Thai');

    });

    it('Select Contry', () => {
        cy.get('#countries').select('Japan').should('have.value', 'Japan');
    });

    it('Select Contry(search field)', () => {
        cy.get('.select2-selection').click();
        cy.get('input[type=search]').type('Austr').type('{enter}');
        cy.get('#select2-country-container').should('contain', 'Australia');
    });
});
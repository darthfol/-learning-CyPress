/// <reference types="cypress"/>


describe("ShoopingTest", () => {
    //#region Shopping chart validation plan
    /*
    1) Lunch browser &open url:https://demo.nopcommerce.com/
    2) Enter name of searched product: Nokia lumia 1020 
    3) Click on search btn
    4) Click btn "Add to cart"
    5) Provide quantity 2
    6) Click on "Add to cart"
    7) Click on Shopping Cart (link at top of the page)
    8) verify the total amount

    */
    //#endregion
    it("Shopping chart validation", () => {
        cy.visit("https://demo.nopcommerce.com/")

        cy.get("#small-searchterms").type("Nokia lumia 1020")

        cy.get("#small-search-box-form > .search-box-button").click()

        cy.get(".product-box-add-to-cart-button").click();

        cy.wait(5000);

        cy.get("#topcartlink >.ico-cart > span.cart-label").click();

        cy.get("td.subtotal > .product-subtotal").contains("$349.00");

    })
    //#region Clearing shopping chart plan
    /* 
        1) Click remove check box
        2) click update shoping cart
        3) validate empty shoping cart
        4) move to main page
    */
    //#endregion
    /*
    it("Clearing shopping chart", () => {
        cy.get("tbody > tr > .remove-from-cart > input[type='checkbox']").click();

        cy.get("div.cart-options > div.common-buttons > input[value='Update shopping cart']").click();

        cy.get("div.page shopping-cart-page > div.page-body >div.order-summary-content > div.no-data").contains("Your Shopping Cart is empty!");

        cy.get("div.header-logo > a").click();
    })
    */
});
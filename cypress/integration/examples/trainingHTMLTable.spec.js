/// <reference types='cypress' />

describe('Testin table in HTML', () => {

    it('Open targeted page', () => {
        cy.visit('http://testautomationpractice.blogspot.com/');
        cy.title().should('eq', 'Automation Testing Practice');
    });

    it('Check if Learn JS author is Animesh', () => {
        // find table table[name=BookTable]
        cy.get('table[name=BookTable]> tbody> tr>td:nth-child(1)').each(($element, index, $list) => {
            // check first colum looking for LearnJS
            if ($element.text().includes('Learn JS')) {
                // check does 2nd column in row with learn JS  is Animesh
                cy.get('table[name=BookTable]> tbody> tr>td:nth-child(2)').eq(index).then((author) => {
                    expect(author.text()).to.equal('Animesh')
                });

            }

        })



    })
    const checkedValue = 'Javascript';
    it('Check if there are ' + checkedValue + ' subject', () => {

        cy.get('table[name="BookTable"]>tbody>tr td:nth-child(3)').each(($element, index) => {
            if ($element.text().includes(checkedValue)) {
                expect($element.text()).to.includes(checkedValue);
            }

        })
    });
});
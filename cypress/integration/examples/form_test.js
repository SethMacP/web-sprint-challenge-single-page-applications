context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/pizza')
    })

    it('Type into the name field', () => {
        // https://on.cypress.io/type
        cy.get('[data-cy=name]')
          .type('Joe Schmoe')
          .should('have.value', 'Joe Schmoe')
    });
    it('Check Pepperoni', () => {
        // https://on.cypress.io/type
        cy.get('[data-cy=top_pep]')
          .check()
          .should("be.checked")
    });
    it('Check Ham', () => {
        // https://on.cypress.io/type
        cy.get('[data-cy=top_ham]')
          .check()
          .should("be.checked")
    });
    it('Check Sausage', () => {
        // https://on.cypress.io/type
        cy.get('[data-cy=top_sau]')
          .check()
          .should("be.checked")
    });
    it('Check Anchovies', () => {
        // https://on.cypress.io/type
        cy.get('[data-cy=top_anc]')
          .check()
          .should("be.checked")
    });
    it('Enter text into the instruction field', () => {
        // https://on.cypress.io/type
        cy.get('[data-cy=instructions]')
          .type('I only like cheese pizza')
          .should("have.value", 'I only like cheese pizza')
    });
    it('Click submit button', () => {
        // https://on.cypress.io/type
        cy.get('[data-cy=submitBtn]')
          .click()
    });
    
    


})
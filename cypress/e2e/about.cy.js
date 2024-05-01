describe('template spec', () => {
  it('pageOpen', () => {
    cy.visit('https://parabank.parasoft.com/parabank/about.htm')
    cy.url('https://parabank.parasoft.com/parabank/about.htm').should('include', 'parasoft.com');
    cy.title().should('include', 'ParaBank');
    cy.get('h1').should('be.visible'); 
    cy.get('li').should('be.visible');
    cy.get('a').should('be.visible');
    cy.get('p').should('be.visible')
    cy.get('form').should('be.visible');
    cy.get('img').should('be.visible');
    cy.get('.button').should('be.visible');
    cy.get('.input').should('be.visible');
    cy.get('h2').should('be.visible');
    cy.get('.input[name="username"]')
      .type('Dielli')
      .should('have.value', 'Dielli');
  })
})

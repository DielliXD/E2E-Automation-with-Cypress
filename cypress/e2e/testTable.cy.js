import table from "../pageobject/tablerow";

describe('table', () => {
    it('passed', () => {
      cy.visit('https://parabank.parasoft.com/parabank/services.htm');
        table.tablecount()
  })
  })
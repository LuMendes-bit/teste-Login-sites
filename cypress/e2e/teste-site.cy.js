describe('Loja de produtos', () => {
  it('Deve fazer o login com sucesso', () => {
    cy.visit('https://www.demoblaze.com/');
    cy.get("#login2").click();
    cy.get('#loginusername').type('luTesteSenac');
    cy.get('#loginusername').clear();
    cy.get('#loginusername').type('luTesteSenac');
    cy.get('#loginpassword').type('teste1324senac');
    cy.get('button[onclick="logIn()"]').click();
    cy.get('#nameofuser').should('contain','Welcome luTesteSenac');
  });


  it('Deve falhar o login', () => {
    cy.visit('https://www.demoblaze.com/');
    cy.get("#login2").click();
    cy.get('#loginusername').type('luTesteSenac');
    cy.get('#loginusername').clear();
    cy.get('#loginusername').type('luTesteSenac');
    cy.get('#loginpassword').type('wrhgwhgju');
    cy.get('button[onclick="logIn()"]').click();
    cy.on('window:alert', (text) => {expect(text).to.eq('Wrong password.');});
    
  });
});

import 'cypress-xpath';

describe('login', function ()  {

  before(function () {
    cy.fixture('002_massa_acesso_usuario').then(function (data) {
      this.data = data;
    })
  })
  context('Dado que eu queira realizar o login', () => {
  it('login', function () {

  cy.visit('http://www.automationpractice.pl/index.php')
  cy.contains('Sign in').click()
  context('Quando eu informar o login', () => {
  cy.get('#email').type(this.data.Email);
  cy.get('#passwd').type(this.data.Senha);
  context('Então o sistema deverá realizar o login com sucesso', () => {
  cy.get('#SubmitLogin').click();
        
        })
      })
    })
  })
})
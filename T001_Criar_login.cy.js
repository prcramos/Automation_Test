

describe('criar login', function ()  {

  before(function () {
    cy.fixture('001_massa_cadastro_usuario').then(function (data) {
      this.data = data;
    })
  })
  context('Dado que eu queira cadastrar os dados de usuário', () => {
  it('criar login', function () {
  cy.visit('http://www.automationpractice.pl/index.php')
  cy.contains('Sign in').click()

  context('Quando eu informar os dados de usuário', () => {
  cy.get('#email_create').type(this.data.Email);
  cy.get('#SubmitCreate').click();
  cy.get('#id_gender1').click();
  cy.get('#customer_firstname').type(this.data.Name);
  cy.get('#customer_lastname').type(this.data.SobreNome);
  cy.get('#passwd').type(this.data.Senha);
  cy.get('#days').select(4).should('have.value', '4');
  cy.get('#months').select('March');  
  cy.get('#years').select('1985');
  cy.get(".checker").click();


  context('Então o sistema deverá cadastrar os dados de usuário com sucesso', () => {
  cy.get('#submitAccount').click();
  
       })
     })
   })
  })
})

import 'cypress-xpath';

describe('Adicionar produto ao carrinho', function ()  {

  before(function () {
    cy.fixture('002_massa_acesso_usuario').then(function (data) {
      this.data = data;
    })
  })
  context('Dado que eu queira realizar a compra de um produto', () => {
  it('Adicionar produto ao carrinho', function () {

  cy.visit('http://www.automationpractice.pl/index.php')
  cy.contains('Sign in').click()
  cy.get('#email').type(this.data.Email);
  cy.get('#passwd').type(this.data.Senha);
  cy.get('#SubmitLogin').click();
  cy.get('a[title="Women"]').click()
  

  context('Quando eu adicionar o produto no carrinho', () => {
  cy.contains('Compare').click()
  cy.contains('Add to cart').click()
  cy.contains('Proceed to checkout').click()
  cy.wait(1000)
  cy.xpath('//*[@id="center_column"]/p[2]/a[1]').click()
  cy.xpath('//*[@id="center_column"]/form/p/button').click()
  cy.get('#cgv').click()


  context('Então o sistema deverá processar o pagamento do produto com sucesso', () => {
  cy.xpath('//*[@id="form"]/p/button').click()
  cy.get('a[title="Pay by bank wire"]').click()
  cy.xpath('//*[@id="cart_navigation"]/button').click()
    
          })
        })
      }) 
    })   
  })
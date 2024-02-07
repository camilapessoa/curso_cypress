describe('Página de login', () => {
    beforeEach(() =>{
        cy.visit('https://adopet-frontend-iota.vercel.app/');

    })   
        it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
        cy.get('[data-test="login-button"]').click();
        cy.login('marjorie@email.com', 'Senha123')
        
     })
  })
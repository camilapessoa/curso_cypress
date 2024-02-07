describe('Página de login', ()=> {
    beforeEach(()=> {
        cy.visit('https://adopet-frontend-iota.vercel.app/');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', 'https://adopetapi-pgks.onrender.com/adotante/login', {
            statusCode:400, }).as('stubPost')
            
    })
    it('Verifica mensagem de falha no login', () => {
        cy.get('[data-test="submit-button"]').click()
        cy.contains('É necessário informar um endereço de email').should('be.visible')
        cy.contains('Insira sua senha').should('be.visible')
       })

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
        cy.login('marjorie@email.com', 'Senha123')
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    })

    
})


//'É necessário informar um endereço de email'

    //Por favor, verifique o email digitado



    //A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres
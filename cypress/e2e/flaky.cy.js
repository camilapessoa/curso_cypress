describe('Teste Flaky - Carregamento da Página', () => {
  it('deve carregar a página corretamente', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');

    // Verifica se o título da página é o esperado
    cy.title().should('eq', 'AdoPet');

    // Verifica se o logo da Adote um Pet está presente
    cy.get('.initial > img').should('be.visible');
    // cy.get('.home__buttons').click()
    cy.contains('a', 'Ver pets disponíveis para adoção').should('be.visible')
    cy.get('[data-test="login-button"]').click();
        
    cy.login('camila@exemplo.com', 'Senha123');
    cy.wait(Math.random() * 50); 
    cy.get('.cards').should('be.visible')
    // cy.get(':nth-child(7) > img').should('be.visible')
  
  });
  
 
});
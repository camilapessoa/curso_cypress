describe('Página de login', () => {
  beforeEach(() =>{
      cy.visit('https://adopet-frontend-cypress.vercel.app');
      cy.get('[data-test="login-button"]').click();

  })   
  //     it('Acessar página de perfil', () => {
      
  //     cy.login('camila@exemplo.com', 'Senha123')
  //     cy.get('.header__user').click();
  //     cy.get('.button').click();
      
  //  })


  // it('Verificar se o usuário está logado', () => {
  //   cy.login('camila@exemplo.com', 'Senha123')
  //   cy.get('.header__user').click();

  //   // cy.get('a[href*="/perfil"]').click()
  //   cy.contains('a', 'Ver Perfil').should('be.visible')
  //   // cy.get('.button').should('be.visible');
  // })

  // it('Verificar se o usuário está logado', () => {
  //     cy.login('camila@exemplo.com', 'Senha123')
      
  //     cy.get('.cards').should('be.visible')
      
  //   })


  // it('Verificar se o usuário está logado', () => {
  //     cy.login('camila@exemplo.com', 'Senha123')
  //     cy.get('.header__user').click();
  
  //     // cy.get('a[href*="/perfil"]').click()
  //     cy.contains('a', 'Ver Perfil').should('be.visible')
  //     // cy.get('.button').should('be.visible');
  //   })

    it('Verificar se o usuário está logado', () => {
      cy.login('camila@exemplo.com', 'Senha123')
      cy.get('.header__user').click();
  
      cy.get('a[href*="/perfil"]').click()
      // cy.contains('a', 'Ver Perfil').should('be.visible')
      // cy.get('.button').should('be.visible');
      
      cy.get('#nome').invoke('val').should('contain', 'camila')
    })

})
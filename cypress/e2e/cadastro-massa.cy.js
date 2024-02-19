import {usuarios } from '../fixtures/usuarios.json'

describe('Página de cadastro', () => {

    beforeEach(() => {
         cy.visit('https://adopet-frontend-iota.vercel.app/');
         cy.get('[data-test="register-button"]').click();
             
    })
       usuarios.forEach(usuario => { 
        it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
            
            cy.get('[data-test="input-name"]').focus().clear().type(usuario.name);
            cy.get('[data-test="input-email"]').focus().clear().type(usuario.email);
            cy.get('[data-test="input-password"]').focus().clear().type(usuario.password);
            cy.get('[data-test="input-confirm-password"]').focus().clear().type(usuario.password);
            cy.get('[data-test="submit-button"]').click();

            cy.wait(1000)

        })
     })          
})


   

describe('Api Adopet', () => {
    // beforeEach(() => {
    //     cy.visit('https://adopet-frontend-iota.vercel.app/');
    //     cy.get('[data-test="login-button"]').click();
    //     cy.login(Cypress.env('email'), Cypress.env('senha'))

    // })

  
        it('login', () => {
            cy.request({
                method: 'POST' ,
                url: 'https://adopetapi-pgks.onrender.com/adotante/login',
                body: Cypress.env()
                
            }).then((res) => {
                expect(res.status).to.be.equal(201)
                expect(res.body).is.not.empty
                // expect(res.body[0]).to.have.property('msg') to.have token
                // expect(res.body[0].msg).to.be.equal('Amei o json') to.be.equal token
                
            })
        })
}) 

//proteção de dados sensíveis com .env. Explicar que .env também é usado para tratar informações dinâmicas, como url, email correto, incorreto https://stackoverflow.com/questions/56832494/define-variables-in-cypress-env-json

//https://stackoverflow.com/questions/61569780/cypress-how-can-we-write-get-request-in-with-bearer-token-in-cypress

//deixar como exercício -> aluno modificar os parâmetros para consumir .env.json https://stackoverflow.com/questions/56832494/define-variables-in-cypress-env-json
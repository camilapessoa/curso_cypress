describe('Api Adopet', () => {
    const authorization = `Bearer ${Cypress.env('token')}`

        it('Mensagens', () => {
            cy.request({
                method: 'GET' ,
                url: 'https://adopetapi-pgks.onrender.com/mensagem/14451c6b-5431-4bbe-8851-56b85633f360',
                // body: Cypress.env()
                headers: { authorization }
                
            }).then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body).to.have.property('msg') 
                expect(res.body.msg[1].msg).to.be.equal('Amei o json') // Acessar o objeto, o array e os objetos: comportamelho empilhado (primeiro a entrar é o último a sair)
                
            })
        })
    })
    //url de mensagem com o id do usuário
    //inserir token no .env
    //criar variável authorization para armazenar o token
    //para saber mais sobre diferença entre autorização e autenticação
Roteiro de testes baseados nas funcionalidades (características funcionais).
RT- Passos e resultados esperados

Localização
Pré- condições: passos necessários previamente(outros testes realizados anteriormente)

Cenários de testes: Agrupar conjuntos de casos de testes em sequência e apresentar o resultado esperado

Funcionalidade: Cadastro no site adopet

  Cenário: Realizar um cadastro no site com sucesso

    Dado que o usuário acessa a página de cadastro
    Quando o usuário insere seu nome, email, senha e confirmação de senha 
    E clica no botão cadastrar
    Então o usuário é cadastrado 
    E o usuário visualiza mensagem de sucesso

 Regra de negócio: email e senha obrigatórios

 Cenário: Falha na tentativa de cadastro

    Dado que o usuário acessa a página de cadastro
    Quando o usuário não insere valores nos campos obrigatórios, como nome, email, senha e confirmação de senha
    E o usuário clica no botão de cadastro
    Então o usuário visualiza mensagem de erro
    
 Regra de negócio: email e senha obrigatórios


 Cenário: Falha na tentativa de cadastro

    Dado que o usuário acessa a página de cadastro
    Quando o usuário não insere algum dos campos obrigatórios, como nome, email, senha e confirmação de senha
    E o usuário muda de campo
    Então o usuário visualiza mensagem de erro
    
 Regra de negócio: email e senha obrigatórios


  Cenário: Falha na tentativa de cadastro

    Dado que o usuário acessa a página de cadastro
    Quando o usuário insere incorretamente algum dos campos obrigatórios, como nome, email, senha e confirmação de senha
    E clica no botão cadastrar
    Então o usuário não é cadastrado 
    E o usuário visualiza mensagem de erro com especificações de entrada

 Regra de negócio: email e senha obrigatórios

Funcionalidade: login no aplicativo

  Cenário: Falha no login do sistema
    Dado que o usuário acessa a página de login
    Quando o usuário insere um email e senha fora do padrão aceito
    E clica no botão de login
    Então o usuário visualiza mensagem "Por favor, verifique o email digitado" e "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres"

  Regra de negócio: email deve ter um formato válido e senha deve contar  pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres
  

  Cenário: Sucesso no Login 
    Dado que o usuário acessa a página de login
    Quando o usuário insere seu email "usuarioteste" e senha "Senha123"
    E clica no botão de login
    Então o usuário é redirecionado para a página inicial
    E o usuário vê a mensagem de boas-vindas "Bem-vindo, Usuário!"

  Cenário: Falha no Login 
    Dado que o usuário acessa a página de login
    Quando o usuário insere email ou senha não cadastrado
    E clica no botão de login
    Então o usuário usuário recebe a mensagem "Falha no login. Consulte suas credenciais."

  Cenário: Realizar uma busca no aplicativo
    Dado que o usuário está logado no aplicativo
    Quando o usuário insere "termo de busca" na barra de pesquisa
    E pressiona Enter
    Então o usuário vê os resultados da busca
    E os resultados estão relacionados ao "termo de busca"

  Cenário: Processo de Contato para Adoção

    3.1 Clicar no botão "Entrar em Contato" para iniciar o processo de adoção.
    3.2 Preencher o formulário com nome, telefone, email e mensagem para a ONG.
    3.3 Validar os campos obrigatórios do formulário.
    3.4 Enviar o formulário e verificar a mensagem de sucesso.

  
  Cenário: Verificar funcionalidades no perfil do usuário
    Dado o usuário logado no aplicativo
    Quando o usuário acessa a página do perfil
    Então o usuário vê suas informações pessoais
    E o usuário pode editar suas informações com sucesso
    E o usuário pode fazer logout


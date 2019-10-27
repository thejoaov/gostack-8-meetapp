<h1 align="center">
    MeetApp
    </br>
    <img alt="Yare Yare daze" src="https://i.imgur.com/3cqc6DD.png" />

</h1>
<p align="center">
  <a href="https://github.com/thejoaov/bootcamp-meetapp/search?l=javascript">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/thejoaov/bootcamp-meetapp.svg">
  </a>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/thejoaov/bootcamp-meetapp.svg">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/thejoaov/bootcamp-meetapp.svg">
  <a href="https://github.com/thejoaov/bootcamp-meetapp/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/thejoaov/bootcamp-meetapp.svg">
  </a>
  <a href="https://github.com/thejoaov/bootcamp-meetapp/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/thejoaov/bootcamp-meetapp.svg">
  </a>
  <a href="https://github.com/thejoaov/bootcamp-meetapp/blob/master/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/thejoaov/bootcamp-meetapp.svg">
  </a>
</p>

Projeto MeetAppp desenvolvido durante o Bootcamp GoStack 8 da Rocketseat, para o desafio final da certificação.

---

# Estrutura

#### App - [Instruções](https://github.com/thejoaov/bootcamp-meetapp/blob/master/docs/app/instructions.md)

- Aplicativo mobile, construído pra android, apenas.
- Construído em React Native, redux, styled-components, entre outras ferramentas.

#### Docs - [Instruções](https://github.com/thejoaov/bootcamp-meetapp/blob/master/docs/docs/instructions.md)

- Servidor de documentação, exemplificando os dados que devem ser enviados para a API.
- Construído com [Insomnia Documenter](https://github.com/jozsefsallai/insomnia-documenter).
- Quando o projeto é iniciado pelo docker-compose da raiz do projeto, ele roda no endereço [localhost:5000](http://localhost:5000).

#### Server - [Instruções](https://github.com/thejoaov/bootcamp-meetapp/blob/master/docs/server/instructions.md)

- Servidor backend da aplicação.
- Construído com Sequelize ORM, express, multer, bee-queue, sucrase, e outras ferramentas. A documentação da API está disponível através da da aplicação de documentação.
- Quando o projeto é iniciado pelo docker-compose da raiz do projeto, ele roda no endereço [localhost:3333](http://localhost:3333).
- Também hospedado no heroku, como versão de "produção": [Backend MeetApp](https://backend-meetapp.herokuapp.com)

#### Web - [Instruções](https://github.com/thejoaov/bootcamp-meetapp/blob/master/docs/web/instructions.md)

- Aplicação frontend web do projeto.
- Construído com create-react-app, redux, styled-components e outras ferramentas.
- Quando o projeto é iniciado pelo docker-compose da raiz do projeto, ele roda no endereço [localhost:3000](http://localhost:3333).
- Também hospedado no heroku, como versão de "produção": [Web MeetApp](https://web-meetapp.herokuapp.com)

---

# Rodando o projeto localmente

## Requisitos:

- [Docker](https://docs.docker.com/install/)
- [Docker compose](https://docs.docker.com/compose/install/)
- [Node ^10](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/)

---

</div>

O projeto deve ser iniciado, com o seguinte comando na raiz do projeto

```
$ docker-compose up
```

  <img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/server/docker-compose-up.gif" height="420">

Isso vai iniciar os seguintes containers, na seguinte ordem:

- **postgres-database**
  - Banco de dados postgres.
  - Usuário e senha do postgres podem ser definidos através do arquivo [docker-compose.yml](https://github.com/thejoaov/bootcamp-meetapp/blob/master/docker-compose.yml). Também deve ser definido as mesmas variáveis num arquivo .env no diretório server, de acordo com o .env.example.
  - **Atenção:** Por padrão, sem a modificação das variáveis, o acesso ao banco de dados postgres é `usuário: postgres`, sem senha.
- **frontend-application**
  - Aplicação web front-end do meetapp. Acessível através do endereço [localhost:3000](http://localhost:3000)
- **redis-database**
  - Banco de dados Redis, utilizado para guardar a fila de tarefas.
- **mongo-database**
  - Banco de dados mongoDB, utilizado para armazenamento de esquemas.
- **mailhog-mail-service**
  - Serviço de email, capturando os emails enviados pela porta smtp.
- **api-docs-application**
  - Aplicação local da documentação da API, feita com insomnia documenter.
- **bee-queue-service**
  - Serviço da fila de tarefas (emails), utilizando bee-queue.
- **backend-application**
  - Aplicação backend da API. Acessível através da rota [localhost:3333](http://localhost:3333)
    calhost:3333](http://localhost:3333)

A partir daqui, a aplicação já estará pronta para receber as requisições. Se deseja testar as rotas, o arquivo com a configuração de rotas para teste no insomnia está na pasta [docs/insomnia.json](https://github.com/thejoaov/bootcamp-meetapp/blob/master/docs/src/insomnia.json).
Faça o download e importe no [Insomnia](https://github.com/getinsomnia/insomnia), que é uma ferramenta de testes de rotas, muito eficiente, prático, leve e customizável. [Link para download](https://insomnia.rest/download/).

<div align="center">
  <img src="https://i.imgur.com/wTn2ltn.png" height="400">
</div>

---

# Issues

- [Bugs](https://github.com/thejoaov/bootcamp-meetapp/issues/new?assignees=&labels=bug&template=bug_report.md&title=Bug)
- [Sugestões (Feature Requests)](https://github.com/thejoaov/bootcamp-meetapp/issues/new?assignees=&labels=&template=feature_request.md&title=)

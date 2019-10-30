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
<div align="center">
Projeto MeetAppp desenvolvido durante o Bootcamp GoStack 8 da Rocketseat, para o desafio final da certificação.
</div>

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

Antes do projeto ser iniciado, é necessário definir as variáveis de ambiente. Portanto crie um arquivo `.env` ena raiz do projeto, com o conteúdo do arquivo [.env.example](https://github.com/thejoaov/bootcamp-meetapp/blob/master/.env.example). Edite os campos `DB_USER`, `DB_PASS` e `DB_NAME`, isto vai servir pra criar o banco de dados com essas configurações. Para que ocorra a conexão correta com o banco, crie outro arquivo `.env` no diretório `server`, com o conteúdo do arquivo [.env.example](https://github.com/thejoaov/bootcamp-meetapp/blob/master/server/.env.example) dentro da pasta `server`. Também edite os campos `DB_USER`, `DB_PASS` e `DB_NAME`, com os mesmos valores do arquivo .env que foi criado na raiz do projeto.

Assim, o projeto deve ser iniciado, com o seguinte comando na raiz:

```shell
$ docker-compose up
```

  <img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/server/docker-compose-up.gif" height="420">

Isso vai iniciar os seguintes containers, na seguinte ordem:

- **postgres-database**
  - Banco de dados postgres.
  - Usuário e senha do postgres podem ser definidos através de dois arquivos .env, um na raiz do diretório, apenas com a configuração do banco de dados postgres, e outro de acordo com o conteúdo do arquivo [server/.env.example](https://github.com/thejoaov/bootcamp-meetapp/blob/master/server/.env.example), dentro da pasta `server`.
  - **Atenção:** Por padrão, sem a criação dos arquivo com as variáveis de ambiente, será utilizado o usuário padrão `postgres` e sem senha, o que pode causar uma falha de segurança.
- **frontend-application**
  - Aplicação web front-end do meetapp. Acessível através do endereço [localhost:3000](http://localhost:3000)
- **redis-database**
  - Banco de dados Redis, utilizado para guardar a fila de tarefas.
- **mongo-database**
  - Banco de dados mongoDB, utilizado para armazenamento de esquemas.
- **mailhog-mail-service**
  - Serviço de email, capturando os emails enviados pela porta smtp. Acessível através do endereço [localhost:8025](http://localhost:8025)
- **api-docs-application**
  - Aplicação local da documentação da API. Acessível através do endereço [localhost:5000](http://localhost:5000)
- **bee-queue-service**
  - Serviço da fila de tarefas (emails), utilizando bee-queue.
- **backend-application**
  - Aplicação backend da API. Acessível através da rota [localhost:3333](http://localhost:3333)

A partir daqui, a aplicação já estará pronta para receber as requisições. Se deseja testar as rotas, o arquivo com a configuração de rotas para teste no insomnia está na pasta [docs/src/insomnia.json](https://github.com/thejoaov/bootcamp-meetapp/blob/master/docs/src/insomnia.json).
Faça o download e importe no [Insomnia](https://github.com/getinsomnia/insomnia), que é uma ferramenta de testes de rotas, muito eficiente, prático, leve e customizável. [Link para download](https://insomnia.rest/download/).

<div align="center">
  <img src="https://i.imgur.com/wTn2ltn.png" height="400">
</div>

---

# Issues

- [Bugs](https://github.com/thejoaov/bootcamp-meetapp/issues/new?assignees=&labels=bug&template=bug_report.md&title=Bug)
- [Sugestões (Feature Requests)](https://github.com/thejoaov/bootcamp-meetapp/issues/new?assignees=&labels=&template=feature_request.md&title=)

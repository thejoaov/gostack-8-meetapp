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

#### App - [Instruções]()

- Aplicativo mobile, construído pra android, apenas.
- Construído em React Native, redux, styled-components, entre outras ferramentas.

#### Docs - [Instruções]()

- Servidor de documentação, exemplificando os dados que devem ser enviados para a API.
- Construído com [Insomnia Documenter](https://github.com/jozsefsallai/insomnia-documenter).
- Quando o projeto é iniciado pelo docker-compose da raiz do projeto, ele roda no endereço [localhost:5000](http://localhost:5000).

#### Server - [Instruções]()

- Servidor backend da aplicação.
- Construído com Sequelize ORM, express, multer, bee-queue, sucrase, e outras ferramentas. A documentação da API está disponível através da da aplicação de documentação.
- Quando o projeto é iniciado pelo docker-compose da raiz do projeto, ele roda no endereço [localhost:3333](http://localhost:3333).
- Também hospedado no heroku, como versão de "produção": [Backend MeetApp](https://backend-meetapp.herokuapp.com)

#### Web - [Instruções]()

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

<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/qIyPSQCZfNU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


O projeto deve ser iniciado, com o seguinte comando na raiz do projeto

```
$ docker-compose up
```

Isso vai iniciar

## Para os menos apressados

### 1 - Variáveis de ambiente

Crie um arquivo .env na raiz do projeto, bastando copiar o conteúdo do .env.example encontrado na raiz do projeto.

### 2 - Instale as bibliotecas

Instale as dependências na raiz do projeto.

```
$ yarn
```

_Opcional: recomendável a instalação do sequelize-cli de forma global._

yarn:

```
$ yarn global add sequelize-cli
```

npm:

```
$ npm i -g sequelize-cli
```

### 3 - Inicie a aplicação

A aplicação inicia todos os serviços a partir do comando

```
$ docker-compose up
```

<div align="center">
<img src="https://i.imgur.com/mMknsiN.gif" height="420">
</div>

O docker vai iniciar um container para cada serviço na seguinte ordem:

- Container do Postgres, com o o banco de dados Postgres (Para os dados da aplicação);
- Container do Redis, com o o banco de dados Redis (Para a fila de trabalhos);
- Container do MongoDB, guardando as relações de esquema.
- Container do Mailhog (para depuração de envio de emails), acessível através do endereço [localhost:8025](http://localhost:8025)
- Container do processo da Queue do [Bee-queue](https://bee-queue.com/) (Fila de trabalhos);
- Container do processo da documentação, rodando o servidor estático da documentação (Docs), acessível através do endereço [localhost:5000](http://localhost:5000)
- Container do processo do App, rodando primeiro o comando
  `yarn migrate` (que chama o Sequelize `yarn sequelize db:migrate`) para realizar as migrações no banco, e em seguida o processo principal da Aplicação, acessível através do endereço [localhost:3333](http://localhost:3333)

A partir daqui, a aplicação já estará pronta para receber as requisições. Se deseja testar as rotas, o arquivo com a configuração de rotas para teste no insomnia está na pasta [docs/local/insomnia.json](https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/config/insomnia.json)
Faça o download e importe no programa.

### 4 - (Opcional) Insomnia

O Insomnia é uma ferramenta de testes de rotas, muito eficiente, prático, leve e customizável. Link para download na [Página oficial](https://insomnia.rest/download/).

![](https://i.imgur.com/wTn2ltn.png)

---

# Documentação

A documentação da API está disponível ao rodar a aplicação com o `docker-compose up`, no endereço [localhost:5000](http://localhost:5000), ou no [Github Pages](https://thejoaov.github.io/bootcamp-meetapp/).

---

# Issues

- [Bugs](https://github.com/thejoaov/bootcamp-meetapp/issues/new?assignees=&labels=bug&template=bug_report.md&title=Bug)
- [Sugestões (Feature Requests)](https://github.com/thejoaov/bootcamp-meetapp/issues/new?assignees=&labels=&template=feature_request.md&title=)

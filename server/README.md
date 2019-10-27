<h1 align="center">
    MeetApp API
    </br>
    <img alt="Yare Yare daze" src="https://i.imgur.com/3cqc6DD.png" />

</h1>
<p align="center">
  <a href="https://github.com/thejoaov/bootcamp-meetapp-api/search?l=javascript">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/thejoaov/bootcamp-meetapp-api.svg">
  </a>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/thejoaov/bootcamp-meetapp-api.svg">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/thejoaov/bootcamp-meetapp-api.svg">
  <a href="https://github.com/thejoaov/bootcamp-meetapp-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/thejoaov/bootcamp-meetapp-api.svg">
  </a>
  <a href="https://github.com/thejoaov/bootcamp-meetapp-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/thejoaov/bootcamp-meetapp-api.svg">
  </a>
  <a href="https://github.com/thejoaov/bootcamp-meetapp-api/blob/master/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/thejoaov/bootcamp-meetapp-api.svg">
  </a>
  <a href="https://github.com/thejoaov/bootcamp-meetapp-api/blob/master/package.json">
    <img alt="GitHub package.json dynamic" src="https://img.shields.io/github/package-json/keywords/thejoaov/bootcamp-meetapp-api">
  </a>
  <a href="https://hub.docker.com/r/thejoaov/meetapp">
    <img alt="Docker Cloud Build Status" src="https://img.shields.io/docker/cloud/build/thejoaov/meetapp">
  </a>
</p>


API do projeto MeetAppp desenvolvido durante o Bootcamp GoStack 8 da Rocketseat.

O projeto foi criado utilizando [Sequelize ORM](https://sequelize.org/), juntamente com o gerenciador de pacotes [Yarn](https://yarnpkg.com/pt-BR/), para o desafio final do Bootcamp GoStack 8.

---
# Rodando o projeto localmente

## Requisitos:
- [Docker](https://docs.docker.com/install/)
- [Docker compose](https://docs.docker.com/compose/install/)
- [Node ^10](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/)
---
## "Se eu fizer o passo a passo, meu café vai esfriar!"

Se você não tem tempo ou disposição pra fazer todo o passo a passo e utiliza linux, mac ou wsl, sendo a primeira vez que você está executando a api (se você acabou de clonar o projeto, por exemplo) você pode fazer tudo funcionar simplesmente abrindo um terminal na raiz do projeto, e rodando o seguinte comando:
```
$ yarn && cat .env.example>>.env && docker-compose up
```
_OBS: comando acima é executado apenas uma vez, nas outras execuções, o projeto pode ser iniciado pelo_
```
$ docker-compose up
```

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

A partir daqui, a aplicação já estará pronta para receber as requisições. Se deseja testar as rotas, o arquivo com a configuração de rotas para teste no insomnia está na pasta [docs/local/insomnia.json](https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp-api/master/docs/config/insomnia.json)
Faça o download e importe no programa.

### 4 - (Opcional) Insomnia
O Insomnia é uma ferramenta de testes de rotas, muito eficiente, prático, leve e customizável. Link para download na [Página oficial](https://insomnia.rest/download/).

![](https://i.imgur.com/wTn2ltn.png)

---
# Documentação

A documentação da API está disponível ao rodar a aplicação com o ```docker-compose up```, no endereço [localhost:5000](http://localhost:5000), ou no [Github Pages](https://thejoaov.github.io/bootcamp-meetapp-api/).

---
# Issues

- [Bugs](https://github.com/thejoaov/bootcamp-meetapp-api/issues/new?assignees=&labels=bug&template=bug_report.md&title=Bug)
- [Sugestões (Feature Requests)](https://github.com/thejoaov/bootcamp-meetapp-api/issues/new?assignees=&labels=&template=feature_request.md&title=)

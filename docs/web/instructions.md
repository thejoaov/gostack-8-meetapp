# Instruções para o Frontend (web)

A versão de produção, é acessível através [desse link](https://web-meetapp.herokuapp.com).

A aplicação frotend, se executada através do `docker-compose up` na raiz do projeto, de um container, acessível através do endereço [localhost:3000](http://localhost:3000).

#### Rodando localmente

Para rodar a aplicação de forma local, é necessário que o backend esteja rodando também, então dê uma olhada [aqui](https://github.com/thejoaov/bootcamp-meetapp/blob/master/docs/server/instructions.md#sem-docker) e execute o servidor de acordo com as instruções.
Note que, as variáveis de ambiente podem ser definidas de acordo com o arquivo [.env.example](https://github.com/thejoaov/bootcamp-meetapp/blob/master/web/.env.example), criando um arquivo `.env` na raiz da pasta web. Porém não são necessárias, uma vez que por padrão, o frontend já funciona em `localhost`
É necessário instalar as dependências, através do comando `yarn`. Em seguida, para iniciar a aplicação, utilize o comando `yarn start`.

## Screenshots

<div align="center">
  <img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/web/login.gif" width="600" heigth="600">
  <p>Login na aplicação</p>
  </br>
  
  <img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/web/create-meetup.gif" width="600" heigth="600">
  <p>Criação de meetups</p>
  </br>

  <img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/web/edit-meetup.gif" width="600" heigth="600">
  <p>Edição de meetups</p>
  </br>

  <img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/web/cancel-meetup.gif" width="600" heigth="600">
  <p>Cancelamento de meetups</p>
  </br>

</div>

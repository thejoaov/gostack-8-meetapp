# Instruções para o Backend

A aplicação backend, é rodada na raiz do projeto, com o `docker-compose up`.
Você também poderá iniciar com o `docker-compose up -d`, assim a aplicação irá rodar em background, sem precisar ficar com a janela do terminal aberta :D. Desta forma, você pode encerrar o servidor com `docker-compose down`
Porém, para desenvolvimento, é recomendado que seja rodado o comando `docker-compose up` na pasta `server`, para que a aplicação rode utilizando o nodemon.
Dessa forma o servidor backend irá rodar isoladamente do restante da aplicação, sem o frontend.
Para parar o servidor, basta pressionar `crtl + c`.

---

#### Sem docker

Se você deseja rodar fora de um container do docker, ou não tem o docker instalado, você deverá ter instalado e configurado em sua máquina:

- Postgres (recomenda-se a versão 11.5)
- MongoDB
- Redis
- Node (recomenda-se a partir da versão 10.\* mais estável)
- Yarn

Na raiz da pasta `server`, você deverá primeiro instalar as dependências com um simples comando `yarn`.
Para rodar o projeto em desenvolvimento, utilize `yarn start`, que irá rodar o projeto através do concurrently, para que os processos do servidor e da queue rodem paralelamente.

Abaixo, os comandos disponíveis de acordo com o `package.json`:

```json
 "scripts": {
    "start": "concurrently -k \"yarn start:server\" \"yarn start:queue\"",
    "start:server": "yarn migrate && sucrase-node src/server.js",
    "start:queue": "sucrase-node src/queue.js",
    "dev:server": "yarn migrate && nodemon src/server.js",
    "dev:queue": "nodemon src/queue.js",
    "migrate": "sequelize db:migrate"
  },
```

## Screenshots

<div align="center">
  <img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/server/docker-compose-up.gif" width="600" heigth="600">
  <p>docker-compose up</p>
  </br>
  
  <img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/server/docker-compose-up-down.gif" width="600" heigth="600">
  <p>parando com crtl+c</p>
  </br>

  <img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/server/docker-compose-down.gif" width="600" heigth="600">
  <p>docker-compose down</p>
  </br>

</div>
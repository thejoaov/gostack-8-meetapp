# Instruções para o Backend

Primeiro, deve-se criar o arquivo de variáveis de ambiente `.env` de acordo com o conteúdo do `.env.example`, substituindo os valores das variáveis `DB_USER`, `DB_PASS` e `DB_NAME`, que irão "dizer" ao docker-compose como ele deve criar o banco de dados, e à aplicação suas variáveis de ambiente.

### Testes
A aplicação conta com o [Jest](https://jestjs.io/) para testes. Eles estão na pasta `__tests__`, e podem ser executados através do comando `yarn test`. As variáveis de ambiente estão no arquivo `.env.test`.
Os testes são executados num banco em `sqlite`, dentro da pasta de testes, e sempre que são feitos, a base é reconstruída do zero, portanto, não é necessário alterações nos arquivos de variáveis de ambiente de testes.

##### Modo de produção
A aplicação deve executar, primeiramente o banco de dados. Para isto, em modo de produção, deve-se executar 

```shell 
$ docker-compose -f "docker-compose.prod.yml" up -d
```
Isso irá inicializar os containers do postgres, redis, e mongodb. Em seguida deve-se realizar o build, já que o `sucrase-node` **não** deve ser executado na produção, por que isso causa perda de desempenho. Recomenda-se primeiro, compilar a aplicação, com o comando `yarn build`, que irá compilar toda a aplicação e jogar na pasta `dist`, com a mesma estrutura de pastas e arquivos. A partir daí, você pode executar o server utilizando o pm2 (ou outro gerenciador de processos de sua escolha): 
```shell
$ npx pm2 start "dist/queue" --name "meetapp-queue"
$ npx pm2 start "dist/server" --name "meetapp-server"
```


##### Modo de desenvolvimento
Em modo de desenvolvimento, recomenda-se que se utilize de uma base de dados à parte da utilizada na produção, até porque, serviços como o mailhog, e funções como as [seeds do Sequelize](https://sequelize.org/master/manual/migrations.html#creating-first-seed), não são úteis ou podem corromper o banco de dados. Nesse caso, deve-se iniciar o banco de dados com:
```shell
$ docker-compose -f "docker-compose.dev.yml" up -d
```
Isso irá inicializar os containeres do postgres, do redis, mongodb e também do serviço do mailhog, para depuração do envio de emails.
Um simples `yarn start` irá inicializar o projeto, utilizando o nodemon, que reinicializará o servidor e a queue caso algum deles sofra alterações nos arquivos.

Os bancos de dados de desenvolvimento, e produção, podem ser desligados com
```shell
$ docker-compose -f "docker-compose.<dev ou prod>.yml" down
```
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
    // Inicia o servidor e a queue usando o concurrently 
    "start": "concurrently -k \"yarn server\" \"yarn queue\"",
    // Inicia apenas o servidor com nodemon
    "server": "nodemon src/server.js",
    // Inicia apenas a queue com nodemon
    "queue": "nodemon src/queue.js",
    // Script de build da aplicação
    "build": "sucrase ./src -d ./dist --transforms imports",
    // Roda antes dos testes, criando as migrations no db sqlite
    "pretest": "NODE_ENV=test sequelize db:migrate",
    // Roda os testes
    "test": "NODE_ENV=test jest --forceExit",
    // Desfaz as migrations no db sqlite
    "posttest": "NODE_ENV=test sequelize db:migrate:undo:all"
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

# Instruções para a aplicação Mobile

Para rodar a aplicação mobile de forma local, primeiro, abra um terminal na pasta `bootcamp-meetapp/app` e instale as dependências, com o comando `yarn`. Em seguida, inicie o servidor de bundle com o comando `yarn start`.

Vá até o arquivo `src/services/api.js`, e na configuração de desenvolvimento, coloque o ip de sua máquina, dessa forma

```javascript
const development = axios.create({
  baseURL: 'http://coloque-seu-ip-aqui:3333'
});
```

A partir daqui você já deve ser capaz de rodar a aplicação nas duas plataformas, porém, o projeto foi feito apenas para o **Android**, sendo a aplicação iOs não foi testada.

## Rodando localmente

#### Android

Primeiro será necessário criar a chave de `debug` da aplicação pra android com o keytool.
Você deve rodar o seguinte comando na pasta `android/app/`:

```
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

Responda as perguntas, e assim a sua chave de debug da aplicação será criada.
Instale a aplicação no dispositivo (emulador ou dispositivo físico), com o comando `yarn android`.
Para instalar a versão de produção, você pode usar o comando `yarn release:android`.

#### Ios (não testado)

A versão pra ios não foi testada de nenhuma forma, portanto é altamente recomendável utilizar apenas a versão para android.
Para iniciar o projeto no iOs, o comando é `yarn ios`, e para a versão de produção, `yarn release:ios`.

## Screenshots

<img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/mobile/login2.png" height="420">
<img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/mobile/create-account2.png" height="420">
<img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/mobile/dashboard.gif" height="420">
<img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/mobile/profile.png" height="420">
<img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/mobile/subscriptions.png" height="420">

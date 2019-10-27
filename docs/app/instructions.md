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

#### Comandos disponíveis no package.json

**ATENÇÃO**: Ao iniciar a versão de produção através do `yarn release:*platform*`, a aplicação estará utilizando a API de produção. Esta variante não é recomendada para desenvolvimento.

```json
  "scripts": {
    "start": "react-native start",
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "release:android": "react-native run-android --variant=release",
    "release:ios": "react-native run-ios --variant=release",
    "test": "jest",
    "lint": "eslint .",
    "postinstall": "jetify"
  },
```

## Screenshots

<img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/app/login2.png" height="420">
<img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/app/create-account2.png" height="420">
<img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/app/dashboard.gif" height="420">
<img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/app/profile.png" height="420">
<img src="https://raw.githubusercontent.com/thejoaov/bootcamp-meetapp/master/docs/assets/app/subscriptions.png" height="420">

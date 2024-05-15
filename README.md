- Instalando e iniciando o React Native
  O reomendado nestas aplicações é utilizar SDK Android e é um app pesado para o pc rodar.
  Então temos uma maneira mais leve de simular aplicativos mobile com o expo-cli.
  
- No cmd...
  <br>
  npm install -g expo-cli
  npx create-expo-app

- Opções de visualização de Apps
  <br>
  npx expo start --tunnel
  (use isto caso você esteja numa rede diferente do dispositivo onde deseja exibir a aplicação)

  npm run web
  (exibir o app nativamente no navegador do dispositivo local)
  
  npm run android
  (utilizar algum emulador como android studio para exibir a aplicação em tempo real)


  <h1>Página de READ.ME padrão Native</h1>
  # Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

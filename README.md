- Instalando e iniciando o React Native
  O reomendado nestas aplicações é utilizar SDK Android e é um app pesado para o pc rodar.
  Então temos uma maneira mais leve de simular aplicativos mobile com o expo-cli.
  
- No cmd...
  npm install -g expo-cli
  npx create-expo-app

- Opções de visualização de Apps
  npx expo start --tunnel
  (use isto caso você esteja numa rede diferente do dispositivo onde deseja exibir a aplicação)

  npm run web
  (exibir o app nativamente no navegador do dispositivo local)
  
  npm run android
  (utilizar algum app como android studio ou expo go para exibir a aplicação em tempo real)

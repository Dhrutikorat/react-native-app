- create `public/index.html`

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <title>React App</title>
    </head>

    <body>
      <noscript> You need to enable JavaScript to run this app. </noscript>
      <div id="root"></div>
    </body>
  </html>
  ```

- mkdir src/
- mv app.json src/
- mv App.js src/
- cp index.js src/
- mv index.js index.native.js

- `index.js`

  ```jsx
  import {AppRegistry} from 'react-native';
  import App from './App.jsx';
  import appJson from './app.json';
  import {createRoot} from 'react-dom/client';

  const appName = appJson.name;

  AppRegistry.registerComponent(appName, () => App);

  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
  ```

- `index.native.js`

  ```jsx
  import {AppRegistry} from 'react-native';
  import App from './src/App';
  import {name as appName} from './src/app.json';

  AppRegistry.registerComponent(appName, () => App);
  ```

- npm i react-dom@18.2.0
- npm i react-native-web --legacy-peer-deps
- npm i --dev react-scripts --legacy-peer-deps
- npm i ajv --legacy-peer-deps
- npx prettier --write .
- npx eslint . --fix

- `package.json`

  ```json
  "web": "react-scripts start",
  ...
  "browserslist": {
  "production": [
    "defaults and supports es6-module",
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
  }
  ```

- npm run android
- npm run web

# Links

- [Create a native and web app with React Native + React Native Web](https://aureliomerenda.medium.com/create-a-native-web-app-with-react-native-web-419acac86b82)

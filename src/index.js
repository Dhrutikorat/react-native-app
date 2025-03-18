/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App.tsx';
import appJson from './app.json';
import { createRoot } from 'react-dom/client';

const appName = appJson.name;

AppRegistry.registerComponent(appName, () => App);

const root = createRoot(document.getElementById('root'));
root.render(<App />);

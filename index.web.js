import {
  AppRegistry,
  Platform
} from 'react-native';

import App from './App/App';

AppRegistry.registerComponent('react_native_demo', () => App);
if (Platform.OS == 'web') {
  var app = document.createElement('div');
  document.body.appendChild(app);
  AppRegistry.runApplication('App', {
    rootTag: app
  });
}
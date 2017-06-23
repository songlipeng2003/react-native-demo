/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {
  AppRegistry
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import App from './App/App';
import Login from './App/views/Login';

const SimpleApp = StackNavigator({
  App: { screen: App },
  Login: { screen: Login },
});

AppRegistry.registerComponent('Demo App', () => SimpleApp);

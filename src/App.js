import { StackNavigator } from 'react-navigation';

import Home from './views/Home';
import Login from './views/Login';

export default SimpleApp = StackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
});

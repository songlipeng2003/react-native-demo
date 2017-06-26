import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import My from './My';

export default MyPage = StackNavigator({
  My: { screen: My }
});

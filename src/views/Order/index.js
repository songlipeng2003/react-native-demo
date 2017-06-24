import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import OrderList from './OrderList';
import OrderView from './OrderView';

export default SimpleApp = StackNavigator({
  OrderList: { screen: OrderList },
  OrderView: { screen: OrderView }
});

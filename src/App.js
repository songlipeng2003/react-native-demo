import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';
import { TabNavigator } from 'react-navigation';

import codePush from "react-native-code-push";

import Home from './views/Home';
import Product from './views/Product';
import Order from './views/Order';
import My from './views/My';

import './services/http'

const App = TabNavigator({
  Home: { screen: Home },
  Product: { screen: Product },
  Order: { screen: Order },
  My: { screen: My }
}, {
  tabBarPosition: 'bottom',
  tabBarComponent: props => {
    return (
      <Footer>
        <FooterTab>
          <Button vertical active
            active={props.navigationState.index === 0}
            onPress={() => props.navigation.navigate("Home")}>
            <Icon name="apps" />
            <Text>首页</Text>
          </Button>
          <Button vertical
            active={props.navigationState.index === 1}
            onPress={() => props.navigation.navigate("Product")}>
            <Icon name="camera" />
            <Text>产品</Text>
          </Button>
          <Button vertical
            active={props.navigationState.index === 2}
            onPress={() => props.navigation.navigate("Order")}>
            <Icon active name="navigate" />
            <Text>订单</Text>
          </Button>
          <Button vertical
            active={props.navigationState.index === 3}
            onPress={() => props.navigation.navigate("My")}>
            <Icon name="person" />
            <Text>我的</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
});

App = codePush(App)

export default App

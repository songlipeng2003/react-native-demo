import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';

import { TabNavigator } from 'react-navigation';

import Home from './views/Home';
import ProductList from './views/ProductList';
import OrderList from './views/OrderList';
import My from './views/My';

export default SimpleApp = TabNavigator({
  Home: { screen: Home },
  ProductList: { screen: ProductList },
  OrderList: { screen: OrderList },
  My: { screen: My }
}, {
  tabBarPosition: "bottom",
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
            onPress={() => props.navigation.navigate("ProductList")}>
            <Icon name="camera" />
            <Text>产品</Text>
          </Button>
          <Button vertical
            active={props.navigationState.index === 2}
            onPress={() => props.navigation.navigate("OrderList")}>
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

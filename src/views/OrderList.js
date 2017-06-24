import React, { Component } from 'react';

import {
  StyleSheet
} from 'react-native';

import { Container, Button, Text } from 'native-base';

export default class OrderList extends Component {
  static navigationOptions = {
    title: '订单',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Text>
          OrderList
        </Text>
      </Container>
    );
  }
}

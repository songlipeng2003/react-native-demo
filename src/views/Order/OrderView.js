import React, { Component } from 'react';

import {
  StyleSheet
} from 'react-native';

import { Container, Button, Text } from 'native-base';

export default class OrderView extends Component {
  static navigationOptions = {
    title: '订单详情',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Text>
          OrderView
        </Text>
      </Container>
    );
  }
}

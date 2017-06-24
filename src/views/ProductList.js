import React, { Component } from 'react';

import {
  StyleSheet
} from 'react-native';

import { Container, Button, Text } from 'native-base';

export default class My extends Component {
  static navigationOptions = {
    title: '产品',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Text>
          ProductList
        </Text>
      </Container>
    );
  }
}

import React, { Component } from 'react';

import {
  StyleSheet
} from 'react-native';

import { Container, Button, Text } from 'native-base';

export default class ProductForm extends Component {
  static navigationOptions = {
    title: '产品',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Text>
          ProductForm
        </Text>
      </Container>
    );
  }
}

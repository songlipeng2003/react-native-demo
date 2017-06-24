import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import { Container, Button, Text } from 'native-base';
import axios from 'axios'

export default class OrderView extends Component {
  constructor(props) {
    super(props);
    const {state} = this.props.navigation;
    this.id = state.params.id
    this.state = {item: {}};
  }

  componentDidMount () {
    axios.get('/orders/' + this.id).then((res) => {
      this.setState({
        item: res.data
      });
    });
  }

  static navigationOptions = {
    title: '订单详情',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Text>
          {this.state.item.sn}
        </Text>
      </Container>
    );
  }
}

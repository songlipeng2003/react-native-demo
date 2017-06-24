import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import axios from 'axios'

export default class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  componentDidMount () {
    axios.get('/orders').then((res) => {
      this.setState({
        items: res.data
      });
    });
  }

  static navigationOptions = {
    title: '订单',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Content>
          <List dataArray={this.state.items}
            renderRow={(item) =>
              <ListItem onPress={() => navigate('OrderView', {id: item.id})}>
                <Body>
                  <Text>{item.sn}</Text>
                  <Text note>总价:{item.totalAmount} 状态 {item.statusText}</Text>
                </Body>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}

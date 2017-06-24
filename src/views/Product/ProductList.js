import React, { Component } from 'react';

import axios from 'axios'

import {
  StyleSheet
} from 'react-native';

import { Container, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  componentDidMount () {
    axios.get('/products').then((res) => {
      this.setState({
        items: res.data
      });
    });
  }

  static navigationOptions = {
    title: '商品',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <List dataArray={this.state.items}
            renderRow={(item) =>
              <ListItem>
                <Thumbnail square size={80} source={{ uri: item.image }} />
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>价格:{item.price}</Text>
                </Body>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}

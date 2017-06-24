import React, { Component } from 'react';

import {
  StyleSheet,
  Alert
} from 'react-native';

import { Container, Button, Text } from 'native-base';

const onButtonPress = () => {
  navigate('Login')
};

export default class App extends Component {
  static navigationOptions = {
    title: '首页',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button primary onPress={() => navigate('Login')}><Text>测试按钮</Text></Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

import { Button } from 'antd-mobile';

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
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button type="primary" onClick={onButtonPress}>测试按钮</Button>
      </View>
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

import React, { Component } from 'react';

import {
  StyleSheet,
  Alert
} from 'react-native';

import { List, InputItem, Button } from 'antd-mobile';

const Item = List.Item;

const onLogin() = () => {
  Alert.alert('登录失败');
};

const styles = StyleSheet.create({
});

export default class Login extends Component {
  render() {
    return (
      <List renderHeader={() => '验证表单'>
        <InputItem placeholder="请输入账号"></InputItem>
        <InputItem placeholder="请输入密码" type="password"></InputItem>
        <Item>
          <Button size="large" type="primary" onClick={onButtonPress}>登录</Button>
        </Item>
      </List>
    );
  }
}

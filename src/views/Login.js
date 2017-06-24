import React, { Component } from 'react';

import {
  StyleSheet,
  Alert
} from 'react-native';

import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

const onLogin = () => {
  Alert.alert('登录失败');
};

const styles = StyleSheet.create({
});

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>请输入账号</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>请输入密码</Label>
              <Input />
            </Item>
            <Button primary block onPress={onLogin}><Text>登录</Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

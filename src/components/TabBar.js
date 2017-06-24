import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';

export default class TabBar extends Component {
  render() {
    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon name="apps" />
              <Text>首页</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>财务</Text>
            </Button>
            <Button vertical>
              <Icon active name="navigate" />
              <Text>订单</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>我的</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

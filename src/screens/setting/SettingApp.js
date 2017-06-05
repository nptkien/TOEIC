import React, { Component } from 'react';
import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1
} from "native-base";

class SettingApp extends Component {

    render() {
        return (
            <Container>
                <Content padder>
                    <Text>SettingApp Screen</Text>
                </Content>
            </Container>
        );
    }
}

// Configuration Header
SettingApp.navigationOptions = ({ navigation }) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.navigate('Home')}>
                    <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>
                <Title>Upgrade Account</Title>
            </Body>
            <Right />
        </Header>
    )
});

export default SettingApp;


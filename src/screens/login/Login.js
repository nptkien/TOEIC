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

class LogIn extends Component {

    render() {
        return (
            <Container>
                <Content padder>
                    <Text>Login Screen</Text>
                </Content>
            </Container>
        );
    }
}

// Configuration Header
LogIn.navigationOptions = ({ navigation }) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.navigate('Home')}>
                    <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>
                <Title>LogIn</Title>
            </Body>
            <Right />
        </Header>
    )
});

export default LogIn;


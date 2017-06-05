import React, { Component } from 'react';
import { View } from 'react-native';
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
class Calendar extends Component {
     static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate('Home')}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Calendar</Title>
        </Body>
        <Right />
      </Header>
    )
  });
    render() {
        return (
            <View style={{flex:1, justifyContent: 'center',alignItems: 'center'}}>
                <Text>Calendar Screen</Text>
            </View>
        );
    }
}

export default Calendar;
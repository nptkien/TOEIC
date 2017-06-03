
import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Picker, Button, Text } from "native-base";

import HomeScreen from './src/navigations/rootNav';
export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
  
    this.setState({ isReady: true });
  }
  render() {
  
    return <HomeScreen />;
  }
}

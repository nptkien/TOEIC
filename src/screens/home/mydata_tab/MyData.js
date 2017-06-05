import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MyData extends Component {
  
    render() {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>MyData Screen</Text>
            </View>
        );
    }
}

export default MyData;
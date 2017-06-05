import React, { Component } from 'react';
import { View, Text,Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');
import * as Progress from 'react-native-progress';
class ListQuestion extends Component {
   
    render() {
        return (
            <View style={{flexDirection: 'row',height:height * 0.1,width: 500,borderBottomWidth:1,borderBottomColor:'gray'}}>
                <View style={{justifyContent: 'center'}}>
                    <Progress.Circle size={30} indeterminate={true} />
                </View>
                <View style= {{marginLeft: 10,justifyContent: 'space-between',}}>
                    <Text>Part 1: PhotoGraph</Text>
                    <Text>585 Question</Text>
                </View>
            </View>
        );
    }
}

export default ListQuestion;
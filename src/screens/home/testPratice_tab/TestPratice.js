import React, { Component } from 'react';
import { View, Text,ScrollView } from 'react-native';
import ListQuest from '../../../components/listQuestion/ListQuestion'

class TestPratice extends Component {
  
    render() {
        return (
           <ScrollView style={{flex:1}}>
               
               <ListQuest />
               <ListQuest />
               <ListQuest />
               <ListQuest />
               <ListQuest />
               <ListQuest />
               <ListQuest />
          </ScrollView>
        );
    }
}

export default TestPratice;
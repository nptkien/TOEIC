import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import Statistics from '../screens/statistics/Statistics';

const StatisticsNav = StackNavigator({
    Statistics: {screen: Statistics}
});
export default StatisticsNav;


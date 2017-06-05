import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import Calendar from '../screens/calendar/Calendar';

const CalendarNav = StackNavigator({
    Calendar: {screen: Calendar}
});
export default CalendarNav;


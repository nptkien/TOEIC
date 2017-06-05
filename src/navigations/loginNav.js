import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import LogIn from '../screens/login/Login';

const LogInNav = StackNavigator({
    Login: { screen: LogIn}
})

export default LogInNav;



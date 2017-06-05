import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import Setting from '../screens/setting/SettingApp';

const SettingApp = StackNavigator({
    Setting: {screen: Setting}
});
export default SettingApp;


import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import Community from '../screens/community/Community';

const CommunityNav = StackNavigator({
    Community: {screen: Community}
});
export default CommunityNav;


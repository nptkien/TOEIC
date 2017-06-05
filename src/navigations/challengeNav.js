import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import Challenge from '../screens/challenge/Challenge';

const ChallengeNav = StackNavigator({
    Challenge: {screen: Challenge}
});
export default ChallengeNav;


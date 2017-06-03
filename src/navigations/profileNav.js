
import React, { Component } from "react";
import Profile from '../screens/profile/Profile';
import EditScreenOne from '../screens/profile/EditScreenOne';
import EditScreenTwo from '../screens/profile/EditScreenTwo';
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  Profile: { screen: Profile },
  EditScreenOne: { screen: EditScreenOne },
  EditScreenTwo: { screen: EditScreenTwo }
}));

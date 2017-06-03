import React, { Component } from "react";
import HomeScreen from '../screens/home/HomeScreen';
import MainScreenNavigator from './chatNav';
import Profile from './profileNav';
import SideBar from '../screens/sidebar/SideBar';
import { DrawerNavigator } from "react-navigation";
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Chat: { screen: MainScreenNavigator },
    Profile: { screen: Profile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;

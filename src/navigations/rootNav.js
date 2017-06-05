import React, { Component } from "react";
import HomeScreen from '../screens/home/HomeScreen';
import MainScreenNavigator from './chatNav';
import Profile from './profileNav';
import SideBar from '../screens/sidebar/SideBar';
import LogIn from './loginNav';
import UpgradeAccount from './upAccNav';
import { DrawerNavigator } from "react-navigation";
import Setting from './settingNav.js';
import Search from './searchNav';
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Login: { screen: LogIn},
    UpgradeAccount: { screen: UpgradeAccount},
    OtherApp: { screen: MainScreenNavigator },
    Profile: { screen: Profile },
  	Setting: {screen: Setting},
    Search : {screen: Search}

  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;

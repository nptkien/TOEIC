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
import Calendar from './calendarNav';
import Challenge from './challengeNav';
import Community from './communityNav';
import Statistics from './statisticsNav';

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Login: { screen: LogIn},
    UpgradeAccount: { screen: UpgradeAccount},
    OtherApp: { screen: MainScreenNavigator },
    Profile: { screen: Profile },
  	Setting: {screen: Setting},
    Search : {screen: Search},
    Calendar: {screen: Calendar},
    Challenge: {screen: Challenge},
    Community: {screen: Community},
    Statistics: {screen: Statistics}

  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;

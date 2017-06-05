import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import Search from '../screens/search/Search';
const SearchNav = StackNavigator({
	Search: { screen: Search},
})
export default SearchNav;

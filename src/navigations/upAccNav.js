import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import UpgradeAccount from '../screens/upgradeAccount/UpgradeAccount';

const upAccNav = StackNavigator ({
    UpgradeAccount: { screen: UpgradeAccount}
});
export default upAccNav;

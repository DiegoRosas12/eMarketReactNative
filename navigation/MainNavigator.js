import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import SignIn from '../screens/SignInScreen';
import LogIn from '../screens/LogInScreen';

const MainNavigator = createStackNavigator({
    SignIn: {screen: SignIn},
    LogIn: {screen: LogIn},
});

export default MainNavigator;
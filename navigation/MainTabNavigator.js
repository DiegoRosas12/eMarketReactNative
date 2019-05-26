import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import PedidosScreen from '../screens/PedidosScreen';
import CarritoScreen from '../screens/CarritoScreen';
import CuentaScreen from '../screens/CuentaScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const PedidosStack = createStackNavigator({
  Pedidos: PedidosScreen,
});

PedidosStack.navigationOptions = {
  tabBarLabel: 'Pedidos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
    />
  ),
};

const CarritoStack = createStackNavigator({
  Carrito: CarritoScreen,
});

CarritoStack.navigationOptions = {
  tabBarLabel: 'Carrito',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-cart'}
    />
  ),
};

const CuentaStack = createStackNavigator({
  Cuenta: CuentaScreen,
});

CuentaStack.navigationOptions = {
  tabBarLabel: 'Cuenta',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-person'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  PedidosStack,
  CarritoStack,
  CuentaStack,
});

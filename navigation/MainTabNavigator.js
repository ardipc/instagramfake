import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import PostsScreen from '../screens/PostsScreen';
import ActivityScreen from '../screens/ActivityScreen';
import AccountScreen from '../screens/AccountScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon type='ionicon' name={ Platform.OS === 'ios' ? 'ios-home' : 'md-home' } color={ tintColor } />
  ),
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: '#d3d3d3'
  }
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: SearchScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon type='ionicon' name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} color={tintColor} />
  ),
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: '#d3d3d3'
  }
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: PostsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Posts',
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon type='ionicon' color={tintColor} name={Platform.OS === 'ios' ? 'ios-images' : 'md-images'} />
  ),
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: '#d3d3d3'
  }
};

SettingsStack.path = '';

const ActivityStack = createStackNavigator(
  {
    Activity: ActivityScreen,
  },
  config
);

ActivityStack.navigationOptions = {
  tabBarLabel: 'Activity',
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon type='ionicon' color={tintColor} name={Platform.OS === 'ios' ? 'ios-heart-empty' : 'md-heart-empty'} />
  ),
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: '#d3d3d3'
  }
};

ActivityStack.path = '';

const AccountStack = createStackNavigator(
  {
    Account: AccountScreen,
  },
  config
);

AccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon type='ionicon' color={tintColor} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />
  ),
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: '#e9e9e9'
  }
};

AccountStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  ActivityStack,
  AccountStack,
});

tabNavigator.path = '';

export default tabNavigator;

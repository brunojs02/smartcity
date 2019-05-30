import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { HomeScreen, SettingsScreen } from '~/screens';
import { Icon } from '~/components/common';

const bottomNav = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: () => {
      const { routeName } = navigation.state;
      let iconName;

      switch (routeName) {
        case 'Home':
          iconName = 'home';
          break;
        case 'Settings':
          iconName = 'settings';
          break;
        default:
      }

      return <Icon name={iconName} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'darkgray',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontFamily: Platform.OS === 'ios' ? 'SFNS Display' : 'Roboto',
    },
  },
});

const Nav = createAppContainer(bottomNav);

export default Nav;

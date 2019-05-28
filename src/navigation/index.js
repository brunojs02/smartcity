import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/Home';
import { Icon } from '../components';
import SettingsScreen from '../screens/Settings';

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
  },
});

const Nav = createAppContainer(bottomNav);

export default Nav;

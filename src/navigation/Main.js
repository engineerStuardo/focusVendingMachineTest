import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

import {Home} from '../screens/Home';
import {Waiting} from '../screens/Waiting';
import {Dispatched} from '../screens/Dispatched';

const Tab = createMaterialTopTabNavigator();

export const MainNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Waiting" component={Waiting} />
      <Tab.Screen name="Dispatched" component={Dispatched} />
    </Tab.Navigator>
  </NavigationContainer>
);

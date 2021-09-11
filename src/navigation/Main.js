import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {Error} from '../components/Error';
import {Home} from '../screens/Home';
import {Waiting} from '../screens/Waiting';
import {Dispatched} from '../screens/Dispatched';

const Tab = createMaterialTopTabNavigator();

export const MainNavigation = () => {
  const {error} = useSelector(state => state.VendingMachineReducer);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {error ? (
          <>
            <Tab.Screen name="Error" component={Error} />
          </>
        ) : (
          <>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Waiting" component={Waiting} />
            <Tab.Screen name="Dispatched" component={Dispatched} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

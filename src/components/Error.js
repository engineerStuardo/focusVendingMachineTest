import React from 'react';
import {View, Text} from 'react-native';

export const Error = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Error, api request failed!</Text>
      <Text>Check internet connection or api url...</Text>
    </View>
  );
};

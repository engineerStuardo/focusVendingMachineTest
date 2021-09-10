import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

export const Loading = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator animating={true} color={Colors.blue800} size={35} />
    </View>
  );
};

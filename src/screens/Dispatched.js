import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {DispatchedList} from '../components/DispatchedList';

export const Dispatched = () => {
  const {dispatched} = useSelector(state => state.VendingMachineReducer);

  const renderItem = ({item}) => <DispatchedList item={item} />;
  const keyExtractor = item => `${item.id}${Math.random()}`;

  return (
    <>
      {dispatched.length === 0 ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>No items dispatched yet</Text>
        </View>
      ) : (
        <FlatList
          data={dispatched}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </>
  );
};

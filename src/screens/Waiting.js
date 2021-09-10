import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {WaitingList} from '../components/WaitingList';

export const Waiting = () => {
  const {dispatchData} = useSelector(state => state.VendingMachineReducer);

  const renderItem = ({item}) => <WaitingList item={item} />;
  const keyExtractor = item => `${item.id}${Math.random()}`;

  return (
    <>
      {dispatchData.length === 0 ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>No items added</Text>
        </View>
      ) : (
        <FlatList
          data={dispatchData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </>
  );
};

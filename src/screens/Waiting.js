import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {WaitingList} from '../components/WaitingList';
import * as Styled from '../styles/DispatchedStyles';

export const Waiting = () => {
  const {dispatchData} = useSelector(state => state.VendingMachineReducer);

  const renderItem = ({item}) => <WaitingList item={item} />;
  const keyExtractor = item => `${item.id}${Math.random()}`;

  return (
    <>
      {dispatchData.length === 0 ? (
        <Styled.Container>
          <Text>No items added</Text>
        </Styled.Container>
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

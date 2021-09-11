import React from 'react';
import {Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {DispatchedList} from '../components/DispatchedList';
import * as Styled from '../styles/DispatchedStyles';

export const Dispatched = () => {
  const {dispatched} = useSelector(state => state.VendingMachineReducer);

  const renderItem = ({item}) => <DispatchedList item={item} />;
  const keyExtractor = item => `${item.id}${Math.random()}`;

  return (
    <>
      {dispatched.length === 0 ? (
        <Styled.Container>
          <Text>No items dispatched yet</Text>
        </Styled.Container>
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

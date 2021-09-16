import React from 'react';
import {Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import * as Styled from '../styles/DispatchedStyles';
import * as renderItems from '../utility/renderItems';

export const Dispatched = () => {
  const {dispatched} = useSelector(state => state.VendingMachineReducer);

  return (
    <>
      {dispatched.length === 0 ? (
        <Styled.Container>
          <Text>No items dispatched yet</Text>
        </Styled.Container>
      ) : (
        <FlatList
          data={dispatched}
          renderItem={renderItems.renderDispatchedList}
          keyExtractor={renderItems.keyExtractor}
        />
      )}
    </>
  );
};

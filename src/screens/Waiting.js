import React from 'react';
import {Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import * as Styled from '../styles/DispatchedStyles';
import * as renderItems from '../utility/renderItems';

export const Waiting = () => {
  const {dispatchData} = useSelector(state => state.VendingMachineReducer);

  return (
    <>
      {dispatchData.length === 0 ? (
        <Styled.Container>
          <Text>No items added</Text>
        </Styled.Container>
      ) : (
        <FlatList
          data={dispatchData}
          renderItem={renderItems.renderWaitingList}
          keyExtractor={renderItems.keyExtractor}
        />
      )}
    </>
  );
};

import React from 'react';
import {List} from 'react-native-paper';

import * as Styled from '../styles/DispatchedListStyles';

export const DispatchedList = ({item}) => {
  return (
    <Styled.Container>
      <List.Item
        title={<Styled.ListText>{item.name}</Styled.ListText>}
        right={() => (
          <Styled.RightView>
            <Styled.RightText>{`Waited: ${item.preparation_time} seconds`}</Styled.RightText>
          </Styled.RightView>
        )}
        left={() => (
          <Styled.LeftAvatar
            resizeMode="cover"
            size={60}
            source={{
              uri: item.thumbnail,
            }}
          />
        )}
      />
    </Styled.Container>
  );
};

import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {List, Avatar} from 'react-native-paper';
import {useSelector} from 'react-redux';

import * as Styled from '../styles/WaitingListStyles';

export const WaitingList = ({item}) => {
  const [timing, setTiming] = useState(item.preparation_time * 1000);
  const {dispatchData} = useSelector(state => state.VendingMachineReducer);

  const countDown = () => {
    setTiming(time => {
      if (time === 0) {
        return;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    const interval = setInterval(countDown, 1000);

    return () => clearInterval(interval);
  }, [dispatchData]);

  return (
    <Styled.Container>
      <List.Item
        title={<Styled.ListText>{item.name}</Styled.ListText>}
        right={() => (
          <Styled.RightView>
            <Styled.RightText>{`Waiting: ${
              timing / 1000
            } seconds`}</Styled.RightText>
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

import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {List, Avatar} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import * as actions from '../redux/actions/VendingMachineActions';

export const WaitingList = ({item}) => {
  const [timing, setTiming] = useState(item.preparation_time * 1000);
  const dispatch = useDispatch();

  const countDown = () => {
    setTiming(time => {
      if (time === 0) {
        dispatch(actions.dispatched(item));
        return;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    const interval = setInterval(countDown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'white',
        marginRight: 30,
        marginLeft: 30,
        marginTop: 15,
      }}>
      <List.Item
        title={<Text style={{fontSize: 15}}>{item.name}</Text>}
        right={() => (
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 10,
              }}>{`Waiting: ${timing / 1000} seconds`}</Text>
          </View>
        )}
        left={() => (
          <Avatar.Image
            style={{backgroundColor: 'gainsboro'}}
            resizeMode="cover"
            size={60}
            source={{
              uri: item.thumbnail,
            }}
          />
        )}
      />
    </View>
  );
};

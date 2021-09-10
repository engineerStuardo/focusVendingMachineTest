import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {List, Avatar} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import * as actions from '../redux/actions/VendingMachineActions';

export const WaitingList = ({item}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(actions.dispatched(item));
    }, item.preparation_time * 1000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'white',
        marginRight: 30,
        marginLeft: 30,
        marginTop: 30,
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
                fontSize: 18,
              }}>{`Waiting: ${item.preparation_time} seconds`}</Text>
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

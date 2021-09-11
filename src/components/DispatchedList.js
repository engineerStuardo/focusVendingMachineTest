import React from 'react';
import {View, Text} from 'react-native';
import {List, Avatar} from 'react-native-paper';

export const DispatchedList = ({item}) => {
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
              }}>{`Waited: ${item.preparation_time} seconds`}</Text>
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

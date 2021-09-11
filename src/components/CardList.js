import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import {Button, Card, Colors} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import * as actions from '../redux/actions/VendingMachineActions';

const {width, height} = Dimensions.get('screen');

export const CardList = ({name, image, time, item}) => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 30,
      }}>
      <Card style={{width: width - 35}}>
        <Card.Title
          title={name}
          subtitle={`Preparation time: ${time} seconds`}
        />
        <Image
          style={{width: '100%', height: height - 550, resizeMode: 'contain'}}
          source={{
            uri: image,
          }}
        />
        <Button
          icon="plus-box-outline"
          mode="contained"
          color={Colors.blue800}
          onPress={() => {
            dispatch(actions.dispatchAction(item));
            setTimeout(() => {
              dispatch(actions.dispatched(item));
            }, item.preparation_time * 1000);
          }}>
          Dispatch
        </Button>
      </Card>
    </View>
  );
};

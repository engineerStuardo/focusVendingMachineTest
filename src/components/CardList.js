import React from 'react';
import {Dimensions} from 'react-native';
import {Button, Card, Colors} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import * as actions from '../redux/actions/VendingMachineActions';
import * as Styled from '../styles/CardListStyles';

const {width, height} = Dimensions.get('screen');

export const CardList = ({name, image, time, item}) => {
  const dispatch = useDispatch();

  return (
    <Styled.container>
      <Styled.MainCard width={width}>
        <Card.Title
          title={name}
          subtitle={`Preparation time: ${time} seconds`}
        />
        <Styled.ImageItem
          height={height}
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
      </Styled.MainCard>
    </Styled.container>
  );
};

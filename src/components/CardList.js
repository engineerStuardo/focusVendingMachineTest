import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const {width, height} = Dimensions.get('screen');

export const CardList = ({name, image, time}) => {
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
          onPress={() => console.log('Pressed')}>
          Dispatch
        </Button>
      </Card>
    </View>
  );
};

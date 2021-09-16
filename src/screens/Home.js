import React from 'react';
import {FlatList} from 'react-native';

import {Loading} from '../components/Loading';

import * as renderItems from '../utility/renderItems';
import {useHome} from '../hooks/useHome';

export const Home = () => {
  const {data, loading} = useHome();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItems.renderCardList}
          keyExtractor={renderItems.keyExtractor}
        />
      )}
    </>
  );
};

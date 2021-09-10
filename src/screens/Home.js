import React, {useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {Loading} from '../components/Loading';
import {CardList} from '../components/CardList';

import * as actions from '../redux/actions/VendingMachineActions';

export const Home = () => {
  const dispatch = useDispatch();
  const {data, loading} = useSelector(state => state.VendingMachineReducer);

  useEffect(() => {
    dispatch(actions.getDataVendingMachine());
  }, []);

  const renderItem = ({item}) => (
    <CardList
      name={item.name}
      image={item.thumbnail}
      time={item.preparation_time}
    />
  );
  const keyExtractor = item => item.id;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </>
  );
};

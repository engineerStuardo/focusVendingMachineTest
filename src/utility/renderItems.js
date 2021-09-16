import React from 'react';
import {CardList} from '../components/CardList';
import {DispatchedList} from '../components/DispatchedList';
import {WaitingList} from '../components/WaitingList';

export const renderCardList = ({item}) => (
  <CardList
    name={item.name}
    image={item.thumbnail}
    time={item.preparation_time}
    item={item}
  />
);

export const renderDispatchedList = ({item}) => <DispatchedList item={item} />;

export const renderWaitingList = ({item}) => <WaitingList item={item} />;

export const keyExtractor = item => `${item.id}${Math.random()}`;

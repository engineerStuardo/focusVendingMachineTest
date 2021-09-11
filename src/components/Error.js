import React from 'react';
import {Text} from 'react-native';

import * as Styled from '../styles/ErrorStyles';

export const Error = () => {
  return (
    <Styled.Container>
      <Text>Error, api request failed!</Text>
      <Text>Check internet connection or api url...</Text>
    </Styled.Container>
  );
};

import React from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';

import * as Styled from '../styles/LoadingStyles';

export const Loading = () => {
  return (
    <Styled.Container>
      <ActivityIndicator animating={true} color={Colors.blue800} size={35} />
    </Styled.Container>
  );
};

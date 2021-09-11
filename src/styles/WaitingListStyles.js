import styled from 'styled-components';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-paper';

export const Container = styled(View)`
  background-color: white;
  margin-right: 30px;
  margin-left: 30px;
  margin-top: 15px;
`;

export const ListText = styled(Text)`
  font-size: 15px;
`;

export const RightView = styled(View)`
  justify-content: center;
`;

export const RightText = styled(Text)`
  font-size: 10px;
`;

export const LeftAvatar = styled(Avatar.Image)`
  background-color: white;
`;

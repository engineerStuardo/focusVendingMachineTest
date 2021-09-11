import styled from 'styled-components';
import {View, Image} from 'react-native';
import {Card} from 'react-native-paper';

export const container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const MainCard = styled(Card)`
  width: ${props => `${props.width - 35}px`};
`;

export const ImageItem = styled(Image)`
  width: 100%;
  height: ${props => `${props.height - 550}px`};
  resize-mode: contain;
`;

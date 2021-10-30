import styled from '@emotion/native';
import { View } from 'react-native';

type ScreenProps = {
  verticalAlignment?: 'center' | 'space-between' | 'space-around';
};

export const Screen = styled(View)<ScreenProps>`
  padding: 20px;
  flex: 1;
  align-items: center;
  justify-content: ${props => props.verticalAlignment ?? 'center'};
`;

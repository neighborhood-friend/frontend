import styled from '@emotion/native';
import React from 'react';
import { UI_COLORS } from './UiColors';
import { Kind } from './Kind';
import { Body1Bold } from './StyledText';

const ButtonColors = {
  [Kind.Primary]: UI_COLORS.keyGreen,
  [Kind.Secondary]: UI_COLORS.darkGray,
};

type BasicButtonProps = {
  onPress: () => any;
  kind: Kind;
  text: string;
};

export const BasicButton = ({ onPress, kind, text }: BasicButtonProps) => {
  return (
    <ButtonBox onPress={onPress} fill={ButtonColors[kind]}>
      <Body1Bold>{text}</Body1Bold>
    </ButtonBox>
  );
};

const ButtonBox = styled.Pressable<{ fill: string }>`
  background-color: ${props => props.fill};
  width: 100%;
  justify-content: center;
  align-items: center;
`;
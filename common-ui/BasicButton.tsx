import styled from '@emotion/native';
import React from 'react';
import { UI_COLORS } from './UiColors';
import { Kind } from './Kind';
import { FONT_SIZE } from './Font';

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
      <ButtonText>{text}</ButtonText>
    </ButtonBox>
  );
};

const ButtonBox = styled.Pressable<{ fill: string }>`
  background-color: ${props => props.fill};
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${UI_COLORS.white};
  line-height: 40px;
  font-weight: bold;
  font-size: ${FONT_SIZE.body}
`;
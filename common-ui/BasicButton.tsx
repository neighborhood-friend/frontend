import styled from '@emotion/native';
import React from 'react';
import { UiColors } from './UiColors';
import { Kind } from './Kind';
import { Body1Bold } from './StyledText';

type ButtonColorsType = {
  fill: string;
  font: string;
  border?: string;
};

const ButtonColors: { [key in Kind]: ButtonColorsType } = {
  [Kind.Primary]: {
    fill: UiColors.green[400],
    font: UiColors.white,
  },
  [Kind.Outline]: {
    fill: 'transparent',
    font: UiColors.black,
    border: UiColors.gray[300],
  },
};

type BasicButtonProps = {
  onPress?: () => any;
  kind: Kind;
  text: string;
  full?: boolean;
  round?: boolean;
};

export const BasicButton = ({
  onPress,
  kind,
  text,
  full = false,
  round = false,
}: BasicButtonProps) => {
  return (
    <ButtonBox
      onPress={onPress}
      fill={ButtonColors[kind].fill}
      full={full}
      round={round}
      border={ButtonColors[kind]?.border}
    >
      <Body1Bold style={{ color: ButtonColors[kind].font }}>{text}</Body1Bold>
    </ButtonBox>
  );
};

type ButtonBoxProps = {
  fill: string;
  border?: string;
  full: boolean;
  round: boolean;
};

const ButtonBox = styled.Pressable<ButtonBoxProps>`
  background-color: ${props => props.fill};
  ${props => props.full && 'width: 100%'};
  ${props =>
    props.border &&
    `
      borderWidth: 1px;
      borderColor: ${props.border}
  `};
  padding: 12px 18px;
  borderRadius: ${props => (props.round ? '24px' : '8px')};
  justify-content: center;
  align-items: center;
`;

import styled from '@emotion/native';
import React from 'react';
import { UiColors } from './UiColors';
import { Kind } from './Kind';
import { Body1Bold } from './StyledText';

type ButtonColorsType = {
  [key: string]: {
    fill?: string;
    font?: string;
    border?: string;
  }
};

const ButtonColors: { [key in Kind]: ButtonColorsType } = {
  [Kind.Primary]: {
    default: {
      font: UiColors.white,
      fill: UiColors.green[400],
    },
    disabled: {
      font: UiColors.white,
      fill: UiColors.green[200],
    },
  },
  [Kind.Outline]: {
    common: {
      fill: 'transparent',
      border: UiColors.gray[300],
    },
    get default() {
      return {
        ...this.common,
        font: UiColors.black,
      }
    },
    get disabled() {
      return {
        ...this.common,
        font: UiColors.gray[300],
      }
    }
  },
};

type BasicButtonProps = {
  onPress?: () => any;
  kind: Kind;
  text: string;
  full?: boolean;
  round?: boolean;
  disabled?: boolean;
};

export const BasicButton = ({
  onPress,
  kind,
  text,
  full = false,
  round = false,
  disabled = false,
}: BasicButtonProps) => {
  const status = disabled ? 'disabled' : 'default';
  return (
    <ButtonBox
      onPress={onPress}
      disabled={disabled}
      fill={ButtonColors[kind][status].fill}
      full={full}
      round={round}
      border={ButtonColors[kind][status]?.border}
    >
      <Body1Bold style={{ color: ButtonColors[kind][status].font }}>{text}</Body1Bold>
    </ButtonBox>
  );
};

type ButtonBoxProps = {
  fill?: string;
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

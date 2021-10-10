import React from 'react';
import { BasicButton } from '../../common-ui/BasicButton';
import { Kind } from '../../common-ui/Kind';

type KakaoLoginButtonProps = {
  openModal: () => void;
}

export const KakaoLoginButton = ({ openModal }: KakaoLoginButtonProps) => {
  return <BasicButton onPress={openModal} kind={Kind.Primary} text="카카오로 시작하기" />;
};

import React from 'react';
import { BasicButton } from '../../common-ui/BasicButton';
import { Kind } from '../../common-ui/Kind';
import { useKakaoLogin } from './useKakaoLogin';

export const KakaoLoginButton = () => {
  const { onPress } = useKakaoLogin();
  return <BasicButton onPress={onPress} kind={Kind.Primary} text="카카오로 시작하기" />;
};

import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { BasicButton } from '../../common-ui/BasicButton';
import { Kind } from '../../common-ui/Kind';

export const KakaoLoginButton = () => {
  const navigation = useNavigation();
  return <BasicButton onPress={() => navigation.navigate('KaKaoLoginModal')} kind={Kind.Primary} text="카카오로 시작하기" />;
};

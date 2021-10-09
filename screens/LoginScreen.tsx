import styled from '@emotion/native';
import React from 'react';
import { KakaoLoginButton } from '../components/KakaoLogin/KakaoLoginButton';
import { View } from '../components/Themed';

export default function LoginScreen() {
  return (
    <LoginView>
      <KakaoLoginButton />
    </LoginView>
  );
}

const LoginView = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

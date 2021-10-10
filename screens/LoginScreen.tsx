import styled from '@emotion/native';
import React from 'react';
import { KakaoLoginButton } from '../components/KakaoLogin/KakaoLoginButton';
import { View } from '../components/Themed';
import type { RootTabScreenProps } from '../types';

export default function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {
  const openModal = () => navigation.navigate('KaKaoLoginModal'); 
  // TODO: useAuth hook(global) 작업 후 로그인 상태 받아오기 - 로그인되면 메인페이지로 이동시킴
  
  return (
    <LoginView>
      <KakaoLoginButton openModal={openModal} />
    </LoginView>
  );
}

const LoginView = styled(View)`
  padding: 25px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

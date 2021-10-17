import styled from '@emotion/native';
import React, { useEffect } from 'react';
import { KakaoLoginButton } from '../components/KakaoLogin/KakaoLoginButton';
import { View } from '../components/Themed';
import { useAuthenticationContext } from '../contexts/AuthenticationContext';
import type { RootTabScreenProps } from '../types';

export default function LoginScreen({
  navigation, route
}: RootTabScreenProps<'Login'>) {
  const { authorized, user, getLoggedIn } = useAuthenticationContext();

  useEffect(() => {
    getLoggedIn();
  }, []);

  useEffect(() => {
    if (authorized) {
      const nextPage = user.nickname ? 'Root' : 'InitialProfile';
      navigation.navigate(nextPage);
      navigation.reset({ index: 0, routes: [{ name: nextPage }] });
    }
  }, [authorized]);

  return (
    <LoginView>
      <KakaoLoginButton />
    </LoginView>
  );
}

const LoginView = styled(View)`
  padding: 20px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

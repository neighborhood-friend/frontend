import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, FC, ReactNode, useContext, useState } from 'react';

type AuthenticationProviderProps = {
  children?: ReactNode;
};

type AuthenticationContextValues = {
  authorized: boolean;
  getLoggedIn: () => Promise<void>;
  user: {
    id: string;
    nickname?: string;
    imgUrl?: string;
  };
};

const AuthenticationContext = createContext({} as AuthenticationContextValues);

export const AuthenticationProvider: FC<AuthenticationProviderProps> = ({
  children,
}) => {
  const KEY = 'kakaoToken';
  const [authorized, setAuthorized] = useState(false);

  // TODO: user 데이터 요청
  const user = {
    id: 'dummy',
  };

  const getLoggedIn = async () => {
    try {
      const token = await AsyncStorage.getItem(KEY);
      // TODO: 토큰 유효 여부를 확인하는 과정이 필요함
      if (token) {
        setAuthorized(true);
      }
    } catch (error) {
      alert('로그인을 다시 시도해주세요');
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        authorized,
        getLoggedIn,
        user,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

AuthenticationContext.displayName = 'AuthenticationContext';

export const useAuthenticationContext = () => useContext(AuthenticationContext);

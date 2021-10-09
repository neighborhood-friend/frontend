import { openBrowserAsync } from 'expo-web-browser';
import { useState } from 'react';

export const useKakaoLogin = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const clientKey =
    'https://kauth.kakao.com/oauth/authorize?client_id=f407a0ea17dec6717cc52af58d4aa5f2&redirect_uri=http://localhost:8080/kakao/login&response_type=code';

  const onPress = async () => {
    setLoginModalOpen(true);
    
  };

  const closeLoginModal = () => setLoginModalOpen(false);

  return { onPress, closeLoginModal };
};

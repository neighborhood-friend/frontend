import styled from '@emotion/native';
import WebView from 'react-native-webview';
import { useKakaoLogin } from '../hooks/login/useKakaoLogin';
import { View } from '../components/Themed';
import type { RootTabScreenProps } from '../types';
import React from 'react';

export default function KakaoLoginModalScreen() {
  const { uri, INJECTED_JAVASCRIPT, handleMessage } = useKakaoLogin();

  return (
    <KakaoLoginModalView>
      <WebView
        source={{ uri }}
        startInLoadingState={true}
        containerStyle={{ height: '100%', width: '100%' }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={handleMessage}
      />
    </KakaoLoginModalView>
  );
}

const KakaoLoginModalView = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

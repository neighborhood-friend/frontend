import styled from '@emotion/native';
import WebView from 'react-native-webview';
import { useKakaoLogin } from '../hooks/login/useKakaoLogin';
import { View } from '../components/Themed';
import type { RootTabScreenProps } from '../types';

export default function KakaoLoginModalScreen({
  navigation,
}: RootTabScreenProps<'KaKaoLoginModal'>) {
  const { uri, INJECTED_JAVASCRIPT, handleMessage } = useKakaoLogin({
    goBack: () => navigation.goBack(),
  });

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

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import { KAKAO_CLIENT_KEY } from '../../constants/keys/login';

export const useKakaoLogin = () => {
  const navigation = useNavigation();
  const INJECTED_JAVASCRIPT = `(function() {
    if (window.document.getElementsByTagName("pre").length > 0) {
      window.ReactNativeWebView.postMessage(
        window.document.getElementsByTagName("pre")[0].innerHTML
        );
      }
    })();`;
  const REDIRECT_URI = 'http://localhost:8080/kakao/login'; // 서버로 바로 인가코드 보내서 토큰 요청
  const uri = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleMessage = async (event: any) => {
    try {
      const result = await JSON.parse(event.nativeEvent.data);
      if (!result) {
        throw Error();
      }
      AsyncStorage.setItem('kakaoToken', result.access_token);
    } catch (error) {
      alert('로그인 오류가 발생했습니다. 다시 시도하세요');
    } finally {
      navigation.navigate('Login');
    }
  };

  return { handleMessage, uri, INJECTED_JAVASCRIPT };
};

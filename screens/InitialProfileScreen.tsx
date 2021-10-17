import styled from '@emotion/native';
import React from 'react';
import { Screen } from '../common-ui/Screen';
import { H2 } from '../common-ui/StyledText';
import { Image, Pressable, View } from 'react-native';
import { UI_COLORS } from '../common-ui/UiColors';
import { TextInput } from 'react-native-gesture-handler';
import { Text } from 'react-native';

const DEFAULT_PROFILE = '../assets/images/default-profile-image.png';
const TITLE = `닉네임을 설정하고\n동네친구를 시작해보세요`;

export default function InitialProfileScreen() {
  return (
    <Screen>
      <TitleSection>
        <H2>{TITLE}</H2>
      </TitleSection>
      <ProfileImageSection>
        <ProfileImage source={require(DEFAULT_PROFILE)} />
        <CameraButton />
      </ProfileImageSection>
      <NicknameSection>
        <TextInput />
        <Pressable>
          <Text>중복확인</Text>
        </Pressable>
      </NicknameSection>
    </Screen>
  );
}

const TitleSection = styled(View)`
  width: 100%;
  background: transparent;
`;

const ProfileImageSection = styled(View)`
  width: 120px;
  height: 120px;
  align-self: center;
  margin-top: 54px;
  background: transparent;
`;

const ProfileImage = styled(Image)`
  width: 120px;
  height: 120px;
  borderRadius: 60px;
  align-self: center;
`;

const CameraButton = styled(Pressable)`
  width: 40px;
  height: 40px;
  background: white;
  borderRadius: 20px;
  borderWidth: 1px;
  borderColor: ${UI_COLORS.darkGray};
  position: absolute;
  bottom: 0;
  right: -4px;
`;

const NicknameSection = styled(View)`
  width: 100%;
  height: 40px;
  margin-top: 48px;
  borderBottomWidth: 1px;
  borderColor: ${UI_COLORS.darkGray};
  flex-direction: row;
`;
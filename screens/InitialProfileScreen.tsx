import styled from '@emotion/native';
import React from 'react';
import { Screen } from '../common-ui/Screen';
import { H2 } from '../common-ui/StyledText';
import { Pressable, View } from 'react-native';
import { UiColors } from '../common-ui/UiColors';
import { TextInput } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { BasicButton } from '../common-ui/BasicButton';
import { Kind } from '../common-ui/Kind';
import { InitialProfileImage } from '../components/InitialProfile';

const TITLE = `닉네임을 설정하고\n동네친구를 시작해보세요`;

export default function InitialProfileScreen() {
  return (
    <Screen verticalAlignment="space-around">
      <Profile>
        <H2>{TITLE}</H2>
        <InitialProfileImage />
        <NicknameSection>
          <TextInput />
          <Pressable>
            <Text>중복확인</Text>
          </Pressable>
        </NicknameSection>
      </Profile>
      <BasicButton kind={Kind.Primary} full text="시작하기" />
    </Screen>
  );
}

const Profile = styled(View)`
  width: 100%;
`;

const NicknameSection = styled(View)`
  width: 100%;
  height: 40px;
  margin-top: 48px;
  borderBottomWidth: 1px;
  borderColor: ${UiColors.gray[300]};
  flex-direction: row;
`;

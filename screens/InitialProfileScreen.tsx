import styled from '@emotion/native';
import React from 'react';
import { Screen } from '../common-ui/Screen';
import { H2 } from '../common-ui/StyledText';
import { View } from 'react-native';
import { BasicButton } from '../common-ui/BasicButton';
import { Kind } from '../common-ui/Kind';
import { InitialProfileImage } from '../components/InitialProfile';
import { Nickname } from '../components/InitialProfile/Nickname';
import { useInitialProfile } from '../components/InitialProfile/useInitialProfile';

const TITLE = `닉네임을 설정하고\n동네친구를 시작해보세요`;

export default function InitialProfileScreen() {
  const { validated, validate } = useInitialProfile();
  return (
    <Screen verticalAlignment="space-around">
      <Profile>
        <H2>{TITLE}</H2>
        <InitialProfileImage />
        <Nickname validate={validate} validated={validated} />
      </Profile>
      <BasicButton kind={Kind.Primary} full text="시작하기" disabled={!validated}/>
    </Screen>
  );
}

const Profile = styled(View)`
  width: 100%;
`;
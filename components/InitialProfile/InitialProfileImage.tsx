import styled from '@emotion/native';
import React from 'react';
import { View } from 'react-native';
import { ProfileThumbnail } from '../../common-ui/ProfileThumbnail';
import { PhotoFinderButton } from './PhotoFinderButton';

export const InitialProfileImage = () => (
  <Section>
    <ProfileThumbnail />
    <PhotoFinderButton />
  </Section>
);

const Section = styled(View)`
  width: 120px;
  height: 120px;
  align-self: center;
  margin-top: 54px;
  background: transparent;
`;

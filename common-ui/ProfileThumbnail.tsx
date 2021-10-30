import React from 'react';
import styled from '@emotion/native';
import { Image } from 'react-native';

const DEFAULT_PROFILE = '../assets/images/default-profile-image.png';

type ProfileThumbnailProps = {
  imageUrl?: string;
};

export const ProfileThumbnail = ({ imageUrl }: ProfileThumbnailProps) => (
  <ProfileImage source={imageUrl ?? require(DEFAULT_PROFILE)} />
);

const ProfileImage = styled(Image)`
  width: 120px;
  height: 120px;
  borderRadius: 60px;
  align-self: center;
`;

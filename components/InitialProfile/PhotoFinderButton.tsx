import React from 'react';
import styled from '@emotion/native';
import { Pressable } from 'react-native';
import { Camera } from '../../common-ui/Icons';
import { UiColors } from '../../common-ui/UiColors';

type PhotoFinderButtonProps = {
  openGallery: () => Promise<void>
}

export const PhotoFinderButton = ({ openGallery }: PhotoFinderButtonProps) => (
  <Wrapper onPress={openGallery}>
    <Camera size={20} />
  </Wrapper>
);

const Wrapper = styled(Pressable)`
  width: 40px;
  height: 40px;
  background: white;
  borderRadius: 20px;
  borderWidth: 1px;
  borderColor: ${UiColors.gray[300]};
  position: absolute;
  bottom: 0;
  right: -4px;
  justifyContent: center;
  alignItems: center;
`;

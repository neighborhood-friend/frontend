import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { UI_COLORS } from '../UiColors';

type CameraProps = {
  size?: number;
  fill?: string;
}

export const Camera = ({ size = 24, fill = UI_COLORS.darkGray }: CameraProps) => (
  <Svg viewBox="0 0 24 24" fill="none" width={size} height={size}>
    <Path
      d="M12 15.2C13.7673 15.2 15.2 13.7674 15.2 12C15.2 10.2327 13.7673 8.80005 12 8.80005C10.2327 8.80005 8.8 10.2327 8.8 12C8.8 13.7674 10.2327 15.2 12 15.2Z"
      fill={fill}
    />
    <Path
      d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z"
      fill={fill}
    />
  </Svg>
);

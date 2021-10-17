import React from 'react';
import { FONT_STYLE } from './FontStyle';
import { Text, TextProps } from '../components/Themed';

export const MonoText = (props: TextProps) => (
  <Text {...props} style={[props.style, { fontFamily: 'noto-sans' }]} />
);

export const H1 = (props: TextProps) => (
  <Text {...props} style={[props.style, FONT_STYLE.h1]} />
);
export const H2 = (props: TextProps) => (
  <Text {...props} style={[props.style, FONT_STYLE.h2]} />
);

export const H3 = (props: TextProps) => (
  <Text {...props} style={[props.style, FONT_STYLE.h3]} />
);

export const Body1Bold = (props: TextProps) => (
  <Text {...props} style={[props.style, FONT_STYLE.body1.bold]} />
);

export const Body1Medium = (props: TextProps) => (
  <Text {...props} style={[props.style, FONT_STYLE.body1.medium]} />
);

export const Body1Regular = (props: TextProps) => (
  <Text {...props} style={[props.style, FONT_STYLE.body1.regular]} />
);

export const Body2Bold = (props: TextProps) => (
  <Text {...props} style={[props.style, FONT_STYLE.body2.bold]} />
);

export const Body2Medium = (props: TextProps) => (
  <Text {...props} style={[props.style, FONT_STYLE.body2.medium]} />
);

export const Body2Regular = (props: TextProps) => (
  <Text {...props} style={[props.style, FONT_STYLE.body2.regular]} />
);

export const Body3Bold = (props: TextProps) => (
  <Text {...props} style={[props.style, FONT_STYLE.body3.bold]} />
);

export const Body3Medium = (props: TextProps) => (
  <Text {...props} style={[props.style, FONT_STYLE.body3.medium]} />
);

export const Body3Regular = (props: TextProps) => (
  <Text {...props} style={[props.style, FONT_STYLE.body3.regular]} />
);
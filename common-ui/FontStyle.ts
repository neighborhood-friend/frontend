const fontProps = (
  fontSize: number,
  lineHeight: number,
  weight: string
) => ({
  fontSize,
  lineHeight,
  fontFamily: 'noto-sans-' + weight,
  letterSpacing: -1,
});

export const FONT_STYLE = {
  h1: fontProps(24, 36, 'bold'),
  h2: fontProps(22, 32, 'bold'),
  h3: fontProps(18, 28, 'medium'),
  body1: {
    bold: fontProps(16, 24, 'bold'),
    medium: fontProps(16, 24, 'medium'),
    regular: fontProps(16, 24, 'regular'),
  },
  body2: {
    bold: fontProps(14, 20, 'bold'),
    medium: fontProps(14, 20, 'medium'),
    regular: fontProps(14, 20, 'regular'),
  },
  body3: {
    bold: fontProps(12, 18, 'bold'),
    medium: fontProps(12, 18, 'medium'),
    regular: fontProps(12, 18, 'regular'),
  },
};

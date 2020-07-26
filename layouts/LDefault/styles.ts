import { Interpolation } from '@emotion/core';

export const GlobalStyle = (theme: any): Interpolation => ({
  ['html, body']: {
    fontSize: `${theme.baseFontSize}px`,
    fontFamily: theme.font.family.sans,
  },
  ['b, strong, h1, h2, h3, h4, h5, h6']: {
    fontWeight: theme.font.weight.bold,
  },
});

export const LDefault = (theme: any): Interpolation => ({
  minHeight: '100vh',
  background: theme.colors.defaultBackground,
  display: 'grid',
  gridTemplateRows: 'max-content auto max-content',
});

export const LDefaultMain = (theme: any): Interpolation => ({
  paddingTop: theme.header.height.mobile,
  paddingBottom: theme.footer.height.mobile,

  [`@media (min-width: ${theme.screens.lg})`]: {
    paddingTop: theme.header.height.desktop,
    paddingBottom: theme.footer.height.desktop,
  },
});

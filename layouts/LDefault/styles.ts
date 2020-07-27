import { Interpolation } from '@emotion/core';

export const GlobalStyle = (theme: any): Interpolation => ({
  ['html, body']: {
    fontSize: `${theme.baseFontSize}px`,
    fontFamily: theme.font.family.sans,
    color: theme.colors.defaultText,
    background: theme.colors.defaultBackground,
  },
  ['b, strong, h1, h2, h3, h4, h5, h6']: {
    fontWeight: theme.font.weight.bold,
  },
  ['a']: {
    textDecoration: 'none',
    color: theme.colors.defaultText,
  },
});

export const LDefault = (theme: any): Interpolation => ({
  minHeight: '100vh',
  background: theme.colors.defaultBackground,
  display: 'grid',
  gridTemplateRows: '1fr',
});

export const LDefaultMain = (theme: any): Interpolation => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
  paddingTop: theme.header.height.mobile,
  paddingBottom: theme.footer.height.mobile,

  [`@media (min-width: ${theme.screens.lg})`]: {
    paddingTop: theme.header.height.desktop,
    paddingBottom: theme.footer.height.desktop,
  },
});

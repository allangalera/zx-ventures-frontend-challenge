export const GlobalStyle = (theme: any) => ({
  ['html, body']: {
    fontSize: `${theme.baseFontSize}px`,
  },
});

export const LDefault = (theme: any) => ({
  minHeight: '100vh',
  background: theme.colors.defaultBackground,
  display: 'grid',
  gridTemplateRows: 'max-content auto max-content',
});

export const LDefaultMain = (theme: any) => ({
  paddingTop: theme.header.height.mobile,
  paddingBottom: theme.footer.height.mobile,

  [`@media (min-width: ${theme.screens.lg})`]: {
    paddingTop: theme.header.height.desktop,
    paddingBottom: theme.footer.height.desktop,
  },
});

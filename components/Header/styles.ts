export const Header = (theme: any) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottomWidth: theme.spacing.pxToRem(1),
  borderBottomStyle: 'solid',
  borderBottomColor: theme.colors.gray[300],
  height: theme.header.height.mobile,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 100,
  background: theme.colors.headerBackground,
  [`@media (min-width: ${theme.screens.lg})`]: {
    height: theme.header.height.desktop,
  },
});

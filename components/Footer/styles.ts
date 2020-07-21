export const Footer = (theme: any) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  background: theme.colors.footerBackground,
  height: theme.footer.height.mobile,
  borderTopWidth: theme.spacing.pxToRem(1),
  borderTopStyle: 'solid',
  borderTopColor: theme.colors.gray[300],
  [`@media (min-width: ${theme.screens.lg})`]: {
    height: theme.footer.height.desktop,
  },
});

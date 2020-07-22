export const Footer = (theme: any) => ({
  position: 'fixed',
  left: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  background: theme.colors.footerBackground,
  height: theme.footer.height.mobile,
  borderTopWidth: theme.border.width,
  borderTopStyle: theme.border.style,
  borderTopColor: theme.border.color.default,
  [`@media (min-width: ${theme.screens.lg})`]: {
    height: theme.footer.height.desktop,
  },
});

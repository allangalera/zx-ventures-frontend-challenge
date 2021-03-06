import { Interpolation } from '@emotion/core';

export const Header = (theme: any): Interpolation => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottomWidth: theme.border.width,
  borderBottomStyle: theme.border.style,
  borderBottomColor: theme.border.color.default,
  height: theme.header.height.mobile,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 100,
  paddingLeft: theme.spacing.unityToRem(8),
  paddingRight: theme.spacing.unityToRem(8),
  background: theme.colors.headerBackground,
  [`@media (min-width: ${theme.screens.lg})`]: {
    height: theme.header.height.desktop,
  },
});

export const ButtonsContainer = (theme: any): Interpolation => ({
  display: 'flex',
  ['> * + *']: {
    marginLeft: theme.spacing.unityToRem(4),
  },
});

export const ButtonIcon = (theme: any): Interpolation => ({
  fontSize: theme.font.size['xl'],
});

export const CartButton = (theme: any): Interpolation => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const CartCountBadge = (theme: any): Interpolation => ({
  position: 'absolute',
  top: 0,
  right: 0,
  background: theme.colors.contrastBackground,
  color: theme.colors.contrastText,
  width: theme.spacing.unityToRem(8),
  height: theme.spacing.unityToRem(8),
  borderRadius: '50%',
});

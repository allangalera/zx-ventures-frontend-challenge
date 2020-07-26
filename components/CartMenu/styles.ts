import { Interpolation } from '@emotion/core';

export const CartMenu = (theme: any): Interpolation => ({
  zIndex: 550,
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: theme.colors.defaultBackground,
  color: theme.colors.defaultText,
  padding: `${theme.spacing.unityToRem(6)} ${theme.spacing.unityToRem(8)}`,
  maxWidth: theme.spacing.unityToRem(250),
  minWidth: theme.spacing.unityToRem(160),
  ['> * + *']: {
    marginTop: theme.spacing.unityToRem(8),
  },
});

export const CartMenuOverlay = (theme: any): Interpolation => ({
  zIndex: 500,
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background: theme.colors.overlay,
});

export const CartMenuContainer = (theme: any): Interpolation => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflowY: 'auto',
  ['> * + *']: {
    marginTop: theme.spacing.unityToRem(8),
  },
});

export const TitleContainer = (theme: any): Interpolation => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const IconSize = (theme: any): Interpolation => ({
  fontSize: theme.font.size['2xl'],
});

export const Title = (theme: any): Interpolation => ({
  fontSize: theme.font.size['2xl'],
});

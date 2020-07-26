import { Interpolation } from '@emotion/core';

export const CartMenu = (theme: any): Interpolation => ({
  zIndex: 550,
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: theme.colors.white,
  padding: `${theme.spacing.unityToRem(6)} ${theme.spacing.unityToRem(8)}`,
  maxWidth: theme.spacing.unityToRem(200),
  minWidth: theme.spacing.unityToRem(160),
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
  ['> *']: {
    marginTop: theme.spacing.unityToRem(8),
  },
});

export const TitleContainer = (theme: any): Interpolation => ({
  display: 'flex',
  justifyContent: 'space-between',
});

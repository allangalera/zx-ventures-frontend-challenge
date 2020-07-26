import { Interpolation } from '@emotion/core';

export const Button = (theme: any): Interpolation => ({
  position: 'relative',
  padding: `${theme.spacing.unityToRem(8)} ${theme.spacing.unityToRem(16)}`,
  background: theme.colors.defaultBackground,
  color: theme.colors.defaultText,
  borderWidth: theme.border.width,
  borderStyle: theme.border.style,
  borderColor: theme.border.color.default,
  borderRadius: theme.border.radius,
  transition: theme.transition.default,
  cursor: 'pointer',
  maxHeight: theme.spacing.unityToRem(24),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ['&:hover']: {
    borderColor: theme.border.color.hover,
  },
});

export const ButtonActive = (theme: any): Interpolation => ({
  background: theme.colors.contrastBackground,
  color: theme.colors.contrastText,
});

export const ButtonFill = (theme: any): Interpolation => ({
  width: '100%',
});

export const ButtonSmall = (theme: any): Interpolation => ({
  padding: `${theme.spacing.unityToRem(2)} ${theme.spacing.unityToRem(4)}`,
  maxHeight: theme.spacing.unityToRem(14),
  [`@media (min-width: ${theme.screens.sm})`]: {
    padding: `${theme.spacing.unityToRem(4)} ${theme.spacing.unityToRem(8)}`,
    maxHeight: theme.spacing.unityToRem(18),
  },
});

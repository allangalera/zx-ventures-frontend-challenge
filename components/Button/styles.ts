import { Interpolation } from '@emotion/core';

export const Button = (theme: any): Interpolation => ({
  padding: `${theme.spacing.unityToRem(8)} ${theme.spacing.unityToRem(16)}`,
  background: theme.colors.defaultBackground,
  color: theme.colors.defaultText,
  borderWidth: theme.border.width,
  borderStyle: theme.border.style,
  borderColor: theme.border.color.default,
  borderRadius: theme.border.radius,
  transition: theme.transition.default,
  cursor: 'pointer',
  ['&:hover']: {
    borderColor: theme.border.color.hover,
  },
});

export const ButtonActive = (theme: any): Interpolation => ({
  background: theme.colors.constrastBackground,
  color: theme.colors.constrastText,
});

export const ButtonFill = (theme: any): Interpolation => ({
  width: '100%',
});

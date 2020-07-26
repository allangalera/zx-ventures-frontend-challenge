import { Interpolation } from '@emotion/core';

export const ProductCardImage = (theme: any): Interpolation => ({
  maxWidth: '100%',
  height: 'auto',
  objectFit: 'contain',
});

export const ProductImageNotFound = (theme: any): Interpolation => ({
  alignSelf: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  color: theme.colors.gray[300],
  fontSize: theme.font.size['6xl'],
  userSelect: 'none',
  textAlign: 'center',
  ['span']: {
    fontSize: theme.font.size.sm,
    marginTop: theme.spacing.unityToRem(8),
  },
});

export const ProductImageNotFoundSmall = (theme: any): Interpolation => ({
  fontSize: theme.font.size['3xl'],
  ['span']: {
    fontSize: theme.font.size.xs,
    marginTop: theme.spacing.unityToRem(8),
  },
});

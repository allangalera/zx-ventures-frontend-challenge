import { Interpolation } from '@emotion/core';

export const ProductCard = (theme: any): Interpolation => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: `${theme.spacing.unityToRem(8)} ${theme.spacing.unityToRem(16)}`,
  borderWidth: theme.border.width,
  borderStyle: theme.border.style,
  borderColor: theme.border.color.default,
  borderRadius: theme.border.radius,
  transition: theme.transition.default,
  ['&:hover']: {
    borderColor: theme.border.color.hover,
  },
});

export const ProductCardImageContainer = (theme: any): Interpolation => ({
  display: 'flex',
  justifyContent: 'center',
  height: theme.spacing.unityToRem(90),
});

export const ProductCardImage = (theme: any): Interpolation => ({
  maxWidth: '100%',
  height: 'auto',
  objectFit: 'contain',
});

export const ProductCardDiscountBadge = (theme: any): Interpolation => ({
  position: 'absolute',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'flex-end',
  background: theme.colors.black,
  color: theme.colors.white,
  fontSize: theme.font.size.sm,
  width: theme.spacing.unityToRem(28),
  height: theme.spacing.unityToRem(28),
});

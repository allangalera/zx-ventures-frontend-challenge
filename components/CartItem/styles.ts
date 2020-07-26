import { Interpolation } from '@emotion/core';

export const CartItem = (theme: any): Interpolation => ({
  position: 'relative',
  display: 'flex',
  padding: `${theme.spacing.unityToRem(4)} ${theme.spacing.unityToRem(8)}`,
  borderWidth: theme.border.width,
  borderStyle: theme.border.style,
  borderColor: theme.border.color.default,
  borderRadius: theme.border.radius,
  transition: theme.transition.default,
  alignItems: 'center',
  ['&:hover']: {
    borderColor: theme.border.color.hover,
  },
  ['> * + *']: {
    marginLeft: theme.spacing.unityToRem(8),
  },
  [`@media (min-width: ${theme.screens.lg})`]: {
    padding: `${theme.spacing.unityToRem(8)} ${theme.spacing.unityToRem(16)}`,
  },
});

export const CartItemImageContainer = (theme: any): Interpolation => ({
  display: 'flex',
  justifyContent: 'center',
  height: theme.spacing.unityToRem(40),
  flexBasis: theme.spacing.unityToRem(40),
  textDecoration: 'none',
});

export const CartItemImage = (theme: any): Interpolation => ({
  maxWidth: '100%',
  height: 'auto',
  objectFit: 'contain',
});

export const CartItemDiscountBadge = (theme: any): Interpolation => ({
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
  pointerEvents: 'none',
});

export const CartItemButtonsContainer = (theme: any): Interpolation => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ['> * + *']: {
    marginLeft: theme.spacing.unityToRem(4),
  },
});

export const CartItemName = (theme: any): Interpolation => ({
  flex: 1,
});

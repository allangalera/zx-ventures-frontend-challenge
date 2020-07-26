import { Interpolation } from '@emotion/core';

export const CartItem = (theme: any): Interpolation => ({
  position: 'relative',
  display: 'flex',
  padding: `${theme.spacing.unityToRem(4)}`,
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
    marginLeft: theme.spacing.unityToRem(4),
  },
  [`@media (min-width: ${theme.screens.md})`]: {
    padding: `${theme.spacing.unityToRem(8)} ${theme.spacing.unityToRem(16)}`,
    ['> * + *']: {
      marginLeft: theme.spacing.unityToRem(8),
    },
  },
});

export const InfoContainer = (theme: any): Interpolation => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  ['> * + *']: {
    marginTop: theme.spacing.unityToRem(4),
  },
  [`@media (min-width: ${theme.screens.md})`]: {
    ['> * + *']: {
      marginTop: theme.spacing.unityToRem(8),
    },
  },
});

export const CartItemImageContainer = (theme: any): Interpolation => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  height: theme.spacing.unityToRem(50),
  width: theme.spacing.unityToRem(50),
  textDecoration: 'none',
});

export const CartItemImage = (theme: any): Interpolation => ({
  maxWidth: '100%',
  height: 'auto',
  objectFit: 'contain',
});

export const CartItemDiscountBadge = (theme: any): Interpolation => ({
  position: 'absolute',
  top: 0,
  right: 0,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'flex-end',
  background: theme.colors.contrastBackground,
  color: theme.colors.contrastText,
  fontSize: theme.font.size.xs,
  width: theme.spacing.unityToRem(18),
  height: theme.spacing.unityToRem(18),
  pointerEvents: 'none',
});

export const FlexBetweenContainer = (theme: any): Interpolation => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  ['> * + *']: {
    marginLeft: theme.spacing.unityToRem(4),
  },
});

export const ButtonsContainer = (theme: any): Interpolation => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ['> * + *']: {
    marginLeft: theme.spacing.unityToRem(8),
  },
});

export const CartItemName = (theme: any): Interpolation => ({
  flex: 1,
  fontSize: theme.font.size.sm,
});

export const IconSize = (theme: any): Interpolation => ({
  fontSize: theme.font.size['2xl'],
});

export const PackInfo = (theme: any): Interpolation => ({
  fontSize: theme.font.size.xs,
});

export const Total = (theme: any): Interpolation => ({
  fontSize: theme.font.size.xs,
  [`@media (min-width: ${theme.screens.md})`]: {
    fontSize: theme.font.size.sm,
  },
});

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
  color: theme.colors.defaultText,
  ['&:hover']: {
    borderColor: theme.border.color.hover,
  },
  ['> * + *']: {
    marginTop: theme.spacing.unityToRem(8),
  },
});

export const ProductCardImageContainer = (theme: any): Interpolation => ({
  display: 'flex',
  justifyContent: 'center',
  height: theme.spacing.unityToRem(90),
  textDecoration: 'none',
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
  background: theme.colors.contrastBackground,
  color: theme.colors.contrastText,
  fontSize: theme.font.size.sm,
  width: theme.spacing.unityToRem(28),
  height: theme.spacing.unityToRem(28),
  pointerEvents: 'none',
  marginTop: 0,
});

export const PackSelectorContainer = (theme: any): Interpolation => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ['> * + *']: {
    marginLeft: theme.spacing.unityToRem(8),
  },
});

export const FlexBetweenContainer = (theme: any): Interpolation => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  ['> * + *']: {
    marginLeft: theme.spacing.unityToRem(8),
  },
});

export const PackInfo = (theme: any): Interpolation => ({
  fontSize: theme.font.size.sm,
});

export const ProductInfoContainer = (theme: any): Interpolation => ({
  flex: 1,
});

export const ButtonIcon = (theme: any): Interpolation => ({
  fontSize: theme.font.size['2xl'],
});

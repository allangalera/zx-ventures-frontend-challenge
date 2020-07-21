export const ProductCard = (theme: any) => ({
  position: 'relative',
  padding: `${theme.spacing.unityToRem(8)} ${theme.spacing.unityToRem(16)}`,
  borderWidth: theme.spacing.pxToRem(1),
  borderStyle: 'solid',
  borderColor: theme.colors.gray[400],
  display: 'flex',
  flexDirection: 'column',
});

export const ProductCardImageContainer = (theme: any) => ({
  display: 'flex',
  justifyContent: 'center',
  height: theme.spacing.unityToRem(90),
});

export const ProductCardImage = (theme: any) => ({
  maxWidth: '100%',
  height: 'auto',
  objectFit: 'contain',
});

export const ProductCardDiscountBadge = (theme: any) => ({
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

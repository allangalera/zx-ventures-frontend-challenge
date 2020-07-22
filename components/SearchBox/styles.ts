export const SearchBox = (theme: any) => ({
  border: 'none',
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

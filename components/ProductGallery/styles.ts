export const ProductGallery = (theme: any) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(${theme.spacing.unityToRem(160)}, 1fr))`,
  justifyContent: 'center',
  gap: theme.spacing.unityToRem(8),
});

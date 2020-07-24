import { Interpolation } from '@emotion/core';

export const Spacer = (theme: any, size: number): Interpolation => ({
  height: theme.spacing.unityToRem(size),
  width: '100%',
  visibilitty: 'hidden',
  opacity: 0,
});

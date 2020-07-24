import { Interpolation } from '@emotion/core';

export const Container = (theme: any): Interpolation => ({
  paddingLeft: theme.spacing.unityToRem(8),
  paddingRight: theme.spacing.unityToRem(8),
});

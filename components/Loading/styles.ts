import { Interpolation } from '@emotion/core';

export const Loading = (theme: any): Interpolation => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  fontSize: theme.font.size['6xl'],
});

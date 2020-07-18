import { render } from '@testing-library/react';
import { ThemeProvider } from 'emotion-theming';

import theme from '../theme';

const Providers = ({ children }: any) => {
  return <ThemeProvider theme={theme.light}>{children}</ThemeProvider>;
};

const customRender = (ui: any, options = {}) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };

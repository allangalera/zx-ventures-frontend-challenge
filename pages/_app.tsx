import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'emotion-theming';
import theme from '../theme';

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme.light}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;

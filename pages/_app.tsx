import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'emotion-theming';
import theme from '@styles/theme';
import { Provider } from 'react-redux';
import store from '@redux/setup';

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme.light}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

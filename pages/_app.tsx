import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'emotion-theming';
import theme from '@styles/theme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configStore from '@store/setup';

const { store, persistor } = configStore();

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme.light}>
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

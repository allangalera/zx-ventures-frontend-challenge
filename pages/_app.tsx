import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configStore from '@store/setup';
import LightAndDarkThemeProvider from '@components/LightAndDarkThemeProvider';

const { store, persistor } = configStore();

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LightAndDarkThemeProvider>
          <Component {...pageProps} />
        </LightAndDarkThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

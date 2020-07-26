import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '@styles/theme';
import { useSelector } from 'react-redux';
import { RootState } from '@store/combineReducers';

type Props = {};

const LightAndDarkThemeProvider: React.FunctionComponent<Props> = ({ children }): JSX.Element => {
  const currentTheme = useSelector((state: RootState) => state.preferences.theme);

  return <ThemeProvider theme={theme[currentTheme]}>{children}</ThemeProvider>;
};

export default LightAndDarkThemeProvider;

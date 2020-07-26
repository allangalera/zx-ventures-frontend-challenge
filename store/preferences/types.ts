export type ThemeOptions = 'light' | 'dark';

export interface preferencesState {
  theme: ThemeOptions;
}

export const CHANGE_THEME = '@preferences/CHANGE_THEME';

interface ChangeTheme {
  type: typeof CHANGE_THEME;
  payload: ThemeOptions;
}

export type PreferencesActionTypes = ChangeTheme;

import { PreferencesActionTypes, CHANGE_THEME, ThemeOptions } from './types';

export function changeTheme(theme: ThemeOptions): PreferencesActionTypes {
  return {
    type: CHANGE_THEME,
    payload: theme,
  };
}

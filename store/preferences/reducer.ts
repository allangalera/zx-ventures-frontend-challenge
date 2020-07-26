import { preferencesState, PreferencesActionTypes, CHANGE_THEME } from './types';

const initialState: preferencesState = {
  theme: 'light',
};

const preferencesReducer = (state = initialState, action: PreferencesActionTypes): preferencesState => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default preferencesReducer;

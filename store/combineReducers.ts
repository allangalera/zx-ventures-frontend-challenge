import { combineReducers } from 'redux';
import cartReducer from '@store/cart/reducer';
import preferencesReducer from '@store/preferences/reducer';
import { CartActionTypes } from './cart/types';
import { PreferencesActionTypes } from './preferences/types';

const rootReducer = combineReducers({
  cart: cartReducer,
  preferences: preferencesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type RootAction = CartActionTypes | PreferencesActionTypes;

export default rootReducer;

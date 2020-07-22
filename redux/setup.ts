import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import cartReducer from '@redux/cart';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(),
  // applyMiddleware(...middleware),
  // other store enhancers if any
);

export default store;

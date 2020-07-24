import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '@store/combineReducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(),
  // applyMiddleware(...middleware),
  // other store enhancers if any
);

export default store;

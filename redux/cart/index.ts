import * as actionTypes from './types';
import * as actions from './actions';

const initialState = {
  items: {},
  count: 0,
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.cartAddItem:
      let newItems = { ...state.items };

      if (newItems[action.payload.uuid]) {
        newItems[action.payload.uuid].quantity++;
      } else {
        newItems[action.payload.uuid] = action.payload;
        newItems[action.payload.uuid].quantity = 1;
      }

      return {
        ...state,
        items: newItems,
        count: Object.keys(newItems).length,
      };
    default:
      return state;
  }
};

export { actionTypes, actions };

export default cartReducer;

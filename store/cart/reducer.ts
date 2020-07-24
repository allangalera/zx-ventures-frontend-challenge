import { CartState, CartActionTypes, ADD_PRODUCT, REMOVE_PRODUCT } from './types';

const initialState: CartState = {
  items: {},
  counter: 0,
};

const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {
    case ADD_PRODUCT:
      let productToAdd = state.items[action.payload.pack.uuid];

      if (productToAdd) {
        productToAdd.quantity++;
      } else {
        state.items[action.payload.pack.uuid] = {
          product: action.payload.product,
          pack: action.payload.pack,
          quantity: 1,
        };
      }
      return {
        items: { ...state.items },
        counter: Object.keys(state.items).length,
      };

    case REMOVE_PRODUCT:
      let productToRemove = state.items[action.payload.pack.uuid];

      if (productToRemove) {
        productToRemove.quantity--;
        if (productToRemove.quantity === 0) {
          delete state.items[action.payload.pack.uuid];
        }
      }

      return {
        items: { ...state.items },
        counter: Object.keys(state.items).length,
      };

    default:
      return state;
  }
};

export default cartReducer;

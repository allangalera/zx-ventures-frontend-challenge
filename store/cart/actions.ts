import { CartActionTypes, Product, Pack, ADD_PRODUCT, REMOVE_PRODUCT } from './types';

export function addProduct({ product, pack }: { product: Product; pack: Pack }): CartActionTypes {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
      pack,
    },
  };
}

export function removeProduct({ product, pack }: { product: Product; pack: Pack }): CartActionTypes {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      product,
      pack,
    },
  };
}

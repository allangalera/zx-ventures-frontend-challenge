import * as actionTypes from './types';

export const addItem = (item: any) => ({
  type: actionTypes.cartAddItem,
  payload: item,
});

export type Status = 'ACTIVE' | 'INACTIVE';
export type Stock = 'IN_STOCK' | 'INACTIVE';

export interface Category {
  id: string;
  name: string;
  slug: string;
  status: Status;
  uuid: string;
}

export interface Pack {
  id: string;
  uuid: string;
  current_price: number;
  original_price: number;
  status: Status;
  unities: number;
}

export interface Product {
  beverage_type: string;
  category: Category;
  description: string;
  hl: number;
  id: string;
  image: string;
  name: string;
  packs: Array<Pack>;
  search_tags: string;
  slug: string;
  status: Status;
  stock: Stock;
  tags: string;
  type: string;
  uuid: string;
  vendors: Array<any>;
}

export interface CartItem {
  pack: Pack;
  product: Product;
  quantity: number;
}

export interface CartState {
  items: Record<string, CartItem>;
  counter: number;
}

export const ADD_PRODUCT = '@cart/ADD_PRODUCT';
export const REMOVE_PRODUCT = '@cart/REMOVE_PRODUCT';

interface AddProduct {
  type: typeof ADD_PRODUCT;
  payload: {
    product: Product;
    pack: Pack;
  };
}

interface RemoveProduct {
  type: typeof REMOVE_PRODUCT;
  payload: {
    product: Product;
    pack: Pack;
  };
}

export type CartActionTypes = AddProduct | RemoveProduct;

import { CategoryItemT } from '../categories/category.types';

export enum CART_ACTION_TYPES {
  UPDATE_CARTITEMS = 'cart/UPDATE_CARTITEMS',
  CHANGE_CART_OPEN = 'cart/CHANGE_CART_OPEN',
}

export type CartItemT = CategoryItemT & {
  quantity: number;
  price: number;
};

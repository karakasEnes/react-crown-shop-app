import { AnyAction } from 'redux';
import { setIsCartOpen, updateCartItems } from './cart.actions';
import { CartItemT } from './cart.types';

export type CartStateT = {
  isCartOpen: boolean;
  cartItems: CartItemT[];
  cartCount: number;
  totalPrice: number;
};

const CART_INITIAL_VALUE: CartStateT = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

export const cartReducer = (
  state = CART_INITIAL_VALUE,
  action: AnyAction
): CartStateT => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: !state.isCartOpen,
    };
  }

  if (updateCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};

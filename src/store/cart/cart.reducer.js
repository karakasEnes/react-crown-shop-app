import { CART_ACTION_TYPES } from './cart.types';

const CART_INITIAL_VALUE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

export const cartReducer = (state = CART_INITIAL_VALUE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.UPDATE_CARTITEMS_TOTALPRICE_CARTCOUNT:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPES.CHANGE_CART_OPEN:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    default:
      return state;
  }
};

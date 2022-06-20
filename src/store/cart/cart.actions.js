import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

//utils
const addCartItemToCartItemsArray = (cartToAdd, oldCartItems) => {
  const product = oldCartItems.find((cart) => cart.id === cartToAdd.id);
  if (product) {
    //we need to create brandNewCartItems with updated quantity for that "PRODUCT" will be add
    return oldCartItems.map((cart) => {
      if (cart.id === cartToAdd.id) {
        return { ...cartToAdd, quantity: cart.quantity + 1 };
      } else {
        return cart;
      }
    });

    //return brandnew cartItems List
  }

  return [...oldCartItems, { ...cartToAdd, quantity: 1 }];
};

const removeCartItemToCartItemsArray = (cartToRemove, oldCartItems) => {
  //return brandnew cartItems List
  const existCart = oldCartItems.find((cart) => cart.id === cartToRemove.id);

  if (existCart.quantity === 1) {
    return oldCartItems.filter((cart) => cart.id !== cartToRemove.id);
  }

  return oldCartItems.map((cart) => {
    if (cart.id === cartToRemove.id) {
      return { ...cart, quantity: cart.quantity - 1 };
    } else {
      return cart;
    }
  });
};

const ridOfCartFromCartItemsArray = (cartToRid, oldCartItems) => {
  return oldCartItems.filter((cart) => cart.id !== cartToRid.id);
};

//util for handlers

//(actions)

export const setIsCartOpen = (boolean) => {
  return createAction(CART_ACTION_TYPES.CHANGE_CART_OPEN, boolean);
};
export const handleAddCartToList = (cartToAdd, cartItems) => {
  const newCartItems = addCartItemToCartItemsArray(cartToAdd, cartItems);
  return createAction(CART_ACTION_TYPES.UPDATE_CARTITEMS, newCartItems);
};

export const handleRemoveCartFromList = (cartToRemove, cartItems) => {
  const newCartItems = removeCartItemToCartItemsArray(cartToRemove, cartItems);

  return createAction(CART_ACTION_TYPES.UPDATE_CARTITEMS, newCartItems);
};

export const handleGetRidOfCartFromCartList = (cartToRidOf, cartItems) => {
  const newCartItems = ridOfCartFromCartItemsArray(cartToRidOf, cartItems);
  return createAction(CART_ACTION_TYPES.UPDATE_CARTITEMS, newCartItems);
};

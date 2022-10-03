import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';
import { CartItemT } from './cart.types';
import {
  withMatcher,
  Action,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';
import { CategoryItemT } from '../categories/category.types';

//utils
const addCartItemToCartItemsArray = (
  cartToAdd: CategoryItemT,
  oldCartItems: CartItemT[]
): CartItemT[] => {
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

const removeCartItemToCartItemsArray = (
  cartToRemove: CartItemT,
  oldCartItems: CartItemT[]
): CartItemT[] => {
  //return brandnew cartItems List
  const existCart = oldCartItems.find((cart) => cart.id === cartToRemove.id);

  if (existCart && existCart.quantity === 1) {
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

const ridOfCartFromCartItemsArray = (
  cartToRid: CartItemT,
  oldCartItems: CartItemT[]
): CartItemT[] => {
  return oldCartItems.filter((cart) => cart.id !== cartToRid.id);
};

//util for handlers

//(actions)

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpenT => {
  return createAction(CART_ACTION_TYPES.CHANGE_CART_OPEN, boolean);
});

export const helperCreateAction = withMatcher(
  (cartItems: CartItemT[]): UpdateCartItemsT =>
    createAction(CART_ACTION_TYPES.UPDATE_CARTITEMS, cartItems)
);

export const handleAddCartToList = (
  cartToAdd: CategoryItemT,
  cartItems: CartItemT[]
) => {
  const newCartItems = addCartItemToCartItemsArray(cartToAdd, cartItems);
  return helperCreateAction(newCartItems);
};

export const handleRemoveCartFromList = (
  cartToRemove: CartItemT,
  cartItems: CartItemT[]
) => {
  const newCartItems = removeCartItemToCartItemsArray(cartToRemove, cartItems);

  return helperCreateAction(newCartItems);
};

export const handleGetRidOfCartFromCartList = (
  cartToRidOf: CartItemT,
  cartItems: CartItemT[]
) => {
  const newCartItems = ridOfCartFromCartItemsArray(cartToRidOf, cartItems);
  return helperCreateAction(newCartItems);
};

//new Action with TS..

type SetIsCartOpenT = ActionWithPayload<
  CART_ACTION_TYPES.CHANGE_CART_OPEN,
  boolean
>;

type UpdateCartItemsT = ActionWithPayload<
  CART_ACTION_TYPES.UPDATE_CARTITEMS,
  CartItemT[]
>;

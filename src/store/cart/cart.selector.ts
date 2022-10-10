import { createSelector } from 'reselect';
import { CartStateT } from './cart.reducer';

const selectCartReducer = (state): CartStateT => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, cart) => {
    acc = acc + cart.quantity * cart.price;
    return acc;
  }, 0)
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, cart) => {
    acc = cart.quantity + acc;
    return acc;
  }, 0)
);

import { createContext, useEffect, useState, useReducer } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
});

const ACTION_TYPES = {
  CHANGE_CART_OPEN: 'CHANGE_CART_OPEN',
  ADD_PRODUCT_TO_CARTITEMS: 'ADD_PRODUCT_TO_CARTITEMS',
  INCREASE_PRODUCT_QUANTITY: 'INCREASE_PRODUCT_QUANTITY',
  DECREASE_PRODUCT_QUANTITY: 'DECREASE_PRODUCT_QUANTITY',
  UPDATE_TOTALPRICE: 'UPDATE_TOTALPRICE',
  UPDATE_CARTCOUNT: 'UPDATE_CARTCOUNT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
};

const addCartItemToCartItemsArray = (oldCartItems, cartToAdd) => {
  //return brandnew cartItems List
};

const removeCartItemToCartItemsArray = (oldCartItems, cartToRemove) => {
  //return brandnew cartItems List
};

const ridOfCartFromCartItemsArray = (oldCartItems, cartToRid) => {};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  const { cartItems, totalPrice, cartCount } = state;

  switch (type) {
    case ACTION_TYPES.CHANGE_CART_OPEN:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case ACTION_TYPES.ADD_PRODUCT_TO_CARTITEMS:
      const product = cartItems.find((element) => element.id === payload.id);
      if (product) {
        //we need to create brandNewCartItems with updated quantity for that "PRODUCT" will be add
        const newCartItems = cartItems.map((element) => {
          if (element.id === product.id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return element;
          }
        });

        return {
          ...state,
          cartItems: newCartItems,
        };
      } else {
        return {
          ...state,
          cartItems: [...cartItems, { ...payload, quantity: 1 }],
        };
      }

    case ACTION_TYPES.UPDATE_TOTALPRICE:
      const updateTotalPrice = () =>
        cartItems.reduce((acc, cart) => {
          acc = acc + cart.quantity * cart.price;
          return acc;
        }, 0);

      return {
        ...state,
        totalPrice: updateTotalPrice(),
      };
    case ACTION_TYPES.INCREASE_PRODUCT_QUANTITY:
      const updatedCartItems = cartItems.map((cart) => {
        if (cart.id === payload.id) {
          return { ...cart, quantity: cart.quantity + 1 };
        }
        return cart;
      });

      console.log(updatedCartItems);

      return {
        ...state,
        cartItems: updatedCartItems,
      };

    case ACTION_TYPES.DECREASE_PRODUCT_QUANTITY:
      const updatedCartItems2 = cartItems
        .map((cart) => {
          if (cart.id === payload.id) {
            if (cart.quantity === 1) return false;

            return { ...cart, quantity: cart.quantity - 1 };
          }
          return cart;
        })
        .filter((n) => n);

      return {
        ...state,
        cartItems: updatedCartItems2,
      };

    case ACTION_TYPES.UPDATE_CARTCOUNT:
      const calcCartCount = cartItems.reduce((acc, cart) => {
        acc = cart.quantity + acc;
        return acc;
      }, 0);
      return {
        ...state,
        cartCount: calcCartCount,
      };

    case ACTION_TYPES.REMOVE_PRODUCT:
      const newProducts = cartItems.filter((cart) => cart.id !== payload.id);

      return {
        ...state,
        cartItems: newProducts,
      };

    default:
      return state;
  }
};

const INITIAL_VALUE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

export const CartProvider = ({ children }) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);

  const [state, dispatch] = useReducer(cartReducer, INITIAL_VALUE);

  // useEffect(() => {
  //   const newCartCount = cartItems.reduce(
  //     (acc, prv) => (acc = acc + prv.quantity),
  //     0
  //   );

  //   setCartCount(newCartCount);
  // }, [cartItems]);

  // useEffect(() => {
  //   const newTotalPrice = cartItems.reduce(
  //     (acc, prv) => (acc = acc + prv.price * prv.quantity),
  //     0
  //   );

  //   setTotalPrice(newTotalPrice);
  // }, [cartItems]);

  // const processOfAddingCart = (oldCartItems, productToAdd) => {
  //   //isProduct exist in old List?
  //   const product = oldCartItems.find(
  //     (element) => element.id === productToAdd.id
  //   );

  //   if (product) {
  //     //we need to create brandNewCartItems with updated quantity for that "PRODUCT" will be add
  //     return oldCartItems.map((element) => {
  //       if (element.id === product.id) {
  //         return { ...product, quantity: product.quantity + 1 };
  //       } else {
  //         return element;
  //       }
  //     });
  //   }

  //   //product doesn't exist in old List
  //   return [...oldCartItems, { ...productToAdd, quantity: 1 }];
  // };

  // const addItemToCart = (productToAdd) => {
  //   setCartItems(processOfAddingCart(cartItems, productToAdd));
  // };

  // const productQuantityIncreaseOrDecrease = (product, isIncrease) => {
  //   if (isIncrease) {
  //     const updatedQuantities = cartItems.map((cartItem) => {
  //       if (product.id === cartItem.id) {
  //         return { ...product, quantity: product.quantity + 1 };
  //       } else {
  //         return cartItem;
  //       }
  //     });

  //     setCartItems(updatedQuantities);
  //   }

  //   if (!isIncrease) {
  //     const updatedQuantities = cartItems
  //       .map((cartItem) => {
  //         if (product.id === cartItem.id) {
  //           const newQuantity = product.quantity - 1;
  //           if (newQuantity <= 0) return false;
  //           return { ...product, quantity: newQuantity };
  //         } else {
  //           return cartItem;
  //         }
  //       })
  //       .filter((n) => n);

  //     setCartItems(updatedQuantities);
  //   }
  // };

  // const removeItemFromCartItems = (cartItemToRemove) => {
  //   const newCartItems = cartItems.filter(
  //     (elem) => elem.id !== cartItemToRemove.id
  //   );

  //   setCartItems(newCartItems);
  // };

  // Alternative for cartCount
  // const countCartItemsQuantities = () => {
  //   return cartItems.reduce((acc, prevV) => {
  //     acc = acc + prevV.quantity;
  //     return acc;
  //   }, 0);
  // };

  const { isCartOpen, cartItems, cartCount, totalPrice } = state;

  const setIsCartOpen = () => {
    dispatch({
      type: ACTION_TYPES.CHANGE_CART_OPEN,
    });
  };

  const handleAddCartToList = (cartToAdd) => {
    const newCartItems = addCartItemToCartItemsArray(cartItems, cartToAdd);
  };

  const handleRemoveCartFromList = (cartToRemove) => {
    const newCartItems = removeCartItemToCartItemsArray(
      cartItems,
      cartToRemove
    );
  };

  const handleGetRidOfCartFromCartList = (cartToRidOf) => {
    const newCartItems = ridOfCartFromCartItemsArray(cartItems, cartToRidOf);
  };

  const addItemToCart = (product) => {
    dispatch({
      type: ACTION_TYPES.ADD_PRODUCT_TO_CARTITEMS,
      payload: product,
    });

    dispatch({
      type: ACTION_TYPES.UPDATE_TOTALPRICE,
    });

    dispatch({
      type: ACTION_TYPES.UPDATE_CARTCOUNT,
    });
  };

  const increaseProductQuantity = (product) => {
    dispatch({
      type: ACTION_TYPES.INCREASE_PRODUCT_QUANTITY,
      payload: product,
    });
    dispatch({
      type: ACTION_TYPES.UPDATE_TOTALPRICE,
    });
    dispatch({
      type: ACTION_TYPES.UPDATE_CARTCOUNT,
    });
  };
  const decreaseProductQuantity = (product) => {
    dispatch({
      type: ACTION_TYPES.DECREASE_PRODUCT_QUANTITY,
      payload: product,
    });
    dispatch({
      type: ACTION_TYPES.UPDATE_TOTALPRICE,
    });
    dispatch({
      type: ACTION_TYPES.UPDATE_CARTCOUNT,
    });
  };
  const removeItemFromCartItems = (product) => {
    dispatch({
      type: ACTION_TYPES.REMOVE_PRODUCT,
      payload: product,
    });
    dispatch({
      type: ACTION_TYPES.UPDATE_TOTALPRICE,
    });
    dispatch({
      type: ACTION_TYPES.UPDATE_CARTCOUNT,
    });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    totalPrice,
    increaseProductQuantity,
    decreaseProductQuantity,
    removeItemFromCartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

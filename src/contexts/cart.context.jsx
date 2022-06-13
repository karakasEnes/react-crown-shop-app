import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (acc, prv) => (acc = acc + prv.quantity),
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (acc, prv) => (acc = acc + prv.price * prv.quantity),
      0
    );

    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const processOfAddingCart = (oldCartItems, productToAdd) => {
    //isProduct exist in old List?
    const product = oldCartItems.find(
      (element) => element.id === productToAdd.id
    );

    if (product) {
      //we need to create brandNewCartItems with updated quantity for that "PRODUCT" will be add
      return oldCartItems.map((element) => {
        if (element.id === product.id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return element;
        }
      });
    }

    //product doesn't exist in old List
    return [...oldCartItems, { ...productToAdd, quantity: 1 }];
  };

  const addItemToCart = (productToAdd) => {
    setCartItems(processOfAddingCart(cartItems, productToAdd));
  };

  const productQuantityIncreaseOrDecrease = (product, isIncrease) => {
    if (isIncrease) {
      const updatedQuantities = cartItems.map((cartItem) => {
        if (product.id === cartItem.id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return cartItem;
        }
      });

      setCartItems(updatedQuantities);
    }

    if (!isIncrease) {
      const updatedQuantities = cartItems
        .map((cartItem) => {
          if (product.id === cartItem.id) {
            const newQuantity = product.quantity - 1;
            if (newQuantity <= 0) return false;
            return { ...product, quantity: newQuantity };
          } else {
            return cartItem;
          }
        })
        .filter((n) => n);

      setCartItems(updatedQuantities);
    }
  };

  const removeItemFromCartItems = (cartItemToRemove) => {
    const newCartItems = cartItems.filter(
      (elem) => elem.id !== cartItemToRemove.id
    );

    setCartItems(newCartItems);
  };

  // Alternative for cartCount
  // const countCartItemsQuantities = () => {
  //   return cartItems.reduce((acc, prevV) => {
  //     acc = acc + prevV.quantity;
  //     return acc;
  //   }, 0);
  // };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    totalPrice,
    productQuantityIncreaseOrDecrease,
    removeItemFromCartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

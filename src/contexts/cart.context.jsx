import { createContext, useState } from 'react';

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(processOfAddingCart(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
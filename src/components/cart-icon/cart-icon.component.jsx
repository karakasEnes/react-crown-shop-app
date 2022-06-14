import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.jsx';
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from './cart-icon.styles.jsx';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const handleCartOpenAndClose = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={handleCartOpenAndClose}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

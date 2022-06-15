import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles.jsx';

const CartDropDown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);

  const checkoutNavHandler = () => {
    navigate('/checkout');
    setIsCartOpen(false);
  };
  const navigate = useNavigate();
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={checkoutNavHandler}>checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropDown;

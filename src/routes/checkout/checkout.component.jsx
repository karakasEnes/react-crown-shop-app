import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { CartContext } from '../../contexts/cart.context';
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutHeaderBlock,
  TotalPrice,
} from './checkout.styles';

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  if (cartItems.length === 0) return;

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {['Product', 'Description', 'Quantity', 'Price', 'Remove'].map(
          (elem, idx) => (
            <CheckoutHeaderBlock key={idx + elem}>
              <span>{elem}</span>
            </CheckoutHeaderBlock>
          )
        )}
      </CheckoutHeader>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <TotalPrice>Total Price: ${totalPrice}</TotalPrice>
    </CheckoutContainer>
  );
};

export default Checkout;

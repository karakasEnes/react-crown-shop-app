import CheckoutItem from '../../components/checkout-item/checkout-item';

import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutHeaderBlock,
  TotalPrice,
} from './checkout.styles';

import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectTotalPrice,
} from '../../store/cart/cart.selector';

const Checkout = () => {
  const totalPrice = useSelector(selectTotalPrice);
  const cartItems = useSelector(selectCartItems);
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

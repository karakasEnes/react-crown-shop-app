import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  if (cartItems.length === 0) return;

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        {['Product', 'Description', 'Quantity', 'Price', 'Remove'].map(
          (elem, idx) => (
            <div key={idx + elem} className='header-block'>
              <span>{elem}</span>
            </div>
          )
        )}
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <span className='total'>Total Price: ${totalPrice}</span>
    </div>
  );
};

export default Checkout;

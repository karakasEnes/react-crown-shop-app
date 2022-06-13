import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';
const CheckoutItem = ({ cartItem }) => {
  const { productQuantityIncreaseOrDecrease, removeItemFromCartItems } =
    useContext(CartContext);
  const { name, quantity, price, imageUrl } = cartItem;

  const handleIncreaseAndDecrease = (isIncrease) => {
    productQuantityIncreaseOrDecrease(cartItem, isIncrease);
  };

  const handleRemoveCartItem = () => {
    removeItemFromCartItems(cartItem);
  };

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div onClick={() => handleIncreaseAndDecrease()} className='arrow'>
          &#10094;
        </div>

        <span className='value'>{quantity}</span>

        <div onClick={() => handleIncreaseAndDecrease(true)} className='arrow'>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div onClick={handleRemoveCartItem} className='remove-button'>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

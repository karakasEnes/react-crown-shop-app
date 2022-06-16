import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  CheckoutItemContainer,
  BaseSpan,
  QuantitySpan,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const {
    increaseProductQuantity,
    decreaseProductQuantity,
    removeItemFromCartItems,
  } = useContext(CartContext);
  const { name, quantity, price, imageUrl } = cartItem;

  const handleIncreaseQuantity = () => {
    increaseProductQuantity(cartItem);
  };
  const handleDecreaseQuantity = () => {
    decreaseProductQuantity(cartItem);
  };

  const handleRemoveCartItem = () => {
    removeItemFromCartItems(cartItem);
  };

  return (
    <CheckoutItemContainer>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <BaseSpan>{name}</BaseSpan>
      <QuantitySpan>
        <div onClick={handleDecreaseQuantity} className='arrow'>
          &#10094;
        </div>

        <span className='value'>{quantity}</span>

        <div onClick={handleIncreaseQuantity} className='arrow'>
          &#10095;
        </div>
      </QuantitySpan>
      <BaseSpan>{price}</BaseSpan>
      <div onClick={handleRemoveCartItem} className='remove-button'>
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

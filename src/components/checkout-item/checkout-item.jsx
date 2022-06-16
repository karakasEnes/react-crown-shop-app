import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  CheckoutItemContainer,
  BaseSpan,
  QuantitySpan,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const {
    handleGetRidOfCartFromCartList,
    handleAddCartToList,
    handleRemoveCartFromList,
  } = useContext(CartContext);
  const { name, quantity, price, imageUrl } = cartItem;

  const handleIncreaseQuantity = () => {
    handleAddCartToList(cartItem);
  };
  const handleDecreaseQuantity = () => {
    handleRemoveCartFromList(cartItem);
  };

  const handleRidCart = () => {
    handleGetRidOfCartFromCartList(cartItem);
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
      <div onClick={handleRidCart} className='remove-button'>
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

import {
  handleAddCartToList,
  handleGetRidOfCartFromCartList,
  handleRemoveCartFromList,
} from '../../store/cart/cart.actions';

import {
  CheckoutItemContainer,
  BaseSpan,
  QuantitySpan,
} from './checkout-item.styles';

import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, quantity, price, imageUrl } = cartItem;

  const cartItems = useSelector(selectCartItems);

  const handleIncreaseQuantity = () =>
    dispatch(handleAddCartToList(cartItem, cartItems));
  const handleDecreaseQuantity = () =>
    dispatch(handleRemoveCartFromList(cartItem, cartItems));
  const handleRidCart = () =>
    dispatch(handleGetRidOfCartFromCartList(cartItem, cartItems));
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

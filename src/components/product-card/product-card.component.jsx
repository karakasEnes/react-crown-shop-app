import { BUTTON_STYLE_CLASSES } from '../button/button.component';

import {
  Footer,
  Image,
  AddToCartButton,
  ProductCardContainer,
} from './product-card.styles';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddCartToList } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({ product }) => {
  const { imageUrl, price, name } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddingToCart = () => {
    dispatch(handleAddCartToList(product, cartItems));
  };
  return (
    <ProductCardContainer>
      <Image alt={name} src={imageUrl} />
      <Footer>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </Footer>
      <AddToCartButton
        btnType={BUTTON_STYLE_CLASSES.inverted}
        onClick={handleAddingToCart}
      >
        Add to Cart
      </AddToCartButton>
    </ProductCardContainer>
  );
};

export default ProductCard;

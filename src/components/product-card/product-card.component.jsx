import Button, { BUTTON_STYLE_CLASSES } from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  Footer,
  Image,
  AddToCartButton,
  ProductCardContainer,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const { imageUrl, price, name } = product;

  const { addItemToCart } = useContext(CartContext);

  const handleAddingToCart = () => {
    addItemToCart(product);
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

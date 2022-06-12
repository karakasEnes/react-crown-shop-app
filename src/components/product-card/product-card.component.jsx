import './product-card.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
const ProductCard = ({ product }) => {
  const { imageUrl, price, name } = product;

  const { addItemToCart } = useContext(CartContext);

  const handleAddingToCart = () => {
    addItemToCart(product);
  };
  return (
    <div className='product-card-container'>
      <img alt={name} src={imageUrl} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button btnType={'inverted'} onClick={handleAddingToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;

import './product-card.styles.scss';
import Button from '../button/button.component';
const ProductCard = ({ product }) => {
  const { imageUrl, price, name } = product;

  return (
    <div className='product-card-container'>
      <img alt={name} src={imageUrl} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button btnType={'inverted'}>Add to Card</Button>
    </div>
  );
};

export default ProductCard;

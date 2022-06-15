import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import { ProductsContainer } from './category-preview.styles.jsx';

const CategoryPreview = ({ products: comingProducts, title }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const newProducts = comingProducts
      .filter((_, index) => index < 4)
      .map((product) => product);
    setProducts(newProducts);
  }, [comingProducts]);

  return (
    <div>
      <h2>
        <Link className='title' to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>

      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </div>
  );
};

export default CategoryPreview;

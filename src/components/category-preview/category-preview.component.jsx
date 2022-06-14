import { useEffect, useState } from 'react';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';
const CategoryPreview = ({ products: comingProducts, title }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const newProducts = comingProducts
      .filter((_, index) => index < 4)
      .map((product) => product);
    setProducts(newProducts);
  }, [comingProducts]);

  return (
    <div className='category-preview-container'>
      <h2>{title}</h2>
      <div className='products-container'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;

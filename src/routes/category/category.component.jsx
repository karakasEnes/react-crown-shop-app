import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';
import './category.styles.scss';
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const categoryData = categoriesMap[category];
    setCategoryProducts(categoryData);
  }, [categoriesMap, category]);

  return (
    <div className='category-container-big'>
      {categoryProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Category;

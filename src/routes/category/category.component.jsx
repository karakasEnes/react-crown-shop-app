import { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';
import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [categoryProducts, setCategoryProducts] = useState(
    categoriesMap[category]
  );

  useEffect(() => {
    const categoryData = categoriesMap[category];
    setCategoryProducts(categoryData);
  }, [categoriesMap, category]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {categoryProducts &&
          categoryProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;

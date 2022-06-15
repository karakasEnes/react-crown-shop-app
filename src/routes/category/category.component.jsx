import { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';
import { CategoryContainer, Title } from './category.styles';

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
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {categoryProducts &&
          categoryProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;

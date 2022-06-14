import { Fragment, useContext } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component.jsx';
import { CategoriesContext } from '../../contexts/categories.context';
import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const CATEGORIES_KEYS = ['jackets', 'hats', 'mens', 'sneakers', 'womens'];

  const bestMap = Object.keys(categoriesMap).reduce((acc, key) => {
    if (CATEGORIES_KEYS.includes(key)) {
      acc[key] = categoriesMap[key];
    }
    return acc;
  }, {});

  return (
    <Fragment>
      {Object.keys(bestMap).map((title, idx) => {
        return (
          <CategoryPreview
            key={idx + title + title}
            title={title}
            products={categoriesMap[title]}
          />
        );
      })}
    </Fragment>
  );
};

export default Shop;

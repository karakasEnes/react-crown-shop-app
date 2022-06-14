import { Fragment, useContext } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component.jsx';
import { CategoriesContext } from '../../contexts/categories.context';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const CATEGORIES_KEYS = ['jackets', 'hats', 'mens', 'sneakers', 'womens'];

  const filteredMap = Object.keys(categoriesMap).reduce((acc, key) => {
    if (CATEGORIES_KEYS.includes(key)) {
      acc[key] = categoriesMap[key];
    }
    return acc;
  }, {});

  return (
    <Fragment>
      {Object.keys(filteredMap).map((title, idx) => {
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

export default CategoriesPreview;

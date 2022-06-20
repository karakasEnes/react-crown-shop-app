import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component.jsx';
import Spinner from '../../components/spinner/spinner.component.jsx';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selector.js';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title, idx) => {
          return (
            <CategoryPreview
              key={idx + title + title}
              title={title}
              products={categoriesMap[title]}
            />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;

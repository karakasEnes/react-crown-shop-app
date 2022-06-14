import { Fragment, useContext } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component.jsx';
import { CategoriesContext } from '../../contexts/categories.context';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title, idx) => {
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

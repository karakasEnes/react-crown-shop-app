import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from '../../store/categories/category.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // getting our categories collection from firestore
    const getCategoriesMapData = async () => {
      const categoryMapDataByFireStore = await getCategoriesAndDocuments();

      const CATEGORIES_KEYS = ['jackets', 'mens', 'sneakers', 'womens', 'hats'];
      const fixedCategoryData = Object.keys(categoryMapDataByFireStore).reduce(
        (acc, key) => {
          if (CATEGORIES_KEYS.includes(key)) {
            acc[key] = categoryMapDataByFireStore[key];
          }
          return acc;
        },
        {}
      );

      dispatch(setCategoriesMap(fixedCategoryData));
    };

    getCategoriesMapData();
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;

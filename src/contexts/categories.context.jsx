import { createContext, useEffect, useState } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap, setCategoriesMap };

  useEffect(() => {
    // getting our categories collection
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

      setCategoriesMap(fixedCategoryData);
    };

    getCategoriesMapData();
  }, []);

  console.log('categoriesMap......', categoriesMap);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

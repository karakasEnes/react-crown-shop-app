import { createContext, useEffect, useState } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  useEffect(() => {
    //getting our categories collection
    const getCategoriesMapData = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };

    getCategoriesMapData();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

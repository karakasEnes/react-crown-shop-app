import { Fragment, useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';
import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const CATEGORIES_KEYS = ['jackets', 'hats', 'mens', 'sneakers', 'womens'];

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title, idx) => {
        if (CATEGORIES_KEYS.includes(title)) {
          return (
            <Fragment key={idx}>
              <h2>{title}</h2>

              <div className='products-container'>
                {categoriesMap[title].map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </Fragment>
          );
        }
        return false; // optional in my opinion
      })}
    </Fragment>
  );
};

export default Shop;

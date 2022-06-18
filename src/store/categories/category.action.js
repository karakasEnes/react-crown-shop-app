import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './category.types';

export const setCategoriesMap = (newCategoriesMap) => {
  return createAction(
    CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
    newCategoriesMap
  );
};

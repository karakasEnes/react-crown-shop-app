import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './category.types';

export const setCategories = (newCategoriesArray) => {
  return createAction(
    CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
    newCategoriesArray
  );
};

const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

const fetchCategoriesSuccess = (cateroiesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    cateroiesArray
  );

const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (err) {
    dispatch(fetchCategoriesFailed(err));
  }
};

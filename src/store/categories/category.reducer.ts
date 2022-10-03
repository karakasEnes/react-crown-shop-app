import { CategoryT } from './category.types';
import {
  fetchCategoriesStart,
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from './category.action';
import { AnyAction } from 'redux';

export type CategoriesStateT = {
  readonly categories: CategoryT[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_CATEGORIES_VALUES = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoryReducer = (
  state = INITIAL_CATEGORIES_VALUES,
  action = {} as AnyAction
): CategoriesStateT => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false };
  }

  if (fetchCategoriesFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};

import { CATEGORIES_ACTION_TYPES, CategoryT } from './category.types';
import { CategoryAction } from './category.action';

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
  action = {} as CategoryAction
) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };

    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

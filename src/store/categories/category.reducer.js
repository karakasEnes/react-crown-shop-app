import { CATEGORIES_ACTION_TYPES } from './category.types';

const INITIAL_CATEGORIES_VALUES = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoryReducer = (
  state = INITIAL_CATEGORIES_VALUES,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };

    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};

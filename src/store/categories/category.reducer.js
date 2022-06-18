import { CATEGORIES_ACTION_TYPES } from './category.types';

const INITIAL_CATEGORIES_VALUES = {
  categoriesMap: {},
};

export const categoryReducer = (
  state = INITIAL_CATEGORIES_VALUES,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};

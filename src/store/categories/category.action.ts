import {
  createAction,
  Action,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES, CategoryT } from './category.types';

export type FetchCategoriesStartT =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccessT = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  CategoryT[]
>;

export type FetchCategoriesFailedT = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

export type CategoryAction =
  | FetchCategoriesStartT
  | FetchCategoriesSuccessT
  | FetchCategoriesFailedT;

export const fetchCategoriesStart = (): FetchCategoriesStartT =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (
  cateroiesArray: CategoryT[]
): FetchCategoriesSuccessT =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    cateroiesArray
  );

export const fetchCategoriesFailed = (error: Error): FetchCategoriesFailedT =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

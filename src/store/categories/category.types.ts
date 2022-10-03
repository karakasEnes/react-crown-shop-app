export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = 'category/FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS = 'category/FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED = 'category/FETCH_CATEGORIES_FAILED',
}

export type CategoryItemT = {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
};

export type CategoryT = {
  title: string;
  imageUrl: string;
  items: CategoryItemT[];
};

export type CategoryMapT = {
  [key: string]: CategoryItemT[];
};
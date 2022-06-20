import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './root.reducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootSage } from './root-saga';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,

  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    sagaMiddleware) ||
    false,
].filter(Boolean);

// const middleWares = [
//   process.env.NODE_ENV !== 'production' && logger,
//   sagaMiddleware,
// ].filter(Boolean);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,
});

sagaMiddleware.run(rootSage);

export const persistor = persistStore(store);

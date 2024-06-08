import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import { modalSliceReducer } from './modalSlice';
// import { booksSliceReducers } from './booksSlice/booksSlice';
// import { filtersSliceReducers } from './filtersSlice';
import { authSliceReducer } from './authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['refreshToken', 'name', 'token'],
};

const persistedReducer = persistReducer(authPersistConfig, authSliceReducer);

const store = configureStore({
  reducer: {
    // modal: modalSliceReducer,
    // books: booksSliceReducers,
    // filters: filtersSliceReducers,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

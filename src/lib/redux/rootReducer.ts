import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './services';
import { shoppingSlice } from './slices';

export const reducer = combineReducers({
  shopping: shoppingSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

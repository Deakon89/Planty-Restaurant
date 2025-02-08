import { configureStore } from '@reduxjs/toolkit';
import recipeSlice from './axiosSlice';

export const store = configureStore({
  reducer: {
    recipes: recipeSlice
  },
});

export default store
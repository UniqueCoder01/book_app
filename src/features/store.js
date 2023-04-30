import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import credentialsReducer from './slices/credentialsSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    credentials: credentialsReducer,
  },
});

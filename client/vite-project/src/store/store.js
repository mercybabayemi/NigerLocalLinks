import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from './slices/ApiSlice';  // your shared base apiSlice
import authReducer from './slices/AuthSlice.jsx';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // only one RTK Query reducer
    auth: authReducer,                        // other slices as usual
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // add middleware once
});

setupListeners(store.dispatch);

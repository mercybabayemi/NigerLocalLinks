import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { HomePageApiSlice } from './slices/HomePageApiSlice.jsx'
import { AuthApiSlice } from './slices/AuthApiSlice.jsx'

export const store = configureStore({
  reducer: {
    [HomePageApiSlice.reducerPath]: HomePageApiSlice.reducer,
    [AuthApiSlice.reducerPath]: AuthApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(HomePageApiSlice.middleware, AuthApiSlice.middleware),
})

setupListeners(store.dispatch)
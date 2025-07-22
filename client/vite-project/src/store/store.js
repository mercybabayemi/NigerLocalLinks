import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { HomePageApiSlice } from './slices/HomePageApiSlice.jsx'

export const store = configureStore({
  reducer: {
    [HomePageApiSlice.reducerPath]: HomePageApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(HomePageApiSlice.middleware),
})

setupListeners(store.dispatch)
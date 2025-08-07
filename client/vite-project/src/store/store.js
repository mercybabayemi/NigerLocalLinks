import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { HomePageApiSlice } from './slices/HomePageApiSlice.jsx';
import { AuthApiSlice } from './slices/AuthApiSlice.jsx';
import { AutoPaymentGenerationApiSlice } from './slices/AutoPaymentGenerationApiSlice.jsx';
import { CreateRecordApiSlice } from './slices/CreateRecordApiSlice.jsx';
import { DisputeApiSlice } from './slices/DisputeApiSlice.jsx';
import { LocalsApiSlice } from './slices/LocalsApiSlice.jsx';
import { PaymentApiSlice } from './slices/PaymentApiSlice.jsx';
// import { PaymentConfigApiSlice } from './slices/PaymentConfigApiSlice.jsx';

export const store = configureStore({
  reducer: {
    [HomePageApiSlice.reducerPath]: HomePageApiSlice.reducer,
    [AuthApiSlice.reducerPath]: AuthApiSlice.reducer,
    [AutoPaymentGenerationApiSlice.reducerPath]: AutoPaymentGenerationApiSlice.reducer,
    [CreateRecordApiSlice.reducerPath]: CreateRecordApiSlice.reducer,
    [DisputeApiSlice.reducerPath]: DisputeApiSlice.reducer,
    [LocalsApiSlice.reducerPath]: LocalsApiSlice.reducer,
    [PaymentApiSlice.reducerPath]: PaymentApiSlice.reducer,
    // [PaymentConfigApiSlice.reducerPath]: PaymentConfigApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      HomePageApiSlice.middleware,
      AuthApiSlice.middleware,
      AutoPaymentGenerationApiSlice.middleware,
      CreateRecordApiSlice.middleware,
      DisputeApiSlice.middleware,
      LocalsApiSlice.middleware,
      PaymentApiSlice.middleware,
      // PaymentConfigApiSlice.middleware
    ),
});

setupListeners(store.dispatch);
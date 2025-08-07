// AutoPaymentGenerationApiSlice.jsx
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AutoPaymentGenerationApiSlice = createApi({
  reducerPath: 'autoPaymentGenerationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),
  endpoints: (builder) => ({
    generatePayments: builder.mutation({
      query: () => ({
        url: '/generate-payments',
        method: 'POST',
      }),
    }),
  }),
});

export const { useGeneratePaymentsMutation } = AutoPaymentGenerationApiSlice;
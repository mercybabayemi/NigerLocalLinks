// AutoPaymentGenerationApiSlice.jsx
import { apiSlice } from './ApiSlice'; // import the base apiSlice

export const AutoPaymentGenerationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    generatePayments: builder.mutation({
      query: () => ({
        url: '/generate-payments',
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: false, // optional, defaults to false
});

export const { useGeneratePaymentsMutation } = AutoPaymentGenerationApiSlice;
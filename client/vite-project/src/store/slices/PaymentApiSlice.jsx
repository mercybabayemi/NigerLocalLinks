import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PaymentApiSlice = createApi({
  reducerPath: 'paymentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),
  endpoints: (builder) => ({
    uploadProofOfPayment: builder.mutation({
      query: (paymentData) => ({
        url: '/payments/upload-proof',
        method: 'POST',
        body: paymentData,
      }),
    }),
    getPaymentOutstanding: builder.query({
      query: () => ({
        url: '/payments/outstanding',
        method: 'GET',
      }),
    }),
    updatePaymentStatus: builder.mutation({
      query: (paymentStatusData) => ({
        url: '/payments/update-status',
        method: 'PATCH',
        body: paymentStatusData,
      }),
    }),
  }),
});

export const {
  useUploadProofOfPaymentMutation,
  useGetPaymentOutstandingQuery,
  useUpdatePaymentStatusMutation,
} = PaymentApiSlice;
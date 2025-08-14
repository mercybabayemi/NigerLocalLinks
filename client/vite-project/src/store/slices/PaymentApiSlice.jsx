import { apiSlice } from './ApiSlice';

export const PaymentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadProofOfPayment: builder.mutation({
      query: (paymentData) => ({
        url: '/payments/upload-proof',
        method: 'POST',
        body: paymentData,
      }),
    }),
    getPaymentOutstanding: builder.query({
      query: () => '/payments/outstanding', // simple query shorthand
    }),
    updatePaymentStatus: builder.mutation({
      query: (paymentStatusData) => ({
        url: '/payments/update-status',
        method: 'PATCH',
        body: paymentStatusData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useUploadProofOfPaymentMutation,
  useGetPaymentOutstandingQuery,
  useUpdatePaymentStatusMutation,
} = PaymentApiSlice;

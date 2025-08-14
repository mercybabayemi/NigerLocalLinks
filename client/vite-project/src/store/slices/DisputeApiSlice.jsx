import { apiSlice } from './ApiSlice';

export const DisputeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDispute: builder.query({
      query: (disputeId) => `/disputes/${disputeId}`, // simplified syntax
    }),
    settleDispute: builder.mutation({
      query: ({ disputeId, settlementData }) => ({
        url: `/settleDisputes/${disputeId}/settle`,
        method: 'PATCH',
        body: settlementData,
      }),
    }),
    createDispute: builder.mutation({
      query: (disputeData) => ({
        url: '/dispute',
        method: 'POST',
        body: disputeData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetDisputeQuery,
  useSettleDisputeMutation,
  useCreateDisputeMutation,
} = DisputeApiSlice;

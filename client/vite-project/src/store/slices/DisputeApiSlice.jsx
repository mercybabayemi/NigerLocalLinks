// DisputeApiSlice.jsx
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const DisputeApiSlice = createApi({
  reducerPath: 'disputeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),
  endpoints: (builder) => ({
    getDispute: builder.query({
      query: (disputeId) => ({
        url: `/disputes/${disputeId}`,
        method: 'GET',
      }),
    }),
    settleDispute: builder.mutation({
      query: ({ disputeId, settlementData }) => ({
        url: `/disputes/${disputeId}/settle`,
        method: 'PATCH',
        body: settlementData,
      }),
    }),
    createDispute: builder.mutation({
      query: (disputeData) => ({
        url: '/disputes',
        method: 'POST',
        body: disputeData,
      }),
    }),
  }),
});

export const {
  useGetDisputesQuery,
  useSettleDisputeMutation,
  useCreateDisputeMutation,
} = DisputeApiSlice;
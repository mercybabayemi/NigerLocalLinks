// LocalsApiSlice.js
import { apiSlice } from './ApiSlice';

export const LocalsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLocals: builder.query({
      query: (searchTerm) => ({
        url: '/locals',
        method: 'GET',
        params: { searchTerm }, // NOTE: RTK Query uses 'params' here correctly
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetLocalsQuery } = LocalsApiSlice;

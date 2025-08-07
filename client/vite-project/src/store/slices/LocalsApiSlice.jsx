// LocalsApiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const LocalsApiSlice = createApi({
  reducerPath: 'localsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),
  endpoints: (builder) => ({
    getLocals: builder.query({
      query: (searchTerm) => ({
        url: '/locals',
        method: 'GET',
        params: { searchTerm },
      }),
    }),
  }),
});

export const { useGetLocalsQuery } = LocalsApiSlice;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const HomePageApiSlice = createApi({
  reducerPath: 'homePageApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),  // backend URL
  endpoints: (builder) => ({
    getHomePageData: builder.query({
      query: () => '/homepage',  // relative path on backend
    }),
  }),
})
export const { useGetHomePageDataQuery } = HomePageApiSlice;
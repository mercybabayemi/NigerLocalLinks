import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const HomePageApiSlice = createApi({
  reducerPath: 'homePageApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://NigerLocalLink.com' }),
  endpoints: (builder) => ({
    getHomePageData: builder.query({
      query: () => '/home',
    }),
  }),
})

export const { useGetHomePageDataQuery } = HomePageApiSlice;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api', // one reducer for the whole app
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://locallink-lw8y.onrender.com/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: () => ({}), // start empty
});

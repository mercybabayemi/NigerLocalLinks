import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const AuthApiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/api' }),
  endpoints: (builder) => ({
    login: builder.mutation({
        query: (credentials) => ({
            url: '/login',
            method: 'POST',
            body: credentials,
        }),
    }),
    register: builder.mutation({
        query: (userData) => ({
            url: '/register',
            method: 'POST',
            body: userData,
        }),
    }),
     registerLocal: builder.mutation({
      query: (userData) => ({
        url: '/register-local', // adjust the URL as needed
        method: 'POST',
        body: userData,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const {useLoginMutation, useRegisterMutation, useRegisterLocalMutation, useLogoutMutation, setCredentials} = AuthApiSlice;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CreateRecordApiSlice = createApi({
  reducerPath: 'createRecordApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),
  endpoints: (builder) => ({
    createRecord: builder.mutation({
      query: (recordData) => ({
        url: '/createrecord',
        method: 'POST',
        body: recordData,
      }),
    }),
  }),
});

export const { useCreateRecordMutation } = CreateRecordApiSlice;
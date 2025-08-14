import { apiSlice } from './ApiSlice'; // import your base apiSlice

export const CreateRecordApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createRecord: builder.mutation({
      query: (recordData) => ({
        url: '/createRecord',
        method: 'POST',
        body: recordData,
      }),
    }),
  }),
  overrideExisting: false, // optional
});

export const { useCreateRecordMutation } = CreateRecordApiSlice;

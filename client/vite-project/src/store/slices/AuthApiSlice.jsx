import { apiSlice } from './ApiSlice';
import { setCredentials } from './AuthSlice'; // ✅ points to the file above

export const AuthApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data)); // ✅ Save token & user
        } catch (err) {
          console.error(err);
        }
      },
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
    registerLocal: builder.mutation({
      query: (userData) => ({
        url: '/auth/registerLocal',
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

export const {
  useLoginMutation,
  useRegisterMutation,
  useRegisterLocalMutation,
  useLogoutMutation,
} = AuthApiSlice;

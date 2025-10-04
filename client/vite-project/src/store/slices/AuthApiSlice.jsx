import { apiSlice } from './ApiSlice';
import { setCredentials } from './AuthSlice';
import decodeToken from '../../utils/JwtHelper';

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
          console.log('AuthApiSlice received:', data);
          
          // Decode the token properly
          const token = data.token;
          const user = decodeToken(token);
          
          console.log('Decoded user from JWT:', user); // Debug log
          console.log('Decoded user details:', JSON.stringify(user, null, 2)); // More detailed log
          
          if (user && token) { // Check both user and token exist
            console.log('AuthApiSlice dispatching:', { token, user });
            console.log('About to dispatch setCredentials...');
            // Make sure the parameter name matches what AuthSlice expects
            dispatch(setCredentials({ token, user }));
            console.log('setCredentials dispatched successfully');
          } else {
            console.error('Failed to decode token or token missing in AuthApiSlice');
            console.log('Token value:', token);
            console.log('Decoded user value:', user);
          }
        } catch (err) {
          console.error('AuthApiSlice login error:', err);
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
      // Add error handling for registerLocal
      async onQueryStarted(arg, { dispatch, queryFulfilled, getState }) {
        try {
          const result = await queryFulfilled;
          console.log('RegisterLocal successful:', result);
        } catch (err) {
          console.error('RegisterLocal error:', err);
          
          // If we get a 401, the token might be expired/invalid
          if (err.error?.status === 401) {
            console.log('Authentication failed - token might be expired');
            // dispatch(logout()); // Comment this out if logout is not available
          }
        }
      },
    }),
    
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout', // Fixed URL - was missing /auth
        method: 'POST',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          console.log('Logout API call successful');
        } catch (err) {
          console.error('Logout API error:', err);
        } finally {
          // Always clear local state, even if API call fails
          // dispatch(logout()); // Comment this out if logout is not available
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useRegisterLocalMutation,
  useLogoutMutation, // Make sure this is included
} = AuthApiSlice;
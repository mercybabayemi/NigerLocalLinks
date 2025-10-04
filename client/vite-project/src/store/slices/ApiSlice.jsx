// ApiSlice.jsx
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut } from './AuthSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://locallink-lw8y.onrender.com/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const state = getState();
    console.log('🔐 Full Redux state:', state);
    console.log('🔐 Auth slice state:', state.auth);
    
    const token = state.auth?.token;
    console.log('🔐 Token from Redux state:', token);
    
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
      console.log('✅ Authorization header set with token');
    } else {
      console.log('❌ No token found in Redux state');
      
      // Check localStorage directly as fallback
      const backupToken = localStorage.getItem('authToken');
      console.log('🔐 Token from localStorage:', backupToken);
      
      if (backupToken) {
        headers.set('authorization', `Bearer ${backupToken}`);
        console.log('🔄 Using backup token from localStorage');
      }
    }
    
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  
  if (result?.error?.status === 401) {
    console.log('Authentication failed, logging out...');
    api.dispatch(logOut());
  }
  
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User', 'Record', 'Local'],
  endpoints: (builder) => ({}),
});
// AuthSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      
      // Optional: Also store in localStorage as backup
      if (token) {
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(user));
        console.log('💾 Token saved to localStorage as backup');
      }
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      
      // Clear localStorage on logout
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      console.log('🧹 localStorage cleared on logout');
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

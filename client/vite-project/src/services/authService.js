import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/auth';

const register = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data.token; // Return only the token
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data.token; // Return only the token
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

const refreshToken = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/refresh-token`);
    return response.data.token;
  } catch (error) {
    throw new Error('Session expired. Please login again.');
  }
};

const authService = {
  register,
  login,
  refreshToken,
};

export default authService;
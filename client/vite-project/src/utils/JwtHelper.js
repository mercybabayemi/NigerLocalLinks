import { jwtDecode } from 'jwt-decode';

const decodeToken = (token) => {
  if (!token) return null;
  
  try {
    const decoded = jwtDecode(token);
    
    // Validate essential claims
    if (!decoded.sub || !decoded.role) {
      console.warn('Token missing required claims');
      return null;
    }

    // Convert expiration to milliseconds
    if (decoded.exp) {
      decoded.expiresAt = new Date(decoded.exp * 1000);
    }

    return {
      id: decoded.sub,
      firstName: decoded.firstName || '',
      role: decoded.role,
      email: decoded.email || '',
      expiresAt: decoded.expiresAt
    };
  } catch (error) {
    console.error('Token decoding failed:', error);
    return null;
  }
};

export const isTokenValid = (token) => {
  const decoded = decodeToken(token);
  return decoded && decoded.expiresAt > new Date();
};

export default decodeToken;

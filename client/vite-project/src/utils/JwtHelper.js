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

    return {
      id: decoded.sub,
      firstName: decoded.firstName || '',
      role: decoded.role,
      email: decoded.email || '',
      // Store as ISO string instead of Date object for Redux compatibility
      expiresAt: decoded.exp ? new Date(decoded.exp * 1000).toISOString() : null
    };
  } catch (error) {
    console.error('Token decoding failed:', error);
    return null;
  }
};

export const isTokenValid = (token) => {
  const decoded = decodeToken(token);
  if (!decoded || !decoded.expiresAt) return false;
  
  // Convert ISO string back to Date for comparison
  return new Date(decoded.expiresAt) > new Date();
};

export default decodeToken;
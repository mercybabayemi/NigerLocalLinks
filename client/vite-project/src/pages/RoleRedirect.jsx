import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';   

const RoleRedirect = () => {
  const userInfo = useSelector((state) => state.auth.user); // ← Correct
  console.log('RoleRedirect - userInfo:', userInfo);
  
  if (!userInfo) {
    console.log('No userInfo, redirecting to login');
    return <Navigate to="/login" />;
  }
  
  console.log('Redirecting based on role:', userInfo.role);
  
  if (!userInfo) return <Navigate to="/login" />;
  
  switch (userInfo.role) {
    case 'ADMIN':
      return <Navigate to="/admin" />;
    case 'OFFICER':
      return <Navigate to="/officer" />;
    case 'LOCAL':
      return <Navigate to="/local" />;
    default:
      return <Navigate to="/" />;
  }
};

export default RoleRedirect;
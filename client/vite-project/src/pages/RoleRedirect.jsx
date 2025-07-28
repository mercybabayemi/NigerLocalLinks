import { useSelector } from 'react-redux';      
import { Navigate } from 'react-router-dom';   

const RoleRedirect = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) return <Navigate to="/login" />;

  switch (user.role) {
    case 'ADMIN':
      return <Navigate to="/admin-dashboard" />;
    case 'OFFICER':
      return <Navigate to="/officer-dashboard" />;
    case 'LOCAL':
      return <Navigate to="/local-dashboard" />;
    default:
      return <Navigate to="/" />;
  }
};

export default RoleRedirect;

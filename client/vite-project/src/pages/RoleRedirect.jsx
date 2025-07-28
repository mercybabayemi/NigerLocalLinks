import { useSelector } from 'react-redux';      
import { Navigate } from 'react-router-dom';   

const RoleRedirect = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) return <Navigate to="/login" />;

  switch (user.role) {
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

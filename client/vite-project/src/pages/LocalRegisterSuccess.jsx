import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const LocalRegisterSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);
  const [hasData, setHasData] = useState(false);

  // FIX: Use 'user' instead of 'userInfo'
  const user = useSelector((state) => state.auth.user);
  const userRole = user?.role;

  // Get registration data passed during navigation
  const registerData = location.state;

  useEffect(() => {
    console.log('🔍 Registration data received:', registerData);
    console.log('🔍 User info from Redux:', user);
    
    const checkAuthAndData = () => {
      if (!user) {
        navigate('/login');
        return;
      }
      
      if (registerData) {
        setHasData(true);
      }
      
      setIsChecking(false);
    };
  
    const timer = setTimeout(checkAuthAndData, 500);
    return () => clearTimeout(timer);
  }, [user, registerData, navigate]);

  // Show loading while checking authentication and data
  if (isChecking) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F2F0EF]">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
          <p>Verifying registration...</p>
        </div>
      </div>
    );
  }

  // If no registration data, show error and redirect after delay
  if (!hasData) {
    setTimeout(() => {
      if (userRole === 'ADMIN') navigate('/admin');
      else if (userRole === 'OFFICER') navigate('/officer');
      else navigate('/');
    }, 3000);
    
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F2F0EF]">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Registration Status Unknown</h1>
          <p className="text-gray-700 mb-4">Redirecting you back to dashboard...</p>
        </div>
      </div>
    );
  }

  // Handle OK button click with role-based redirect
  const handleOkayClick = () => {
    if (userRole === 'OFFICER') navigate('/officer');
    else if (userRole === 'ADMIN') navigate('/admin');
    else if (userRole === 'LOCAL') navigate('/local');
    else navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F2F0EF]">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Registration Successful!</h1>
        <p className="text-gray-700 mb-4">Local user has been registered successfully.</p>
        <div className="text-left bg-gray-100 p-4 rounded-md mb-6">
          <p><strong>Local ID:</strong> {registerData.localId || 'N/A'}</p>
          <p><strong>First Name:</strong> {registerData.firstname || 'N/A'}</p>
        </div>
        <button
          onClick={handleOkayClick}
          className="px-6 py-2 bg-black text-white rounded-md hover:bg-[#EBD1AE] hover:text-black transition"
        >
          OKAY
        </button>
      </div>
    </div>
  );
};

export default LocalRegisterSuccess;
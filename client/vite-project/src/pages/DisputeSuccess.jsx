import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const DisputeSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);
  const [hasData, setHasData] = useState(false);

  // Get logged-in user info from Redux (using 'user' not 'userInfo')
  const user = useSelector((state) => state.auth.user);
  const userRole = user?.role;

  // Get dispute data passed during navigation
  const disputeData = location.state;

  useEffect(() => {
    console.log('🔍 Dispute data received:', disputeData);
    console.log('🔍 User info from Redux:', user);
    
    const checkAuthAndData = () => {
      // Redirect to login if user is not authenticated
      if (!user) {
        navigate('/login');
        return;
      }
      
      // Check if we have dispute data
      if (disputeData) {
        setHasData(true);
      }
      
      // Stop checking after a brief delay
      setIsChecking(false);
    };

    const timer = setTimeout(checkAuthAndData, 500);
    return () => clearTimeout(timer);
  }, [user, disputeData, navigate]);

  // Show loading while checking authentication and data
  if (isChecking) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F2F0EF]">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
          <p>Verifying dispute creation...</p>
        </div>
      </div>
    );
  }

  // If no dispute data, show error and redirect after delay
  if (!hasData) {
    setTimeout(() => {
      if (userRole === 'ADMIN') navigate('/admin');
      else if (userRole === 'OFFICER') navigate('/officer');
      else if (userRole === 'LOCAL') navigate('/local');
      else navigate('/');
    }, 3000);
    
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F2F0EF]">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Dispute Status Unknown</h1>
          <p className="text-gray-700 mb-4">Redirecting you back to dashboard...</p>
        </div>
      </div>
    );
  }

  // Handle OK button click with role-based redirect
  const handleOkClick = () => {
    if (userRole === 'OFFICER') navigate('/officer');
    else if (userRole === 'ADMIN') navigate('/admin');
    else if (userRole === 'LOCAL') navigate('/local');
    else navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F2F0EF]">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Dispute Created!</h1>
        <p className="text-gray-700 mb-4">
          Your dispute has been created successfully.
        </p>
        <div className="text-left bg-gray-100 p-4 rounded-md mb-6">
          <p><strong>Dispute ID:</strong> {disputeData.disputeId || 'N/A'}</p>
        </div>
        <button
          onClick={handleOkClick}
          className="px-6 py-2 bg-black text-white rounded-md hover:bg-[#EBD1AE] hover:text-black transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default DisputeSuccess;
import { useLocation, useNavigate, useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';

const RecordSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loaderData = useLoaderData();

  // Use loader data or location state (fallback)
  const recordData = location.state || loaderData?.state;

  // Temporary: Replace this with how you store roles (context, redux, etc.)
  const userRole = localStorage.getItem('userRole'); // Example: 'OFFICER', 'ADMIN', 'LOCAL'

  useEffect(() => {
    if (!recordData) {
      navigate('/'); // redirect to home if no data passed
    }
  }, [recordData, navigate]);

  if (!recordData) return null; // prevent render flash

  // Handle button click navigation
  const handleOkClick = () => {
    if (userRole === 'OFFICER') navigate('/officer');
    else if (userRole === 'ADMIN') navigate('/admin');
    else if (userRole === 'LOCAL') navigate('/local');
    else navigate('/'); // fallback if no role found
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F2F0EF]">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Success!</h1>
        <p className="text-gray-700 mb-4">Your record has been created successfully.</p>
        <div className="text-left bg-gray-100 p-4 rounded-md mb-6">
          <p><strong>ID:</strong> {recordData.recordId}</p>
          <p><strong>Title:</strong> {recordData.title}</p>
          <p><strong>Fee:</strong> {recordData.fee}</p>
        </div>
        <button
          onClick={handleOkClick}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default RecordSuccess;

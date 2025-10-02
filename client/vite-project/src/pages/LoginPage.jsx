import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLoginMutation } from '../store/slices/AuthApiSlice';
import { setCredentials } from '../store/slices/AuthSlice'; // Add this import
import { Loader2 } from 'lucide-react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch(); // Add this
  const [login, { isLoading }] = useLoginMutation();
  
  // Get userInfo and token from Redux store for debugging
  const { user: userInfo, token } = useSelector((state) => state.auth);

  // Debug: Log the current state
  useEffect(() => {
    console.log('LoginPage - Current Redux state:', {
      userInfo,
      token: token ? 'Token exists' : 'No token',
      userRole: userInfo?.role
    });
  }, [userInfo, token]);

  // Handle routing when userInfo changes (after successful login)
  useEffect(() => {
    if (userInfo) {
      console.log('User logged in, routing based on role:', userInfo.role);
      setSuccess('Login successful! Redirecting...');
      
      // Navigate to RoleRedirect component which will handle role-based routing
      setTimeout(() => {
        navigate('/redirect');
      }, 1000);
    }
  }, [userInfo, navigate]);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
  
    try {
      const result = await login(formData).unwrap();
      console.log('Login result:', result);
      console.log('Login mutation completed successfully');
      // The onQueryStarted in AuthApiSlice will handle the dispatch automatically
    } catch (err) {
      console.error('Login error:', err);
      setError(err?.data?.message || 'Invalid email or password.');
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleForgetPassword = () => {
    alert('Forget password functionality is not implemented yet.');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F2F0EF] sm:pt-24 lg:pt-1">
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center">LOGIN</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-[#EBD1AE] focus:outline-none"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-[#EBD1AE] focus:outline-none"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center w-full px-4 py-2 text-white bg-black rounded-md hover:bg-[#EBD1AE] hover:text-black disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>
          </div>

          {/* Forget Password */}
          <div className="text-center">
            <p
              className="text-sm text-gray-600 cursor-pointer underline"
              onClick={handleForgetPassword}
            >
              Forget Password?
            </p>
          </div>
        </form>

        {/* Success Message */}
        {success && (
          <p className="mt-4 text-green-600 font-medium text-center">{success}</p>
        )}

        {/* Error Message */}
        {error && (
          <p className="mt-4 text-red-500 font-medium text-center">{error}</p>
        )}
        
        {/* Debug info - remove in production */}
        {userInfo && (
          <div className="mt-4 p-2 bg-gray-100 text-xs">
            <p>Debug: Logged in as {userInfo.role}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../store/slices/AuthApiSlice';
import { Loader2 } from 'lucide-react'; // optional spinner, run: npm install lucide-react

const RegisterPage = () => {
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    employmentId: '',
    phone: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // --- handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // --- handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
  
    try {
      const response = await register(formData).unwrap();
  
      // ✅ capture the token from backend response
      const token = response?.token;
      if (token) {
        localStorage.setItem('token', token); // or dispatch to authSlice
      }
  
      setSuccess('Registration successful! Redirecting...');
      setTimeout(() => navigate('/redirect'), 1500);
    } catch (err) {
      console.error('Registration error:', err);
      setError(err?.data?.message || 'Registration failed. Try again.');
    }
  };
  
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F2F0EF] sm:pt-24 lg:pt-4">
      <main className="flex-grow flex items-center justify-center p-4 sm:p-24">
        <div className="w-full max-w-[544px] bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">REGISTER</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: 'First Name', name: 'firstname', placeholder: 'Enter first name here' },
              { label: 'Surname', name: 'lastname', placeholder: 'Enter surname here' },
              { label: 'Email', name: 'email', placeholder: 'Enter email here', type: 'email' },
              { label: 'Password', name: 'password', placeholder: 'Enter password here', type: 'password' },
              { label: 'Employment ID', name: 'employmentId', placeholder: 'Enter employment ID here' },
              { label: 'Phone', name: 'phone', placeholder: 'Enter phone number here', type: 'tel' },
            ].map(({ label, name, placeholder, type = 'text' }) => (
              <div key={name} className="flex flex-col">
                <label htmlFor={name} className="text-sm font-medium mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  id={name}
                  placeholder={placeholder}
                  className="w-full h-[52px] p-3 border rounded shadow-inner focus:outline-none focus:ring-2 focus:ring-[#EBD1AE]"
                  onChange={handleChange}
                  required={name !== 'phone'}
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center w-full px-4 py-2 text-white bg-black rounded-md hover:bg-[#EBD1AE] hover:text-black disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Registering...
                </>
              ) : (
                'Register'
              )}
            </button>
          </form>

          {/* Success Message */}
          {success && (
            <p className="mt-4 text-green-600 font-medium text-center">{success}</p>
          )}

          {/* Error Message */}
          {error && (
            <p className="mt-4 text-red-500 font-medium text-center">{error}</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;




import { useState, useEffect } from 'react';
import { User, Mail, Lock, Phone, MapPin, UserPlus, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

const RegisterLocal = () => {
  const [formData, setFormData] = useState({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    phonenumber: '',
    address: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Mock authentication check
  const [authCheck, setAuthCheck] = useState({ hasToken: true, user: { name: 'Admin' } });

  // Password strength calculator
  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    return strength;
  };

  useEffect(() => {
    setPasswordStrength(calculatePasswordStrength(formData.password));
  }, [formData.password]);

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 25) return 'bg-red-500';
    if (passwordStrength <= 50) return 'bg-orange-500';
    if (passwordStrength <= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 25) return 'Weak';
    if (passwordStrength <= 50) return 'Fair';
    if (passwordStrength <= 75) return 'Good';
    return 'Strong';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (passwordStrength < 50) {
      setError('Please choose a stronger password');
      return;
    }

    if (!authCheck.hasToken) {
      setError('Please login again. Authentication token missing.');
      return;
    }

    setIsLoading(true);
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSuccess(true);
      setTimeout(() => {
        console.log('Navigating to success page...');
      }, 1500);
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const formFields = [
    { 
      label: 'First Name', 
      name: 'firstname', 
      placeholder: 'Enter first name', 
      type: 'text', 
      icon: User,
      required: true 
    },
    { 
      label: 'Last Name', 
      name: 'lastname', 
      placeholder: 'Enter last name', 
      type: 'text', 
      icon: User,
      required: true 
    },
    { 
      label: 'Email Address', 
      name: 'email', 
      placeholder: 'Enter email address', 
      type: 'email', 
      icon: Mail,
      required: true 
    },
    { 
      label: 'Password', 
      name: 'password', 
      placeholder: 'Create a secure password', 
      type: 'password', 
      icon: Lock,
      required: true 
    },
    { 
      label: 'Phone Number', 
      name: 'phonenumber', 
      placeholder: 'Enter phone number', 
      type: 'tel', 
      icon: Phone,
      required: true 
    },
    { 
      label: 'Address', 
      name: 'address', 
      placeholder: 'Enter full address', 
      type: 'text', 
      icon: MapPin,
      required: true 
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2F0EF] sm:pt-16 lg:pt-4">
      <main className="relative flex items-center justify-center p-4 sm:p-8 lg:p-12">
        <div className="w-full max-w-[700px] bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#333333] to-[#4A4A4A] px-8 py-8 text-center">
            <div className="w-16 h-16 bg-[#EBD1AE] rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Register Local User</h1>
            <p className="text-gray-200 text-sm">Create a new local user account in the system</p>
          </div>

          {/* Form Section */}
          <div className="p-8">
            {/* Auth Status */}
            {authCheck.hasToken && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <p className="text-green-800 font-medium">Authenticated as {authCheck.user.name}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-[#333333] flex items-center">
                  <div className="w-2 h-6 bg-[#EBD1AE] rounded-full mr-3"></div>
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formFields.slice(0, 4).map(({ label, name, placeholder, type, icon: Icon, required }) => (
                    <div key={name} className="group relative">
                      <input
                        type={type}
                        id={name}
                        value={formData[name]}
                        placeholder=" "
                        className="peer w-full h-14 px-10 pt-6 pb-2 border-2 border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-0 focus:border-[#EBD1AE] transition-all duration-300 hover:border-gray-300"
                        onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                        required={required}
                      />
                      <label
                        htmlFor={name}
                        className="absolute left-10 top-4 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#EBD1AE] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600"
                      >
                        {label} {required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#EBD1AE] peer-focus:text-[#EBD1AE] transition-colors duration-300" />
                      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#EBD1AE] to-transparent opacity-0 peer-focus:opacity-100 transition-opacity duration-300"></div>

                      {/* Password Strength Indicator */}
                      {name === 'password' && formData.password && (
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-500">Password Strength:</span>
                            <span className={`font-medium ${
                              passwordStrength <= 25 ? 'text-red-600' :
                              passwordStrength <= 50 ? 'text-orange-600' :
                              passwordStrength <= 75 ? 'text-yellow-600' :
                              'text-green-600'
                            }`}>
                              {getPasswordStrengthText()}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                              style={{ width: `${passwordStrength}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-[#333333] flex items-center">
                  <div className="w-2 h-6 bg-[#EBD1AE] rounded-full mr-3"></div>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formFields.slice(4).map(({ label, name, placeholder, type, icon: Icon, required }) => (
                    <div key={name} className="group relative">
                      <input
                        type={type}
                        id={name}
                        value={formData[name]}
                        placeholder=" "
                        className="peer w-full h-14 px-10 pt-6 pb-2 border-2 border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-0 focus:border-[#EBD1AE] transition-all duration-300 hover:border-gray-300"
                        onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                        required={required}
                      />
                      <label
                        htmlFor={name}
                        className="absolute left-10 top-4 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#EBD1AE] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600"
                      >
                        {label} {required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#EBD1AE] peer-focus:text-[#EBD1AE] transition-colors duration-300" />
                      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#EBD1AE] to-transparent opacity-0 peer-focus:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="group relative w-full py-4 px-6 text-white bg-[#333333] rounded-xl font-semibold text-lg shadow-md hover:shadow-lg disabled:opacity-50 transition-all duration-300 transform hover:bg-[#EBD1AE] disabled:hover:bg-[#333333] overflow-hidden"
                  disabled={isLoading}
                >
                  <span className="relative flex items-center justify-center">
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                        Registering User...
                      </>
                    ) : (
                      <>
                        Register Local User
                        <svg className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>

            {/* Status Messages */}
            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-center animate-fadeIn">
                <div className="flex items-center justify-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span>{error}</span>
                </div>
              </div>
            )}
            {success && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-center animate-fadeIn">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Local user registered successfully!</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterLocal;
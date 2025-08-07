import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../store/slices/AuthApiSlice';
import { setCredentials } from '../store/slices/AuthApiSlice'
import decodeToken from '../utils/JwtHelper';
//import { useDispatch, useSelector } from 'react-redux';


const RegisterPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  // const { isLoading, error } = useSelector((state) => state.auth);
  const [register, { isLoading, error }] = useRegisterMutation();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    employmentId: '',
    phone: '',
  });
  
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await register(formData).unwrap()
      const token = await response.token
      const user = decodeToken(token)

      if (!user) {
        setErrorMsg('Invalid token received')
        return
      }

      dispatch(setCredentials({ token, user }))
      navigate('/redirect') // Let RoleRedirect handle where to send the user
    } catch (err) {
      console.error(err)
      setErrorMsg(err?.data?.message || 'Register failed')
    }
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F2F0EF] sm:pt-24 lg:pt-4">
      
      <main className="flex-grow flex items-center justify-center p-4 sm:p-24">
        <div className="w-full max-w-[544px] bg-white shadow-lg rounded-xl p-6">
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
                  className="w-full h-[52px] p-3 border rounded shadow-inner focus:outline-none focus:ring-2 focus:ring-[#333333]"
                  onChange={handleChange}
                  required={name !== 'phone'}
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-[#EBD1AE]"
              disabled={isLoading}
            >
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </form>
          {errorMsg && <p className="text-red-500 mt-4 text-center">{errorMsg}</p>}
        </div>
      </main>

    </div>
  );
};
export default RegisterPage;

  
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  // })
  // const navigate = useNavigate()

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   // Handle registration logic here
  //   console.log('Registration submitted', formData)
  //   navigate('/') // Redirect after registration
  // }

  // return (
  //   <div className="flex items-center justify-center min-h-screen bg-[#F2F0EF]">
  //     <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md md:max-w-lg lg:max-w-2xl">
  //       <h1 className="text-2xl font-bold text-center">REGISTER</h1>
  //       <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 lg:space-y-8">
  //         <div>
  //           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
  //             Email
  //           </label>
  //           <input
  //             type="email"
  //             id="email"
  //             className="w-full p-2 mt-1 border rounded-md"
  //             value={formData.email}
  //             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
  //             required
  //           />
  //         </div>
  //         <div>
  //           <label htmlFor="password" className="block text-sm font-medium text-gray-700">
  //             Password
  //           </label>
  //           <input
  //             type="password"
  //             id="password"
  //             className="w-full p-2 mt-1 border rounded-md"
  //             value={formData.password}
  //             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
  //             required
  //           />
  //         </div>
  //         <button
  //           type="submit"
  //           className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-blue-700"
  //         >
  //           Register
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  // )


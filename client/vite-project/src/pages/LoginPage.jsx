import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authService from '../services/authService'
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()
  const [error, setError] = useState('')
  const dispatch = useDispatch()


  const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle login logic here    
    try {
      const token = await authService.login(formData)
      const user = decodeToken(token)
  
      if (!user) {
        setError('Invalid token received')
        return
      }
  
      dispatch(setCredentials({ token, user }))
  
      // Centralize redirection
      navigate('/redirect')
    } catch (err) {
      console.error(err)
      setError(err.message)
    }
  }

  const handleForgetPassword = () => {
    // Handle forget password logic here
    console.log('Forget password clicked')
    alert('Forget password functionality is not implemented yet.')
  }

  return (
   <div className="flex items-center justify-center min-h-screen bg-[#F2F0EF] sm:pt-24 lg:pt-1">
      <div className="w-full max-w-md p-4 space-y-6 bg-white rounded-lg shadow-md md:max-w-lg lg:max-w-2xl">
        <h1 className="text-2xl font-bold text-center">LOGIN</h1>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 lg:space-y-8">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder='Enter your email here'
              className="w-full p-2 mt-1 border rounded-md"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder='Enter your password here'
              className="w-full p-2 mt-1 border rounded-md"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-[#EBD1AE]"
            >
              Login
            </button>
          </div>
          <div>
            <p className="text-sm text-gray-600 cursor-pointer underline" onClick={handleForgetPassword}>
              Forget Password?
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;
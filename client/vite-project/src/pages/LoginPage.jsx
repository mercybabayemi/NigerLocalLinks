import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login submitted', formData)
    navigate('/') // Redirect after login
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-128px)]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">LOGIN</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
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
              className="w-full p-2 mt-1 border rounded-md"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
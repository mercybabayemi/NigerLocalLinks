import { Link, useNavigate } from "react-router-dom";
import NIGERLINKLOGO from '../../assets/NIGERLINKLOGO.png';
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLogoutMutation } from "../../store/slices/AuthApiSlice";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth || {});
  const [logout, { isLoading }] = useLogoutMutation();
  
  const isLoggedIn = !!user || !!token; // Check if user or token exists to determine login state

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="w-full bg-[#F2F0EF] shadow-md h-[114px] flex items-center">
      <div className="max-w-[1200px] w-full mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img 
            src={NIGERLINKLOGO} 
            alt="Company Logo" 
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="font-medium hover:text-gray-700">HOME</a>
          <a href="/#about" className="font-medium hover:text-gray-700">ABOUT US</a>
          <a href="/#services" className="font-medium hover:text-gray-700">SERVICES</a>
        </nav>

        {/* Authentication Buttons */}
        <div className="hidden md:flex space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              disabled={isLoading}
              className="px-4 py-2 text-white bg-black rounded-full hover:bg-[#EBD1AE] disabled:opacity-50"
            >
              {isLoading ? 'Logging out...' : 'Logout'}
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="px-8 py-2 text-white bg-[#EBD1AE] rounded-full hover:bg-black"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-white bg-black rounded-full hover:bg-[#EBD1AE]"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[114px] left-0 w-full bg-[#F2F0EF] shadow-md p-4 space-y-4">
          <nav className="flex flex-col items-center space-y-4">
            <a href="/" className="font-medium hover:text-gray-700">HOME</a>
            <a href="/#about" className="font-medium hover:text-gray-700">ABOUT US</a>
            <a href="/#services" className="font-medium hover:text-gray-700">SERVICES</a>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                disabled={isLoading}
                className="px-4 py-2 text-white bg-black rounded-full hover:bg-[#EBD1AE] disabled:opacity-50"
              >
                {isLoading ? 'Logging out...' : 'Logout'}
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-8 py-2 text-white bg-[#EBD1AE] rounded-full hover:bg-black"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-white bg-black rounded-full hover:bg-[#EBD1AE]"
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
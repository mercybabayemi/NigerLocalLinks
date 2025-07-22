import { Link } from "react-router-dom";
import NIGERLINKLOGO from '../../assets/NIGERLINKLOGO.png';

const Header = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-offwhite shadow-md">
      <div className="flex items-center">
        <img src={NIGERLINKLOGO} alt="NigerLink Logo" className="h-12" />
      </div>

      <div className="flex space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">
          About Us
        </Link>
        <Link to="/services" className="text-gray-700 hover:text-blue-600">
          Services
        </Link>
      </div>

      <div className="flex space-x-4">
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
      </div>
    </nav>
  )
}

export default Header;
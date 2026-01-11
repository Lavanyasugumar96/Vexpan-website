import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Vexpan Logo"
          className="h-10 w-auto"
        />
      
      </div>

      {/* Menu */}
      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/about" className="hover:text-black">
          About
        </Link>
        <Link to="/services" className="hover:text-black">
          Services
        </Link>
        <Link to="/contact" className="hover:text-black">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import logo from "../assets/VEXPAN_.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <img src={logo} alt="logo" className="h-10" />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <p>Home</p>
          <p>Services</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-700 font-medium">
          <p>Home</p>
          <p>Services</p>
          <p>About</p>
          <p>Contact</p> 
        </div>
      )}
    </nav>
  );
};

export default Navbar;
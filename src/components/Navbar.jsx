import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/VEXPAN_.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (id) => {
    setMenuOpen(false); // close menu after click

    if (id === "contact") {
      const footer = document.querySelector("footer");
      if (footer) footer.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white relative">
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Vexpan Logo" className="h-10 w-auto object-contain" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-gray-700 font-medium">
        <button onClick={() => handleScrollTo("home")} className="hover:text-black">
          Home
        </button>

        <button onClick={() => handleScrollTo("about")} className="hover:text-black">
           About
         </button>

        <button onClick={() => navigate("/services")} className="hover:text-black">
          Services
        </button>

        <button onClick={() => handleScrollTo("contact")} className="hover:text-black">
          Contact
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
          <button onClick={() => handleScrollTo("home")}>
            Home
          </button>
           <button onClick={() => handleScrollTo("about")} className="hover:text-black">
            About
          </button>

          <button onClick={() => navigate("/services")}>
            Services
          </button>

          <button onClick={() => handleScrollTo("contact")}>
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
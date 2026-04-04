import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (id) => {
    if (id === "contact") {
      // Scroll to footer
      const footer = document.querySelector("footer");
      if (footer) footer.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (location.pathname !== "/") {
      // Navigate to AboutUs page first
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Already on AboutUs page
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Vexpan Logo" className="h-20 w-30px" />
      </div>

      <div className="flex gap-6 text-gray-700 font-medium">
        <button
          onClick={() => handleScrollTo("about")}
          className="hover:text-black cursor-pointer"
        >
          Home
        </button>

        <button
          onClick={() => navigate("/services")}
          className="hover:text-black cursor-pointer"
        >
          Services
        </button>

        <button
          onClick={() => handleScrollTo("contact")}
          className="hover:text-black cursor-pointer"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

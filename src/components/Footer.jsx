import logo from "../assets/VEXPAN_.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 border-t">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* COLUMN 1: Logo + Social Icons */}
          <div>
            <img src={logo} alt="Vexpan Logo" className="h-12 w-auto" />

            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/vexpan_solutions?utm_source=qr&igsh=d3VqN20xMGplY2t5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl hover:text-red-500 transition" />
              </a>

              <a
                href="https://www.linkedin.com/company/110912576/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl hover:text-red-500 transition" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">

              <li>
                <a href="/#about" className="hover:text-red-500">
                  About Us
                </a>
              </li>

              <li>Team</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Privacy Policy</li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">

              <li>
                <button onClick={() => navigate("/services")} className="hover:text-red-500">
                  Site Surveys & CAD Drawings
                </button>
              </li>

              <li>
                <button onClick={() => navigate("/services")} className="hover:text-red-500">
                  Brand Identity
                </button>
              </li>

              <li>
                <button onClick={() => navigate("/services")} className="hover:text-red-500">
                  Retail Strategy
                </button>
              </li>

              <li>
                <button onClick={() => navigate("/services")} className="hover:text-red-500">
                  Space Concept Design
                </button>
              </li>

              <li>
                <button onClick={() => navigate("/services")} className="hover:text-red-500">
                  Turnkey Fitouts
                </button>
              </li>

              <li>
                <button onClick={() => navigate("/services")} className="hover:text-red-500">
                  Store Launches
                </button>
              </li>

              <li>
                <button onClick={() => navigate("/services")} className="hover:text-red-500">
                  Visual Merchandising
                </button>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">

              <li>
                
                  📍 Om Chambers, 648/A, 4th Floor,
                  Binnamangala 1st Stage,
                  Indiranagar, Bengaluru - 560038
              </li>

              <li>
                📧{" "}
                <a href="mailto:info@vexpan.in" className="hover:text-red-500">
                  info@vexpan.in
                </a>
              </li>

              <li>
                📞{" "}
                <a href="tel:8088928521" className="hover:text-red-500">
                  8088928521
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-10 py-5 flex flex-col md:flex-row justify-between text-sm">
          <p>© 2025 VEXPAN. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="mailto:info@vexpan.in" className="hover:text-red-500">
              📧 info@vexpan.in
            </a>
            <a href="tel:8088928521" className="hover:text-red-500">
              📞 8088928521
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
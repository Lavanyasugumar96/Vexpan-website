import { 
  FaFacebook, 
  FaYoutube, 
  FaInstagram, 
  FaPinterest, 
  FaLinkedin 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 border-t">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------- TOP SECTION ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* COLUMN 1: Logo + Social Icons */}
          <div>
            <h2 className="text-2xl font-bold text-red-600">YourBrand</h2>

            <div className="flex gap-4 mt-4">
              <a href="https://instagram.com" target="_blank"><FaInstagram className="text-xl hover:text-red-500" /></a>
              <a href="https://linkedin.com" target="_blank"><FaLinkedin className="text-xl hover:text-red-500" /></a>
              <a href="https://facebook.com" target="_blank"><FaFacebook className="text-xl hover:text-red-500" /></a>
            </div>
          </div>

          {/* COLUMN 2: Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* ⭐ COLUMN 3: Contact Us (Address → Email → Phone) */}
  <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Site Surveys & CAD Drawings</li>
              <li>Brand Identity</li>
              <li>Retail Strategy</li>
              <li>Space Concept Design</li>
              <li>Turnkey Fitouts</li>
              <li>Store Launches</li>
              <li>Visual Merchandising</li>
            </ul>
          </div>

          {/* COLUMN 4: Services */}
         

              <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>📍 Coimbatore, Tamil Nadu, India</li>
              <li>
                📧 
                <a href="info@vexpan.in" className="hover:text-red-500">
                  info@vexpan.in

                </a>
              </li>
              <li>
                📞 
                <a href="tel:18001024663" className="hover:text-red-500">
                   8088928521
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ---------- BOTTOM BAR ---------- */}
        <div className="border-t mt-10 py-5 flex flex-col md:flex-row justify-between text-sm">
          <p>© 2025 YourBrand. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="mailto:hello@yourbrand.com" className="hover:text-red-500">
              📧 info@vexpan.in

            </a>
            <a href="tel:18001024663" className="hover:text-red-500">
              📞 8088928521

            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

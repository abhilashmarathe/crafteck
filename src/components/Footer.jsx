import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import footerLogo from "../assets/logo-dark.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-14 sm:pt-16 md:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

          {/* Brand */}
          <div>
            <img
              src={footerLogo}
              alt="Crafteck Logo"
              className="h-14 sm:h-16 md:h-20 w-auto"
            />

            <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
              Building modern websites, scalable apps and
              AI-powered business solutions.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Pages
            </h3>

            <div className="space-y-3 text-sm md:text-base text-gray-400">
              <Link to="/" className="block hover:text-[#f86e07] transition">Home</Link>
              <Link to="/about" className="block hover:text-[#f86e07] transition">About</Link>
              <Link to="/services" className="block hover:text-[#f86e07] transition">Services</Link>
              <Link to="/portfolio" className="block hover:text-[#f86e07] transition">Portfolio</Link>
              <Link to="/contact" className="block hover:text-[#f86e07] transition">Contact</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Legal
            </h3>

            <div className="space-y-3 text-sm md:text-base text-gray-400">
              <Link to="/terms" className="block hover:text-[#f86e07] transition">
                Terms & Conditions
              </Link>

              <Link to="/privacy" className="block hover:text-[#f86e07] transition">
                Privacy Policy
              </Link>

              <Link to="/cookies" className="block hover:text-[#f86e07] transition">
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-sm md:text-base text-gray-400">

              <div className="flex gap-3 items-start">
                <Mail size={18} className="text-[#f86e07] shrink-0 mt-1" />
                <span className="break-all">
                  mayureshnikam10@gmail.com
                </span>
              </div>

              <div className="flex gap-3 items-start">
                <Phone size={18} className="text-[#f86e07] shrink-0 mt-1" />
                <span>
                  +91 92846 77663
                </span>
              </div>

              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-[#f86e07] shrink-0 mt-1" />
                <span>
                  Kolhapur, Maharashtra, India 416013
                </span>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 md:mt-16 pt-6 md:pt-8 text-center text-sm md:text-base text-gray-500">
          © {year} Crafteck.in. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
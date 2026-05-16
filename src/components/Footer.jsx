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
    <footer className="bg-slate-950 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <img
              src={footerLogo}
              alt="Crafteck Logo"
              className="h-16 md:h-20 w-auto"
            />

            <p className="mt-4 text-gray-400 leading-relaxed">
              Building modern websites, scalable apps and
              AI-powered business solutions.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Pages
            </h3>

            <div className="space-y-3 text-gray-400">
              <Link to="/" className="block hover:text-cyan-400 transition">
                Home
              </Link>

              <Link to="/about" className="block hover:text-cyan-400 transition">
                About
              </Link>

              <Link to="/services" className="block hover:text-cyan-400 transition">
                Services
              </Link>

              <Link to="/portfolio" className="block hover:text-cyan-400 transition">
                Portfolio
              </Link>

              <Link to="/contact" className="block hover:text-cyan-400 transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Legal
            </h3>

            <div className="space-y-3 text-gray-400">
              <a href="#" className="block hover:text-cyan-400 transition">
                Terms & Conditions
              </a>

              <a href="#" className="block hover:text-cyan-400 transition">
                Privacy Policy
              </a>

              <a href="#" className="block hover:text-cyan-400 transition">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3">
                <Mail size={18} className="text-cyan-400" />
                <span>hello@crafteck.in</span>
              </div>

              <div className="flex gap-3">
                <Phone size={18} className="text-cyan-400" />
                <span>+91 92846 77663</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} className="text-cyan-400" />
                <span>Kolhapur, Maharashtra, India 416013</span>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-gray-500">
          © {year} Crafteck.in. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
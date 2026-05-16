import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";

function Navbar() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-700 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img
            src={dark ? logoDark : logoLight}
            alt="Crafteck Logo"
            className="h-16 md:h-20 w-auto transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-slate-700 dark:text-gray-200 hover:text-cyan-500 transition"
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white transition"
          >
            {dark ? "☀" : "🌙"}
          </button>
        </div>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-2 rounded-lg bg-cyan-500 text-white"
          >
            {dark ? "☀" : "🌙"}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-slate-900 dark:text-white"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="text-slate-700 dark:text-gray-200 hover:text-cyan-500"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
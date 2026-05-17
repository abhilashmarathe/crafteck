import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";

function Navbar() {
  const location = useLocation();

  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const closeMenu = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", closeMenu);

    return () =>
      window.removeEventListener("resize", closeMenu);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-xl bg-white/85 dark:bg-slate-950/85 border-b border-gray-200 dark:border-slate-800 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

        <Link to="/">
          <img
            src={dark ? logoDark : logoLight}
            alt="Crafteck Logo"
            className="h-12 sm:h-14 md:h-20 w-auto transition duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition ${
                location.pathname === item.path
                  ? "text-[#f86e07]"
                  : "text-slate-700 dark:text-gray-200 hover:text-[#f86e07]"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 rounded-xl bg-[#f86e07] hover:bg-[#e86200] text-white transition"
          >
            {dark ? "☀" : "🌙"}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">

          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-2 rounded-lg bg-[#f86e07] text-white"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800"
          >
            <div className="flex flex-col px-6 py-6 space-y-5">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg ${
                    location.pathname === item.path
                      ? "text-[#f86e07]"
                      : "text-slate-700 dark:text-gray-200"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
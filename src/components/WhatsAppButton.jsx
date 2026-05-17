import { motion } from "framer-motion";
import whatsappLogo from "../assets/whatsapp-logo.png";

function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919284677663"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      className="group fixed bottom-6 right-6 z-50"
    >
      {/* Tooltip */}
      <span className="absolute right-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap bg-slate-900 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
        Chat with us
      </span>

      {/* Animated Button */}
      <div className="relative">
        {/* pulse */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>

        <div className="relative bg-white p-3 md:p-4 rounded-full shadow-2xl border border-green-100">
          <img
            src={whatsappLogo}
            alt="WhatsApp"
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
          />
        </div>
      </div>
    </motion.a>
  );
}

export default WhatsAppButton;
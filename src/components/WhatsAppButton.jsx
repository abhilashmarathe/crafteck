import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      className="group fixed bottom-6 right-6 z-50"
    >
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition whitespace-nowrap bg-slate-900 text-white px-4 py-2 rounded-lg text-sm">
        Chat with us
      </span>

      {/* Button */}
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>

        <div className="relative bg-green-500 text-white p-4 md:p-5 rounded-full shadow-2xl">
          <MessageCircle size={30} />
        </div>
      </div>
    </motion.a>
  );
}

export default WhatsAppButton;
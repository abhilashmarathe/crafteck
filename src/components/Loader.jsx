import { motion } from "framer-motion";
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";

function Loader({ dark }) {
  return (
    <div className="fixed inset-0 bg-white dark:bg-slate-950 flex flex-col items-center justify-center z-[999]">

      {/* glow ring */}
      <motion.div
        className="absolute w-44 h-44 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* logo */}
      <motion.img
        src={dark ? logoDark : logoLight}
        alt="Crafteck Logo"
        className="h-24 md:h-28 relative z-10"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* text */}
      <motion.p
        className="mt-6 text-slate-500 dark:text-gray-300 tracking-[0.3em] uppercase text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Loading...
      </motion.p>
    </div>
  );
}

export default Loader;
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 md:pt-36 lg:pt-40 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 md:left-20 w-56 md:w-72 h-56 md:h-72 bg-[#f86e07]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 md:right-20 w-72 md:w-96 h-72 md:h-96 bg-orange-300/20 blur-3xl rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-6xl w-full"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6 px-4 sm:px-5 py-2 rounded-full border border-orange-200 dark:border-orange-900 bg-white/70 dark:bg-slate-800/70 backdrop-blur"
        >
          <p className="text-[#f86e07] font-semibold text-xs sm:text-sm tracking-wide">
            DIGITAL TRANSFORMATION PARTNER
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-slate-900 dark:text-white"
        >
          Build Digital
          <br />
          <span className="text-[#f86e07]">
            Experiences
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 md:mt-8 text-base sm:text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Websites, Mobile Apps & AI Solutions crafted for startups,
          enterprises and future-ready businesses.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/quote"
            className="w-full sm:w-auto bg-[#f86e07] hover:bg-[#e86200] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-[#f86e07]/30 transition"
          >
            Get a Quote
          </Link>

          <Link
            to="/portfolio"
            className="w-full sm:w-auto border border-slate-300 dark:border-slate-700 px-8 py-4 rounded-xl hover:bg-white/70 hover:text-[#f86e07] transition dark:text-white"
          >
            View Portfolio
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 md:mt-16 text-[10px] sm:text-sm uppercase tracking-[0.2em] text-gray-400"
        >
          Trusted by startups • SMEs • enterprises
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Hero;
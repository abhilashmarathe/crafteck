import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-6xl px-6"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6 px-5 py-2 rounded-full border border-cyan-200 dark:border-cyan-800 bg-white/70 dark:bg-slate-800/70 backdrop-blur"
        >
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm tracking-wide">
            DIGITAL TRANSFORMATION PARTNER
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-8xl font-black leading-tight text-slate-900 dark:text-white"
        >
          Build Digital
          <br />
          <span className="text-cyan-500">Experiences</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Websites, Mobile Apps & AI Solutions crafted for startups,
          enterprises and future-ready businesses.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/quote"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition"
          >
            Get a Quote
          </Link>

          <Link
            to="/portfolio"
            className="border border-slate-300 dark:border-slate-700 px-8 py-4 rounded-xl hover:bg-white/70 dark:hover:bg-slate-800 transition"
          >
            View Portfolio
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-sm uppercase tracking-[0.2em] text-gray-400"
        >
          Trusted by startups • SMEs • enterprises
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Hero;
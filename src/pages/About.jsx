import teamPhoto from "../assets/crafteck-team.jpeg";
import mayureshPhoto from "../assets/mayuresh.jpeg";
import abhilashPhoto from "../assets/abhilash.jpg";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  CheckCircle
} from "lucide-react";

function About() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen pt-32 pb-24 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-[#f86e07] font-semibold uppercase tracking-widest">
              About Us
            </p>

            <h1 className="text-5xl md:text-7xl font-black mt-4 dark:text-white">
              About Crafteck.in
            </h1>

            <p className="mt-8 text-xl text-gray-600 dark:text-gray-300">
              Building innovative digital products for modern businesses.
            </p>
          </motion.div>

          {/* Story */}
          <div className="grid md:grid-cols-2 gap-12 mt-24 items-center">

            <motion.img
              src={teamPhoto}
              alt="Crafteck"
              className="rounded-3xl shadow-2xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
            />

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold dark:text-white">
                Our Story
              </h2>

              <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                Crafteck was founded in <strong>2026</strong> in Kolhapur, Maharashtra.

                <br /><br />

                Our mission is simple:
                <strong> Build. Design. Deliver.</strong>

                <br /><br />

                We help startups, enterprises and growing businesses
                transform ideas into powerful digital solutions.
              </p>
            </motion.div>
          </div>

          {/* Founders */}
          <div className="mt-28 text-center">
            <h2 className="text-4xl font-bold dark:text-white">
              Meet Our Founders
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mt-14">

              <motion.div
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 shadow-xl"
              >
                <img
                  src={mayureshPhoto}
                  alt="Mayuresh Nikam"
                  className="w-40 h-40 object-cover rounded-full mx-auto"
                />

                <h3 className="text-2xl font-bold mt-6 dark:text-white">
                  Mr. Mayuresh Nikam
                </h3>

                <p className="text-[#f86e07] font-semibold">
                  Business Head
                </p>
                  
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Drives business growth, client relationships
                  and strategic planning.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 shadow-xl"
              >
                <img
                  src={abhilashPhoto}
                  alt="Abhilash Marathe"
                  className="w-40 h-40 object-cover rounded-full mx-auto"
                />

                <h3 className="text-2xl font-bold mt-6 dark:text-white">
                  Mr. Abhilash Marathe
                </h3>

                <p className="text-[#f86e07] font-semibold">
                  Technical Head
                </p>

                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Leads technology strategy, development,
                  architecture and product execution.
                </p>
              </motion.div>

            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mt-24">

            <div className="p-10 rounded-3xl bg-white dark:bg-slate-900 shadow-xl">
              <Target className="text-[#f86e07] mb-6" size={42} />
              <h3 className="text-3xl font-bold dark:text-white">
                Our Mission
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Build exceptional digital products that empower businesses.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-white dark:bg-slate-900 shadow-xl">
              <Eye className="text-[#f86e07] mb-6" size={42} />
              <h3 className="text-3xl font-bold dark:text-white">
                Our Vision
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Become a globally trusted digital transformation company.
              </p>
            </div>
          </div>

          {/* Why choose */}
          <div className="mt-24 text-center">
            <h2 className="text-4xl font-bold dark:text-white">
              Why Choose Us
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                "Modern Technology",
                "Fast Delivery",
                "Long-term Support"
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-lg"
                >
                  <CheckCircle
                    className="mx-auto text-[#f86e07] mb-4"
                    size={36}
                  />

                  <h3 className="text-xl font-semibold dark:text-white">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default About;
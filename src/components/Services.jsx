import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Monitor,
  Database,
  Search,
  Layout,
  Cloud,
  Briefcase
} from "lucide-react";

const services = [
  {
    title: "Web App Development",
    desc: "Scalable, secure and high-performance web applications tailored to your business.",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps for Android and iOS.",
    icon: Smartphone,
  },
  {
    title: "Software Development",
    desc: "Custom software solutions built for automation, growth and efficiency.",
    icon: Monitor,
  },
  {
    title: "ERP / CRM / CMS",
    desc: "Business management systems to streamline operations and improve productivity.",
    icon: Database,
  },
  {
    title: "SEO / AEO / GEO",
    desc: "Advanced optimization strategies for search, AI engines and global reach.",
    icon: Search,
  },
  {
    title: "Custom Websites",
    desc: "Modern corporate, business and personal websites with premium UI/UX.",
    icon: Layout,
  },
  {
    title: "SaaS Products",
    desc: "End-to-end SaaS product development from MVP to scale.",
    icon: Cloud,
  },
  {
    title: "Management Systems",
    desc: "School, hospital, HR, inventory and business management platforms.",
    icon: Briefcase,
  },
];

function Services({ limit = false }) {
  const displayedServices = limit
    ? services.slice(0, 4)
    : services;

  return (
    <section
      id="services"
      className="py-28 px-6 md:px-10 bg-white dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-500 font-semibold uppercase tracking-widest">
            Our Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 dark:text-white">
            Services That Drive Growth
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            End-to-end digital solutions designed to help your business scale faster.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedServices.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition">
                  <Icon
                    size={30}
                    className="text-cyan-500 group-hover:text-white transition"
                  />
                </div>

                <h3 className="text-xl font-bold dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {limit && (
          <div className="text-center mt-14">
            <Link
              to="/services"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl"
            >
              View All Services
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}

export default Services;
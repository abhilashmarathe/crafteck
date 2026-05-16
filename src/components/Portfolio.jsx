import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Corporate Website",
    category: "Web Development",
    image: "/project1.png",
    tech: ["React", "Tailwind"],
    desc: "Premium business website built for brand growth.",
  },
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    image: "/project2.png",
    tech: ["React", "Supabase"],
    desc: "Modern scalable online selling platform.",
  },
  {
    title: "AI Chatbot",
    category: "AI Solution",
    image: "/project3.png",
    tech: ["OpenAI", "Python"],
    desc: "Smart business automation chatbot.",
  },
  {
    title: "CRM Dashboard",
    category: "ERP / CRM",
    image: "/project4.png",
    tech: ["React", "Node"],
    desc: "Custom client relationship dashboard.",
  },
  {
    title: "Mobile App",
    category: "App Development",
    image: "/project5.png",
    tech: ["Flutter"],
    desc: "Cross-platform mobile application.",
  },
  {
    title: "SaaS Product",
    category: "Product Development",
    image: "/project6.png",
    tech: ["React", "API"],
    desc: "Subscription-based SaaS platform.",
  },
];

function Portfolio({ limit = false }) {
  const displayedProjects = limit
    ? projects.slice(0, 3)
    : projects;

  return (
    <section
      id="portfolio"
      className="py-28 px-6 md:px-10 bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-500 font-semibold uppercase tracking-widest">
            Our Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 dark:text-white">
            Work That Speaks
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real digital products crafted for businesses and startups.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-white dark:bg-slate-800 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-8">
                <p className="text-cyan-500 text-sm font-semibold uppercase">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold mt-3 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-100 text-cyan-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-14">
            <Link
              to="/portfolio"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl"
            >
              View Full Portfolio
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}

export default Portfolio;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import supabase from "../lib/supabase";

function Portfolio({ limit = false }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("id", { ascending: false });

    if (!error) {
      setProjects(data || []);
    }
  }

  const displayedProjects = limit
    ? projects.slice(0, 3)
    : projects;

  return (
    <section
      id="portfolio"
      className="py-28 px-6 md:px-10 bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#f86e07] font-semibold uppercase tracking-widest">
            Our Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 dark:text-white">
            Work That Speaks
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real digital products crafted for businesses and startups.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, i) => (
            <motion.div
              key={project.id}
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
                <p className="text-[#f86e07] text-sm font-semibold uppercase">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold mt-3 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>

                {project.project_url && (
                  <a
                    href={project.project_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-[#f86e07] font-semibold hover:gap-3 transition"
                  >
                    View Project
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more */}
        {limit && (
          <div className="text-center mt-14">
            <Link
              to="/portfolio"
              className="bg-[#f86e07] hover:bg-[#e86200] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-[#f86e07]/30 transition"
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
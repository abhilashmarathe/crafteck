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
      className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="text-[#f86e07] font-semibold uppercase tracking-widest text-sm">
            Our Portfolio
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 dark:text-white">
            Work That Speaks
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real digital products crafted for businesses and startups.
          </p>
        </motion.div>

        {displayedProjects.length === 0 ? (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400">
            No projects added yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                    src={project.image || "/placeholder.png"}
                    alt={project.title}
                    className="h-52 sm:h-60 md:h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-[#f86e07] text-xs sm:text-sm font-semibold uppercase">
                    {project.category}
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold mt-3 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
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
        )}

        {limit && (
          <div className="text-center mt-10 md:mt-14">
            <Link
              to="/portfolio"
              className="inline-block w-full sm:w-auto bg-[#f86e07] hover:bg-[#e86200] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-[#f86e07]/30 transition"
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
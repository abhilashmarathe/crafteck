import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Headphones
} from "lucide-react";

const stats = [
  {
    number: "50+",
    label: "Projects Delivered",
    icon: Briefcase,
  },
  {
    number: "30+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    number: "24/7",
    label: "Support",
    icon: Headphones,
  },
];

function Stats() {
  return (
    <section className="py-24 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-cyan-100">
            Our Impact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Results That Matter
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 text-center"
              >
                <Icon size={42} className="mx-auto mb-6" />

                <h2 className="text-5xl font-black">
                  {item.number}
                </h2>

                <p className="mt-3 text-cyan-100 text-lg">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
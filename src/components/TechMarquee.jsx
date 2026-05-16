function TechMarquee() {
  const tech = [
    "Python",
    "Django",
    "Tkinter",
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Supabase",
    "Git",
    "PostgreSQL",
    "Vercel",
    "API Integration",
  ];

  const items = [...tech, ...tech];

  return (
    <section className="py-8 bg-slate-100 dark:bg-slate-900 overflow-hidden border-y border-gray-200 dark:border-slate-700">
      <div className="relative">

        <div className="flex marquee whitespace-nowrap">
          {items.map((item, i) => (
            <div
              key={i}
              className="mx-4 px-6 py-3 rounded-full bg-white dark:bg-slate-800 shadow-md text-sm md:text-base font-semibold text-slate-700 dark:text-white"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechMarquee;
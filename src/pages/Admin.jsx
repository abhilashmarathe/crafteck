import { useEffect, useState } from "react";
import supabase from "../lib/supabase";
import AdminSidebar from "../components/AdminSidebar";

function Admin() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("id", { ascending: false });

    setProjects(data || []);
  }

  async function deleteProject(id) {
    await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    fetchProjects();
  }

  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">

      <AdminSidebar />

      <main className="flex-1 p-10">

        <div className="mb-10">
          <p className="text-cyan-500 font-semibold uppercase tracking-widest">
            Dashboard
          </p>

          <h1 className="text-5xl font-black mt-2 dark:text-white">
            Welcome Back
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
            <h3 className="text-gray-500">Total Projects</h3>
            <p className="text-5xl font-bold mt-3 dark:text-white">
              {projects.length}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
            <h3 className="text-gray-500">Status</h3>
            <p className="text-3xl font-bold mt-3 text-green-500">
              Active
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
            <h3 className="text-gray-500">Database</h3>
            <p className="text-3xl font-bold mt-3 text-cyan-500">
              Healthy
            </p>
          </div>

        </div>

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold mb-8 dark:text-white">
            Projects
          </h2>

          <div className="space-y-5">
            {projects.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-5 rounded-2xl border dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt=""
                    className="w-20 h-16 object-cover rounded-xl"
                  />

                  <div>
                    <h3 className="font-bold text-lg dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-500">
                      {item.category}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => deleteProject(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}

export default Admin;
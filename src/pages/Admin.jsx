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
    <div className="flex min-h-screen bg-slate-100">

      <AdminSidebar />

      <main className="flex-1 p-10">

        {/* Header */}
        <div className="mb-8">
          <p className="text-[#f86e07] font-semibold uppercase tracking-widest">
            Dashboard
          </p>

          <h1 className="text-5xl font-black mt-2">
            Welcome Back
          </h1>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-7 rounded-3xl shadow-lg">
            <p className="text-gray-500">Total Projects</p>
            <h2 className="text-5xl font-bold mt-3">
              {projects.length}
            </h2>
          </div>

          <div className="bg-white p-7 rounded-3xl shadow-lg">
            <p className="text-gray-500">Status</p>
            <h2 className="text-4xl font-bold mt-3 text-green-500">
              Active
            </h2>
          </div>

          <div className="bg-white p-7 rounded-3xl shadow-lg">
            <p className="text-gray-500">Database</p>
            <h2 className="text-4xl font-bold mt-3 text-[#f86e07]">
              Healthy
            </h2>
          </div>

        </div>

        {/* Projects */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              Recent Projects
            </h2>
          </div>

          {projects.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              No projects added yet.
            </div>
          ) : (
            <div className="space-y-5">
              {projects.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border rounded-2xl p-5 hover:bg-slate-50 transition"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={item.image}
                      alt=""
                      className="w-24 h-16 object-cover rounded-xl"
                    />

                    <div>
                      <h3 className="font-bold text-lg">
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
          )}

        </div>
      </main>
    </div>
  );
}

export default Admin;
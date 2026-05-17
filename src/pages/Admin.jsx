import { useEffect, useState } from "react";
import supabase from "../lib/supabase";
import AdminSidebar from "../components/AdminSidebar";
import {
  FolderKanban,
  Database,
  Activity,
  Trash2,
  Quote,
} from "lucide-react";

function Admin() {
  const [projects, setProjects] = useState([]);
  const [leads, setLeads] = useState([]);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchProjects();
    fetchLeads();
    fetchQuotes();
  }, []);

  async function fetchProjects() {
    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("id", { ascending: false });

    setProjects(data || []);
  }

  async function fetchLeads() {
    const { data } = await supabase
      .from("leads")
      .select("*")
      .order("id", { ascending: false });

    setLeads(data || []);
  }

  async function fetchQuotes() {
    const { data } = await supabase
      .from("quotes")
      .select("*")
      .order("id", { ascending: false });

    setQuotes(data || []);
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

      <main className="flex-1 p-6 md:p-10">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[#f86e07] font-semibold uppercase tracking-widest">
            Dashboard
          </p>

          <h1 className="text-4xl md:text-5xl font-black mt-2 text-slate-900">
            Welcome Back 👋
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your projects and monitor platform health.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <StatCard
            title="Total Projects"
            value={projects.length}
            icon={<FolderKanban />}
          />

          <StatCard
            title="System Status"
            value="Active"
            icon={<Activity />}
            green
          />

          <StatCard
            title="Database"
            value="Healthy"
            icon={<Database />}
            orange
          />

          <StatCard
            title="Contact Leads"
            value={leads.length}
          />

          <StatCard
            title="Quote Leads"
            value={quotes.length}
          />

        </div>

        {/* Projects */}
        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Recent Projects
            </h2>

            <span className="text-sm text-slate-500">
              {projects.length} total
            </span>
          </div>

          {projects.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              No projects added yet.
            </div>
          ) : (
            <div className="space-y-5">
              {projects.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 border border-slate-200 rounded-2xl p-5 hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-5">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-28 h-20 object-cover rounded-xl"
                    />

                    <div>
                      <h3 className="font-bold text-xl text-slate-900">
                        {item.title}
                      </h3>

                      <p className="text-slate-500">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => deleteProject(item.id)}
                    className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl transition"
                  >
                    <Trash2 size={18} />
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">
  <h2 className="text-3xl font-bold mb-6">
    Contact Leads
  </h2>

  {leads.map((lead) => (
    <div
      key={lead.id}
      className="border-b py-4"
    >
      <h3 className="font-bold">{lead.name}</h3>
      <p>{lead.email}</p>
      <p>{lead.message}</p>
    </div>
  ))}
</div>

<div className="bg-white rounded-3xl shadow-xl p-8 mt-10">
  <h2 className="text-3xl font-bold mb-6">
    Quote Requests
  </h2>

  {quotes.map((q) => (
    <div
      key={q.id}
      className="border-b py-4"
    >
      <h3 className="font-bold">{q.name}</h3>
      <p>{q.email}</p>
      <p>{q.phone}</p>
      <p>{q.service}</p>
      <p>{q.budget}</p>
    </div>
  ))}
</div>

      </main>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  green,
  orange,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-7 hover:-translate-y-1 transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-500">{title}</p>

          <h2
            className={`text-4xl font-black mt-3 ${
              green
                ? "text-green-500"
                : orange
                ? "text-[#f86e07]"
                : "text-slate-900"
            }`}
          >
            {value}
          </h2>
        </div>

        <div className="bg-[#f86e07]/10 text-[#f86e07] p-4 rounded-2xl">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default Admin;
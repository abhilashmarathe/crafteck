import { useEffect, useState } from "react";
import supabase from "../lib/supabase";
import AdminSidebar from "../components/AdminSidebar";
import { useNavigate } from "react-router-dom";
import {
  FolderKanban,
  Database,
  Activity,
  Trash2,
  Pencil,
  Quote,
} from "lucide-react";

function Admin() {
  const navigate = useNavigate(); // ← FIX: was imported but never initialized

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
    await supabase.from("projects").delete().eq("id", id);
    fetchProjects();
  }

  const s = {
    page: {
      display: "flex",
      minHeight: "100vh",
      background: "#08080e",
      fontFamily: "'DM Sans', sans-serif",
    },
    main: {
      flex: 1,
      padding: "2.5rem",
      overflowY: "auto",
      maxWidth: "calc(100vw - 260px)",
    },
    pageLabel: {
      fontSize: "0.7rem",
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "#f86e07",
      marginBottom: "0.5rem",
      display: "block",
    },
    pageTitle: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 800,
      fontSize: "2rem",
      letterSpacing: "-0.03em",
      color: "#f2f2f5",
      marginBottom: "0.4rem",
    },
    pageSub: {
      fontSize: "0.875rem",
      color: "#555570",
      marginBottom: "2.5rem",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "1rem",
      marginBottom: "2rem",
    },
    sectionCard: {
      background: "#0f0f18",
      border: "1px solid #1a1a2e",
      borderRadius: "12px",
      overflow: "hidden",
      marginBottom: "1.5rem",
    },
    sectionHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.25rem 1.5rem",
      borderBottom: "1px solid #1a1a2e",
    },
    sectionTitle: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 700,
      fontSize: "1rem",
      color: "#f2f2f5",
    },
    sectionCount: {
      fontSize: "0.75rem",
      fontWeight: 600,
      color: "#555570",
      background: "#14141f",
      border: "1px solid #222235",
      padding: "0.2rem 0.6rem",
      borderRadius: "999px",
    },
    th: {
      padding: "0.75rem 1.5rem",
      textAlign: "left",
      fontSize: "0.68rem",
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "#333355",
    },
  };

  return (
    <div style={s.page}>
      <AdminSidebar />

      <main style={s.main}>

        {/* Header */}
        <div>
          <span style={s.pageLabel}>Dashboard</span>
          <h1 style={s.pageTitle}>Welcome Back 👋</h1>
          <p style={s.pageSub}>Manage your projects and monitor platform health.</p>
        </div>

        {/* Stats */}
        <div style={s.statsGrid}>
          <StatCard title="Total Projects"  value={projects.length} icon={<FolderKanban size={18} />} />
          <StatCard title="System Status"   value="Active"          icon={<Activity size={18} />}     green />
          <StatCard title="Database"        value="Healthy"         icon={<Database size={18} />}     orange />
          <StatCard title="Contact Leads"   value={leads.length}    icon={<Quote size={18} />} />
          <StatCard title="Quote Requests"  value={quotes.length}   icon={<Quote size={18} />} />
        </div>

        {/* ── Projects Table ── */}
        <div style={s.sectionCard}>
          <div style={s.sectionHeader}>
            <h2 style={s.sectionTitle}>Recent Projects</h2>
            <span style={s.sectionCount}>{projects.length} total</span>
          </div>

          {projects.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 2rem", color: "#2e2e45", fontSize: "0.875rem" }}>
              No projects added yet.
            </div>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #1a1a2e" }}>
                  {/* ← FIX: restored all 4 column headers */}
                  <th style={s.th}>Project</th>
                  <th style={s.th}>Category</th>
                  <th style={s.th}>URL</th>
                  <th style={s.th}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((item) => (
                  <tr
                    key={item.id}
                    style={{ borderBottom: "1px solid #111120", transition: "background 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#111120"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >

                    {/* ← FIX: restored Project cell */}
                    <td style={{ padding: "1rem 1.5rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            width: "52px",
                            height: "38px",
                            objectFit: "cover",
                            borderRadius: "6px",
                            border: "1px solid #1a1a2e",
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ fontWeight: 600, fontSize: "0.875rem", color: "#d0d0e8" }}>
                          {item.title}
                        </span>
                      </div>
                    </td>

                    {/* ← FIX: restored Category cell */}
                    <td style={{ padding: "1rem 1.5rem" }}>
                      <span style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#555570",
                        background: "#14141f",
                        border: "1px solid #222235",
                        padding: "0.22rem 0.65rem",
                        borderRadius: "999px",
                      }}>
                        {item.category}
                      </span>
                    </td>

                    {/* Project URL cell */}
                    <td style={{ padding: "1rem 1.5rem" }}>
                      {item.project_url ? (
                        <a
                          href={item.project_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: "0.8rem",
                            color: "#f86e07",
                            textDecoration: "none",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            maxWidth: "180px",
                            display: "block",
                          }}
                        >
                          {item.project_url.replace(/^https?:\/\//, "")}
                        </a>
                      ) : (
                        <span style={{ fontSize: "0.8rem", color: "#2e2e45" }}>—</span>
                      )}
                    </td>

                    {/* Actions cell */}
                    <td style={{ padding: "1rem 1.5rem" }}>
                      <div style={{ display: "flex", gap: "0.5rem" }}>

                        {/* Edit */}
                        <button
                          onClick={() => navigate(`/admin/edit-project/${item.id}`)}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.35rem",
                            padding: "0.4rem 0.85rem",
                            borderRadius: "6px",
                            border: "1px solid rgba(96,165,250,0.2)",
                            background: "rgba(96,165,250,0.07)",
                            color: "#60a5fa",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            fontFamily: "'DM Sans', sans-serif",
                            cursor: "pointer",
                            transition: "all 0.15s",
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = "rgba(96,165,250,0.14)";
                            e.currentTarget.style.borderColor = "rgba(96,165,250,0.4)";
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = "rgba(96,165,250,0.07)";
                            e.currentTarget.style.borderColor = "rgba(96,165,250,0.2)";
                          }}
                        >
                          <Pencil size={12} /> Edit
                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => {
                            if (window.confirm("Delete this project?")) {
                              deleteProject(item.id);
                            }
                          }}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.35rem",
                            padding: "0.4rem 0.85rem",
                            borderRadius: "6px",
                            border: "1px solid rgba(248,113,113,0.2)",
                            background: "rgba(248,113,113,0.06)",
                            color: "#f87171",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            fontFamily: "'DM Sans', sans-serif",
                            cursor: "pointer",
                            transition: "all 0.15s",
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = "rgba(248,113,113,0.14)";
                            e.currentTarget.style.borderColor = "rgba(248,113,113,0.4)";
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = "rgba(248,113,113,0.06)";
                            e.currentTarget.style.borderColor = "rgba(248,113,113,0.2)";
                          }}
                        >
                          <Trash2 size={12} /> Delete
                        </button>

                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* ── Contact Leads ── */}
        <div style={s.sectionCard}>
          <div style={s.sectionHeader}>
            <h2 style={s.sectionTitle}>Contact Leads</h2>
            <span style={s.sectionCount}>{leads.length} total</span>
          </div>
          {leads.length === 0 ? (
            <div style={{ textAlign: "center", padding: "2.5rem", color: "#2e2e45", fontSize: "0.875rem" }}>
              No leads yet.
            </div>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #1a1a2e" }}>
                  <th style={s.th}>Name</th>
                  <th style={s.th}>Email</th>
                  <th style={s.th}>Message</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr
                    key={lead.id}
                    style={{ borderBottom: "1px solid #111120", transition: "background 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#111120"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    <td style={{ padding: "1rem 1.5rem", fontWeight: 600, fontSize: "0.875rem", color: "#d0d0e8" }}>
                      {lead.name}
                    </td>
                    <td style={{ padding: "1rem 1.5rem" }}>
                      <a href={`mailto:${lead.email}`} style={{ fontSize: "0.82rem", color: "#f86e07", textDecoration: "none" }}>
                        {lead.email}
                      </a>
                    </td>
                    <td style={{ padding: "1rem 1.5rem", fontSize: "0.82rem", color: "#555570", maxWidth: "300px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {lead.message}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* ── Quote Requests ── */}
        <div style={s.sectionCard}>
          <div style={s.sectionHeader}>
            <h2 style={s.sectionTitle}>Quote Requests</h2>
            <span style={s.sectionCount}>{quotes.length} total</span>
          </div>
          {quotes.length === 0 ? (
            <div style={{ textAlign: "center", padding: "2.5rem", color: "#2e2e45", fontSize: "0.875rem" }}>
              No quote requests yet.
            </div>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #1a1a2e" }}>
                  <th style={s.th}>Name</th>
                  <th style={s.th}>Email</th>
                  <th style={s.th}>Phone</th>
                  <th style={s.th}>Service</th>
                  <th style={s.th}>Budget</th>
                </tr>
              </thead>
              <tbody>
                {quotes.map((q) => (
                  <tr
                    key={q.id}
                    style={{ borderBottom: "1px solid #111120", transition: "background 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#111120"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    <td style={{ padding: "1rem 1.5rem", fontWeight: 600, fontSize: "0.875rem", color: "#d0d0e8" }}>{q.name}</td>
                    <td style={{ padding: "1rem 1.5rem" }}>
                      <a href={`mailto:${q.email}`} style={{ fontSize: "0.82rem", color: "#f86e07", textDecoration: "none" }}>{q.email}</a>
                    </td>
                    <td style={{ padding: "1rem 1.5rem", fontSize: "0.82rem", color: "#555570" }}>{q.phone}</td>
                    <td style={{ padding: "1rem 1.5rem" }}>
                      <span style={{
                        fontSize: "0.75rem", fontWeight: 600, color: "#555570",
                        background: "#14141f", border: "1px solid #222235",
                        padding: "0.2rem 0.55rem", borderRadius: "999px", display: "inline-block",
                      }}>{q.service}</span>
                    </td>
                    <td style={{ padding: "1rem 1.5rem" }}>
                      <span style={{
                        fontSize: "0.75rem", fontWeight: 600, color: "#f86e07",
                        background: "rgba(248,110,7,0.08)", border: "1px solid rgba(248,110,7,0.2)",
                        padding: "0.2rem 0.55rem", borderRadius: "999px", display: "inline-block",
                      }}>{q.budget}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </main>
    </div>
  );
}

function StatCard({ title, value, icon, green, orange }) {
  const accentColor = green ? "#22c55e" : orange ? "#f86e07" : "#6666aa";
  return (
    <div
      style={{
        background: "#0f0f18",
        border: "1px solid #1a1a2e",
        borderRadius: "10px",
        padding: "1.25rem",
        transition: "border-color 0.2s, transform 0.2s",
        cursor: "default",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = accentColor + "44";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "#1a1a2e";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.85rem" }}>
        <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#333355" }}>
          {title}
        </span>
        <div style={{
          width: "30px", height: "30px", borderRadius: "7px",
          background: accentColor + "18", border: `1px solid ${accentColor}30`,
          display: "flex", alignItems: "center", justifyContent: "center", color: accentColor,
        }}>
          {icon}
        </div>
      </div>
      <div style={{
        fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "1.75rem",
        letterSpacing: "-0.03em", color: accentColor, lineHeight: 1,
      }}>
        {value}
      </div>
    </div>
  );
}

export default Admin;
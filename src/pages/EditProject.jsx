import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../lib/supabase";
import AdminSidebar from "../components/AdminSidebar";
import {
  FolderPlus,
  Link as LinkIcon,
  FileText,
  Layers,
  Image as ImageIcon,
  CheckCircle2,
  ArrowLeft,
  Save,
} from "lucide-react";

function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    project_url: "",
  });

  useEffect(() => {
    fetchProject();
  }, []);

  async function fetchProject() {
    const { data } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single();

    if (data) setForm(data);
  }

  async function updateProject(e) {
    e.preventDefault();

    const { error } = await supabase
      .from("projects")
      .update(form)
      .eq("id", id);

    if (error) {
      alert(error.message);
    } else {
      alert("Project updated");
      navigate("/admin");
    }
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
    },
    inputBase: {
      background: "#14141f",
      border: "1px solid #222235",
      borderRadius: "8px",
      padding: "0.7rem 0.9rem",
      color: "#f2f2f5",
      fontSize: "0.9rem",
      fontFamily: "'DM Sans', sans-serif",
      outline: "none",
      width: "100%",
      boxSizing: "border-box",
      transition: "border-color 0.18s, box-shadow 0.18s",
    },
    label: {
      fontSize: "0.72rem",
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#444460",
      display: "flex",
      alignItems: "center",
      gap: "0.4rem",
      marginBottom: "0.4rem",
    },
  };

  function focusStyle(e) {
    e.target.style.borderColor = "#f86e07";
    e.target.style.boxShadow = "0 0 0 3px rgba(248,110,7,0.1)";
  }
  function blurStyle(e) {
    e.target.style.borderColor = "#222235";
    e.target.style.boxShadow = "none";
  }

  return (
    <div style={s.page}>
      <AdminSidebar />

      <main style={s.main}>

        {/* Back link */}
        <button
          onClick={() => navigate("/admin")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.82rem",
            fontWeight: 600,
            color: "#555570",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: "1.5rem",
            padding: 0,
            transition: "color 0.15s",
          }}
          onMouseEnter={e => e.currentTarget.style.color = "#f86e07"}
          onMouseLeave={e => e.currentTarget.style.color = "#555570"}
        >
          <ArrowLeft size={14} /> Back to Dashboard
        </button>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <span style={{
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#f86e07", display: "block", marginBottom: "0.5rem",
          }}>
            Project Management
          </span>
          <h1 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "2rem",
            letterSpacing: "-0.03em", color: "#f2f2f5", marginBottom: "0.4rem",
          }}>
            Edit Project
          </h1>
          <p style={{ fontSize: "0.875rem", color: "#555570" }}>
            Update the details for this portfolio entry.
          </p>
        </div>

        {/* Card */}
        <div style={{
          maxWidth: "720px",
          background: "#0f0f18",
          border: "1px solid #1a1a2e",
          borderRadius: "14px",
          padding: "2rem",
        }}>

          {/* Current image preview (if exists) */}
          {form.image && (
            <div style={{ marginBottom: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                <CheckCircle2 size={14} style={{ color: "#22c55e" }} />
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#22c55e" }}>
                  Current image
                </span>
              </div>
              <img
                src={form.image}
                alt="current"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  border: "1px solid #1a1a2e",
                }}
              />
            </div>
          )}

          <form onSubmit={updateProject}>

            {/* Two-col: Title + Category */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>

              <div>
                <label style={s.label}>
                  <FolderPlus size={12} style={{ color: "#f86e07" }} /> Title
                </label>
                <input
                  value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                  placeholder="Project Title"
                  required
                  style={s.inputBase}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </div>

              <div>
                <label style={s.label}>
                  <Layers size={12} style={{ color: "#f86e07" }} /> Category
                </label>
                <input
                  value={form.category}
                  onChange={e => setForm({ ...form, category: e.target.value })}
                  placeholder="e.g. Web App, SaaS"
                  required
                  style={s.inputBase}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </div>

            </div>

            {/* Image URL */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label style={s.label}>
                <ImageIcon size={12} style={{ color: "#f86e07" }} /> Image URL
              </label>
              <input
                value={form.image}
                onChange={e => setForm({ ...form, image: e.target.value })}
                placeholder="https://... or leave unchanged"
                style={s.inputBase}
                onFocus={focusStyle}
                onBlur={blurStyle}
              />
            </div>

            {/* Project URL */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label style={s.label}>
                <LinkIcon size={12} style={{ color: "#f86e07" }} /> Project URL
              </label>
              <input
                value={form.project_url}
                onChange={e => setForm({ ...form, project_url: e.target.value })}
                placeholder="https://yourproject.com"
                style={s.inputBase}
                onFocus={focusStyle}
                onBlur={blurStyle}
              />
            </div>

            {/* Description */}
            <div style={{ marginBottom: "1.75rem" }}>
              <label style={s.label}>
                <FileText size={12} style={{ color: "#f86e07" }} /> Description
              </label>
              <textarea
                rows="5"
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
                placeholder="Project description…"
                required
                style={{
                  ...s.inputBase,
                  resize: "vertical",
                  lineHeight: "1.65",
                  minHeight: "120px",
                }}
                onFocus={focusStyle}
                onBlur={blurStyle}
              />
            </div>

            {/* Divider */}
            <div style={{
              height: "1px",
              background: "linear-gradient(to right, transparent, #1a1a2e, transparent)",
              marginBottom: "1.5rem",
            }} />

            {/* Actions row */}
            <div style={{ display: "flex", gap: "0.75rem" }}>

              {/* Cancel */}
              <button
                type="button"
                onClick={() => navigate("/admin")}
                style={{
                  flex: 1,
                  padding: "0.75rem",
                  borderRadius: "8px",
                  border: "1px solid #222235",
                  background: "#14141f",
                  color: "#8888aa",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.18s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#333355";
                  e.currentTarget.style.color = "#d0d0e8";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#222235";
                  e.currentTarget.style.color = "#8888aa";
                }}
              >
                Cancel
              </button>

              {/* Save */}
              <button
                type="submit"
                style={{
                  flex: 2,
                  padding: "0.75rem",
                  borderRadius: "8px",
                  border: "none",
                  background: "#f86e07",
                  color: "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                  boxShadow: "0 4px 20px rgba(248,110,7,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#ff8520";
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 6px 24px rgba(248,110,7,0.35)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "#f86e07";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(248,110,7,0.25)";
                }}
              >
                <Save size={15} /> Save Changes
              </button>

            </div>

          </form>
        </div>

      </main>

      <style>{`
        textarea::placeholder, input::placeholder { color: #33334d; }
        textarea { font-family: 'DM Sans', sans-serif; }
      `}</style>

    </div>
  );
}

export default EditProject;
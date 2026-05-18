import { useState } from "react";
import supabase from "../lib/supabase";
import AdminSidebar from "../components/AdminSidebar";
import {
  UploadCloud,
  FolderPlus,
  Image as ImageIcon,
  Link as LinkIcon,
  FileText,
  Layers,
  CheckCircle2,
} from "lucide-react";

function AddProject() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    project_url: "",
  });

  const [loading, setLoading] = useState(false);

  async function uploadImage(file) {
    const fileName = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage
      .from("projects")
      .upload(fileName, file);

    if (error) {
      alert(error.message);
      return null;
    }

    const { data } = supabase.storage
      .from("projects")
      .getPublicUrl(fileName);

    return data.publicUrl;
  }

  async function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    const url = await uploadImage(file);
    if (url) setForm({ ...form, image: url });
    setLoading(false);
  }

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("projects").insert([form]);
    setLoading(false);
    if (error) {
      alert(error.message);
    } else {
      alert("Project added successfully");
      setForm({ title: "", category: "", description: "", image: "", project_url: "" });
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
    card: {
      maxWidth: "720px",
      background: "#0f0f18",
      border: "1px solid #1a1a2e",
      borderRadius: "14px",
      padding: "2rem",
    },
    fieldGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "0.4rem",
      marginBottom: "1.25rem",
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

        {/* Header */}
        <div>
          <span style={s.pageLabel}>Project Management</span>
          <h1 style={s.pageTitle}>Add New Project</h1>
          <p style={s.pageSub}>Upload and publish a new portfolio project.</p>
        </div>

        {/* Card */}
        <div style={s.card}>
          <form onSubmit={submit}>

            {/* Two-col row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>

              {/* Title */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label style={s.label}>
                  <FolderPlus size={12} style={{ color: "#f86e07" }} />
                  Project Title
                </label>
                <input
                  placeholder="e.g. MindIT Sanvad Dashboard"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                  style={s.inputBase}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </div>

              {/* Category */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label style={s.label}>
                  <Layers size={12} style={{ color: "#f86e07" }} />
                  Category
                </label>
                <input
                  placeholder="e.g. Web App, SaaS, Mobile"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  required
                  style={s.inputBase}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </div>

            </div>

            {/* Image upload */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label style={{ ...s.label, marginBottom: "0.5rem", display: "flex" }}>
                <ImageIcon size={12} style={{ color: "#f86e07" }} />
                Project Image
              </label>

              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  padding: "2.25rem",
                  border: "1.5px dashed #222235",
                  borderRadius: "10px",
                  background: "#111120",
                  cursor: "pointer",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#f86e07";
                  e.currentTarget.style.background = "rgba(248,110,7,0.04)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#222235";
                  e.currentTarget.style.background = "#111120";
                }}
              >
                <div style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: "rgba(248,110,7,0.1)",
                  border: "1px solid rgba(248,110,7,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f86e07",
                }}>
                  <UploadCloud size={20} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "0.875rem", color: "#8888aa", marginBottom: "0.2rem" }}>
                    Click to upload image
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "#33334d" }}>
                    PNG, JPG, WebP up to 10MB
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  style={{ display: "none" }}
                  required
                />
              </label>
            </div>

            {/* Image preview */}
            {form.image && (
              <div style={{ marginBottom: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                  <CheckCircle2 size={14} style={{ color: "#22c55e" }} />
                  <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#22c55e" }}>
                    Image uploaded
                  </span>
                </div>
                <img
                  src={form.image}
                  alt="preview"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    border: "1px solid #1a1a2e",
                  }}
                />
              </div>
            )}

            {/* Project URL */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.25rem" }}>
              <label style={s.label}>
                <LinkIcon size={12} style={{ color: "#f86e07" }} />
                Project URL
              </label>
              <input
                placeholder="https://yourproject.com"
                value={form.project_url}
                onChange={(e) => setForm({ ...form, project_url: e.target.value })}
                required
                style={s.inputBase}
                onFocus={focusStyle}
                onBlur={blurStyle}
              />
            </div>

            {/* Description */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.75rem" }}>
              <label style={s.label}>
                <FileText size={12} style={{ color: "#f86e07" }} />
                Description
              </label>
              <textarea
                rows="5"
                placeholder="Describe the project — what it does, the tech stack, and the outcome…"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
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

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: "8px",
                border: "none",
                background: loading ? "#7a3700" : "#f86e07",
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.18s ease",
                boxShadow: loading ? "none" : "0 4px 20px rgba(248,110,7,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={e => {
                if (!loading) {
                  e.currentTarget.style.background = "#ff8520";
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 6px 24px rgba(248,110,7,0.35)";
                }
              }}
              onMouseLeave={e => {
                if (!loading) {
                  e.currentTarget.style.background = "#f86e07";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(248,110,7,0.25)";
                }
              }}
            >
              {loading ? (
                <>
                  <span style={{
                    width: "14px", height: "14px",
                    border: "2px solid rgba(255,255,255,0.3)",
                    borderTopColor: "#fff",
                    borderRadius: "50%",
                    animation: "spin 0.7s linear infinite",
                    display: "inline-block",
                  }} />
                  Uploading…
                </>
              ) : (
                <>
                  <UploadCloud size={15} />
                  Add Project
                </>
              )}
            </button>

          </form>
        </div>

      </main>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        textarea::placeholder, input::placeholder { color: #33334d; }
        textarea { font-family: 'DM Sans', sans-serif; }
      `}</style>

    </div>
  );
}

export default AddProject;
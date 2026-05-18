import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../lib/supabase";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      alert(error.message);
    } else {
      navigate("/admin");
    }

    setLoading(false);
  }

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#08080e",
      fontFamily: "'DM Sans', sans-serif",
      padding: "1.5rem",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background mesh */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `
          radial-gradient(ellipse 60% 50% at 30% 40%, rgba(248,110,7,0.08) 0%, transparent 65%),
          radial-gradient(ellipse 40% 40% at 75% 70%, rgba(248,110,7,0.04) 0%, transparent 55%)
        `,
        pointerEvents: "none",
      }} />

      {/* Grid texture */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(248,110,7,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(248,110,7,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      {/* Card */}
      <div style={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        maxWidth: "420px",
        background: "#0f0f18",
        border: "1px solid #1e1e30",
        borderRadius: "16px",
        padding: "2.5rem",
        boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(248,110,7,0.06)",
      }}>

        {/* Logo mark */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "52px",
            height: "52px",
            borderRadius: "12px",
            background: "rgba(248,110,7,0.1)",
            border: "1px solid rgba(248,110,7,0.25)",
            marginBottom: "1.25rem",
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#f86e07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h1 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "1.6rem",
            letterSpacing: "-0.03em",
            color: "#f2f2f5",
            marginBottom: "0.35rem",
          }}>
            Welcome back
          </h1>

          <p style={{
            fontSize: "0.875rem",
            color: "#555570",
          }}>
            Sign in to your Crafteck dashboard
          </p>
        </div>

        {/* Divider */}
        <div style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, #1e1e30, transparent)",
          marginBottom: "2rem",
        }} />

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

          {/* Email */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#444460",
            }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="hello@crafteck.in"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={{
                background: "#14141f",
                border: "1px solid #222235",
                borderRadius: "8px",
                padding: "0.7rem 0.9rem",
                color: "#f2f2f5",
                fontSize: "0.9rem",
                fontFamily: "'DM Sans', sans-serif",
                outline: "none",
                transition: "border-color 0.18s, box-shadow 0.18s",
                width: "100%",
                boxSizing: "border-box",
              }}
              onFocus={e => {
                e.target.style.borderColor = "#f86e07";
                e.target.style.boxShadow = "0 0 0 3px rgba(248,110,7,0.1)";
              }}
              onBlur={e => {
                e.target.style.borderColor = "#222235";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Password */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#444460",
            }}>
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••••"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              style={{
                background: "#14141f",
                border: "1px solid #222235",
                borderRadius: "8px",
                padding: "0.7rem 0.9rem",
                color: "#f2f2f5",
                fontSize: "0.9rem",
                fontFamily: "'DM Sans', sans-serif",
                outline: "none",
                transition: "border-color 0.18s, box-shadow 0.18s",
                width: "100%",
                boxSizing: "border-box",
              }}
              onFocus={e => {
                e.target.style.borderColor = "#f86e07";
                e.target.style.boxShadow = "0 0 0 3px rgba(248,110,7,0.1)";
              }}
              onBlur={e => {
                e.target.style.borderColor = "#222235";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Submit */}
          <button
            disabled={loading}
            style={{
              marginTop: "0.5rem",
              width: "100%",
              padding: "0.75rem",
              borderRadius: "8px",
              border: "none",
              background: loading ? "#7a3700" : "#f86e07",
              color: "#fff",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.18s ease",
              boxShadow: loading ? "none" : "0 4px 20px rgba(248,110,7,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
            onMouseEnter={e => {
              if (!loading) {
                e.currentTarget.style.background = "#ff8520";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(248,110,7,0.4)";
              }
            }}
            onMouseLeave={e => {
              if (!loading) {
                e.currentTarget.style.background = "#f86e07";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(248,110,7,0.3)";
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
                Signing in…
              </>
            ) : "Sign In"}
          </button>

        </form>

        {/* Footer note */}
        <p style={{
          textAlign: "center",
          marginTop: "1.75rem",
          fontSize: "0.75rem",
          color: "#2e2e45",
        }}>
          Crafteck Admin · Restricted Access
        </p>

      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder { color: #33334d; }
      `}</style>

    </section>
  );
}

export default Login;
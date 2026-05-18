import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  PlusCircle,
  LogOut,
  FolderKanban,
} from "lucide-react";

function AdminSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/admin/login");
  }

  const menu = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Add Project",
      path: "/admin/add-project",
      icon: PlusCircle,
    },
  ];

  return (
    <aside style={{
      width: "260px",
      minHeight: "100vh",
      position: "sticky",
      top: 0,
      background: "#08080e",
      borderRight: "1px solid #1a1a2e",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'DM Sans', sans-serif",
    }}>

      {/* Brand */}
      <div style={{
        padding: "2rem 1.5rem",
        borderBottom: "1px solid #1a1a2e",
        display: "flex",
        alignItems: "center",
        gap: "0.85rem",
      }}>
        <div style={{
          width: "42px",
          height: "42px",
          borderRadius: "10px",
          background: "rgba(248,110,7,0.12)",
          border: "1px solid rgba(248,110,7,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f86e07",
          flexShrink: 0,
        }}>
          <FolderKanban size={20} />
        </div>
        <div>
          <div style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "1.1rem",
            letterSpacing: "-0.03em",
            color: "#f2f2f5",
            lineHeight: 1.1,
          }}>
            <span style={{ color: "#f86e07" }}>C</span>rafteck
          </div>
          <div style={{
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#555570",
            marginTop: "2px",
          }}>
            Admin Panel
          </div>
        </div>
      </div>

      {/* Nav label */}
      <div style={{ padding: "1.5rem 1.5rem 0.5rem" }}>
        <span style={{
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#3a3a55",
        }}>
          Navigation
        </span>
      </div>

      {/* Menu */}
      <nav style={{
        flex: 1,
        padding: "0.25rem 0.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.2rem",
      }}>
        {menu.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.7rem 0.9rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: active ? 600 : 500,
                fontSize: "0.875rem",
                color: active ? "#f86e07" : "#6666888",
                background: active ? "rgba(248,110,7,0.1)" : "transparent",
                border: active ? "1px solid rgba(248,110,7,0.2)" : "1px solid transparent",
                transition: "all 0.18s ease",
                position: "relative",
              }}
              onMouseEnter={e => {
                if (!active) {
                  e.currentTarget.style.background = "#111120";
                  e.currentTarget.style.color = "#c8c8e0";
                }
              }}
              onMouseLeave={e => {
                if (!active) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#66668888";
                }
              }}
            >
              {/* Active indicator bar */}
              {active && (
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: "20%",
                  bottom: "20%",
                  width: "3px",
                  borderRadius: "0 3px 3px 0",
                  background: "#f86e07",
                }} />
              )}

              <Icon
                size={16}
                style={{ color: active ? "#f86e07" : "#4a4a6a", flexShrink: 0 }}
              />
              <span>{item.name}</span>

              {active && (
                <span style={{
                  marginLeft: "auto",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#f86e07",
                  boxShadow: "0 0 8px #f86e07",
                }} />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div style={{
        padding: "1rem 0.75rem 1.5rem",
        borderTop: "1px solid #1a1a2e",
      }}>
        <button
          onClick={handleLogout}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            padding: "0.65rem",
            borderRadius: "8px",
            border: "1px solid rgba(248,113,113,0.2)",
            background: "rgba(248,113,113,0.06)",
            color: "#f87171",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.85rem",
            cursor: "pointer",
            transition: "all 0.18s ease",
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
          <LogOut size={15} />
          Logout
        </button>

        <p style={{
          textAlign: "center",
          fontSize: "0.7rem",
          color: "#2e2e45",
          marginTop: "1rem",
          letterSpacing: "0.02em",
        }}>
          © 2026 Crafteck.in
        </p>
      </div>
    </aside>
  );
}

export default AdminSidebar;
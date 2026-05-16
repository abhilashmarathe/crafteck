import { Link, useLocation, useNavigate } from "react-router-dom";
import supabase from "../lib/supabase";
import { LayoutDashboard, PlusCircle, LogOut } from "lucide-react";

function AdminSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/login");
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
    <aside className="w-72 min-h-screen bg-slate-900 text-white p-8 flex flex-col shadow-2xl">

      <div>
        <h1 className="text-3xl font-black text-cyan-400">
          Crafteck
        </h1>
        <p className="text-slate-400 mt-1 text-sm">
          Admin Dashboard
        </p>
      </div>

      <nav className="mt-12 space-y-3 flex-1">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-5 py-4 rounded-2xl transition ${
                location.pathname === item.path
                  ? "bg-cyan-500 text-white"
                  : "hover:bg-slate-800"
              }`}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={handleLogout}
        className="mt-auto flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-4 rounded-2xl font-semibold transition"
      >
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
}

export default AdminSidebar;
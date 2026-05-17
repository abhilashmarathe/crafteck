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
    <aside className="w-72 min-h-screen sticky top-0 bg-slate-950 border-r border-slate-800 text-white flex flex-col">

      {/* Brand */}
      <div className="px-8 py-8 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="bg-[#f86e07] p-3 rounded-2xl">
            <FolderKanban size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-black">
              Crafteck
            </h1>
            <p className="text-slate-400 text-sm">
              Admin Panel
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-5 py-8 space-y-3">
        {menu.map((item) => {
          const Icon = item.icon;
          const active =
            location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                active
                  ? "bg-[#f86e07] shadow-lg shadow-[#f86e07]/30"
                  : "hover:bg-slate-900"
              }`}
            >
              <Icon
                size={20}
                className={
                  active
                    ? "text-white"
                    : "text-slate-400 group-hover:text-white"
                }
              />

              <span
                className={`font-medium ${
                  active
                    ? "text-white"
                    : "text-slate-300"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-5 border-t border-slate-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-4 rounded-2xl font-semibold transition"
        >
          <LogOut size={18} />
          Logout
        </button>

        <p className="text-center text-xs text-slate-500 mt-4">
          © 2026 Crafteck.in
        </p>
      </div>
    </aside>
  );
}

export default AdminSidebar;
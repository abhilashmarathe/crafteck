import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-10">
        Crafteck Admin
      </h2>

      <nav className="space-y-4">
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/projects">Projects</Link>
        <Link to="/admin/add-project">Add Project</Link>
      </nav>
    </aside>
  );
}

export default AdminSidebar;
import { useState } from "react";
import supabase from "../lib/supabase";
import AdminSidebar from "../components/AdminSidebar";

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

    if (url) {
      setForm({
        ...form,
        image: url,
      });
    }

    setLoading(false);
  }

  async function submit(e) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("projects")
      .insert([form]);

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert("Project added successfully");

      setForm({
        title: "",
        category: "",
        description: "",
        image: "",
        project_url: "",
      });
    }
  }

  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">

      <AdminSidebar />

      <main className="flex-1 p-10">

        <div className="mb-10">
          <p className="text-cyan-500 font-semibold uppercase tracking-widest">
            Project Management
          </p>

          <h1 className="text-5xl font-black mt-2 dark:text-white">
            Add New Project
          </h1>
        </div>

        <div className="max-w-3xl bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-2xl">

          <form onSubmit={submit} className="space-y-6">

            <input
              placeholder="Project Title"
              value={form.title}
              onChange={(e)=>
                setForm({...form,title:e.target.value})
              }
              className="w-full p-4 rounded-xl border dark:bg-slate-900 dark:text-white dark:border-slate-700"
              required
            />

            <input
              placeholder="Category"
              value={form.category}
              onChange={(e)=>
                setForm({...form,category:e.target.value})
              }
              className="w-full p-4 rounded-xl border dark:bg-slate-900 dark:text-white dark:border-slate-700"
              required
            />

            <div>
              <label className="block mb-2 font-medium dark:text-white">
                Upload Project Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="w-full p-4 rounded-xl border dark:bg-slate-900 dark:text-white dark:border-slate-700"
                required
              />
            </div>

            {form.image && (
              <img
                src={form.image}
                alt="preview"
                className="w-full h-56 object-cover rounded-2xl border"
              />
            )}

            <input
              placeholder="Project URL"
              value={form.project_url}
              onChange={(e)=>
                setForm({...form,project_url:e.target.value})
              }
              className="w-full p-4 rounded-xl border dark:bg-slate-900 dark:text-white dark:border-slate-700"
            />

            <textarea
              rows="5"
              placeholder="Project Description"
              value={form.description}
              onChange={(e)=>
                setForm({...form,description:e.target.value})
              }
              className="w-full p-4 rounded-xl border dark:bg-slate-900 dark:text-white dark:border-slate-700"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-400 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/30 transition"
            >
              {loading ? "Uploading..." : "Add Project"}
            </button>

          </form>
        </div>
      </main>
    </div>
  );
}

export default AddProject;
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
    <div className="flex min-h-screen bg-slate-100">

      <AdminSidebar />

      <main className="flex-1 p-6 md:p-10">

        {/* header */}
        <div className="mb-10">
          <p className="text-[#f86e07] font-semibold uppercase tracking-widest">
            Project Management
          </p>

          <h1 className="text-4xl md:text-5xl font-black mt-2">
            Add New Project
          </h1>

          <p className="text-slate-500 mt-2">
            Upload and publish a new portfolio project.
          </p>
        </div>

        {/* card */}
        <div className="max-w-4xl bg-white rounded-3xl shadow-xl p-8 md:p-10">

          <form onSubmit={submit} className="space-y-7">

            <InputField
              icon={<FolderPlus size={18} />}
              placeholder="Project Title"
              value={form.title}
              onChange={(e)=>
                setForm({...form,title:e.target.value})
              }
            />

            <InputField
              icon={<Layers size={18} />}
              placeholder="Project Category"
              value={form.category}
              onChange={(e)=>
                setForm({...form,category:e.target.value})
              }
            />

            {/* upload */}
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-3 block">
                Upload Project Image
              </label>

              <label className="border-2 border-dashed border-slate-300 hover:border-[#f86e07] rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer transition">
                <UploadCloud
                  size={40}
                  className="text-[#f86e07] mb-3"
                />

                <p className="text-slate-600">
                  Click to upload image
                </p>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="hidden"
                  required
                />
              </label>
            </div>

            {form.image && (
              <div>
                <p className="text-sm font-semibold mb-3">
                  Preview
                </p>

                <img
                  src={form.image}
                  alt="preview"
                  className="w-full h-72 object-cover rounded-2xl border"
                />
              </div>
            )}

            <InputField
              icon={<LinkIcon size={18} />}
              placeholder="Project URL"
              value={form.project_url}
              onChange={(e)=>
                setForm({...form,project_url:e.target.value})
              }
            />

            <div className="relative">
              <div className="absolute left-4 top-4 text-[#f86e07]">
                <FileText size={18} />
              </div>

              <textarea
                rows="6"
                placeholder="Project Description"
                value={form.description}
                onChange={(e)=>
                  setForm({...form,description:e.target.value})
                }
                required
                className="w-full pl-12 p-4 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-[#f86e07] outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#f86e07] hover:bg-[#e86200] text-white py-5 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-[#f86e07]/30 transition"
            >
              {loading ? "Uploading..." : "Add Project"}
            </button>

          </form>
        </div>
      </main>
    </div>
  );
}

function InputField({ icon, ...props }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-4 text-[#f86e07]">
        {icon}
      </div>

      <input
        {...props}
        required
        className="w-full pl-12 p-4 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-[#f86e07] outline-none"
      />
    </div>
  );
}

export default AddProject;
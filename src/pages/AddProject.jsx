import { useState } from "react";
import supabase from "../lib/supabase";

function AddProject() {
  const [form, setForm] = useState({
    title:"",
    category:"",
    description:"",
    image:"",
    project_url:""
  });

  async function submit(e){
    e.preventDefault();

    const { error } =
      await supabase.from("projects").insert([form]);

    if(error) alert(error.message);
    else alert("Project added");
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <input placeholder="Title" />
      <input placeholder="Category" />
      <input placeholder="Image URL" />
      <input placeholder="Project URL" />
      <textarea placeholder="Description" />
      <button>Add Project</button>
    </form>
  );
}

export default AddProject;
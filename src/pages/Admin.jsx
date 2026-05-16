import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../lib/supabase";
import AdminSidebar from "../components/AdminSidebar";

function Admin() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [projects, setProjects] = useState([]);
  const [tab, setTab] = useState("contacts");

  useEffect(() => {
    checkUser();
    fetchData();
  }, []);

  async function checkUser() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) navigate("/login");
  }

  async function fetchData() {
    const { data: leads } =
      await supabase.from("leads").select("*");

    const { data: quoteData } =
      await supabase.from("quotes").select("*");

    const { data: projectData } =
      await supabase.from("projects").select("*");

    setContacts(leads || []);
    setQuotes(quoteData || []);
    setProjects(projectData || []);
  }

  async function deleteProject(id) {
    await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    fetchData();
  }

  async function logout() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  return (
    <div className="flex bg-slate-50 dark:bg-slate-950 min-h-screen">

      <AdminSidebar />

      <main className="flex-1 p-8">

        <div className="flex justify-between mb-10">
          <h1 className="text-4xl font-bold dark:text-white">
            Admin Dashboard
          </h1>

          <button
            onClick={logout}
            className="bg-red-500 px-6 py-3 rounded-xl text-white"
          >
            Logout
          </button>
        </div>

        <div className="flex gap-4 mb-8">
          <button onClick={()=>setTab("contacts")}>
            Contacts
          </button>

          <button onClick={()=>setTab("quotes")}>
            Quotes
          </button>

          <button onClick={()=>setTab("projects")}>
            Projects
          </button>
        </div>

        {tab === "contacts" &&
          contacts.map((item)=>(
            <div key={item.id} className="p-4 bg-white rounded mb-3">
              {item.name} - {item.email}
            </div>
          ))
        }

        {tab === "quotes" &&
          quotes.map((item)=>(
            <div key={item.id} className="p-4 bg-white rounded mb-3">
              {item.name} - {item.service}
            </div>
          ))
        }

        {tab === "projects" &&
          projects.map((item)=>(
            <div
              key={item.id}
              className="p-4 bg-white rounded mb-3 flex justify-between"
            >
              <div>
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>

              <button
                onClick={()=>deleteProject(item.id)}
                className="bg-red-500 text-white px-4 rounded"
              >
                Delete
              </button>
            </div>
          ))
        }

      </main>
    </div>
  );
}

export default Admin;
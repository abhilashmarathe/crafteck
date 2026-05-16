import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../lib/supabase";

function Admin() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [quotes, setQuotes] = useState([]);
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
      await supabase.from("leads").select("*").order("id", { ascending:false });

    const { data: quoteData } =
      await supabase.from("quotes").select("*").order("id", { ascending:false });

    setContacts(leads || []);
    setQuotes(quoteData || []);
  }

  async function logout() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-950 p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold dark:text-white">
            Admin Dashboard
          </h1>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-6 py-3 rounded-xl"
          >
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-xl">
            <h3 className="text-2xl dark:text-white">Contact Leads</h3>
            <p className="text-5xl font-bold text-cyan-500 mt-4">
              {contacts.length}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-xl">
            <h3 className="text-2xl dark:text-white">Quote Requests</h3>
            <p className="text-5xl font-bold text-cyan-500 mt-4">
              {quotes.length}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={()=>setTab("contacts")}
            className={`px-6 py-3 rounded-xl ${
              tab==="contacts"
                ? "bg-cyan-500 text-white"
                : "bg-white dark:bg-slate-800 dark:text-white"
            }`}
          >
            Contact Leads
          </button>

          <button
            onClick={()=>setTab("quotes")}
            className={`px-6 py-3 rounded-xl ${
              tab==="quotes"
                ? "bg-cyan-500 text-white"
                : "bg-white dark:bg-slate-800 dark:text-white"
            }`}
          >
            Quote Leads
          </button>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xl overflow-auto">

          {tab === "contacts" && (
            <table className="w-full">
              <thead>
                <tr className="text-left dark:text-white">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((item)=>(
                  <tr key={item.id} className="border-t dark:text-gray-300">
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {tab === "quotes" && (
            <table className="w-full">
              <thead>
                <tr className="text-left dark:text-white">
                  <th>Name</th>
                  <th>Service</th>
                  <th>Budget</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {quotes.map((item)=>(
                  <tr key={item.id} className="border-t dark:text-gray-300">
                    <td>{item.name}</td>
                    <td>{item.service}</td>
                    <td>{item.budget}</td>
                    <td>{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

        </div>

      </div>
    </section>
  );
}

export default Admin;
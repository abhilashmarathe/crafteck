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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-950 dark:to-slate-900 px-6">
      <div className="w-full max-w-md p-10 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl shadow-2xl">

        <h1 className="text-4xl font-bold text-center dark:text-white">
          Admin Login
        </h1>

        <p className="text-center mt-3 text-gray-600 dark:text-gray-300">
          Login to Crafteck Dashboard
        </p>

        <form onSubmit={handleLogin} className="mt-10 space-y-6">

          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e)=>setForm({...form,email:e.target.value})}
            className="w-full p-4 rounded-xl border dark:bg-slate-900 dark:text-white"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={(e)=>setForm({...form,password:e.target.value})}
            className="w-full p-4 rounded-xl border dark:bg-slate-900 dark:text-white"
          />

          <button
            disabled={loading}
            className="w-full bg-[#f86e07] hover:bg-[#e86200] text-white py-4 rounded-xl"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </section>
  );
}

export default Login;
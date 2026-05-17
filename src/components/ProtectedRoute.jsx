import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import supabase from "../lib/supabase";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSession(session);
      setLoading(false);
    }

    checkSession();
  }, []);

  if (loading) return null;

  return session
    ? children
    : <Navigate to="/admin/login" replace />;
}

export default ProtectedRoute;
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { useEffect, useState } from "react";
import Loader from "./components/Loader";

import Quote from "./pages/Quote";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AddProject from "./pages/AddProject";

function App() {
  const [loading, setLoading] = useState(true);

  const dark =
    localStorage.getItem("theme") === "dark";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader dark={dark} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/add-project" element={<AddProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
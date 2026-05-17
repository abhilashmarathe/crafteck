import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import supabase from "../lib/supabase";

function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("leads")
      .insert([form]);

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert("Message sent successfully!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  }

  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-10 bg-white dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className="text-center mb-20"
        >
          <p className="text-[#f86e07] font-semibold uppercase tracking-widest">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 dark:text-white">
            Let’s Build Something Great
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Have a project in mind? Let’s talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left info */}
          <motion.div
            initial={{ opacity:0, x:-40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800 flex gap-4">
              <Mail className="text-[#f86e07]" />
              <div>
                <h3 className="font-semibold dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  mayureshnikam10@gmail.com
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800 flex gap-4">
              <Phone className="text-[#f86e07]" />
              <div>
                <h3 className="font-semibold dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +91 92846 77663
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800 flex gap-4">
              <MapPin className="text-[#f86e07]" />
              <div>
                <h3 className="font-semibold dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Kolhapur, Maharashtra, India 416013
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity:0, x:40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-3xl backdrop-blur-lg bg-white/70 dark:bg-slate-800/70 border border-white/20 shadow-xl"
          >
            <input
              className="w-full border p-4 rounded-xl bg-white dark:bg-slate-900 dark:text-white"
              placeholder="Your Name"
              value={form.name}
              onChange={(e)=>
                setForm({...form,name:e.target.value})
              }
            />

            <input
              type="email"
              className="w-full border p-4 rounded-xl bg-white dark:bg-slate-900 dark:text-white"
              placeholder="Your Email"
              value={form.email}
              onChange={(e)=>
                setForm({...form,email:e.target.value})
              }
            />

            <textarea
              rows="5"
              className="w-full border p-4 rounded-xl bg-white dark:bg-slate-900 dark:text-white"
              placeholder="Tell us about your project"
              value={form.message}
              onChange={(e)=>
                setForm({...form,message:e.target.value})
              }
            />

            <button
              disabled={loading}
              className="w-full bg-[#f86e07] hover:bg-[#e86200] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-[#f86e07]/30 transition-all"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
import { useState } from "react";
import supabase from "../lib/supabase";
import {
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  IndianRupee,
  FileText,
} from "lucide-react";

function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    requirements: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from("quotes")
      .insert([form]);

    if (error) {
      alert(error.message);
    } else {
      alert("Quote request submitted successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        requirements: "",
      });
    }

    setLoading(false);
  }

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#f86e07] font-semibold uppercase tracking-widest text-sm">
            Project Estimation
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mt-4 dark:text-white">
            Get a Free Quote
          </h1>

          <p className="mt-4 text-sm sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tell us about your project and our team will send you a tailored quote.
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-white/20">

          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

              <InputField
                icon={<User size={18} />}
                placeholder="Full Name"
                value={form.name}
                onChange={(e)=>setForm({...form,name:e.target.value})}
              />

              <InputField
                icon={<Mail size={18} />}
                placeholder="Email Address"
                value={form.email}
                onChange={(e)=>setForm({...form,email:e.target.value})}
              />

              <InputField
                icon={<Phone size={18} />}
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e)=>setForm({...form,phone:e.target.value})}
              />

              <InputField
                icon={<Building2 size={18} />}
                placeholder="Company Name"
                value={form.company}
                onChange={(e)=>setForm({...form,company:e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

              <SelectField
                icon={<Briefcase size={18} />}
                value={form.service}
                onChange={(e)=>setForm({...form,service:e.target.value})}
                placeholder="Select Service"
                options={[
                  "Web App Development",
                  "Mobile App Development",
                  "Software Development",
                  "ERP / CRM / CMS",
                  "SEO / AEO / GEO",
                  "Custom Website",
                  "SaaS Product",
                  "Management System"
                ]}
              />

              <SelectField
                icon={<IndianRupee size={18} />}
                value={form.budget}
                onChange={(e)=>setForm({...form,budget:e.target.value})}
                placeholder="Project Budget"
                options={[
                  "₹10k - ₹50k",
                  "₹50k - ₹1L",
                  "₹1L - ₹5L",
                  "₹5L+"
                ]}
              />
            </div>

            <div className="relative">
              <div className="absolute left-4 top-4 text-[#f86e07]">
                <FileText size={18} />
              </div>

              <textarea
                rows="6"
                placeholder="Describe your project requirements..."
                value={form.requirements}
                onChange={(e)=>setForm({...form,requirements:e.target.value})}
                className="w-full pl-12 p-4 rounded-2xl border bg-white dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f86e07]"
                required
              />
            </div>

            <button
              disabled={loading}
              className="w-full bg-[#f86e07] hover:bg-[#e86200] text-white py-4 md:py-5 rounded-2xl text-base md:text-lg font-semibold shadow-lg hover:shadow-[#f86e07]/30 transition"
            >
              {loading ? "Submitting..." : "Get Free Quote"}
            </button>

            <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Your information is secure. We respond within 24 hours.
            </p>

          </form>
        </div>
      </div>
    </section>
  );
}

/* reusable input */
function InputField({ icon, ...props }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-4 text-[#f86e07]">
        {icon}
      </div>
      <input
        {...props}
        required
        className="w-full pl-12 p-4 rounded-2xl border bg-white dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f86e07]"
      />
    </div>
  );
}

/* reusable select */
function SelectField({ icon, options, placeholder, ...props }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-4 text-[#f86e07] z-10">
        {icon}
      </div>
      <select
        {...props}
        required
        className="w-full pl-12 p-4 rounded-2xl border bg-white dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f86e07]"
      >
        <option value="">{placeholder}</option>
        {options.map((item, i) => (
          <option key={i}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default QuoteForm;
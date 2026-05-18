import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Terms() {
  return (
    <>
      <Navbar />

      <main className="pt-28 min-h-screen bg-slate-50 dark:bg-slate-950 px-6">
        <div className="max-w-4xl mx-auto py-16 text-slate-700 dark:text-gray-300">
          <h1 className="text-4xl font-bold mb-8 dark:text-white">
            Terms & Conditions
          </h1>

          <p>
            By accessing and using Crafteck.in services, you agree to comply
            with our terms and conditions.
          </p>

          <h2 className="text-2xl mt-8 mb-3 dark:text-white">
            Services
          </h2>
          <p>
            We provide website development, mobile apps, SaaS solutions,
            software development, and digital consulting services.
          </p>

          <h2 className="text-2xl mt-8 mb-3 dark:text-white">
            Payments
          </h2>
          <p>
            Project payments are milestone based unless otherwise agreed.
          </p>

          <h2 className="text-2xl mt-8 mb-3 dark:text-white">
            Liability
          </h2>
          <p>
            Crafteck.in is not liable for indirect losses or damages.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Terms;
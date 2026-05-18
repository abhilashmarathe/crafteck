import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Privacy() {
  return (
    <>
      <Navbar />

      <main className="pt-28 min-h-screen bg-slate-50 dark:bg-slate-950 px-6">
        <div className="max-w-4xl mx-auto py-16 text-slate-700 dark:text-gray-300">
          <h1 className="text-4xl font-bold mb-8 dark:text-white">
            Privacy Policy
          </h1>

          <p>
            We respect your privacy and protect your personal data.
          </p>

          <h2 className="text-2xl mt-8 mb-3 dark:text-white">
            Information Collected
          </h2>
          <p>
            Name, email, phone, project requirements and browsing activity.
          </p>

          <h2 className="text-2xl mt-8 mb-3 dark:text-white">
            How We Use It
          </h2>
          <p>
            To provide services, improve user experience, and communicate.
          </p>

          <h2 className="text-2xl mt-8 mb-3 dark:text-white">
            Security
          </h2>
          <p>
            Your data is stored securely and never sold to third parties.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Privacy;
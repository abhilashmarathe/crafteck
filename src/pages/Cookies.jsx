import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cookies() {
  return (
    <>
      <Navbar />

      <main className="pt-28 min-h-screen bg-slate-50 dark:bg-slate-950 px-6">
        <div className="max-w-4xl mx-auto py-16 text-slate-700 dark:text-gray-300">
          <h1 className="text-4xl font-bold mb-8 dark:text-white">
            Cookie Policy
          </h1>

          <p>
            We use cookies to improve your browsing experience.
          </p>

          <h2 className="text-2xl mt-8 mb-3 dark:text-white">
            Types of Cookies
          </h2>
          <p>
            Essential cookies, analytics cookies and preference cookies.
          </p>

          <h2 className="text-2xl mt-8 mb-3 dark:text-white">
            Your Choice
          </h2>
          <p>
            You can accept, decline or ignore cookies anytime.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Cookies;
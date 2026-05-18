import { useEffect, useState } from "react";

function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem("cookies");
    if (!choice) setShow(true);
  }, []);

  function handleChoice(value) {
    localStorage.setItem("cookies", value);
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 md:right-auto md:max-w-md z-[999] bg-white dark:bg-slate-900 shadow-2xl rounded-3xl p-6 border dark:border-slate-700">
      <h3 className="text-lg font-bold dark:text-white">
        🍪 Cookie Preferences
      </h3>

      <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
        We use cookies to improve your experience on Crafteck.in.
      </p>

      <div className="flex gap-3 mt-5">
        <button
          onClick={() => handleChoice("accepted")}
          className="flex-1 bg-[#f86e07] text-white py-2 rounded-xl"
        >
          Accept
        </button>

        <button
          onClick={() => handleChoice("declined")}
          className="flex-1 bg-slate-200 dark:bg-slate-700 py-2 rounded-xl"
        >
          Decline
        </button>

        <button
          onClick={() => setShow(false)}
          className="flex-1 bg-slate-100 dark:bg-slate-800 py-2 rounded-xl"
        >
          Ignore
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
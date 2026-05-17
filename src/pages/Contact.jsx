import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Contact from "../components/Contact";

function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20 sm:pt-24 md:pt-28 min-h-screen bg-white dark:bg-slate-950 transition-colors">
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default ContactPage;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ServicesComponent from "../components/Services";

function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 min-h-screen bg-white dark:bg-slate-950 transition-colors">
        <ServicesComponent limit={false} />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default ServicesPage;
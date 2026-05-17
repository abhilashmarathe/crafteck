import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import PortfolioComponent from "../components/Portfolio";

function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20 sm:pt-24 md:pt-28 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
        <PortfolioComponent limit={false} />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default PortfolioPage;
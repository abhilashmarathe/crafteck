import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import QuoteForm from "../components/QuoteForm";

function QuotePage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 min-h-screen">
        <QuoteForm />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default QuotePage;
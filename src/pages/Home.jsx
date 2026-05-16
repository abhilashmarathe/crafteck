import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services limit={true} />
      <Stats />
      <Portfolio limit={true}/>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default Home;
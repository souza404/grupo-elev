import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import PropertyCatalog from "@/components/PropertyCatalog";
import Builders from "@/components/Builders";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Benefits />
        <PropertyCatalog />
        <Builders />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

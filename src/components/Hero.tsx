import { Button } from "@/components/ui/button";
import { Phone, Search } from "lucide-react";
import heroBuildingImage from "@/assets/hero-building.jpg";

const WHATSAPP_NUMBER = "+5511999999999";

const Hero = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Vi o site do Grupo ELEV e gostaria de mais informações.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const scrollToCatalog = () => {
    document.getElementById("imoveis")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBuildingImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Encontre o seu próximo{" "}
            <span className="text-primary">imóvel</span> com o{" "}
            <span className="text-primary">Grupo ELEV</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Seleção criteriosa, atendimento consultivo e parcerias com as melhores construtoras.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="btn-whatsapp px-8 py-4 text-lg font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
            
            <Button 
              onClick={scrollToCatalog}
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Search className="w-5 h-5 mr-2" />
              Ver catálogo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div className="space-y-2 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-primary drop-shadow-sm">500+</div>
              <div className="text-sm text-white/90">Imóveis vendidos</div>
            </div>
            <div className="space-y-2 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-primary drop-shadow-sm">15+</div>
              <div className="text-sm text-white/90">Construtoras parceiras</div>
            </div>
            <div className="space-y-2 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-primary drop-shadow-sm">10</div>
              <div className="text-sm text-white/90">Anos de experiência</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
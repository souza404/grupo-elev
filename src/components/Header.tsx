import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import elevLogo from "@/assets/elev-logo.png";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "+5511999999999";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: "Início", href: "#inicio", action: () => navigate("/") },
    { name: "Sobre", href: "#sobre", action: () => { navigate("/"); setTimeout(() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" }), 100); } },
    { name: "Benefícios", href: "#beneficios", action: () => { navigate("/"); setTimeout(() => document.getElementById("beneficios")?.scrollIntoView({ behavior: "smooth" }), 100); } },
    { name: "Imóveis", href: "#imoveis", action: () => { navigate("/"); setTimeout(() => document.getElementById("imoveis")?.scrollIntoView({ behavior: "smooth" }), 100); } },
    { name: "Construtoras", href: "#construtoras", action: () => { navigate("/"); setTimeout(() => document.getElementById("construtoras")?.scrollIntoView({ behavior: "smooth" }), 100); } },
    { name: "Contato", href: "/contato", action: () => navigate("/contato") },
  ];

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Vi o site do Grupo ELEV e gostaria de mais informações.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer" 
            onClick={() => navigate("/")}
          >
            <img 
              src={elevLogo} 
              alt="Grupo ELEV" 
              className="w-8 h-8"
            />
            <h1 className="text-2xl font-montserrat font-bold text-foreground">
              Grupo <span className="text-primary">ELEV</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <div className="hidden md:block">
            <Button 
              onClick={openWhatsApp}
              className="btn-whatsapp"
              size="sm"
            >
              <FaWhatsapp className="w-4 h-4 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-64 pb-4" : "max-h-0"
        )}>
          <nav className="flex flex-col space-y-3 pt-4 border-t border-border">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  item.action();
                  setIsMenuOpen(false);
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1 text-left"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => {
                openWhatsApp();
                setIsMenuOpen(false);
              }}
              className="btn-whatsapp mt-3 w-full"
              size="sm"
            >
              <FaWhatsapp className="w-4 h-4 mr-2" />
              Falar no WhatsApp
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
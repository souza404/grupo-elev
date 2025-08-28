import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Linkedin,
  ArrowUp
} from "lucide-react";
import { FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Vi o site do Grupo ELEV e gostaria de mais informações.");
    window.open(`https://wa.me/+5511999999999?text=${message}`, "_blank");
  };

  const navigationLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Imóveis", href: "#imoveis" },
    { name: "Construtoras", href: "#construtoras" },
    { name: "Contato", href: "#contato" },
  ];

  const legalLinks = [
    { name: "Política de Privacidade", href: "#" },
    { name: "Termos de Uso", href: "#" },
    { name: "LGPD", href: "#" },
    { name: "Trabalhe Conosco", href: "#" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/grupoelev",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/grupoelev",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/grupoelev",
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Building2 className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-montserrat font-bold">
                  Grupo <span className="text-primary">ELEV</span>
                </h3>
              </div>
              
              <p className="text-background/80 leading-relaxed">
                Elevando padrões, realizando sonhos. Conectamos pessoas aos melhores 
                empreendimentos com transparência e excelência.
              </p>

              <Button 
                onClick={openWhatsApp}
                className="btn-whatsapp"
              >
                <FaWhatsapp className="w-4 h-4 mr-2" />
                Falar no WhatsApp
              </Button>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-montserrat font-semibold">
                Navegação
              </h4>
              <nav className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-background/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-montserrat font-semibold">
                Contato
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-background/80">
                    <div>Av. Exemplo, 1234</div>
                    <div>São Paulo, SP - 01234-567</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="w-5 h-5 text-primary" />
                  <div className="text-background/80">(11) 99999-9999</div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div className="text-background/80">contato@grupoelev.com.br</div>
                </div>
              </div>
            </div>

            {/* Social Media & Legal */}
            <div className="space-y-6">
              <h4 className="text-lg font-montserrat font-semibold">
                Redes Sociais
              </h4>
              
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="border-background/20 text-background/80 hover:text-primary hover:border-primary bg-transparent"
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    <social.icon className="w-5 h-5" />
                  </Button>
                ))}
              </div>

              <div className="space-y-2">
                <h5 className="font-semibold text-sm">Links Úteis</h5>
                <nav className="space-y-2">
                  {legalLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block text-sm text-background/60 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>

        <Separator className="border-background/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-background/60 text-center md:text-left">
              <div>© 2024 Grupo ELEV. Todos os direitos reservados.</div>
              <div className="mt-1">
                CNPJ: 12.345.678/0001-90 | CRECI: 123456-F
              </div>
            </div>

            {/* Back to Top */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-background/20 text-background/80 hover:text-primary hover:border-primary bg-transparent"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Voltar ao topo
            </Button>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <Button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full btn-whatsapp shadow-lg hover:shadow-xl z-40 p-0"
        size="icon"
      >
        <FaWhatsapp className="w-7 h-7" />
      </Button>
    </footer>
  );
};

export default Footer;
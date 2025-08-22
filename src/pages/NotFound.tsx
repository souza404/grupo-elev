import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-2xl font-montserrat font-bold text-foreground mb-2">
            Página não encontrada
          </h1>
          <p className="text-muted-foreground">
            A página que você está procurando não existe ou foi removida.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.location.href = "/"}
            className="btn-gold"
          >
            <Home className="w-4 h-4 mr-2" />
            Voltar ao início
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => {
              window.location.href = "/";
              setTimeout(() => {
                document.getElementById("imoveis")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
          >
            <Search className="w-4 h-4 mr-2" />
            Ver imóveis
          </Button>
        </div>

        <div className="mt-8 p-4 bg-muted/30 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Procurando por um imóvel específico? Use nossa busca na página inicial 
            ou entre em contato conosco pelo WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

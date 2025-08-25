import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Bed, 
  Bath, 
  Car, 
  Ruler, 
  MapPin, 
  MessageCircle, 
  Calendar,
  Building2,
  ChevronLeft,
  ChevronRight,
  Loader2
} from "lucide-react";
import { Property } from "@/data/properties";
import { useProperty, useProperties } from "@/hooks/useProperties";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";

const PropertyDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data: property, isLoading, error } = useProperty(slug!);
  const { data: allProperties = [] } = useProperties();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Redirect to home if property not found or error
  if (error || (!isLoading && !property)) {
    navigate("/");
    return null;
  }
  
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin" />
              <span className="ml-2">Carregando imóvel...</span>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return null;
  }

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "LANÇAMENTO":
        return "badge-lancamento";
      case "EM OBRAS":
        return "badge-obras";
      case "PRONTO":
        return "badge-pronto";
      case "DISPONÍVEL":
        return "badge-disponivel";
      case "RESERVADO":
        return "badge-reservado";
      case "VENDIDO":
        return "badge-vendido";
      default:
        return "badge-disponivel";
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Olá! Tenho interesse no imóvel ${property.nome}. Gostaria de mais informações e agendar uma visita.`);
    
    // Handle WhatsApp link - could be full URL or just number
    let whatsappUrl = property.link_whatsapp;
    if (!whatsappUrl.startsWith('http')) {
      // If it's just a number, convert to wa.me format
      const cleanNumber = whatsappUrl.replace(/\D/g, '');
      whatsappUrl = `https://wa.me/${cleanNumber}`;
    }
    
    // Add message parameter
    const separator = whatsappUrl.includes('?') ? '&' : '?';
    window.open(`${whatsappUrl}${separator}text=${message}`, "_blank");
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.galeria.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.galeria.length - 1 : prev - 1
    );
  };

  // Get similar properties
  const similarProperties = allProperties
    .filter(p => p.id !== property.id && (p.tipo === property.tipo || p.bairro === property.bairro))
    .slice(0, 3);

  const isVendido = property.status === "VENDIDO";

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 hover:bg-muted"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o catálogo
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Image Gallery */}
            <div className="lg:col-span-2 space-y-4">
              {/* Main Image */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted">
                <img
                  src={property.galeria[currentImageIndex]}
                  alt={`${property.nome} - Imagem ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Status Badge */}
                <Badge 
                  className={cn(
                    "absolute top-4 left-4 font-medium",
                    getStatusBadgeClass(property.status)
                  )}
                >
                  {property.status}
                </Badge>

                {/* Navigation Arrows */}
                {property.galeria.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {property.galeria.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {property.galeria.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn(
                        "flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors",
                        currentImageIndex === index ? "border-primary" : "border-border"
                      )}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Property Info */}
            <div className="space-y-6">
              {/* Basic Info */}
              <Card className="card-elegant">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h1 className="text-2xl font-montserrat font-bold text-foreground mb-2">
                      {property.nome}
                    </h1>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.bairro}, {property.cidade}
                    </div>
                  </div>

                  <Separator />

                  {/* Price */}
                  <div className="text-3xl font-montserrat font-bold text-primary">
                    {property.preco}
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{property.dormitorios} dormitórios</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{property.banheiros} banheiros</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{property.vagas} vagas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{property.area_m2}m²</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Builder */}
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{property.construtora}</span>
                  </div>

                  {/* Type */}
                  <div className="text-sm text-muted-foreground">
                    Tipo: {property.tipo}
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button 
                  onClick={openWhatsApp}
                  className={cn(
                    "w-full",
                    isVendido ? "btn-whatsapp opacity-50" : "btn-whatsapp"
                  )}
                  size="lg"
                  disabled={isVendido}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {isVendido ? "Imóvel vendido" : "Falar no WhatsApp"}
                </Button>
                
                {!isVendido && (
                  <Button 
                    variant="outline"
                    onClick={openWhatsApp}
                    className="w-full"
                    size="lg"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar visita
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-12">
            <Card className="card-elegant">
              <CardContent className="p-6">
                <h2 className="text-xl font-montserrat font-semibold mb-4">
                  Sobre o imóvel
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.descricao_curta}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Similar Properties */}
          {similarProperties.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-montserrat font-bold text-foreground mb-8 text-center">
                Outros imóveis que você pode gostar
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {similarProperties.map((similarProperty) => (
                  <PropertyCard
                    key={similarProperty.id}
                    property={similarProperty}
                    onViewDetails={(slug) => navigate(`/imovel/${slug}`)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
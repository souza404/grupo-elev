import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bed, Bath, Car, Ruler, MapPin, MessageCircle, Eye } from "lucide-react";
import { Property } from "@/data/properties";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  onViewDetails?: (slug: string) => void;
}

const PropertyCard = ({ property, onViewDetails }: PropertyCardProps) => {
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
    const message = encodeURIComponent(`Olá! Tenho interesse no imóvel ${property.nome}. Gostaria de mais informações.`);
    
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

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(property.slug);
    }
  };

  const isVendido = property.status === "VENDIDO";

  return (
    <Card className="card-elegant hover-lift overflow-hidden group">
      <div className="relative">
        {/* Property Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={property.imagem_url}
            alt={`${property.nome} - ${property.cidade}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Status Badge */}
        <Badge 
          className={cn(
            "absolute top-3 left-3 font-medium",
            getStatusBadgeClass(property.status)
          )}
        >
          {property.status}
        </Badge>

        {/* Quick Actions - Show on hover */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0 bg-background/80 backdrop-blur-sm"
              onClick={handleViewDetails}
            >
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Property Name */}
        <div className="space-y-1">
          <h3 className="font-montserrat font-semibold text-lg leading-tight line-clamp-2">
            {property.nome}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            {property.bairro}, {property.cidade}
          </div>
        </div>

        {/* Property Features */}
        <div className="grid grid-cols-4 gap-2 py-2">
          <div className="flex items-center justify-center text-xs text-muted-foreground">
            <Bed className="w-3 h-3 mr-1" />
            {property.dormitorios}
          </div>
          <div className="flex items-center justify-center text-xs text-muted-foreground">
            <Bath className="w-3 h-3 mr-1" />
            {property.banheiros}
          </div>
          <div className="flex items-center justify-center text-xs text-muted-foreground">
            <Car className="w-3 h-3 mr-1" />
            {property.vagas}
          </div>
          <div className="flex items-center justify-center text-xs text-muted-foreground">
            <Ruler className="w-3 h-3 mr-1" />
            {property.area_m2}m²
          </div>
        </div>

        {/* Price */}
        <div className="py-2">
          <div className="text-xl font-bold text-primary font-montserrat">
            {property.preco}
          </div>
          <div className="text-xs text-muted-foreground">
            {property.tipo} • {property.construtora}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={handleViewDetails}
            disabled={isVendido}
          >
            <Eye className="w-4 h-4 mr-2" />
            Ver detalhes
          </Button>
          <Button
            size="sm"
            className={cn(
              "flex-1",
              isVendido ? "btn-whatsapp opacity-50" : "btn-whatsapp"
            )}
            onClick={openWhatsApp}
            disabled={isVendido}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            {isVendido ? "Vendido" : "WhatsApp"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
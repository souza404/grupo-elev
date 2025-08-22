import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import PropertyCard from "./PropertyCard";
import { properties, Property } from "@/data/properties";

const PropertyCatalog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("TODOS");
  const [typeFilter, setTypeFilter] = useState("TODOS");
  const [bedroomsFilter, setBedroomsFilter] = useState("TODOS");
  const [priceRangeFilter, setPriceRangeFilter] = useState("TODOS");
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique values for filters
  const uniqueTypes = [...new Set(properties.map(p => p.tipo))];
  const uniqueBedrooms = [...new Set(properties.map(p => p.dormitorios))].sort((a, b) => a - b);

  // Filter properties based on search and filters
  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      // Search filter
      const searchMatch = !searchTerm || 
        property.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.bairro.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.cidade.toLowerCase().includes(searchTerm.toLowerCase());

      // Status filter
      const statusMatch = statusFilter === "TODOS" || property.status === statusFilter;

      // Type filter
      const typeMatch = typeFilter === "TODOS" || property.tipo === typeFilter;

      // Bedrooms filter
      const bedroomsMatch = bedroomsFilter === "TODOS" || property.dormitorios.toString() === bedroomsFilter;

      // Price range filter (simplified)
      const priceMatch = priceRangeFilter === "TODOS" || (() => {
        const priceNum = parseInt(property.preco.replace(/[^\d]/g, ''));
        switch (priceRangeFilter) {
          case "0-500000": return priceNum <= 500000;
          case "500000-1000000": return priceNum > 500000 && priceNum <= 1000000;
          case "1000000-2000000": return priceNum > 1000000 && priceNum <= 2000000;
          case "2000000+": return priceNum > 2000000;
          default: return true;
        }
      })();

      return searchMatch && statusMatch && typeMatch && bedroomsMatch && priceMatch;
    });
  }, [searchTerm, statusFilter, typeFilter, bedroomsFilter, priceRangeFilter]);

  const handleViewDetails = (slug: string) => {
    navigate(`/imovel/${slug}`);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("TODOS");
    setTypeFilter("TODOS");
    setBedroomsFilter("TODOS");
    setPriceRangeFilter("TODOS");
  };

  return (
    <section id="imoveis" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
              Catálogo de <span className="text-primary">Imóveis</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore nossa seleção criteriosa de imóveis com as melhores condições do mercado.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card rounded-2xl p-6 mb-8 shadow-card">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Buscar por nome, bairro ou cidade..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filtros
                {showFilters && <span className="text-xs">(Aberto)</span>}
              </Button>
            </div>

            {/* Filter Controls */}
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-border">
                {/* Status Filter */}
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TODOS">Todos os status</SelectItem>
                    <SelectItem value="LANÇAMENTO">Lançamento</SelectItem>
                    <SelectItem value="EM OBRAS">Em obras</SelectItem>
                    <SelectItem value="PRONTO">Pronto</SelectItem>
                    <SelectItem value="VENDIDO">Vendido</SelectItem>
                  </SelectContent>
                </Select>

                {/* Type Filter */}
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TODOS">Todos os tipos</SelectItem>
                    {uniqueTypes.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Bedrooms Filter */}
                <Select value={bedroomsFilter} onValueChange={setBedroomsFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Dormitórios" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TODOS">Qualquer quantidade</SelectItem>
                    {uniqueBedrooms.map(num => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'dormitório' : 'dormitórios'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Price Range Filter */}
                <Select value={priceRangeFilter} onValueChange={setPriceRangeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Faixa de preço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TODOS">Todas as faixas</SelectItem>
                    <SelectItem value="0-500000">Até R$ 500 mil</SelectItem>
                    <SelectItem value="500000-1000000">R$ 500 mil - R$ 1 mi</SelectItem>
                    <SelectItem value="1000000-2000000">R$ 1 mi - R$ 2 mi</SelectItem>
                    <SelectItem value="2000000+">Acima de R$ 2 mi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Results Summary */}
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
              <span className="text-sm text-muted-foreground">
                {filteredProperties.length} {filteredProperties.length === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}
              </span>
              
              {(searchTerm || statusFilter !== "TODOS" || typeFilter !== "TODOS" || bedroomsFilter !== "TODOS" || priceRangeFilter !== "TODOS") && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Limpar filtros
                </Button>
              )}
            </div>
          </div>

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Nenhum imóvel encontrado
              </h3>
              <p className="text-muted-foreground mb-4">
                Tente ajustar os filtros ou fazer uma nova busca.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                <Filter className="w-4 h-4 mr-2" />
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertyCatalog;
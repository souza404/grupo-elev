import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Building2 } from "lucide-react";
import { construtoras } from "@/data/properties";

const Builders = () => {
  const handleBuilderClick = (builderName: string, siteUrl?: string) => {
    if (siteUrl && siteUrl !== "https://exemplo.com") {
      window.open(siteUrl, "_blank");
    } else {
      // Scroll to contact section if no real URL
      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="construtoras" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
              Construtoras <span className="text-primary">Parceiras</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trabalhamos com as melhores construtoras do mercado para garantir 
              qualidade e confiança em cada empreendimento.
            </p>
          </div>

          {/* Builders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {construtoras.map((construtora, index) => (
              <Card 
                key={index}
                className="card-elegant hover-lift group cursor-pointer"
                onClick={() => handleBuilderClick(construtora.nome, construtora.site_url)}
              >
                <CardContent className="p-8 text-center space-y-6">
                  {/* Logo */}
                  <div className="aspect-[2/1] bg-gradient-to-br from-muted/30 to-muted/60 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={construtora.logo_url}
                      alt={`Logo ${construtora.nome}`}
                      className="max-w-full max-h-full object-contain filter group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Company Info */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-montserrat font-semibold text-foreground">
                      {construtora.nome}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {construtora.sobre}
                    </p>
                    
                    {construtora.qtd_empreendimentos && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                        <Building2 className="w-3 h-3 text-primary" />
                        <span className="text-xs font-medium text-primary">
                          {construtora.qtd_empreendimentos} empreendimentos
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Action Indicator */}
                  <div className="pt-2">
                    <div className="flex items-center justify-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Saber mais</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                  Por que nossas parcerias fazem a diferença?
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Acesso exclusivo a lançamentos antes do mercado geral</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Condições especiais de pagamento e descontos únicos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Garantia de qualidade e cumprimento de prazos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Suporte técnico especializado durante todo o processo</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-16 h-16 text-primary" />
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Parcerias estratégicas
                </p>
                <p className="text-muted-foreground text-sm">
                  Relacionamentos construídos com base na confiança e resultados mútuos
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button 
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="btn-gold px-8"
            >
              Fale conosco sobre parcerias
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Builders;
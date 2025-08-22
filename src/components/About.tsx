import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Building2,
      number: "500+",
      label: "Imóveis vendidos",
      description: "Clientes satisfeitos com nossa consultoria especializada"
    },
    {
      icon: Users,
      number: "15+",
      label: "Construtoras parceiras",
      description: "Parcerias sólidas com as melhores do mercado"
    },
    {
      icon: Award,
      number: "10",
      label: "Anos de experiência",
      description: "Década de excelência no mercado imobiliário"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Satisfação dos clientes",
      description: "Índice de aprovação em todas as nossas transações"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
              Quem somos
            </h2>
            <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                O Grupo ELEV conecta pessoas aos melhores empreendimentos, com curadoria técnica, 
                transparência e suporte do primeiro contato à assinatura. Trabalhamos com as 
                principais construtoras para entregar segurança, valorização e uma experiência sem atritos.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa missão é transformar o sonho da casa própria em realidade, oferecendo um 
                atendimento consultivo que vai além da venda. Acreditamos que cada cliente merece 
                uma experiência única e personalizada, desde a primeira conversa até as chaves na mão.
              </p>

              <div className="pt-4">
                <div className="inline-block px-6 py-3 bg-primary/10 rounded-lg">
                  <p className="text-primary font-semibold">
                    "Elevando padrões, realizando sonhos"
                  </p>
                </div>
              </div>
            </div>

            {/* Image/Visual Element */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-card p-8 flex items-center justify-center shadow-elegant">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <Building2 className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-foreground">
                    Grupo ELEV
                  </h3>
                  <p className="text-muted-foreground">
                    Excelência em cada negociação
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="card-elegant text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-montserrat font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-2">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground leading-tight">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
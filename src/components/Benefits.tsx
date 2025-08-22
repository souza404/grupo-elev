import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  FileText, 
  Calculator, 
  Calendar 
} from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Curadoria de empreendimentos",
      description: "Selecionamos apenas os melhores projetos com potencial de valorização e qualidade comprovada."
    },
    {
      icon: TrendingUp,
      title: "Negociação com benefícios exclusivos",
      description: "Condições especiais e descontos exclusivos que só conseguimos através das nossas parcerias."
    },
    {
      icon: Shield,
      title: "Acompanhamento do início ao pós-venda",
      description: "Suporte completo em todas as etapas, desde a primeira visita até a entrega das chaves."
    },
    {
      icon: FileText,
      title: "Transparência total na documentação",
      description: "Análise completa de toda documentação, garantindo segurança jurídica em sua compra."
    },
    {
      icon: Calculator,
      title: "Simulação financeira personalizada",
      description: "Ajudamos você a encontrar a melhor condição de financiamento para seu perfil."
    },
    {
      icon: Calendar,
      title: "Facilidade no agendamento de visitas",
      description: "Organize visitas nos horários que funcionam para você, incluindo fins de semana."
    }
  ];

  return (
    <section id="beneficios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
              Por que comprar com a <span className="text-primary">ELEV</span>?
            </h2>
            <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos muito mais que uma simples venda. Nossa abordagem consultiva 
              garante que você tome a melhor decisão para seu futuro.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="card-elegant hover-lift group"
              >
                <CardContent className="p-8 text-center space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-montserrat font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="inline-block p-8 bg-gradient-card rounded-2xl shadow-elegant">
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                Pronto para encontrar seu próximo imóvel?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Nossa equipe está preparada para te ajudar a encontrar o imóvel perfeito 
                com toda segurança e transparência.
              </p>
              
              {/* Trust indicators */}
              <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Sem custo adicional
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Atendimento personalizado
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Suporte pós-venda
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
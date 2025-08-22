import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
              Entre em <span className="text-primary">Contato</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para ajudar você a encontrar o imóvel perfeito. 
              Fale conosco através dos canais abaixo.
            </p>
          </div>

          {/* Contact Component */}
          <div className="mb-16">
            <Contact />
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Office Info */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Nosso Escritório
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">Endereço:</p>
                  <p className="text-muted-foreground">
                    Av. Exemplo, 1234<br />
                    Bela Vista, São Paulo - SP<br />
                    CEP: 01234-567
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Horário de funcionamento:</p>
                    <p>Segunda à Sexta: 9h às 18h</p>
                    <p>Sábado: 9h às 14h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat">
                  Formas de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Telefone / WhatsApp</p>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-muted-foreground">contato@grupoelev.com.br</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong>Atendimento preferencial via WhatsApp:</strong><br />
                    Resposta mais rápida e atendimento personalizado para suas dúvidas sobre imóveis.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat">
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Mapa do Google</p>
                    <p className="text-sm">
                      Integração com Google Maps será implementada<br />
                      com o endereço real do escritório
                    </p>
                  </div>
                </div>
                
                {/* Directions */}
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2">Como chegar:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Estação de metrô mais próxima: Anhangabaú (Linha Vermelha)</li>
                    <li>• Diversas linhas de ônibus passam pela região</li>
                    <li>• Estacionamento pago disponível nas proximidades</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
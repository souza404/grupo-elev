import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Linkedin,
  CheckCircle,
  Send
} from "lucide-react";
import { maskPhone, validateEmail, validatePhone } from "@/utils/formatters";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "+5511999999999";
const EMAIL_CONTACT = "contato@grupoelev.com.br";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    lgpdConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Vi o site do Grupo ELEV e gostaria de mais informações.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === 'telefone') {
      value = maskPhone(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validations
    if (!formData.nome.trim()) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha seu nome.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Erro no formulário", 
        description: "Por favor, insira um email válido.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (!validatePhone(formData.telefone)) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, insira um telefone válido.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.mensagem.trim()) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, escreva uma mensagem.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.lgpdConsent) {
      toast({
        title: "Erro no formulário",
        description: "É necessário autorizar o contato conforme LGPD.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Mensagem enviada!",
      description: "Recebemos sua mensagem. Entraremos em contato em breve.",
    });

    // Reset form
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
      lgpdConsent: false
    });

    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/grupoelev",
      color: "hover:text-pink-500"
    },
    {
      name: "Facebook", 
      icon: Facebook,
      url: "https://facebook.com/grupoelev",
      color: "hover:text-blue-600"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/grupoelev",
      color: "hover:text-blue-700"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
              Fale com a <span className="text-primary">ELEV</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para ajudar você a encontrar o imóvel dos seus sonhos. 
              Entre em contato conosco!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* WhatsApp Highlight */}
            <Card className="card-elegant">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-[#25D366]" />
                </div>
                <CardTitle className="text-xl font-montserrat">
                  Atendimento via WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Fale diretamente com nossos consultores especialistas.
                </p>
                <Button 
                  onClick={openWhatsApp}
                  className="btn-whatsapp w-full"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Iniciar conversa
                </Button>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Resposta imediata
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Atendimento personalizado
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-montserrat">
                    Envie sua mensagem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome completo *</Label>
                        <Input
                          id="nome"
                          value={formData.nome}
                          onChange={(e) => handleInputChange('nome', e.target.value)}
                          placeholder="Seu nome"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input
                        id="telefone"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange('telefone', e.target.value)}
                        placeholder="(11) 99999-9999"
                        maxLength={15}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        value={formData.mensagem}
                        onChange={(e) => handleInputChange('mensagem', e.target.value)}
                        placeholder="Conte-nos como podemos ajudar..."
                        rows={4}
                        required
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="lgpd"
                        checked={formData.lgpdConsent}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, lgpdConsent: !!checked }))
                        }
                      />
                      <Label htmlFor="lgpd" className="text-sm leading-relaxed">
                        Autorizo o contato da Grupo ELEV através dos dados informados, 
                        conforme a Lei Geral de Proteção de Dados (LGPD). *
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full btn-gold"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Enviando...</>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Enviar mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Contact Details */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat">
                  Outros canais de contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">E-mail</div>
                    <div className="text-muted-foreground">{EMAIL_CONTACT}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Telefone</div>
                    <div className="text-muted-foreground">(11) 99999-9999</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat">
                  Redes sociais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className={`w-16 h-16 p-0 ${social.color} transition-colors`}
                      onClick={() => window.open(social.url, "_blank")}
                    >
                      <social.icon className="w-6 h-6" />
                    </Button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Siga-nos nas redes sociais para novidades e lançamentos exclusivos.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              * Imagens meramente ilustrativas. Sujeito a disponibilidade e alteração de valores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
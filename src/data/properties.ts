export interface Property {
  id: string;
  nome: string;
  status: "LANÇAMENTO" | "EM OBRAS" | "PRONTO" | "VENDIDO";
  imagem_url: string;
  galeria: string[];
  preco: string;
  cidade: string;
  bairro: string;
  tipo: string;
  dormitorios: number;
  banheiros: number;
  vagas: number;
  area_m2: number;
  construtora: string;
  descricao_curta: string;
  slug: string;
  link_whatsapp: string;
}

// Mock data - Em produção, isso viria de uma API ou planilha
export const properties: Property[] = [
  {
    id: "1",
    nome: "Residencial Vista Dourada",
    status: "LANÇAMENTO",
    imagem_url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    galeria: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop"
    ],
    preco: "R$ 850.000",
    cidade: "São Paulo",
    bairro: "Vila Madalena",
    tipo: "Apartamento",
    dormitorios: 3,
    banheiros: 2,
    vagas: 2,
    area_m2: 95,
    construtora: "Construtora Premium",
    descricao_curta: "Apartamento moderno com acabamento premium e localização privilegiada na Vila Madalena.",
    slug: "residencial-vista-dourada",
    link_whatsapp: "+5511999999999"
  },
  {
    id: "2",
    nome: "Condomínio Parque das Flores",
    status: "EM OBRAS",
    imagem_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    galeria: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop"
    ],
    preco: "R$ 1.200.000",
    cidade: "São Paulo",
    bairro: "Jardins",
    tipo: "Apartamento",
    dormitorios: 4,
    banheiros: 3,
    vagas: 3,
    area_m2: 150,
    construtora: "Construtora Elite",
    descricao_curta: "Apartamento de alto padrão com vista panorâmica nos Jardins.",
    slug: "condominio-parque-das-flores",
    link_whatsapp: "+5511999999999"
  },
  {
    id: "3",
    nome: "Casa Moderna Alphaville",
    status: "PRONTO",
    imagem_url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
    galeria: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
    ],
    preco: "R$ 2.500.000",
    cidade: "Barueri",
    bairro: "Alphaville",
    tipo: "Casa",
    dormitorios: 5,
    banheiros: 4,
    vagas: 4,
    area_m2: 300,
    construtora: "Construtora Exclusive",
    descricao_curta: "Casa de luxo com arquitetura contemporânea em condomínio fechado.",
    slug: "casa-moderna-alphaville",
    link_whatsapp: "+5511999999999"
  },
  {
    id: "4",
    nome: "Loft Industrial Brooklin",
    status: "PRONTO",
    imagem_url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    galeria: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"
    ],
    preco: "R$ 650.000",
    cidade: "São Paulo",
    bairro: "Brooklin",
    tipo: "Loft",
    dormitorios: 1,
    banheiros: 1,
    vagas: 1,
    area_m2: 55,
    construtora: "Construtora Urban",
    descricao_curta: "Loft moderno com conceito industrial no coração do Brooklin.",
    slug: "loft-industrial-brooklin",
    link_whatsapp: "+5511999999999"
  },
  {
    id: "5",
    nome: "Apartamento Family Mooca",
    status: "LANÇAMENTO",
    imagem_url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    galeria: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
    ],
    preco: "R$ 450.000",
    cidade: "São Paulo",
    bairro: "Mooca",
    tipo: "Apartamento",
    dormitorios: 2,
    banheiros: 2,
    vagas: 1,
    area_m2: 75,
    construtora: "Construtora Family",
    descricao_curta: "Apartamento perfeito para famílias jovens com excelente custo-benefício.",
    slug: "apartamento-family-mooca",
    link_whatsapp: "+5511999999999"
  },
  {
    id: "6",
    nome: "Penthouse Vila Olímpia",
    status: "VENDIDO",
    imagem_url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
    galeria: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop"
    ],
    preco: "R$ 3.800.000",
    cidade: "São Paulo",
    bairro: "Vila Olímpia",
    tipo: "Penthouse",
    dormitorios: 4,
    banheiros: 5,
    vagas: 4,
    area_m2: 280,
    construtora: "Construtora Luxury",
    descricao_curta: "Penthouse exclusivo com terraço privativo e vista deslumbrante.",
    slug: "penthouse-vila-olimpia",
    link_whatsapp: "+5511999999999"
  }
];

export const construtoras = [
  {
    nome: "Construtora Premium",
    logo_url: "https://via.placeholder.com/200x100/D4AF37/FFFFFF?text=Premium",
    site_url: "https://exemplo.com",
    sobre: "Especializada em empreendimentos de alto padrão com mais de 20 anos de mercado.",
    qtd_empreendimentos: 15
  },
  {
    nome: "Construtora Elite",
    logo_url: "https://via.placeholder.com/200x100/D4AF37/FFFFFF?text=Elite",
    site_url: "https://exemplo.com",
    sobre: "Construtora focada em inovação e sustentabilidade.",
    qtd_empreendimentos: 12
  },
  {
    nome: "Construtora Exclusive", 
    logo_url: "https://via.placeholder.com/200x100/D4AF37/FFFFFF?text=Exclusive",
    site_url: "https://exemplo.com",
    sobre: "Líder em construções de luxo e casas personalizadas.",
    qtd_empreendimentos: 8
  },
  {
    nome: "Construtora Urban",
    logo_url: "https://via.placeholder.com/200x100/D4AF37/FFFFFF?text=Urban",
    site_url: "https://exemplo.com",
    sobre: "Especializada em projetos urbanos modernos e funcionais.",
    qtd_empreendimentos: 20
  },
  {
    nome: "Construtora Family",
    logo_url: "https://via.placeholder.com/200x100/D4AF37/FFFFFF?text=Family", 
    site_url: "https://exemplo.com",
    sobre: "Foco em imóveis para famílias com excelente custo-benefício.",
    qtd_empreendimentos: 25
  },
  {
    nome: "Construtora Luxury",
    logo_url: "https://via.placeholder.com/200x100/D4AF37/FFFFFF?text=Luxury",
    site_url: "https://exemplo.com", 
    sobre: "Referência em empreendimentos de ultra luxo.",
    qtd_empreendimentos: 5
  }
];
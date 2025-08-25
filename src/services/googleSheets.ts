import { Property } from '../data/properties';

const SHEET_ID = '14WBV9HrioO1Fr5kRIjz37sdPQQq_YL7q6CuLAJ6GBVQ';

interface GalleryImage {
  imovel_id: string;
  imagem_url: string;
  ordem: number;
}

interface SheetResponse {
  table: {
    cols: Array<{ label: string }>;
    rows: Array<{
      c: Array<{ v: any } | null>;
    }>;
  };
}

const parseSheetData = (response: SheetResponse): any[] => {
  if (!response.table || !response.table.rows) return [];
  
  const headers = response.table.cols.map(col => col.label?.toLowerCase() || '');
  
  return response.table.rows.map(row => {
    const item: any = {};
    headers.forEach((header, index) => {
      const cell = row.c[index];
      item[header] = cell?.v || '';
    });
    return item;
  });
};

const fetchSheetData = async (sheetName: string): Promise<any[]> => {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${sheetName}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch sheet data: ${response.statusText}`);
    }
    
    let text = await response.text();
    // Remove the JSONP wrapper
    text = text.replace(/.*?({.*}).*/s, '$1');
    
    const data: SheetResponse = JSON.parse(text);
    return parseSheetData(data);
  } catch (error) {
    console.error(`Error fetching sheet ${sheetName}:`, error);
    return [];
  }
};

export const fetchProperties = async (): Promise<Property[]> => {
  try {
    // Fetch main properties data
    const propertiesData = await fetchSheetData('Imoveis');
    
    // Try to fetch gallery data
    let galleryData: GalleryImage[] = [];
    try {
      const rawGalleryData = await fetchSheetData('Galeria');
      galleryData = rawGalleryData.map(item => ({
        imovel_id: String(item.imovel_id || ''),
        imagem_url: String(item.imagem_url || ''),
        ordem: Number(item.ordem) || 0
      }));
    } catch (error) {
      console.log('Gallery sheet not found, will use galeria column');
    }
    
    // Process properties
    const properties: Property[] = propertiesData
      .filter(item => item.id && String(item.id).trim()) // Only rows with id filled
      .map(item => {
        // Handle gallery images
        let galeria: string[] = [];
        
        if (galleryData.length > 0) {
          // Use gallery sheet data
          galeria = galleryData
            .filter(g => g.imovel_id === String(item.id))
            .sort((a, b) => a.ordem - b.ordem)
            .map(g => g.imagem_url)
            .filter(url => url);
        } else if (item.galeria) {
          // Use galeria column, split by ; or |
          galeria = String(item.galeria)
            .split(/[;|]/)
            .map(url => url.trim())
            .filter(url => url);
        }
        
        // Add main image to gallery if not already there
        const mainImage = String(item.imagem_url || '');
        if (mainImage && !galeria.includes(mainImage)) {
          galeria.unshift(mainImage);
        }
        
        // Use placeholder if no image
        const finalImageUrl = mainImage || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop';
        
        // Clean WhatsApp link
        let whatsappLink = String(item.link_whatsapp || '');
        if (whatsappLink.startsWith('+')) {
          const digits = whatsappLink.replace(/\D/g, '');
          whatsappLink = `https://wa.me/${digits}`;
        } else if (whatsappLink && !whatsappLink.startsWith('http')) {
          whatsappLink = `https://wa.me/${whatsappLink.replace(/\D/g, '')}`;
        }
        
        return {
          id: String(item.id),
          nome: String(item.nome || ''),
          status: String(item.status || 'DISPONÍVEL').toUpperCase() as Property['status'],
          imagem_url: finalImageUrl,
          galeria: galeria.length > 0 ? galeria : [finalImageUrl],
          preco: String(item.preco || ''),
          cidade: String(item.cidade || ''),
          bairro: String(item.bairro || ''),
          tipo: String(item.tipo || ''),
          dormitorios: Number(item.dormitorios) || 0,
          banheiros: Number(item.banheiros) || 0,
          vagas: Number(item.vagas) || 0,
          area_m2: Number(item.area_m2) || 0,
          construtora: String(item.construtora || ''),
          descricao_curta: String(item.descricao_curta || ''),
          slug: String(item.slug || ''),
          link_whatsapp: whatsappLink || '+5511999999999'
        };
      });
    
    // Sort: LANÇAMENTO first, then by id descending
    return properties.sort((a, b) => {
      if (a.status === 'LANÇAMENTO' && b.status !== 'LANÇAMENTO') return -1;
      if (b.status === 'LANÇAMENTO' && a.status !== 'LANÇAMENTO') return 1;
      return Number(b.id) - Number(a.id);
    });
    
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
};
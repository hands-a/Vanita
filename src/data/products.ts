export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number | null;
  category: string;
  sku: string;
  rating: number;
  reviewsCount: number;
  badge: string | null;
  badgeColor: string;
  description: string;
  features: string[];
  images: string[];
  colors: string[];
}

// 16 منتج بصور عالية الدقة (w=1200) وخلفيات متناسقة
export const products: Product[] = [
  { 
    id: 1, name: 'Nook Nightstand', price: 120.00, oldPrice: 150.00, category: 'Tables', sku: 'VN-TBL-001', rating: 4.8, reviewsCount: 124, badge: 'Sale', badgeColor: 'bg-[#ff6f61]',
    description: 'Elevate your bedroom with the Nook Nightstand. Crafted with premium oak, it features a sleek, minimalist design.',
    features: ['Solid oak wood construction', 'Soft-close drawer mechanism', 'Scratch-resistant matte finish', 'Compact design'],
    images: ['https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80'],
    colors: ['#b58e68', '#000000']
  },
  { 
    id: 2, name: 'Talco Coffee Table', price: 350.00, oldPrice: null, category: 'Tables', sku: 'VN-TBL-002', rating: 4.9, reviewsCount: 89, badge: 'New', badgeColor: 'bg-[#a474ff]',
    description: 'The Talco Coffee Table is a centerpiece that demands attention. Featuring a stunning geometric base.',
    features: ['Tempered glass top options', 'Architectural metal base', 'Easy to clean surface', 'Perfect height for standard sofas'],
    images: ['https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200&q=80'],
    colors: ['#4597a4', '#ffffff']
  },
  { 
    id: 3, name: 'Porcini Side Table', price: 180.00, oldPrice: null, category: 'Tables', sku: 'VN-TBL-003', rating: 4.7, reviewsCount: 56, badge: null, badgeColor: '',
    description: 'Inspired by natural forms, the Porcini Side Table adds an organic touch to any room.',
    features: ['Unique organic silhouette', 'Sturdy weighted base', 'Matte painted finish', 'Versatile usage'],
    images: ['https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=1200&q=80'],
    colors: ['#e3d7c6', '#b58e68']
  },
  { 
    id: 4, name: 'Modern Lounge Chair', price: 420.00, oldPrice: 480.00, category: 'Chairs', sku: 'VN-CHR-001', rating: 5.0, reviewsCount: 210, badge: '-15%', badgeColor: 'bg-[#8f4a58]',
    description: 'Sink into luxury with our Modern Lounge Chair. Ergonomically designed for maximum comfort.',
    features: ['Ergonomic lumbar support', 'Premium breathable fabric', 'Powder-coated steel frame', 'High-density foam'],
    images: ['https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80'],
    colors: ['#784e39', '#e3d7c6']
  },
  { 
    id: 5, name: 'Velvet Sofa Accent', price: 850.00, oldPrice: null, category: 'Sofas', sku: 'VN-SFA-001', rating: 4.9, reviewsCount: 45, badge: null, badgeColor: '',
    description: 'A statement piece for the bold. This Velvet Sofa Accent brings rich texture and vibrant energy.',
    features: ['Stain-resistant velvet', 'Deep seating for extra comfort', 'Kiln-dried hardwood frame'],
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80'],
    colors: ['#385040', '#ffffff']
  },
  { 
    id: 6, name: 'Pendant Light Brass', price: 195.00, oldPrice: 220.00, category: 'Lighting', sku: 'VN-LGT-001', rating: 4.6, reviewsCount: 77, badge: 'Hot', badgeColor: 'bg-[#ff6f61]',
    description: 'Illuminate your dining area or kitchen island with this stunning Brass Pendant Light.',
    features: ['Brushed brass finish', 'Adjustable cable length', 'Compatible with LED bulbs'],
    images: ['https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80'],
    colors: ['#b58e68', '#000000']
  },
  { 
    id: 7, name: 'Abstract Wall Art', price: 95.00, oldPrice: null, category: 'Decor', sku: 'VN-DCR-001', rating: 4.5, reviewsCount: 32, badge: null, badgeColor: '',
    description: 'Add a splash of color and modern art to your walls. High-quality canvas print.',
    features: ['High-resolution canvas print', 'Solid wood floater frame', 'Ready to hang'],
    images: ['https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=80'],
    colors: ['#c3466d', '#4597a4']
  },
  { 
    id: 8, name: 'Woven Floor Rug', price: 210.00, oldPrice: 250.00, category: 'Rugs', sku: 'VN-RUG-001', rating: 4.8, reviewsCount: 150, badge: 'Sale', badgeColor: 'bg-[#8f4a58]',
    description: 'Ground your space with our hand-woven floor rug. Made from natural fibers.',
    features: ['100% Natural jute and cotton', 'Hand-woven by artisans', 'Durable for high-traffic areas'],
    images: ['https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1200&q=80'],
    colors: ['#e3d7c6', '#b58e68']
  },
  { 
    id: 9, name: 'Minimalist Dining Table', price: 650.00, oldPrice: null, category: 'Tables', sku: 'VN-TBL-004', rating: 4.9, reviewsCount: 42, badge: 'Premium', badgeColor: 'bg-gray-800',
    description: 'Gather around this stunning minimalist dining table. Perfect for family dinners.',
    features: ['Seats up to 6 people', 'Scratch and heat resistant top', 'Solid steel legs'],
    images: ['https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80'],
    colors: ['#000000', '#ffffff']
  },
  { 
    id: 10, name: 'Classic Wingback Chair', price: 380.00, oldPrice: 450.00, category: 'Chairs', sku: 'VN-CHR-002', rating: 4.7, reviewsCount: 88, badge: 'Sale', badgeColor: 'bg-[#ff6f61]',
    description: 'A timeless classic redefined. Offers exceptional head and back support.',
    features: ['Classic tufted backrest', 'Premium linen upholstery', 'Brass nailhead trim'],
    images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'],
    colors: ['#784e39', '#e3d7c6']
  },
  { 
    id: 11, name: 'Ceramic Vase Set', price: 45.00, oldPrice: null, category: 'Decor', sku: 'VN-DCR-002', rating: 4.5, reviewsCount: 19, badge: null, badgeColor: '',
    description: 'Add a touch of artisanal charm to your shelves or dining table.',
    features: ['Hand-thrown ceramic', 'Textured matte finish', 'Set of 3 varying sizes'],
    images: ['https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1200&q=80'],
    colors: ['#ffffff', '#e3d7c6']
  },
  { 
    id: 12, name: 'Mid-Century Leather Sofa', price: 1200.00, oldPrice: 1400.00, category: 'Sofas', sku: 'VN-SFA-002', rating: 5.0, reviewsCount: 156, badge: '-$200', badgeColor: 'bg-[#8f4a58]',
    description: 'Experience unparalleled luxury with this genuine leather sofa.',
    features: ['100% Top-grain leather', 'High-resiliency foam cushions', 'Solid walnut legs'],
    images: ['https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80'],
    colors: ['#784e39', '#b58e68']
  },
  { 
    id: 13, name: 'Boho Fringe Rug', price: 150.00, oldPrice: null, category: 'Rugs', sku: 'VN-RUG-002', rating: 4.6, reviewsCount: 64, badge: 'Trending', badgeColor: 'bg-[#a474ff]',
    description: 'Bring a relaxed, bohemian vibe to your bedroom or living space.',
    features: ['Soft cotton blend', 'Machine washable', 'Tassel fringe edges'],
    images: ['https://images.unsplash.com/photo-1534889156217-d643df14f14a?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1534889156217-d643df14f14a?auto=format&fit=crop&w=1200&q=80'],
    colors: ['#ffffff', '#c3466d']
  },
  { 
    id: 14, name: 'Tripod Floor Lamp', price: 110.00, oldPrice: 135.00, category: 'Lighting', sku: 'VN-LGT-002', rating: 4.8, reviewsCount: 112, badge: null, badgeColor: '',
    description: 'A modern classic. The Tripod Floor Lamp provides excellent ambient lighting.',
    features: ['Solid wood tripod base', 'Large fabric drum shade', 'Hidden cord management'],
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80'],
    colors: ['#000000', '#b58e68']
  },
  { 
    id: 15, name: 'Oak Bookshelf', price: 290.00, oldPrice: null, category: 'Decor', sku: 'VN-DCR-003', rating: 4.9, reviewsCount: 75, badge: 'New', badgeColor: 'bg-[#a474ff]',
    description: 'Display your favorite books, plants, and decor items on this elegant oak bookshelf.',
    features: ['5 spacious tiers', 'Real oak wood veneer', 'Anti-tip safety hardware'],
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1200&q=80'],
    colors: ['#b58e68']
  },
  { 
    id: 16, name: 'Swivel Recliner', price: 550.00, oldPrice: 600.00, category: 'Chairs', sku: 'VN-CHR-003', rating: 4.8, reviewsCount: 134, badge: 'Hot', badgeColor: 'bg-[#ff6f61]',
    description: 'The ultimate comfort chair. This swivel recliner is perfect for relaxing.',
    features: ['360-degree swivel mechanism', 'Smooth reclining action', 'Padded armrests'],
    images: ['https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80'],
    colors: ['#000000', '#784e39']
  }
];
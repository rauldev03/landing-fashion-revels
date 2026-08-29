/**
 * Fuente Única de Verdad (Single Source of Truth) para Sora Store.
 * Centraliza toda la información comercial, textos, enlaces, productos y contacto.
 * 
 * Para cambiar números de teléfono, productos o categorías, modifique este archivo
 * sin necesidad de alterar los componentes de la interfaz de usuario.
 */

const WHATSAPP_PHONE = '5491100000000'; // Formato internacional sin '+' ni espacios (ej: 54911XXXXXXXX)
const DEFAULT_WHATSAPP_MSG = '¡Hola Fashion Revels! Me gustaría consultar sobre sus productos de anime y coleccionables disponibles.';

export const landingData = {
  // 1. Identidad de Marca
  brand: {
    name: 'Fashion Revels',
    tagline: 'Figuras, Mangas y Coleccionables Anime',
    logo: '/images/logo.png',
    logoText: 'FR',
    href: '#hero',
  },

  // 2. Información de Contacto y WhatsApp
  contact: {
    phone: WHATSAPP_PHONE,
    phoneDisplay: '+54 9 11 0000-0000',
    email: 'contacto@fashionrevels.com',
    whatsappBaseUrl: `https://wa.me/${WHATSAPP_PHONE}`,
    defaultMessage: DEFAULT_WHATSAPP_MSG,
    // Generador de enlace directo con mensaje personalizado
    getWhatsAppUrl: (customMessage) => {
      const msg = customMessage || DEFAULT_WHATSAPP_MSG;
      return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
    },
  },

  // 3. Barra de Navegación
  navigation: {
    links: [
      { label: 'Inicio', href: '#hero' },
      { label: 'Categorías', href: '#categories' },
      { label: 'Productos', href: '#products' },
      { label: 'Nosotros', href: '#benefits' },
      { label: 'Contacto', href: '#cta' },
    ],
    action: {
      label: 'Ver catálogo',
      href: '#products',
      variant: 'primary',
    },
  },

  // 4. Sección Hero (Impacto Principal)
  hero: {
    backgroundVideo: '/video/goku_sky.mp4',
    eyebrow: 'Tu tienda para coleccionistas',
    title: 'Tu colección merece',
    titleHighlight: 'algo épico.',
    description:
      'Figuras, mangas y merchandising para verdaderos fans del anime. Encuentra nuevos personajes para llevar tu colección al siguiente nivel con calidad garantizada.',
    primaryAction: {
      label: 'Explorar productos',
      href: '#products',
    },
    secondaryAction: {
      label: 'Ver categorías',
      href: '#categories',
    },
    trustIndicators: [
      'Productos seleccionados',
      'Atención personalizada',
      'Envíos disponibles',
    ],
    showcase: {
      slides: [
        '/images/hero/01_carrusel.png',
        '/images/hero/02_carrusel.png',
        '/images/hero/03_carrusel.png',
        '/images/hero/04_carrusel.png',
        '/images/hero/05_carrusel.png',
      ],
    },
  },

  // 5. Categorías Principales
  categories: {
    eyebrow: 'Categorías',
    title: 'Encuentra lo que buscas',
    description:
      'Explora nuestras principales categorías y encuentra tu próxima pieza favorita.',
    items: [
      {
        id: 'figuras',
        title: 'Figuras',
        description: 'Personajes y figuras para completar tu colección.',
        icon: 'figure',
        kicker: '+150 modelos',
      },
      {
        id: 'mangas',
        title: 'Mangas',
        description: 'Historias, sagas y volúmenes para seguir tus series favoritas.',
        icon: 'book',
        kicker: 'Tomos oficiales',
      },
      {
        id: 'merchandising',
        title: 'Merchandising',
        description: 'Productos y accesorios inspirados en tus animes favoritos.',
        icon: 'sparkles',
        kicker: 'Accesorios & Ropa',
      },
      {
        id: 'coleccionables',
        title: 'Coleccionables',
        description: 'Artículos especiales para verdaderos coleccionistas.',
        icon: 'gem',
        kicker: 'Ediciones Limitadas',
      },
    ],
  },

  // 6. Productos Destacados (Catálogo)
  products: {
    eyebrow: 'Catálogo Seleccionado',
    title: 'Productos destacados',
    description:
      'Descubre las piezas más buscadas de la temporada. Consulta disponibilidad inmediata y detalles de envío directamente por WhatsApp.',
    filterCategories: ['Todos', 'Figuras', 'Mangas', 'Merchandising', 'Coleccionables'],
    items: [
      {
        id: 'prod-1',
        name: 'Figura Gojo Satoru - Hollow Purple',
        category: 'Figuras',
        price: '$48.00',
        badge: 'Popular',
        description: 'Figura de alta definición con efectos translúcidos celestes y base de impacto.',
        image: null,
      },
      {
        id: 'prod-2',
        name: 'Manga Chainsaw Man Box Set (Vol. 1-11)',
        category: 'Mangas',
        price: '$85.00',
        badge: 'Exclusivo',
        description: 'Cofre coleccionista con los 11 tomos de la primera parte en español oficial.',
        image: null,
      },
      {
        id: 'prod-3',
        name: 'Figura Roronoa Zoro - Wano Kuni Enma',
        category: 'Figuras',
        price: '$54.00',
        badge: 'Nuevo',
        description: 'Detalles minuciosos en espadas triples, vestimenta samurái y pose dinámica.',
        image: null,
      },
      {
        id: 'prod-4',
        name: 'Katana Nichirin Coleccionable 1:1',
        category: 'Coleccionables',
        price: '$62.00',
        badge: 'Especial',
        description: 'Réplica de exhibición escala real con empuñadura tejida y pedestal de madera.',
        image: null,
      },
      {
        id: 'prod-5',
        name: 'Manga Jujutsu Kaisen - Tomo 0 Especial',
        category: 'Mangas',
        price: '$14.50',
        badge: 'Bestseller',
        description: 'Volumen precuela imprescindible con sobrecubierta brillante y extras.',
        image: null,
      },
      {
        id: 'prod-6',
        name: 'Hoodie Anime Cyber-Samurai Oversize',
        category: 'Merchandising',
        price: '$38.00',
        badge: 'Trending',
        description: 'Buzo premium 100% algodón peinado con serigrafía digital de alta duración.',
        image: null,
      },
    ],
  },

  // 7. Sección de Beneficios
  benefits: {
    eyebrow: '¿Por qué Fashion Revels?',
    title: 'Diseñado para verdaderos coleccionistas',
    description:
      'Nos apasiona el anime tanto como a ti. Cuidamos cada detalle desde la selección de cada artículo hasta su entrega.',
    items: [
      {
        id: 'benefit-1',
        title: 'Productos seleccionados',
        description:
          'Curaduría minuciosa de piezas originales y réplicas de máxima fidelidad para que tu colección resalte.',
        icon: 'check-badge',
      },
      {
        id: 'benefit-2',
        title: 'Atención personalizada',
        description:
          'Te asesoramos directamente por WhatsApp sobre disponibilidad, medidas, próximos lanzamientos y preventas.',
        icon: 'chat',
      },
      {
        id: 'benefit-3',
        title: 'Compra fácil',
        description:
          'Sin registros engorrosos ni procesos complejos. Eliges lo que te gusta y coordinamos en minutos.',
        icon: 'sparkles',
      },
      {
        id: 'benefit-4',
        title: 'Envíos disponibles',
        description:
          'Embalaje con protección acolchada especial para que tus figuras y mangas lleguen en perfecto estado.',
        icon: 'truck',
      },
    ],
  },

  // 8. Llamada a la Acción Final (CTA)
  cta: {
    title: '¿Encontraste algo para tu colección?',
    description:
      'Consulta disponibilidad, nuevos ingresos y productos directamente con nosotros por WhatsApp.',
    actionLabel: 'Consultar por WhatsApp',
    secondaryAction: {
      label: 'Ver catálogo de productos',
      href: '#products',
    },
  },

  // 9. Pie de Página (Footer)
  footer: {
    brand: {
      name: 'Fashion Revels',
      logo: '/images/logo.png',
      description:
        'Figuras, mangas y merchandising para verdaderos fans del anime. Tu tienda de confianza para encontrar tu próxima pieza de colección.',
    },
    columns: [
      {
        title: 'Tienda',
        links: [
          { label: 'Todos los Productos', href: '#products' },
          { label: 'Figuras Anime', href: '#categories' },
          { label: 'Mangas Oficiales', href: '#categories' },
          { label: 'Merchandising', href: '#categories' },
          { label: 'Coleccionables', href: '#categories' },
        ],
      },
      {
        title: 'Información',
        links: [
          { label: 'Sobre Nosotros', href: '#benefits' },
          { label: 'Preguntas Frecuentes', href: '#cta' },
          { label: 'Políticas de Envío', href: '#benefits' },
          { label: 'Contacto Directo', href: '#cta' },
        ],
      },
    ],
    socialLinks: [
      { name: 'Instagram', href: 'https://instagram.com' },
      { name: 'TikTok', href: 'https://tiktok.com' },
      { name: 'Facebook', href: 'https://facebook.com' },
    ],
    copyright: `© ${new Date().getFullYear()} Fashion Revels. Todos los derechos reservados.`,
  },
};

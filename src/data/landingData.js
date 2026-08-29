/**
 * Fuente Única de Verdad (Single Source of Truth) para Sora Store.
 * Centraliza toda la información comercial, textos, enlaces, productos y contacto.
 * 
 * Para cambiar números de teléfono, productos o categorías, modifique este archivo
 * sin necesidad de alterar los componentes de la interfaz de usuario.
 */

const WHATSAPP_PHONE = '51924269617'; // Formato internacional Perú (+51)
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
    phoneDisplay: '+51 924 269 617',
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
      { label: 'Sobre Nosotros', href: '#about' },
      { label: 'Categorías', href: '#categories' },
      { label: 'Beneficios', href: '#benefits' },
      { label: 'Contacto', href: '#cta' },
    ],
    action: {
      label: 'Ver categorías',
      href: '#categories',
      variant: 'primary',
    },
  },

  // 4. Sección Hero (Impacto Principal)
  hero: {
    eyebrow: 'Tu tienda de coleccionables anime',
    title: 'Tu colección merece',
    titleHighlight: 'algo épico.',
    description:
      'Figuras de acción exclusivas, mangas oficiales y merchandising para verdaderos fans del anime. Encuentra tus piezas favoritas con calidad garantizada y envíos seguros.',
    primaryAction: {
      label: 'Explorar categorías',
      href: '#categories',
    },
    secondaryAction: {
      label: 'Sobre nosotros',
      href: '#about',
    },
    trustIndicators: [
      'Productos 100% Originales',
      'Atención personalizada',
      'Envíos disponibles',
    ],
    showcase: {
      slides: [
        '/images/hero/gojo-hollow-purple.jpg',
        '/images/hero/zoro-wano.jpg',
        '/images/hero/chainsaw-denji.jpg',
        '/images/hero/manga-boxset.jpg',
      ],
    },
  },

  // 5. Sección Sobre Nosotros
  about: {
    eyebrow: 'Sobre Nosotros',
    title: 'Pasión por el Anime,',
    titleHighlight: 'Calidad para Coleccionistas',
    description:
      'En Fashion Revels nacimos de la pasión compartida por el mundo del anime y la cultura japonesa. Seleccionamos cada pieza con el máximo cuidado para que tu colección sea única.',
    story: [
      'Somos coleccionistas apasionados que entendemos el valor y la emoción de conseguir esa figura tan esperada o completar tu tomo favorito de manga.',
      'Nos enfocamos en traerte artículos 100% auténticos, con embalajes reforzados de alta protección y asesoría personalizada de fan a fan a través de WhatsApp.',
    ],
    features: [
      {
        title: 'Coleccionables 100% Originales',
        description: 'Autenticidad garantizada en cada figura y manga oficial.',
      },
      {
        title: 'Atención Personalizada 1 a 1',
        description: 'Te asesoramos directamente por WhatsApp sobre medidas y preventas.',
      },
      {
        title: 'Embalaje Especial Reforzado',
        description: 'Protección acolchada para que tus cajas y figuras lleguen impecables.',
      },
      {
        title: 'Preventas y Novedades',
        description: 'Acceso prioritario a lanzamientos y piezas exclusivas.',
      },
    ],
    image: {
      src: '/images/logo.png',
      alt: 'Fashion Revels - Coleccionables Anime',
    },
    action: {
      label: 'Consultar por WhatsApp',
      href: `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Fashion Revels! Quiero consultar sobre sus figuras y coleccionables.')}`,
    },
  },

  // 6. Categorías Principales
  categories: {
    eyebrow: 'Categorías',
    title: 'Encuentra lo que',
    titleHighlight: 'buscas',
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

  // 7. Sección de Beneficios
  benefits: {
    eyebrow: '¿Por qué Fashion Revels?',
    title: 'Diseñado para verdaderos',
    titleHighlight: 'coleccionistas',
    description:
      'Nos apasiona el anime tanto como a ti. Cuidamos cada detalle desde la selección de cada artículo hasta su entrega.',
    items: [
      {
        id: 'benefit-1',
        title: 'Productos 100% Originales',
        description:
          'Curaduría minuciosa de piezas oficiales para que tu colección resalte con máxima autenticidad.',
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
        title: 'Compra directa y fácil',
        description:
          'Sin registros engorrosos ni procesos complejos. Eliges lo que te gusta y coordinamos en minutos.',
        icon: 'sparkles',
      },
      {
        id: 'benefit-4',
        title: 'Envíos acolchados y seguros',
        description:
          'Embalaje con protección acolchada especial para que tus figuras y mangas lleguen en perfecto estado.',
        icon: 'truck',
      },
    ],
  },

  // 8. Llamada a la Acción Final (CTA)
  cta: {
    title: '¿Listo para llevar tu colección',
    titleHighlight: 'al siguiente nivel?',
    description:
      'Consulta disponibilidad inmediata, preventas exclusivas y catálogo completo directamente con nosotros por WhatsApp.',
    actionLabel: 'Consultar por WhatsApp',
    secondaryAction: {
      label: 'Explorar categorías',
      href: '#categories',
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
        title: 'Navegación',
        links: [
          { label: 'Inicio', href: '#hero' },
          { label: 'Sobre Nosotros', href: '#about' },
          { label: 'Categorías', href: '#categories' },
          { label: 'Beneficios', href: '#benefits' },
          { label: 'Contacto', href: '#cta' },
        ],
      },
      {
        title: 'Categorías',
        links: [
          { label: 'Figuras Anime', href: '#categories' },
          { label: 'Mangas Oficiales', href: '#categories' },
          { label: 'Merchandising', href: '#categories' },
          { label: 'Ediciones Limitadas', href: '#categories' },
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

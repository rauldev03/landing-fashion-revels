/**
 * Datos estructurados para la Landing Page de demostración.
 * Modifica este archivo para cambiar textos, enlaces y características
 * sin tocar el código de los componentes.
 */
export const landingData = {
  navbar: {
    brand: {
      name: 'NexusTech',
      href: '#',
    },
    links: [
      { label: 'Características', href: '#features' },
      { label: 'Soluciones', href: '#features' },
      { label: 'Compañía', href: '#cta' },
      { label: 'Contacto', href: '#cta' },
    ],
    action: {
      label: 'Comenzar Gratis',
      href: '#cta',
      variant: 'primary',
    },
  },

  hero: {
    eyebrow: 'Nueva versión 2.0 disponible',
    title: 'Construye y escala tus proyectos con velocidad supersónica',
    description:
      'Una plataforma integral diseñada para desarrolladores y equipos ágiles. Automatiza tus flujos de trabajo, optimiza el rendimiento y despliega sin fricciones.',
    primaryAction: {
      label: 'Iniciar Prueba Gratuita',
      href: '#cta',
    },
    secondaryAction: {
      label: 'Ver Documentación',
      href: '#features',
    },
    alignment: 'center',
  },

  features: {
    eyebrow: 'Beneficios Clave',
    title: 'Diseñado para impulsar tu productividad diaria',
    description:
      'Descubre las herramientas y capacidades que hacen de nuestra plataforma la elección ideal para proyectos de alto rendimiento.',
    items: [
      {
        title: 'Rendimiento Ultrarrápido',
        description:
          'Arquitectura optimizada que garantiza tiempos de carga casi instantáneos y una experiencia fluida.',
      },
      {
        title: 'Componentes Modulares',
        description:
          'Bloques de construcción altamente personalizables para armar interfaces complejas en minutos.',
      },
      {
        title: 'Seguridad Empresarial',
        description:
          'Protección avanzada y cifrado de extremo a extremo en cada punto de interacción.',
      },
      {
        title: 'Analíticas en Tiempo Real',
        description:
          'Monitorea métricas clave, tasas de conversión y comportamiento de usuarios con paneles interactivos.',
      },
      {
        title: 'Despliegue Continuo',
        description:
          'Integración nativa con pipelines de CI/CD para publicar cambios con un solo clic.',
      },
      {
        title: 'Soporte 24/7 Dedicado',
        description:
          'Equipo de ingenieros expertos siempre listos para resolver cualquier consulta técnica.',
      },
    ],
  },

  cta: {
    title: '¿Listo para transformar tu flujo de trabajo?',
    description:
      'Únete a miles de desarrolladores que ya están construyendo el futuro con nuestra plataforma. Comienza hoy sin tarjeta de crédito.',
    action: {
      label: 'Crear Cuenta Gratuita',
      href: '#',
    },
    secondaryAction: {
      label: 'Hablar con un Asesor',
      href: '#',
    },
  },

  footer: {
    brand: {
      name: 'NexusTech',
      description:
        'Infraestructura moderna para equipos que crean productos digitales excepcionales.',
    },
    columns: [
      {
        title: 'Producto',
        links: [
          { label: 'Características', href: '#features' },
          { label: 'Integraciones', href: '#' },
          { label: 'Changelog', href: '#' },
          { label: 'Precios', href: '#' },
        ],
      },
      {
        title: 'Recursos',
        links: [
          { label: 'Documentación', href: '#' },
          { label: 'Guías Rápidas', href: '#' },
          { label: 'Comunidad', href: '#' },
          { label: 'Blog', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacidad', href: '#' },
          { label: 'Términos de Servicio', href: '#' },
          { label: 'Seguridad', href: '#' },
        ],
      },
    ],
    copyright: '© 2026 NexusTech Inc. Todos los derechos reservados.',
    socialLinks: [
      { name: 'Twitter', href: '#' },
      { name: 'GitHub', href: '#' },
      { name: 'LinkedIn', href: '#' },
    ],
  },
};

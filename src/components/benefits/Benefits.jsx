import React from 'react';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';
import Card from '../../ui/Card';

/**
 * Mapeo de iconos vectoriales para la sección de beneficios.
 */
function BenefitIcon({ type }) {
  const iconProps = {
    className: 'w-6 h-6 text-sky-500',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  switch (type) {
    case 'check-badge':
      return (
        <svg {...iconProps}>
          {/* Icono de Verificado / Calidad */}
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 'chat':
      return (
        <svg {...iconProps}>
          {/* Icono de Chat / Asesoría directa */}
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h.01M12 10h.01M16 10h.01" />
        </svg>
      );
    case 'sparkles':
      return (
        <svg {...iconProps}>
          {/* Icono de Compra Fácil / Rapidez */}
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'truck':
    default:
      return (
        <svg {...iconProps}>
          {/* Icono de Envío Seguro */}
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );
  }
}

/**
 * Componente Benefits para mostrar las ventajas y motivos para comprar en Sora Store.
 *
 * @param {Object} props
 * @param {string} [props.eyebrow] - Etiqueta superior
 * @param {string|React.ReactNode} props.title - Título de la sección
 * @param {string} [props.description] - Descripción de la sección
 * @param {Array<Object>} [props.items=[]] - Lista de beneficios
 */
export default function Benefits({
  eyebrow,
  title,
  description,
  items = [],
}) {
  return (
    <section id="benefits" className="py-20 sm:py-28 bg-white relative">
      <Container>
        {/* Encabezado de la Sección */}
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
          alignment="center"
          className="mb-14 sm:mb-20"
        />

        {/* Grilla de 4 Beneficios Clave */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((benefit, index) => (
            <Card
              key={benefit.id || benefit.title || index}
              className="group p-6 sm:p-7 flex flex-col justify-start relative overflow-hidden"
            >
              {/* Icono en contenedor celeste */}
              <div className="w-12 h-12 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-sky-200 transition-all duration-300 shadow-sm">
                <BenefitIcon type={benefit.icon} />
              </div>

              {/* Título del beneficio */}
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                {benefit.title}
              </h3>

              {/* Descripción */}
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

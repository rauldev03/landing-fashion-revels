import React from 'react';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';
import Card from '../../ui/Card';

/**
 * Mapeo de iconos vectoriales para las categorías de anime.
 */
function CategoryIcon({ type }) {
  const iconProps = {
    className: 'w-6 h-6 text-sky-400',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  switch (type) {
    case 'figure':
      return (
        <svg {...iconProps}>
          {/* Icono de Figura Anime */}
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21v-2a4.5 4.5 0 0 1 4.5-4.5h4a4.5 4.5 0 0 1 4.5 4.5v2" />
          <path d="M15 11l4-3" />
          <path d="M9 11L5 8" />
        </svg>
      );
    case 'book':
      return (
        <svg {...iconProps}>
          {/* Icono de Manga / Libro */}
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M9 7h6" />
          <path d="M9 11h4" />
        </svg>
      );
    case 'sparkles':
      return (
        <svg {...iconProps}>
          {/* Icono de Merchandising / Destellos */}
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      );
    case 'gem':
    default:
      return (
        <svg {...iconProps}>
          {/* Icono de Coleccionables / Gema */}
          <polygon points="6 3 18 3 22 9 12 22 2 9" />
          <path d="M12 22L8 9l4-6 4 6-4 13" />
        </svg>
      );
  }
}

/**
 * Componente Categories para presentar las 4 áreas principales de la tienda.
 *
 * @param {Object} props
 * @param {string} [props.eyebrow] - Etiqueta superior
 * @param {string|React.ReactNode} props.title - Título de la sección
 * @param {string} [props.description] - Descripción de la sección
 * @param {Array<Object>} [props.categories=[]] - Lista de categorías desde landingData.js
 * @param {Function} [props.onSelectCategory] - Callback opcional al hacer clic en una categoría
 */
export default function Categories({
  eyebrow,
  title,
  description,
  categories = [],
  onSelectCategory,
}) {
  return (
    <section id="categories" className="py-20 sm:py-28 bg-slate-900/30 relative">
      <Container>
        {/* Encabezado de la Sección */}
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
          alignment="center"
          className="mb-14 sm:mb-18"
        />

        {/* Grilla de 4 Categorías */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <Card
              key={cat.id || index}
              as="a"
              href="#products"
              onClick={() => onSelectCategory && onSelectCategory(cat.title)}
              className="group flex flex-col justify-between p-6 sm:p-7 relative overflow-hidden cursor-pointer hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Resplandor celeste sutil en hover */}
              <div
                className="absolute -top-12 -right-12 w-28 h-28 bg-sky-500/10 rounded-full blur-xl group-hover:bg-sky-500/20 transition-all pointer-events-none"
                aria-hidden="true"
              />

              <div>
                {/* Cabecera de la Card: Icono + Kicker */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/20 group-hover:scale-110 transition-all duration-300 shadow-sm shadow-sky-500/10">
                    <CategoryIcon type={cat.icon} />
                  </div>
                  {cat.kicker && (
                    <span className="text-[11px] font-mono font-medium text-slate-400 bg-slate-950/60 px-2.5 py-1 rounded-full border border-slate-800">
                      {cat.kicker}
                    </span>
                  )}
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors flex items-center gap-1.5">
                  {cat.title}
                  <span className="text-sky-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-sm">
                    →
                  </span>
                </h3>

                {/* Descripción */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Pie de la card con llamada visual sutil */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-sky-300 transition-colors">
                <span>Explorar artículos</span>
                <span className="text-sky-400 font-bold">Ver catálogo</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

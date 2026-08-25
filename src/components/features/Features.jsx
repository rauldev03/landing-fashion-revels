import React from 'react';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';

/**
 * Componente Features reutilizable para mostrar cuadrícula de características o beneficios.
 *
 * @param {Object} props
 * @param {string} [props.eyebrow] - Etiqueta superior
 * @param {string|React.ReactNode} props.title - Título de la sección
 * @param {string} [props.description] - Descripción de la sección
 * @param {Array<{title: string, description: string, icon?: React.ReactNode}>} props.features - Lista de items
 */
export default function Features({
  eyebrow,
  title,
  description,
  features = [],
}) {
  return (
    <section id="features" className="py-20 sm:py-28 bg-slate-900/40 relative">
      <Container>
        {/* Encabezado de la Sección */}
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
          alignment="center"
          className="mb-16 sm:mb-20"
        />

        {/* Cuadrícula de Características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title || index}
              className="group p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-800/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Resplandor sutil en hover */}
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-all pointer-events-none"
                aria-hidden="true"
              />

              <div>
                {/* Ícono de la característica */}
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-200">
                  {feature.icon || (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  )}
                </div>

                {/* Título */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  {feature.title}
                </h3>

                {/* Descripción */}
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

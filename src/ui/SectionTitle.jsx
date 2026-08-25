import React from 'react';

/**
 * Componente SectionTitle para encabezados estandarizados de sección.
 *
 * @param {Object} props
 * @param {string} [props.eyebrow] - Texto o etiqueta superior (badge o kicker)
 * @param {string|React.ReactNode} props.title - Título principal de la sección
 * @param {string} [props.description] - Párrafo explicativo o subtítulo
 * @param {'center'|'left'} [props.alignment='center'] - Alineación del texto
 * @param {string} [props.className] - Clases Tailwind adicionales
 */
export default function SectionTitle({
  eyebrow,
  title,
  description,
  alignment = 'center',
  className = '',
}) {
  const isCenter = alignment === 'center';

  return (
    <div
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`.trim()}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
          {eyebrow}
        </span>
      )}

      {title && (
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
          {title}
        </h2>
      )}

      {description && (
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

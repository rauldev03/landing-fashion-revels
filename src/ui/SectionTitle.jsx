import React from 'react';

/**
 * Componente SectionTitle para encabezados estandarizados de sección en tema oscuro.
 *
 * @param {Object} props
 * @param {string} [props.eyebrow] - Texto o etiqueta superior (badge o kicker)
 * @param {string|React.ReactNode} props.title - Título principal de la sección
 * @param {string} [props.titleHighlight] - Fragmento del título a destacar con gradiente cósmico
 * @param {string} [props.description] - Párrafo explicativo o subtítulo
 * @param {'center'|'left'} [props.alignment='center'] - Alineación del texto
 * @param {string} [props.className] - Clases Tailwind adicionales
 */
export default function SectionTitle({
  eyebrow,
  title,
  titleHighlight,
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
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-sky-300 bg-sky-950/70 border border-sky-500/30 rounded-full shadow-sm backdrop-blur-md">
          {eyebrow}
        </span>
      )}

      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          {title}{' '}
          {titleHighlight && (
            <span className="bg-gradient-to-r from-sky-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          )}
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



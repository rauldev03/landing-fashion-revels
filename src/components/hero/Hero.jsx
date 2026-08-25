import React from 'react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';

/**
 * Componente Hero reutilizable y configurable.
 *
 * @param {Object} props
 * @param {string} [props.eyebrow] - Etiqueta superior o novedad
 * @param {string|React.ReactNode} props.title - Título principal de impacto
 * @param {string} props.description - Párrafo de valor o subtítulo
 * @param {Object} [props.primaryAction] - Botón primario { label, href }
 * @param {Object} [props.secondaryAction] - Botón secundario { label, href }
 * @param {Object|React.ReactNode} [props.image] - Imagen o elemento gráfico de preview
 * @param {'center'|'left'} [props.alignment='center'] - Alineación del contenido
 */
export default function Hero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  image,
  alignment = 'center',
}) {
  const isCenter = alignment === 'center';

  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      {/* Resplandor decorativo de fondo (Glow Effect) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-indigo-500/15 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div
          className={`flex flex-col ${
            isCenter
              ? 'items-center text-center max-w-4xl mx-auto'
              : 'items-start text-left max-w-3xl'
          }`}
        >
          {/* Eyebrow / Tag */}
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-xs font-semibold text-indigo-300 bg-indigo-950/60 border border-indigo-800/60 rounded-full shadow-inner">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span>{eyebrow}</span>
            </div>
          )}

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            {title}
          </h1>

          {/* Descripción */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
            {description}
          </p>

          {/* Acciones / Botones */}
          {(primaryAction || secondaryAction) && (
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto ${
                isCenter ? 'justify-center' : 'justify-start'
              }`}
            >
              {primaryAction && (
                <Button href={primaryAction.href} variant="primary" size="lg">
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  href={secondaryAction.href}
                  variant="secondary"
                  size="lg"
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Imagen / Preview gráfico opcional */}
        {image && (
          <div className="mt-14 sm:mt-18 relative max-w-5xl mx-auto">
            {typeof image === 'string' || (image.src && !React.isValidElement(image)) ? (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-2 sm:p-3 shadow-2xl backdrop-blur-sm">
                <img
                  src={image.src || image}
                  alt={image.alt || 'Vista previa'}
                  className="rounded-xl w-full object-cover border border-slate-850"
                  loading="lazy"
                />
              </div>
            ) : (
              image
            )}
          </div>
        )}
      </Container>
    </section>
  );
}

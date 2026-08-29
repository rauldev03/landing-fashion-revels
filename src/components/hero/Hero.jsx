import React from 'react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';

/**
 * Componente Hero adaptable para Sora Store.
 * Soporta layout a 2 columnas en desktop con indicadores de confianza e imagen/showcase.
 *
 * @param {Object} props
 * @param {string} [props.eyebrow] - Etiqueta superior o novedad
 * @param {string|React.ReactNode} props.title - Título principal
 * @param {string} [props.titleHighlight] - Fragmento del título a destacar
 * @param {string} props.description - Párrafo de propuesta de valor
 * @param {Object} [props.primaryAction] - Botón primario { label, href }
 * @param {Object} [props.secondaryAction] - Botón secundario { label, href }
 * @param {Array<string>} [props.trustIndicators=[]] - Indicadores de confianza
 * @param {Object|React.ReactNode} [props.image] - Componente visual o imagen de la derecha
 */
export default function Hero({
  eyebrow,
  title,
  titleHighlight,
  description,
  primaryAction,
  secondaryAction,
  trustIndicators = [],
  image,
  backgroundVideo,
}) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 bg-sky-950/5"
    >
      {/* Video de fondo a máxima claridad y fidelidad */}
      {backgroundVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-100"
          aria-hidden="true"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Capa de contraste sutil únicamente en el lado del texto para legibilidad perfecta */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/15 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Orbes decorativos de respaldo solo si no hay video */}
      {!backgroundVideo && (
        <>
          <div
            className="absolute top-0 right-0 w-[520px] h-[520px] bg-sky-200/30 blur-[130px] pointer-events-none rounded-full -translate-y-1/4 translate-x-1/4"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-100/40 blur-[110px] pointer-events-none rounded-full translate-y-1/4 -translate-x-1/4"
            aria-hidden="true"
          />
        </>
      )}

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Columna Izquierda: Mensaje y Llamadas a la Acción */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow / Tag */}
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-xs font-semibold text-anime-600 bg-anime-100 border border-anime-200 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-anime-400 animate-pulse" />
                <span>{eyebrow}</span>
              </div>
            )}

            {/* Título Principal con Resaltado */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
              {title}{' '}
              {titleHighlight && (
                <span className="bg-gradient-to-r from-sky-500 via-anime-400 to-mystic-400 bg-clip-text text-transparent">
                  {titleHighlight}
                </span>
              )}
            </h1>

            {/* Descripción (Opcional) */}
            {description && (
              <p className="text-base sm:text-lg text-slate-500 max-w-xl mb-8 leading-relaxed">
                {description}
              </p>
            )}

            {/* Acciones / Botones */}
            {(primaryAction || secondaryAction) && (
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-8 sm:mt-14 lg:mt-20 mb-4">
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

            {/* Indicadores de Confianza */}
            {trustIndicators.length > 0 && (
              <div className="pt-6 border-t border-slate-200 w-full flex flex-wrap items-center gap-y-3 gap-x-6">
                {trustIndicators.map((indicator, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-xs sm:text-sm text-slate-600"
                  >
                    <div className="w-4 h-4 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                      <svg
                        className="w-2.5 h-2.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>{indicator}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Columna Derecha: Showcase Visual */}
          <div className="lg:col-span-5 w-full flex justify-center">
            {image && (
              <div className="w-full">
                {typeof image === 'string' || (image.src && !React.isValidElement(image)) ? (
                  <div className="rounded-2xl border border-slate-200 bg-white p-2 sm:p-3 shadow-xl">
                    <img
                      src={image.src || image}
                      alt={image.alt || 'Colección de anime'}
                      className="rounded-xl w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  image
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}


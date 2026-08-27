import React from 'react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';

/**
 * Componente CTA (Call to Action) adaptado para Sora Store.
 * Conecta directamente al canal de atención por WhatsApp sin hardcodear datos.
 *
 * @param {Object} props
 * @param {string|React.ReactNode} props.title - Título principal
 * @param {string} props.description - Párrafo persuasivo
 * @param {Object} [props.action] - Objeto de acción { label, href }
 * @param {Object} [props.secondaryAction] - Objeto de acción secundaria { label, href }
 */
export default function CTA({
  title,
  description,
  action,
  secondaryAction,
}) {
  return (
    <section id="cta" className="py-20 sm:py-28 relative overflow-hidden">
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950 border border-sky-500/20 p-8 sm:p-14 lg:p-16 text-center shadow-2xl shadow-sky-500/5 overflow-hidden">
          {/* Resplandor decorativo interno celeste */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-sky-500/15 blur-3xl rounded-full pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Título */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {title}
            </h2>

            {/* Descripción */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {action && (
                <Button
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                  className="gap-2 w-full sm:w-auto"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  <span>{action.label}</span>
                </Button>
              )}
              {secondaryAction && (
                <Button
                  href={secondaryAction.href}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


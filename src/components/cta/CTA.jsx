import React from 'react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';

/**
 * Componente CTA (Call to Action) reutilizable.
 *
 * @param {Object} props
 * @param {string|React.ReactNode} props.title - Título principal de llamada a la acción
 * @param {string} props.description - Párrafo persuasivo
 * @param {Object} props.action - Objeto de acción { label, href }
 * @param {Object} [props.secondaryAction] - Objeto de acción secundaria { label, href }
 */
export default function CTA({
  title,
  description,
  action,
  secondaryAction,
}) {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-b from-indigo-950/70 via-slate-900/90 to-slate-900 border border-indigo-500/20 p-8 sm:p-14 lg:p-16 text-center shadow-2xl overflow-hidden">
          {/* Resplandor decorativo interno */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Título */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              {title}
            </h2>

            {/* Descripción */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {action && (
                <Button href={action.href} variant="primary" size="lg">
                  {action.label}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  href={secondaryAction.href}
                  variant="outline"
                  size="lg"
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

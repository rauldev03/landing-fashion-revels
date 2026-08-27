import React, { useState } from 'react';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';
import Card from '../../ui/Card';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';

/**
 * Componente Pricing para presentar planes y tarifas.
 * Incluye selector interactivo de facturación (Mensual / Anual).
 *
 * @param {Object} props
 * @param {string} [props.eyebrow] - Etiqueta superior
 * @param {string|React.ReactNode} props.title - Título de la sección
 * @param {string} [props.description] - Descripción de la sección
 * @param {Array<Object>} props.plans - Lista de planes
 * @param {Function} [props.onSelectPlan] - Callback al seleccionar un plan
 */
export default function Pricing({
  eyebrow,
  title,
  description,
  plans = [],
  onSelectPlan,
}) {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 sm:py-28 relative">
      <Container>
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
          alignment="center"
          className="mb-10 sm:mb-12"
        />

        {/* Selector de periodo de facturación */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
            Mensual
          </span>
          <button
            type="button"
            onClick={() => setIsAnnual((prev) => !prev)}
            className="relative w-14 h-8 rounded-full bg-surface-card border border-surface-border p-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
            aria-label="Cambiar periodo de facturación"
          >
            <div
              className={`w-6 h-6 rounded-full bg-brand-500 transition-transform duration-200 shadow-md ${
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-medium flex items-center gap-2 ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
            Anual
            <Badge variant="success" size="sm">
              -20% Ahorro
            </Badge>
          </span>
        </div>

        {/* Tarjetas de Planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            const period = isAnnual ? '/año' : '/mes';

            return (
              <Card
                key={plan.name || index}
                className={`flex flex-col justify-between relative transition-all duration-300 ${
                  isPopular
                    ? 'border-brand-500 bg-surface-card/90 shadow-brand-md -translate-y-2'
                    : 'border-surface-border bg-surface-card/60'
                }`}
              >
                {/* Badge de más popular */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-brand-500 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-500/30">
                      Más Popular
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-heading font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-400 min-h-[32px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Precio */}
                  <div className="mb-6 pb-6 border-b border-surface-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
                        {price}
                      </span>
                      <span className="text-slate-400 text-sm">{period}</span>
                    </div>
                    {plan.billedNote && (
                      <p className="text-[11px] text-slate-500 mt-1">{plan.billedNote}</p>
                    )}
                  </div>

                  {/* Lista de Características */}
                  <ul className="space-y-3 mb-8">
                    {plan.features?.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <svg
                          className="w-4 h-4 text-brand-400 shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón de Selección */}
                <div className="pt-2">
                  <Button
                    variant={isPopular ? 'primary' : 'secondary'}
                    size="md"
                    onClick={() => onSelectPlan && onSelectPlan(plan)}
                    className="w-full justify-center text-sm py-2.5"
                  >
                    {plan.actionLabel || 'Seleccionar Plan'}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

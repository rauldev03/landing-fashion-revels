import React from 'react';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';
import Button from '../../ui/Button';

/**
 * Componente About (Sobre Nosotros) para Fashion Revels.
 * Presenta la historia, misión y autenticidad de la tienda con diseño a 2 columnas,
 * tarjeta de imagen/mascota y pilares de confianza.
 *
 * @param {Object} props
 * @param {string} [props.eyebrow] - Etiqueta superior
 * @param {string|React.ReactNode} props.title - Título principal
 * @param {string} props.description - Resumen de la tienda
 * @param {Array<string>} [props.story=[]] - Párrafos de la historia
 * @param {Array<{title: string, description: string, icon: string}>} [props.features=[]] - Pilares clave
 * @param {Object} [props.image] - Datos de imagen { src, alt, badge }
 * @param {Object} [props.action] - Botón de acción opcional { label, href }
 */
export default function About({
  eyebrow = 'Sobre Nosotros',
  title = 'Pasión por el Anime,',
  titleHighlight = 'Calidad para Coleccionistas',
  description,
  story = [],
  features = [],
  image,
  action,
}) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#030712] text-white relative overflow-hidden border-t border-white/5">
      {/* Resplandor decorativo suave de fondo */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Columna Izquierda: Historia y Propuesta de Valor */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <SectionTitle
              eyebrow={eyebrow}
              title={title}
              titleHighlight={titleHighlight}
              description={description}
              alignment="left"
              className="mb-6"
            />

            {/* Párrafos de la historia / identidad */}
            {story.length > 0 && (
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {story.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            )}

            {/* Cuadrícula de Pilares de Valor */}
            {features.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-800/60 transition-all duration-200 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/30 text-sky-300 flex items-center justify-center font-bold text-sm shrink-0">
                        ✓
                      </div>
                      <h4 className="text-sm font-bold text-white">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal pl-11">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Botón de acción */}
            {action && (
              <Button href={action.href} variant="primary" size="md">
                {action.label}
              </Button>
            )}
          </div>

          {/* Columna Derecha: Tarjeta Visual de la Tienda / Mascota */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Resplandor celeste y rosa exterior */}
              <div
                className="absolute -inset-2 bg-gradient-to-tr from-sky-500/30 via-pink-500/20 to-amber-400/20 rounded-3xl blur-2xl opacity-80"
                aria-hidden="true"
              />

              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800/90 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-950 shadow-inner group">
                  <img
                    src={image?.src || '/images/logo.png'}
                    alt={image?.alt || 'Fashion Revels - Coleccionables Anime'}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Badge flotante inferior */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Fashion Revels</p>
                      <p className="text-[11px] text-slate-400">Tienda Oficial de Coleccionistas</p>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-950 text-sky-300 border border-sky-500/30">
                      ★ 100% Original
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

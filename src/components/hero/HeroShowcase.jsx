import React from 'react';
import Badge from '../../ui/Badge';

/**
 * Componente HeroShowcase para la sección derecha del Hero.
 * Diseñado como una tarjeta de exhibición de coleccionables de alta fidelidad,
 * con resplandor celeste sutil, detalles de figura destacada y métricas de tienda.
 *
 * @param {Object} props
 * @param {Object} [props.showcaseData] - Datos del showcase definidos en landingData.js
 */
export default function HeroShowcase({ showcaseData }) {
  const data = showcaseData || {
    tag: '🔥 Más Solicitado',
    title: 'Gojo Satoru - Hollow Purple Ver.',
    series: 'Jujutsu Kaisen • Escala 1/7',
    price: '$48.00',
    badge: 'Preventa Activa',
    japaneseKicker: 'アニメコレクション',
    stats: [
      { label: 'Figuras', value: '+350' },
      { label: 'Mangas', value: '+120' },
      { label: 'Originales', value: '100%' },
    ],
  };

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Resplandor celeste exterior */}
      <div
        className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 via-sky-400/10 to-sky-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"
        aria-hidden="true"
      />

      <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-5 sm:p-7 shadow-2xl backdrop-blur-md">
        {/* Barra superior de la tarjeta */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-xs font-mono text-sky-400 font-semibold tracking-wider uppercase">
              {data.tag}
            </span>
          </div>
          <span className="text-xs font-mono text-slate-500 tracking-widest">
            {data.japaneseKicker}
          </span>
        </div>

        {/* Visual de Producto Principal / Mockup Ilustrado */}
        <div className="relative mb-6 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 p-6 overflow-hidden text-center group">
          {/* Luz ambiental celeste detrás de la figura */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-sky-500/15 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Iconografía / Ilustración vectorial de la figura */}
          <div className="relative z-10 py-6 flex flex-col items-center justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-slate-900/80 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4 shadow-lg shadow-sky-500/10 group-hover:scale-105 transition-transform duration-300">
              <svg
                className="w-14 h-14 text-sky-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Figura coleccionable estilizada */}
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0-3-3.85" />
              </svg>
            </div>

            <Badge variant="sky" size="sm" className="mb-2">
              {data.badge}
            </Badge>

            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {data.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {data.series}
            </p>

            <div className="mt-3 inline-flex items-baseline gap-1">
              <span className="text-xs text-slate-400">Precio especial:</span>
              <span className="text-xl font-extrabold text-sky-400 font-mono">
                {data.price}
              </span>
            </div>
          </div>
        </div>

        {/* Estadísticas de Confianza de la Tienda */}
        <div className="grid grid-cols-3 gap-3 text-center pt-2">
          {data.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-sky-500/20 transition-colors"
            >
              <p className="text-lg sm:text-xl font-bold text-white font-mono">
                {stat.value}
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

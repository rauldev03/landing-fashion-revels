import React from 'react';
import LandingLayout from '../layouts/LandingLayout';
import Hero from '../components/hero/Hero';
import Features from '../components/features/Features';
import CTA from '../components/cta/CTA';
import { landingData } from '../data/landingData';

/**
 * Vista de interfaz simulada para el Hero (Mockup interactivo).
 * Demuestra cómo componer elementos visuales modernos sin dependencias pesadas.
 */
function HeroMockup() {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 border border-slate-800 p-4 sm:p-6 shadow-2xl shadow-indigo-950/50 backdrop-blur-sm text-left">
      {/* Barra superior de la ventana */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-850">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-slate-500">app.nexustech.io/dashboard</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Sistema en Línea</span>
        </div>
      </div>

      {/* Métricas y resumen gráfico */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
          <p className="text-xs text-slate-400">Tasa de Conversión</p>
          <p className="text-2xl font-bold text-white mt-1">28.4%</p>
          <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
            <span>↑ +12.3%</span> <span className="text-slate-500">este mes</span>
          </p>
        </div>
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
          <p className="text-xs text-slate-400">Tiempo de Carga</p>
          <p className="text-2xl font-bold text-indigo-400 mt-1">0.42s</p>
          <p className="text-xs text-emerald-400 mt-1">Lighthouse Score: 99</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-850">
          <p className="text-xs text-slate-400">Despliegues Activos</p>
          <p className="text-2xl font-bold text-white mt-1">1,420</p>
          <p className="text-xs text-slate-400 mt-1">Vercel Edge Network</p>
        </div>
      </div>

      {/* Mock de código o actividad */}
      <div className="p-4 rounded-xl bg-slate-950 font-mono text-xs text-slate-300 overflow-x-auto border border-slate-850">
        <div className="flex items-center justify-between text-slate-500 mb-2 border-b border-slate-900 pb-2">
          <span>Terminal // nexus-deploy.js</span>
          <span>production</span>
        </div>
        <p className="text-indigo-400">✓ Compilación optimizada en 1.8s</p>
        <p className="text-emerald-400">✓ SSL & CDN global configurados correctamente</p>
        <p className="text-slate-400">→ Dominio enlazado: landing-production.app</p>
      </div>
    </div>
  );
}

/**
 * Página principal (Home).
 * Conecta los datos de `landingData.js` con las secciones y el layout.
 */
export default function Home() {
  const { navbar, hero, features, cta, footer } = landingData;

  return (
    <LandingLayout navbar={navbar} footer={footer}>
      {/* 1. Sección Hero */}
      <Hero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        primaryAction={hero.primaryAction}
        secondaryAction={hero.secondaryAction}
        alignment={hero.alignment}
        image={<HeroMockup />}
      />

      {/* 2. Sección Features */}
      <Features
        eyebrow={features.eyebrow}
        title={features.title}
        description={features.description}
        features={features.items}
      />

      {/* 3. Sección Call to Action */}
      <CTA
        title={cta.title}
        description={cta.description}
        action={cta.action}
        secondaryAction={cta.secondaryAction}
      />
    </LandingLayout>
  );
}
